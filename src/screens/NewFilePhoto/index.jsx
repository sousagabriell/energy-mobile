import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef) {
      const photoData = await cameraRef.takePictureAsync();
      setPhoto(photoData.uri);
    }
  };

  const savePhoto = async () => {
    if (photo) {
      await MediaLibrary.saveToLibraryAsync(photo);
      alert('Foto salva com sucesso!');
      setPhoto(null);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>A permissão para acessar a câmera foi negada.</Text>;
  }

  if (photo) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: photo }} style={styles.previewImage} />
        <TouchableOpacity style={styles.button} onPress={savePhoto}>
          <Text style={styles.buttonText}>Salvar Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setPhoto(null)}>
          <Text style={styles.buttonText}>Tirar outra foto</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={ref => setCameraRef(ref)} />
      <TouchableOpacity style={styles.button} onPress={takePhoto}>
        <Text style={styles.buttonText}>Tirar Foto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  previewImage: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
  },
});

export default CameraScreen;
