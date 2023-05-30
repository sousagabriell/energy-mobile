import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '../Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from '../TextInput';
import { theme } from '../../core/theme';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { Scan } from '../../screens/Scan';

export function DetailCard({ column, dataRow }) {
  const { user } = useAuth();

  const route = useRoute();
  const navigate = useNavigation();
  const [updateRow, setUpdateRow] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const headers = {
    Authorization: `Bearer ${user.token}`,
  };
  const { projectUUID, rowID } = route.params || {};

  async function handleUpdateDataRow() {
    const body = {
      column,
      dataRow: updateRow,
    };
    setIsLoading(true);
    const response = await api.post(`${projectUUID}/qr-code/${rowID}/`, body, {
      headers,
    });
    if (!response.data.success) {
      Alert.alert('Não foi possível atualizar. \nTente novamente mais tarde.');
      return;
    }
    navigate.goBack()
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{column}</Text>
        <Text style={styles.subTitle}>{dataRow}</Text>
        <TextInput
          label="Atualizar"
          returnKeyType="done"
          value={updateRow ? updateRow : dataRow}
          onChangeText={setUpdateRow}
        />
      </View>
      <Button
        onPress={() => handleUpdateDataRow()}
        mode="contained"
        style={styles.button}
        disabled={!updateRow}
      >
        Atualizar
      </Button>
      <Button mode="outlined" onPress={() => navigate.goBack()}>
        Voltar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  card: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#c5c5c5',
    borderRadius: 10,
    marginVertical: 5,
    padding: 30,
  },
  title: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: RFValue(20),
    marginTop: 2,
  },
  button: {
    marginTop: 12,
  },
  back: {
    width: '100%',
    marginTop: 12,
  },
  label: {
    color: theme.colors.secondary,
    width: '100%',
  },
});
