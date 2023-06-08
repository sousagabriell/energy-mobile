import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5'
  },
  card: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#c5c5c5',
    borderRadius: 10,
    marginVertical: 5,
    padding: 30
  },
  title: {
    fontSize: RFValue(16),
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: RFValue(20),
    marginTop: 2
  },
  button: {
    marginTop: 12
  }
})
