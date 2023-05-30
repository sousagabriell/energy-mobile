import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { theme } from '../../core/theme';

export function Load() {
  return (
    <ActivityIndicator
      size="large"
      style={{ flex: 1 }}
      color={theme.colors.primary}
    />
  );
}
