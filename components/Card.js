import { View, Text,Image, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

const Card = ({item}) => {
    

    return (
        <View style={styles.container}>
            <View style={styles.cont}>
                <View style={styles.imgCont}>
                    <Image source={{uri: item.mediaUrl}} width={160} height={200} style={styles.image}/>
                    <Feather name="heart" size={20} style={styles.heart}/>
                </View>
                <View style={{width:160}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.keyword} numberOfLines={1}>{item.keywords}</Text>
                    <Text style={styles.price}>₹{item.variants[0].mrp}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        marginVertical:20,
        paddingHorizontal:6
    },

    cont:{
        gap:5
    },

    imgCont:{
        position:"relative",
    },

    image:{
        borderRadius:8
    },

    heart:{
        position:"absolute",
        right:0,
        margin:10,
    },

    name:{
        fontWeight:"700",
        fontSize:15
    },
    keyword:{
        flex:1,
        marginVertical:2
    },

    price:{
        fontWeight:"500"
    }
})

export default Card