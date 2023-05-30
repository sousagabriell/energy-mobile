import React, { useState } from 'react'
import { Text, View, Alert } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useAuth } from '../../hooks/auth'
import { useSheet } from '../../hooks/sheet'
import { useQueue } from '../../provider/queue'
import { useConnect } from '../../hooks/connect'
import { api, domain } from '../../services/api'
import { TextInput } from '../../components/TextInput'
import { Button } from '../../components/Button'
import { styles } from './styles'

export function Detail() {
  const route = useRoute()
  const navigate = useNavigation()
  const { user, userHeaders } = useAuth()
  const { isConnected } = useConnect()
  const { updateItemStorage } = useSheet()
  const { queue, addToQueue } = useQueue()
  const [updateRow, setUpdateRow] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const headers = userHeaders()
  const { column, dataRow, projectUUID, rowID } = route.params

  const handleError = () => {
    return Alert.alert(
      'Ops!',
      'Não foi possível atualizar. \nTente novamente mais tarde.'
    )
  }

  async function handleUpdateDataRow() {
    const body = {
      column,
      dataRow: updateRow
    }
    setIsLoading(true)
    const url = `${projectUUID}/qr-code/${rowID}/`
    if (!isConnected) {
      const data = {
        url,
        body
      }
      try {
        addToQueue(data)
        await updateItemStorage(body, projectUUID, rowID)
        return navigate.navigate('Editar', {
          paramUrl: `${domain}/${url}`,
          refresh: updateRow
        })
      } catch (error) {
        return handleError()
      }
    }
    await updateItemStorage(body, projectUUID, rowID)
    const response = await api.post(url, body, {
      headers
    })

    if (!response.data.success) {
      return handleError()
    }
    navigate.navigate('Editar', {
      paramUrl: response.request._url,
      refresh: updateRow
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{column}</Text>
        <Text style={styles.subTitle}>{dataRow}</Text>
        <TextInput
          label="Atualizar"
          returnKeyType="done"
          multiline={true}
          value={updateRow !== undefined ? updateRow : dataRow}
          onChangeText={setUpdateRow}
        />
      </View>
      <Button
        onPress={() => handleUpdateDataRow()}
        mode="contained"
        style={styles.button}
        disabled={!updateRow}
      >
        Atualizar
      </Button>
      <Button mode="outlined" onPress={() => navigate.goBack()}>
        Voltar
      </Button>
    </View>
  )
}
