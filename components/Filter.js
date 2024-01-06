import { View, StyleSheet, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';

const Filter = () => {
    return (
        <View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.prod}>98/100 products</Text>
                </View>

                <View style={styles.filter}>
                    <View style={styles.icons}>
                        <Octicons name="sort-asc" />
                        <Text style={styles.text}>Sort</Text>
                    </View>
                    <View style={styles.icons}>
                        <Text style={styles.text}>Filter</Text>
                        {/* <FontAwesome6 name="sliders"/> */}
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:8,
        paddingVertical:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    prod:{
        color:"#A8A8A8"
    },
    filter:{
        flexDirection:"row",
        gap:20
    },
    icons:{
        flexDirection:"row",
        alignItems:"center",
        gap:5
    },
})

export default Filter