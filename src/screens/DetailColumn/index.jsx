import React, { useCallback, useEffect } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { HeaderScreens } from '../../components/HeaderComponents';
import { RFValue } from 'react-native-responsive-fontsize';
import { useRecoilState } from "recoil";
import { ProjectAtom } from "../../recoil/atom/projectsAtom";
import { Button } from '../../components/Button';




export function ColumnDetail() {
  const [project,setProjectState] = useRecoilState(ProjectAtom);

  useEffect(() => {
    console.log(project + 'sendo chamado no datail column')
  }, [project])
console.log(project[0].rows[0].id)
    return (
        <View style={styles.container}>
            <HeaderScreens />

            <View style={styles.titlePage}>
        <Image source={require('../../assets/home-alt.png')} style={styles.iconTitle} />
        <Text style={styles.title}>Seus Projetos</Text>
      </View> 
            <View style={styles.data}>
            <Text>aqui</Text>
            <Button mode="contained" onPress={() => testeProject()}>
                Ver Mais
              </Button>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingVertical: 0,
        backgroundColor: '#ECECEC',
      },
    data: {
        width: 300,
        height: 40,
        backgroundColor: '#fff', 
        marginLeft: 32,
        marginTop: 20
    },
    title: {
        fontSize: RFValue(20),
        color: '#002A5E',
        marginBottom: RFValue(16),
        fontWeight: 'bold',
        marginTop: '1%',
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
})