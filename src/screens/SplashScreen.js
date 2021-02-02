import React,{useEffect, useState} from 'react'
import {View, SafeAreaView, Image} from 'react-native'
import a from '../../assets/a.png'
import b from '../../assets/b.png'
import c from '../../assets/c.png'
import d from '../../assets/d.png'
import e from '../../assets/e.png'
const SplashScreen = ({navigation}) => {
    const [A, setA] = useState(null)
    const [B, setB] = useState(null)
    const [C, setC] = useState(null)
    const [D, setD] = useState(null)
    const [E, setE] = useState(null)
    
    useEffect(()=> {
        setTimeout(()=> {
            setA(a)
        },250)
        setTimeout(()=> {
            setB(b)
        },500)
        setTimeout(()=> {
            setC(c)
        },750)
        setTimeout(()=> {
            setD(d)
        },1000)
        setTimeout(()=> {
            navigation.replace('Home')
        },3000)
    },[])
    // <Video
    // source={Splash}
    // rate={1.0}
    // volume={1.0}
    // isMuted={false}
    // resizeMode="cover"
    // shouldPlay
    // isLooping
    // style={StyleSheet.absoluteFill}
    // /> 
    return (<SafeAreaView>
        <View style={{flex:1}}>
            {A? <Image source={a}
            style={{width:200, height: 200, position:'absolute', marginTop:220, left:50}} />: null}
            {B? <Image source={b}
            style={{width:140, height: 140, position:'absolute', marginTop:195, left:70}} />: null}
            {C? <Image source={c}
            style={{width:200, height: 200, position:'absolute', marginTop:230, left:130}} />: null}
            {D? <Image source={d}
            style={{width:200, height: 200, position:'absolute', marginTop:170, left:120}} />: null}
            
            <Image
            source={e}
            style={{width:200, height: 200, alignSelf:'center', marginTop:200}}
            />
        </View>
        </SafeAreaView>
    )
    
}

SplashScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

export default SplashScreen