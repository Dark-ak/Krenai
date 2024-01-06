import { View, Text, StyleSheet } from "react-native";
import Nav from "./components/Nav";
import Filter from "./components/Filter";
import Products from "./components/Products";


const Screen = () =>{
    return(
        <View>
            <Nav />
            <Filter />
            <Products />
        </View>
    )
}

export default Screen