import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

export function ItensCard({ data, projectUUID, rowID, handleItemUpdate }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detalhe', {
            column: data[0],
            dataRow: data[1],
            projectUUID,
            rowID,
            onItemUpdate: handleItemUpdate
          })
        }
      >
        <Text style={styles.title}>{data[0]}</Text>
        <Text style={styles.subTitle}>{data[1]}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 17,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  title: {
    fontSize: RFValue(14),
  },
  subTitle: {
    fontSize: RFValue(20),
    marginTop: 2,
  },
});
