import { useCallback, useEffect, useState } from "react"
import { api, domain } from '../../services/api'
import { Text, View, TouchableOpacity, Alert, FlatList, Linking, ActivityIndicator, ScrollView, Image, StyleSheet } from 'react-native'
import { useAuth } from "../../hooks/auth"
import { HeaderScreens } from "../../components/HeaderComponents"
import { Button } from "../../components/Button"
import { RFValue } from "react-native-responsive-fontsize"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ProjectAtom } from "../../recoil/atom/projectsAtom"
import { useRecoilState } from "recoil"
import { useNavigation } from "@react-navigation/native"


export function NewHome() {
    const [dataProject, setDataProject] = useState([])
    const { user, userHeaders } = useAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [project, setProjectState] = useRecoilState(ProjectAtom);
    const navigation = useNavigation()
    const headers = userHeaders()

    const getColumns = useCallback(async (uuid) => {
        setIsLoading(true)
        const response = await api.get(`get-spreadsheet/${uuid}/`, {
            headers
        })
        const data = response.data
        setProjectState(response.data[0].rows)
        setIsLoading(false)
        navigation.navigate("Coluna", {
            paramUrl: "/Coluna"
        })
        return
    }, [])

    async function getProjects() {
        try {
            const response = await api.get(`projects/`, {
                headers
            })
            const data = response.data
            setDataProject(data)
        } catch (error) {
            Alert.alert('Opa', 'Nenhuma informação foi encontrada')
        }
    }
    useEffect(() => {
    }, [project])
  
    useEffect(() => {
        getProjects()
    }, [])
    function renderProject() {
        return (
            <>
                {dataProject?.map((obj) => {
                    return (
                        <View style={styles.project}>
                            <View style={styles.infoProject}>
                                <Image source={require('../../assets/image-25.png')} style={styles.iconProject} />
                                <Text style={styles.titleProject}>{obj.name}</Text>
                            </View>
                            <View>
                                <Button mode="contained" style={styles.btnMore} onPress={() => getColumns(obj.id)}>
                                    Ver Mais
                                </Button>
                            </View>
                        </View>
                    )
                })}
            </>
        )
    }

    return (
        <View style={styles.container}>
            <HeaderScreens />
            <View style={styles.titlePage}>
                <Text style={styles.title}>Seus Projetos</Text>
            </View>
            {isLoading ? (<ActivityIndicator size="large" />) : (
                <ScrollView style={styles.scroll}>
                    {renderProject()}
                </ScrollView>

            )}
        </View>

    )
}
const styles = StyleSheet.create({
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
    iconProject: {
        height: 52,
        width: 50,
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
        marginBottom: '25%',
    },
    textCancel: {
        backgroundColor: '#D01D28',
        color: '#ececec',
        width: '18%',
        borderRadius: 100,
        height: '60%',
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
    divInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 80,
        borderBottomColor: '#002A5E',
        borderBottomWidth: 3,
    },
    iconQRCode: {
        marginTop: '8%',
        marginLeft: '5%'
    },
    btnBack: {
        width:'10%',
        height: '10%',
    }
})
