import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { useNavigation } from '@react-navigation/native'
import { HeaderScreens } from '../../components/HeaderComponents'
import { HeaderScan } from '../../components/HeaderScan'

export function Scan({ status }) {
  const navigation = useNavigation()
  const [hasPermission, setHasPermission] = useState(null)
  const [scannedCodes, setScannedCodes] = useState([])
  const [scanned, setScanned] = useState(true)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned = ({ data }) => {
    setScanned(undefined)
    return navigation.navigate('Editar', {
      paramUrl: data
    })
  }

  function StartScan(data) {
    return navigation.navigate('Editar', {
      paramUrl: data
    })
  }

  if (hasPermission === null) {
    return (
      <Text style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Solicitando acesso a câmera
      </Text>
    )
  }
  if (hasPermission === false) {
    return (
      <Text style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Acesso a câmera negado!
      </Text>
    )
  }

  return (
    
    <View style={styles.container}>
      
      <BarCodeScanner
        onBarCodeScanned={scanned && handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button
          title={'Scanear'}
          onPress={() =>
            StartScan(
              'http://192.168.3.13:8000/api/v1/e1b4d6b4-0e9a-4d30-9e50-13ab68d1544a/qr-code/12/'
            )
          }
          style={styles.floatingButton}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 50,
    bottom: 50
  },

})
