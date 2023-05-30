import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Alert } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export function Toast() {

  const clickHandler = () => {
    Alert.alert(
      'Sem Internet',
      'As informações serão salvas na memória do seu celular e serão automaticamente sincronizadas assim que a conexão com a internet for restabelecida.');
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={clickHandler}
        style={styles.touchableOpacityStyle}
      >
        <MaterialIcons name="wifi-off" size={32} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: RFValue(10),
  },
  touchableOpacityStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: RFValue(60),
    height: RFValue(60),
    backgroundColor: '#fff',
    borderRadius: 100,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    opacity: 0.6,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: RFValue(30),
    height: RFValue(30),
  },
});
