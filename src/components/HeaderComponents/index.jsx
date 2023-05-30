import { View } from "react-native";
import { Logo } from "../Logo";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

export function HeaderScreens() {
    return (
        <View style={styles.header}>
            <Image
                source={require('../../assets/logo.png')}
                style={{
                    resizeMode: "cover",
                    height: '150%',
                  }}
            />
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#002A5E',
        height:'15%',
        paddingLeft: '30%',
        width: '100%',
        paddingBottom: 30,
        zIndex: 999,
        }

})