import { Image } from "expo-image"
import { StyleSheet, Text, View } from "react-native"


export const Box = () => {
    return(
        <View style = { style.Tile }>

            <View style = { style.ImageBox }>
            </View>
            
            <View style = { style.TextBox }>
                <Text>Item</Text>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    ImageBox: {      
        width: 100,
        height: 100,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: "#7ee0af",
        
    },
    TextBox: {
        padding: 10,
        backgroundColor: "#ebe2e2",
        width: 200,
        height: 100,
        borderRadius: 20
    },
    Tile: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})