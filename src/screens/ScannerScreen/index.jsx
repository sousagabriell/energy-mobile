import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { HeaderScreens } from '../../components/HeaderComponents';
import { HeaderScan } from '../../components/HeaderScan';

export default function ScannerScreen() {
  const navigation = useNavigation()
  const [scannedCodes, setScannedCodes] = useState([]);

  const handleBarCodeScanned = ({ data }) => {
    setScannedCodes([...scannedCodes, data]);
    return navigation.navigate('EditarNovo', {
      paramUrl: data,
    });
  };

  const startScan = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    if (status !== 'granted') {
      alert('A permissão para usar a câmera foi negada');
      return;
    }

    setScannedCodes([]);
  };

  const renderScanner = () => (
    <BarCodeScanner
      onBarCodeScanned={handleBarCodeScanned}
      style={{ flex: 1 }}
    />
  );

  const renderResults = () => (
    <View style={styles.container}>
                  <HeaderScan />

      <Button
        style={styles.button}
        onPress={startScan}
        mode="contained"
      >
        Escanear novamente
      </Button>
    </View>
  );

    useCallback(() => {
      startScan();
    }, [])


  return scannedCodes.length ? renderResults() : renderScanner();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    padding: 10,
    fontWeight: 'bold',
  },
});