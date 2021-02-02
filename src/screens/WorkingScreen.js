import React from 'react'
import {Text,View} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const WorkingScreen = () => {
    
    return(
        <View >
            <View style={{alignSelf: 'center', marginTop: 50}}  >
            <Ionicons name="ios-build-outline" size={100} color="black" />
            </View>
            
            <Text style={{fontSize: 25, alignSelf: 'center', marginTop: 20}} >Still working on this screen...</Text>
        </View>
        
    )
}



export default WorkingScreen