import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { HeaderScan } from '../HeaderScan';
import { api } from '../../services/api'
import { Button } from '../Button';
import { Image } from 'react-native';

export function Logout() {
  const { signOut, userHeaders } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState([]);
  const [userEmail, setUserEmail] = useState([]);
  const [photoProfile, setPhotoProfile] = useState([]);
  const [firstName, setFirstName] = useState([])
  const [lastName, setLastName] = useState([])

  const headers = userHeaders()

  async function getUser() {
    try {
      const response = await api.get(`profile/`, {
        headers
      })
      const data = response.data
      setUserName(data.username)
      setPhotoProfile(data.photo_profile)
      setUserEmail(data.email)
      setFirstName(data.first_name)
      setLastName(data.last_name)
    } catch (error) {
      Alert.alert('Opa', 'Nenhuma informação foi encontrada')
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  function renderUser() {
    return (
      <View style={styles.container}>
        <View style={styles.infoUser}>
        <Image source={require('../../assets/image-25.png')} style={styles.iconProject} />
        <Text style={styles.titleProject}>{firstName} {lastName}</Text>
        </View>
        <View style={styles.infoUserDetails}>
          <Text style={styles.nameUser}>{userName}</Text>
          <Text style={styles.nameUser}>{userEmail}</Text>
          </View>
      </View>
    )
  }



  return (
    <View style={styles.centeredView}>
      <HeaderScan style={styles.header} />
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
              style={[styles.button, styles.buttonClose]}
              onPress={() => signOut()}>
              <Text style={styles.textStyle}>Sim</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonCancel]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textCancel} onPress={() => setModalVisible(!modalVisible)}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {renderUser()}
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
    width: '30%',
  },
  buttonOpen: {
    backgroundColor: '#D01D28',
    width: '70%',
  },
  buttonClose: {
    backgroundColor: '#D01D28',
    width: 200,
    height: 40,
    marginBottom: 8,
  },
  buttonCancel: {
    borderWidth: 2,
    borderColor: '#C8C8C8',
    width: 200,
    height: 40,
    marginBottom: 8,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textCancel: {
    color: '#C8C8C8',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  infoUser: {
    display:'flex',
    flexDirection: 'row',
    width: 250,
    borderBottomColor: '#002A5E',
    borderBottomWidth: 3,
    marginBottom: '7%',
    justifyContent: 'center',
  },
  titleProject: {
    marginTop: '8%',
    marginLeft: '2%',
    marginBottom: '15%',
    fontWeight: 'bold'
  },
  nameUser: {
    marginBottom: 15,
    textAlign: 'center',
    borderBottomColor: '#002A5E',
  },
  container:{
    borderBottomWidth: 3,
    borderBottomColor: '#002A5E',
    marginBottom: '7%'
  }
});
