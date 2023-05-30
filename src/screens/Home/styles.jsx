import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 0,
    backgroundColor: '#ECECEC',
  },
  title: {
    fontSize: RFValue(20),
    color: '#002A5E',
    marginBottom: RFValue(16),
    fontWeight: 'bold',
    marginTop: '1%',
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 50,
    bottom: 50
  },
  cardContainer: {
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 17,
    backgroundColor: '#fff',
    marginBottom: 16
  },
  titleCard: {
    fontSize: RFValue(14)
  },
  subTitleCard: {
    fontSize: RFValue(20),
    marginTop: 2
  },
  titlePage: {
    display:'flex',
    flexDirection: 'row',
    marginTop: '3%',
    paddingLeft: '7%',
    borderBottomColor: '#002A5E',
    borderBottomWidth: 3,

  },
  iconTitle: {
    height: 20,
    width: 20,
    marginTop: '2%',
    marginRight: '2%'
  },
  btn: {
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  project: {
    borderColor: '#CFCFCF',
    borderWidth: 2,
    width: '83%',
    marginLeft: '8%',
    marginTop: '5%',
    padding: '3%',
  },
  infoProject:{
    display:'flex',
    flexDirection: 'row',
    marginBottom: '1%',
  },
  iconProject:{
    height: 52,
    width:50,
  },
  titleProject:{
      fontSize: RFValue(20),
      color: '#002A5E',
      fontWeight: 'bold',
      marginTop: '4%',
      marginLeft: '3%',
  },
  dateProject:{
    marginTop: '5%',
    fontSize: RFValue(16),
    marginLeft: '35%',
  },
  btnMore:{
    backgroundColor: '#002A5E'
  }
})
