import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

export function Background({ children }) {
  return (
    <ImageBackground
      source={require('../../assets/background_dot.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      width: '100%',
    },
    container: {
      flex: 1,
      padding: 20,
      width: '100%',
      maxWidth: 340,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });