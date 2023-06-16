import React, { useState, useEffect, useCallback } from 'react'
import { Text, View, TouchableOpacity, Alert, FlatList, Linking, ActivityIndicator, ScrollView } from 'react-native'
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native'
import { api, domain } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { Load } from '../../components/Load'
import { useSheet } from '../../hooks/sheet'
import { useConnect } from '../../hooks/connect'
import { styles } from './styles'
import { Toast } from '../../components/Toast'
import { HeaderScreens } from '../../components/HeaderComponents'
import { Image } from 'react-native'
import { Button } from '../../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRecoilState } from 'recoil'
import { ProjectAtom } from '../../recoil/atom/projectsAtom'
import { Modal } from 'react-native-paper'
import { Pressable } from 'react-native'



export function Home({ navigatior }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([])
  const [projectUUID, setProjectUUID] = useState()
  const [rowId, setRowId] = useState()
  const [loading, setLoading] = useState(false)
  const route = useRoute()
  const navigation = useNavigation()
  const { user, userHeaders } = useAuth()
  const { isConnected } = useConnect()
  const { findStorageData, getSpreadSheet } = useSheet()
  const [isLoading, setIsLoading] = useState(false)
  const [qrCode, visibleQrCode] = useState("project");



  const headers = userHeaders()

  const { paramUrl, refresh = false } = route.params || {}

  const handleItemUpdate = useCallback(async (uuid, rowID) => {
    try {
      const response = await api.get(`${uuid}/qr-code/${rowID}/`, {
        headers
      })
      const data = Object.entries(response.data[0])
      return setItems(data)
    } catch (error) {
      Alert.alert('Opa', 'O QR code não é válido. \nPor favor, tente novamente.')
    }
  }, [])

  const [dataProject, setDataProject] = useState([])



  useEffect(() => {
    async function updateItemScreen() {
      if (paramUrl) {
        const part = paramUrl.split('/')
        const uuid = part[5]
        const rowID = part[7]
        if (!uuid || !rowID) {
          return Alert.alert('Erro', 'O QR code não é válido. \nPor favor, tente novamente.')
        }
        setProjectUUID(uuid || '')
        setRowId(rowID || '')
        if (!isConnected) {
          try {
            const data = await findStorageData(uuid, rowID)
            return setItems((prev) => data)
          } catch (error) {
            Alert.alert('Opa', 'Nenhuma informação foi encontrada, \nPara esse QrCode')
          }
        }
        handleItemUpdate(uuid, rowID)
        setModalVisible(true)
        return
      }
    }
    updateItemScreen()
  }, [paramUrl, refresh])



  const handleLinkExtraFile = (link) => {
    if (isConnected) {
      Linking.openURL(link)
      return
    }
    Alert.alert(
      'Sem Internet',
      'Não é possível visualizar o arquivo sem internet.'
    )
    return
  }

  function renderItem({ item }) {
    if (item[0] !== 'id' && item[0] !== 'Arquivos') {
      return (
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() =>
            navigation.navigate('Detalhe', {
              column: item[0],
              dataRow: item[1],
              projectUUID,
              rowID: rowId
            })
          }
        >
          <View style={styles.cardFlex}>
            <View>
              <Text style={styles.titleCard}>{item[0]}</Text>
              <Text style={styles.subTitleCard}>{item[1]}</Text>
            </View>
            <Image style={styles.penEdit}source={require('../../assets/pen.png')} />
          </View>
        </TouchableOpacity>

      )
    }
    if (item[0] === 'Arquivos') {
      return (
        <>
          <Text style={styles.titleCard}>{item[0]}</Text>
          {item[1].map((url, index) => (
            <TouchableOpacity
              style={styles.cardContainer}
              onPress={() => handleLinkExtraFile(url)}
            >
              <Text>Arquivo {index + 1}</Text>
            </TouchableOpacity>
          ))}
        </>

      )
    }
  }

  useCallback(() => {

  }, [])

  return (
    <View style={styles.container}>
      <HeaderScreens />
      <View>
        <Pressable onPress={navigation.goBack} style={styles.titlePage}>
          <Image source={require('../../assets/flecha.png')} style={styles.iconProject} />
          <Text style={styles.title}>Editar Informações</Text>
        </Pressable>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item[0]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 12
        }}
      />
    </View>
  )
}