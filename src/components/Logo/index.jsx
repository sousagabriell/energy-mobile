import React from 'react';
import { Image, StyleSheet } from 'react-native';

export function Logo() {
  return (
    <Image source={require('../../assets/logo.png')} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: 120,
    marginLeft: 72
  },
});
