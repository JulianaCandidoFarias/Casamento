import { StyleSheet, Text, View } from "react-native";
import { NavigationButton } from "../components/NavigationButton";
import { Link } from "expo-router";


export default function Page() {
  return (
    <View style = { styles.backGround } >
      <View style = { styles.TopNavigation } >

        <Link href = {"/"}>
          <NavigationButton>Convite</NavigationButton>
        </Link>
        
        <Link href = {"/peoples"}>
          <NavigationButton>Convidados</NavigationButton>
        </Link>

        <Link href = {"/presents"}>
          <NavigationButton>Presentes</NavigationButton>
        </Link>
    
      </View>
      <View style = { styles.frontGround } >

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    backgroundColor: '#d4ffd4'

  },
  frontGround: {
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    marginTop: 25,
    marginHorizontal: 25,
    flex: 1,
    backgroundColor: '#ffffff'
  },
  TopNavigation: {
    marginTop: 25,
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
