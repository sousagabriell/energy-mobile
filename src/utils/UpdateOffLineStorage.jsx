import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import _ from 'lodash'

export async function UpdateOfflineStorage(body, projectUUID, rowID) {
  const spreadSheetKey = '@energycode:spreadSheet';
  const { column, dataRow } = body;
  const arrayString = await AsyncStorage.getItem(spreadSheetKey);
  const array = JSON.parse(arrayString) || [];
  console.log('entrando na função para atualizar AsyncStorage')

  const objIndex = _.findIndex(array, {uuid: projectUUID});

  if (objIndex !== -1){
    const rows = array[objIndex].rows;
    const rowIndex = _.findIndex(rows, {id: rowID});

    if (rowIndex !== -1){
      rows[rowIndex][column] = dataRow
      console.log('==>', rows[rowIndex][column])

      array[objIndex].rows = rows
      // await AsyncStorage.removeItem(spreadSheetKey);
      await AsyncStorage.setItem(spreadSheetKey, JSON.stringify(array))
      const arrayNew = await AsyncStorage.getItem(spreadSheetKey);
      // console.log('ataualiando AsyncStorage', arrayNew)
      return
    }
  }
}
