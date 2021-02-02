import React, {useState, useEffect} from 'react'
import {Text, View, FlatList, TouchableOpacity} from 'react-native'
import Api from '../api/Api'
import DetailScreen from './DetailScreen'
import {withNavigation} from 'react-navigation'
import Spinner from './Spinner'

const ShowList = ({navigation})=> {
    const [list, setList] = useState(null)
    const det = async() => {
        try{
            const res = await Api.get('')
            setList(res.data)
        } catch(e){
            console.log(e.message) 
        }
        
    }
    useEffect(()=>{
        det()
    },[])
    if(!list){
        return <Spinner />
    }
    // console.log(list)
    return <View style={{padding: 5, backgroundColor: '#ffeb57'}} >
        
        <FlatList
        // horizontal={true}
        showsHorizontalScrollIndicator={false}
        data = {list}
        keyExtractor = {(result)=> toString(result.id)}
        renderItem= {({ item })=>{
        return (
            <TouchableOpacity onPress={()=> navigation.navigate('Working')} >
           <View style={{borderWidth: 2,borderColor: '#edff85',borderStyle: 'dotted', marginTop: 10, padding: 5, backgroundColor: '#f5f1d5'}} >
               <Text style={{alignSelf: 'center', fontSize: 25, margin: 10  }} >{item.name}</Text>
               <DetailScreen details = {item.sports} day={item.dayOfWeeksOpen} open={item.openTime} close={item.closeTime} price={item.costPerSlot} slot={item.slotTimeSize} />
           
           </View>
           </TouchableOpacity>
        )
            
        
        }}
        /> 
        
    </View>
}

export default withNavigation(ShowList)