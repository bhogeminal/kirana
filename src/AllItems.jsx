import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllItems = ({data}) => {
  return (
    <View>
<View style={styles.headingcontainer}>
    <Text style={styles.headingtext}>
Items
    </Text>
     <Text>
Quantity
    </Text>
</View>
<FlatList data={data}
keyExtractor={(item) => item.id}
renderItem={({item})=>
    (
    <View style={[styles.itemcontainer,{backgroundColor:item.stock>5 ? "lightgreen":"lightpink"}]}>
        <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemText}>{item.stock}</Text>

    </View>
)}
contentContainerStyle={{gap:10}}
/>

    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
    headingcontainer:{
flexDirection:"row",
justifyContent:"space-between",
paddingHorizontal:15  ,
paddingVertical:10
 },
 headingtext:{

 fontWeight:"500",
 fontSize:16
 },
 itemcontainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:7
 },
 itemText:{
    fontWeight:"400",
    fontSize:12
 }
})