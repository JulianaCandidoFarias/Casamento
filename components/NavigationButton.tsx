import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IMyNavigationButton {
    children?: React.ReactNode;
    onPress?: () => void;
}

export const NavigationButton = ( props: IMyNavigationButton ) => {
    return(
            <TouchableOpacity>
                <View style = { styles.buttonStyle } >
                    <Text style = { styles.buttonText } >
                        { props.children }
                    </Text>
                </View>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#a6c9a6',
        //backgroundColor: '#ffffff',
        width: 96,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        alignItems: 'center',
        color: '#ffffff',
        fontWeight: 'bold'
    }

})
