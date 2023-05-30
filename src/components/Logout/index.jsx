import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { HeaderScreens } from '../HeaderComponents';
import { HeaderScan } from '../HeaderScan';

export function Logout() {
  const { signOut } = useAuth();
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
       <HeaderScan style={styles.header}/>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Deseja mesmo sair?</Text>
          <Pressable
            style={[styles.button,styles.buttonClose]}
            onPress={() => signOut()}>
            <Text style={styles.textStyle}>Sair</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonCancel]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textCancel} onPress={() => setModalVisible(!modalVisible)}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    <Pressable
      style={[styles.button, styles.buttonOpen]}
      onPress={() => setModalVisible(true)}>
      <Text style={styles.textStyle}>Sair</Text>
    </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:'30%',
  },
  buttonOpen: {
    backgroundColor: '#D01D28',
  },
  buttonClose: {
    backgroundColor: '#D01D28',
    width: 200,
    height: 40,
    marginBottom: 8,
  },
  buttonCancel: {
    borderWidth: 2,
    borderColor:'#C8C8C8',
    width: 200,
    height: 40,
    marginBottom: 8,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textCancel:{
    color: '#C8C8C8',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
