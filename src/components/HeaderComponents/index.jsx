import { View } from "react-native";
import { Logo } from "../Logo";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Button } from "../Button";
import { Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native'

export function HeaderScreens() {
    const navigation = useNavigation()

    function goHome(){    
        navigation.navigate("Editar")
    }
    return (
        <View style={styles.header}>
            <Pressable onPress={goHome}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{
                        resizeMode: "cover",
                        height: '150%',
                    }}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#002A5E',
        height: '15%',
        paddingLeft: '30%',
        width: '100%',
        paddingBottom: 52,
        zIndex: 999,
    }

})