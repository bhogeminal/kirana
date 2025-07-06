import { Pressable, StyleSheet, Text, TextInput, View, FlatList } from 'react-native'
import React, { useState } from 'react'

const Createscreen = ({ data, setdata }) => {
    const [itemname, setitemname] = useState('')
    const [stockamt, setstockamt] = useState('')
        const [isEdit, setisEdit] = useState(false)
        const [editItemid, seteditItemid] = useState(null)

    const handleaddItem = () => {
        const newItem = {
            id: Date.now(),
            name: itemname,
            stock: stockamt

        }
        setdata([...data, newItem])
        setitemname('');
        setstockamt('')
        setisEdit(false)
    }
    const edithandler = (item) => {
        setitemname(item.name)
        setisEdit(true)
        seteditItemid(item.id)
        setstockamt('')
    }
    const deletehandler = (id) => {
        setdata(data.filter((item) => item.id !== id))
    }
    const updatehandle=()=>{
setdata(data.map((item)=>(
    item.id=== editItemid ? {...item,name:itemname,stock:stockamt}:item
)))
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder='Enter an item' placeholderTextColor="#999"
                style={styles.input}
                value={itemname}
                onChangeText={(item) => setitemname(item)}
            />
            <TextInput placeholder='Enter an stock amount' placeholderTextColor="#999"
                style={styles.input}
                value={stockamt}
                onChangeText={(item) => setstockamt(item)}
            />

            <Pressable style={styles.button} onPress={() =>isEdit ?updatehandle(): handleaddItem()}>
                <Text style={styles.btnText}>{isEdit ? "Edit Item in the stock":"ADD Item in the stock"}</Text>
            </Pressable>
            <View>
                <View style={styles.headingcontainer}>
                    <Text style={styles.headingtext}>
                        All Items
                    </Text>

                </View>
                <FlatList data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                    (
                        <View style={[styles.itemcontainer, { backgroundColor: item.stock > 5 ? "lightgreen" : "lightpink" }]}>
                            <Text style={styles.itemText}>{item.name}</Text>
                            <View style={{ flexDirection: "row", gap: 20 }}>
                                <Text style={styles.itemText}>{item.stock}</Text>
                                <Pressable onPress={() => edithandler(item)}>                             <Text style={styles.itemText}>Edit</Text>
                                </Pressable>
                                <Pressable onPress={() => deletehandler(item.id)}>
                                    <Text style={styles.itemText}>Delete</Text>

                                </Pressable>
                            </View>
                        </View>
                    )}
                    contentContainerStyle={{ gap: 10 }}
                />

            </View>
        </View>
    )
}

export default Createscreen

const styles = StyleSheet.create({
    container: {
        paddingVertical: "10%",
        gap: 20
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7,
        borderColor: "lightgreen"
    },
    button: {

        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7,
        backgroundColor: "lightgreen",
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,

    },
    headingcontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    headingtext: {

        fontWeight: "500",
        fontSize: 16
    },
    itemcontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 7
    },
    itemText: {
        fontWeight: "400",
        fontSize: 12
    }
})