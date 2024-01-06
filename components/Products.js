import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import api from "../utils/data"

const Products = () => {

    const [data, setdata] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(2)


    useEffect(() => {
        const response = api.fetch(1).then(response => setdata(response.object))
    }, [])

    const fetchMore = () => {
        setIsLoading(true)
        setPage(page + 1)
        try {
            const response = api.fetch(page).then(response => setdata([...data, ...response.object]))
        }catch(err){
            console.log(err)
        }finally{
            setIsLoading(false)
        }
    }
    return (
        <View style={{ paddingHorizontal: 8 }}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Card item={item} />}
                numColumns={2}
                onEndReached={() => {
                    if(!isLoading && (page < 10)){
                        fetchMore()
                    }
                }}
                onEndReachedThreshold={0.5}
                ListFooterComponent={() => {
                    isLoading ? (
                        <Text>Loading...</Text>
                    ) : null
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    imgCont: {
        position: "relative",
    },

    heart: {
        position: "absolute",
        right: 0,
    }
})

export default Products