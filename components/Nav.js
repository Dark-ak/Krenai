import { View, Text, StyleSheet } from "react-native";
import { AntDesign,Feather } from "@expo/vector-icons";

const Nav = () => {

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <View style={styles.back}>
                    <AntDesign name="arrowleft" size={20}/>
                    <Text style={styles.text}>Kitchen Ware</Text>
                </View>

                <View style={styles.secNav}>
                    <AntDesign name="search1" size={20}/>
                    <AntDesign name="hearto" size={20}/>
                    <Feather name="shopping-bag" size={20}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderColor:"#E0E0E0",
        borderBottomWidth:0.5
    },
    nav:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:15,
        paddingVertical:20
    },
    secNav:{
        flexDirection:"row",
        gap:20,
        alignItems:"center"
    },
    back:{
        flexDirection:"row",
        alignItems:"center",
        gap:10
    },
    text:{
        fontWeight:"600",
        fontSize:18
    }

})

export default Nav