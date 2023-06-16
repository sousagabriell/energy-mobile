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
    marginTop: '1.5%',
    marginLeft: '5%'
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
    marginHorizontal: '5%',
    paddingHorizontal: 24,
    borderBottomColor: '#002A5E',
    borderBottomWidth: 3,
    paddingVertical: 17,
    backgroundColor: '#fff',
  },
  titleCard: {
    fontSize: RFValue(14)
  },
  subTitleCard: {
    fontSize: RFValue(20),
    marginTop: 2
  },
  titlePage: {
    display: 'flex',
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
    flexWrap: 'wrap'
  },
  project: {
    borderColor: '#CFCFCF',
    borderWidth: 2,
    width: '83%',
    marginLeft: '8%',
    marginTop: '5%',
    padding: '3%',
  },
  infoProject: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleProject: {
    fontSize: RFValue(20),
    color: '#002A5E',
    fontWeight: 'bold',
    marginTop: '4%',
    marginLeft: '3%',
    width: '80%',
  },
  dateProject: {
    marginTop: '5%',
    fontSize: RFValue(16),
    marginLeft: '35%',
  },
  btnMore: {
    backgroundColor: '#002A5E',
    width: '100%',
  },
  list: {
    height: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    paddingTop: '30%'
  },
  none: {
    display: 'none',
  },
  scroll: {
    marginBottom: '20%',
  },
  textCancel: {
    backgroundColor: '#D01D28',
    color: '#ececec',
    width:'18%',
    borderRadius: 100,
    height:'60%',
    marginRight: '5%'
  },
  modalList: {
    paddingTop: '25%',
    backgroundColor: '#FFF',
    marginBottom: '15%'
  },
  titleModal: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    marginTop: '7%',
    marginLeft: '5%',
    color: '#002A5E',
  },
  divInfo:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height:80,
    borderBottomColor: '#002A5E',
    borderBottomWidth: 3,
  },
  iconQRCode:{
    marginTop: '8%',
    marginLeft: '5%'
  },
  cardFlex:{
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  penEdit: {
    backgroundColor: '#d8d8d8',
    borderRadius: 50,
    marginTop: '4%',
    height: 25,
    width: 25,
  },
})
