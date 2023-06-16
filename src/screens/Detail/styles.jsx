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
    marginVertical: '10%',
    marginHorizontal: '5%',
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
    marginTop: 12,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#47D981',
    color: '#fff'
  },
  title: {
    fontSize: RFValue(20),
    color: '#002A5E',
    marginBottom: RFValue(16),
    fontWeight: 'bold',
    marginTop: '1.5%',
    marginLeft: '5%'
  },
  titlePage: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '3%',
    paddingLeft: '7%',
    borderBottomColor: '#002A5E',
    borderBottomWidth: 3,
  },
})
