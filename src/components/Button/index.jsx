import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../../core/theme';

export function Button({ mode, style, children, ...props }) {
  return(
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    >
      {children}
    </PaperButton>
  );
}

const styles = StyleSheet.create({
    button: {
      width: '100%',
      marginVertical: 10,
      borderRadius: 5,
      backgroundColor: '#47D981'
    },
    text: {
      fontWeight: 'bold',
      fontSize: 15,
      lineHeight: 26,
    },
  });
