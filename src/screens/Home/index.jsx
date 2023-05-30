import React, { useState, useEffect, useCallback } from 'react'
import { Text, View, TouchableOpacity, Alert, FlatList, Linking } from 'react-native'
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



export function Home({ navigatior }) {
  const [items, setItems] = useState([])
  const [projectUUID, setProjectUUID] = useState()
  const [rowId, setRowId] = useState()
  const [loading, setLoading] = useState(false)
  const route = useRoute()
  const navigation = useNavigation()
  const { user, userHeaders } = useAuth()
  const { isConnected } = useConnect()
  const { findStorageData, getSpreadSheet } = useSheet()
//   const [project, setProjectState] = useState({
//     "rows":[{
//       "Ativo Pai": "",
//       "Ativo Real": "",
//       "Complemento Localização": "",
//       "Código At": "",
//       "Código Instalação": "",
//       "Código Localização": "",
//       "Descrição Ativo": "",
//       "Descrição Instalação": "",
//       "Descrição Localização": "",
//       "Tipo Instalação": "",
//       "Usar Código Ativo": "",
//       "extra_files": [''],
//       "id": ""}],
//     }
// )
 const [project,setProjectState] = useRecoilState(ProjectAtom);


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

  async function getProjects() {
    try {
      const data = await getSpreadSheet()
      setDataProject(data)
    } catch (error) {
      Alert.alert('Opa', 'Nenhuma informação foi encontrada')
    }
  }

  const setColumns = '@energycode:columns'

  const getColumns = useCallback(async (uuid) => {
    const response = await api.get(`get-spreadsheet/${uuid}/`, {
      headers
    })
    const data = response.data
    await AsyncStorage.setItem(setColumns, JSON.stringify(data))
    setProjectState(response.data[0].rows)
    navigation.navigate("Coluna", {
      paramUrl: "/Coluna"
    })
    return
  }, [])

  useEffect(() => {
    console.log(project)
  }, [project])

  useEffect(() => {
    getProjects()
  }, [])

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
        return
      }
    }
    updateItemScreen()
  }, [paramUrl, refresh])


  function redirect({ uuid }) {
     setProjectState(getColumns(uuid))
    navigation.navigate("Coluna", {
      paramUrl: "/Coluna"
    })
  }


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
  function renderProject() {
    return (
      <>
        {dataProject?.map((obj) => {
          return (
            <View style={styles.project}>
              <View style={styles.infoProject}>
                <Image source={require('../../assets/image-25.png')} style={styles.iconProject} />
                <Text style={styles.titleProject}>{obj.name}</Text>
                <Text style={styles.dateProject}>{obj.uuid}</Text>
              </View>
              <View style={styles.btn}>
                <Button mode="contained" style={styles.btnMore} onPress={() => getColumns(obj.uuid)}>
                  Ver Mais
                </Button>
              </View>
            </View>
          )
        })}
      </>
    )
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
          <Text style={styles.titleCard}>{item[0]}</Text>
          <Text style={styles.subTitleCard}>{item[1]}</Text>
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
      <View style={styles.titlePage}>
        <Image source={require('../../assets/home-alt.png')} style={styles.iconTitle} />
        <Text style={styles.title}>Seus Projetos</Text>
      </View>
      {renderProject()}
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item[0]}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 12
          }}
        />
      )}
      {!isConnected && <Toast />}
    </View>
  )
}