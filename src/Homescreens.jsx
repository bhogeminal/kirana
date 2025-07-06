import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import Createscreen from './Createscreen'

const Homescreens = () => {
    const [view, setview] = useState(0)
        const [data, setdata] = useState([
        { id: 1, name: "Apple", stock: 5, Unit: 50 },
        { id: 2, name: "Banana", stock: 10, Unit: 30 },
        { id: 3, name: "Orange", stock: 14, Unit: 40 },
        { id: 4, name: "Grapes", stock: 20, Unit: 20 },

      

    ])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <View style={styles.buttoncontainer}>
                <Pressable style={[styles.button, view == 0 ? { backgroundColor: "green" } : null]}>
                    <Text style={[styles.buttontext, view == 0 ? { color: "white" } : null]} onPress={() => setview(0)}>All Items</Text></Pressable>
                <Pressable style={[styles.button, view == 1 ? { backgroundColor: "green" } : null]} onPress={() => setview(1)}><Text style={[styles.buttontext, view == 1 ? { color: "white" } : null]}>Low stock</Text></Pressable>
                <Pressable style={[styles.button, view == 2 ? { backgroundColor: "green" } : null]} onPress={() => setview(2)}><Text style={[styles.buttontext, view == 2 ? { color: "white" } : null]}>create</Text></Pressable>

            </View>
            {view === 0 && <AllItems data={data} />}
            {view === 1 && <AllItems data={data.filter((item)=> item.stock<20)}/>}
            {view === 2 && <Createscreen data={data} setdata={setdata}/>}

        </SafeAreaView>
    )
}

export default Homescreens

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        padding: "10%",
        backgroundColor: "#ffff"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333"
    },
    buttoncontainer: {
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "green",
    },
    buttontext: {
        color: "green",
        fontWeight: "600",
        fontSize: 12
    }
})