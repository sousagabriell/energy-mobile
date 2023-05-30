import React, {
  createContext, useContext, useCallback, useState, useEffect
} from 'react'
import _ from 'lodash'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useConnect } from './connect'
import { api } from '../services/api'
import { useAuth } from './auth'

const SheetContext = createContext({})

const SheetProvider = ({ children }) => {
  const spreadSheetKey = '@energycode:spreadSheet'
  const setProjectKey = '@energycode:projects'
  const { user, userHeaders } = useAuth()
  const { isConnected } = useConnect()
  const headers = userHeaders()




  const setProject = useCallback(async (headers) => {
    const response = await api.get('projects/', { headers })
    const data = response.data
    await AsyncStorage.setItem(setProjectKey, JSON.stringify(data))
    return
  }, [])

  const getProject = useCallback(async () => {
    const setProjectKeyStorage = await AsyncStorage.getItem(setProjectKey)
    const sheet = JSON.parse(setProjectKeyStorage)
    return sheet
    if (!sheet) {
      throw new Error(String("Não foi possivel atualizar"));
    }
  }, [])

  const setStorage = useCallback(async (headers) => {
    const response = await api.get('get-spreadsheet/', { headers })
    const data = response.data
    await AsyncStorage.setItem(spreadSheetKey, JSON.stringify(data))
    return
  }, [])


  const deleteStorage = useCallback(async () => {
    await AsyncStorage.removeItem(spreadSheetKey);
  }, [])

  const findStorageData = useCallback(async (uuid, rowID) => {
    const spreadSheet = await getSpreadSheet()
    if (spreadSheet.length) {
      try {
        const obj = spreadSheet.find((item) => item.uuid === uuid)
        const rows = obj.rows.filter((row) => row.id === rowID)
        const data = Object.entries(rows[0])
        return data
      } catch (error) {
        throw new Error(String(error.code));
      }
    }
  }, [])



  const getSpreadSheet = useCallback(async () => {
    const spreadSheetStorage = await AsyncStorage.getItem(spreadSheetKey)
    const sheet = JSON.parse(spreadSheetStorage)
    return sheet
    if (!sheet) {
      throw new Error(String("Não foi possivel atualizar"));
    }
  }, [])

  const updateItemStorage = useCallback(async (body, projectUUID, rowID) => {
    const { column, dataRow } = body;
    const arrayString = await AsyncStorage.getItem(spreadSheetKey);
    const array = JSON.parse(arrayString) || [];
    const objIndex = _.findIndex(array, { uuid: projectUUID });
    if (objIndex !== -1) {
      const rows = array[objIndex].rows;
      const rowIndex = _.findIndex(rows, { id: rowID });

      if (rowIndex !== -1) {
        rows[rowIndex][column] = dataRow
        array[objIndex].rows = rows
        await AsyncStorage.setItem(spreadSheetKey, JSON.stringify(array))
        return
      }
    }
  }, [])

  useEffect(() => {
    if (isConnected && user.token) {
      setStorage(headers)
      setProject(headers)
    }
  }, [isConnected, user.token])

  return (
    <SheetContext.Provider
      value={{
        deleteStorage,
        findStorageData,
        getSpreadSheet,
        getProject,
        updateItemStorage,
      }}
    >
      {children}
    </SheetContext.Provider>
  )
}

function useSheet() {
  const context = useContext(SheetContext)
  return context
}

export { SheetProvider, useSheet }
