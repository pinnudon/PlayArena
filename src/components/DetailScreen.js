import React from 'react'
import {View, Image, StyleSheet, Text, FlatList} from 'react-native'

const DetailScrren = ({details, open , close, day, price, slot}) => {
    return <View style={styles.container}>
        <Image
            source={{uri:details.iconBlackUrl}}
            style={{width:200, height: 200, borderWidth:1, borderRadius: 10}}
        />
        <View style={{alignSelf: 'center', marginTop: 10}}>
            <Text style={{fontSize: 20}} >Price: ₹{price} / slot ({slot} min) </Text>
        </View>
        <View style={{marginTop: 10, padding: 5, alignContent:'flex-start'}} >
        <Text>Sports Type: {details.name}</Text>
        {/* {day.map((item)=> {
            return <View style={{display: 'flex', alignItems: 'center'}} ><Text>{item}</Text></View>
        })} */}
        {day?<Text>Days Open: {day[0]} to {day[day.length-1]}</Text> : null}
        <Text>Open at : {open} AM</Text>
        <Text>Close at : {close} PM</Text>
        </View>
        
        
        </View>
}

const styles = StyleSheet.create({
    container : {
        alignSelf: 'center'
    }
})
export default DetailScrren