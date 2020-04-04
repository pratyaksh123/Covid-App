import * as Font from 'expo-font'
import {AppLoading} from 'expo';
import Index from "./HomeScreen"
import React,{ useState } from 'react'

const getFonts=()=>{
    return Font.loadAsync({
        'Bebas Neue':require('../../assets/fonts/BebasNeue-Regular.otf'),
        'Agency FB':require('../../assets/fonts/agency-fb-1361528436.ttf'),
        'Jokerman':require('../../assets/fonts/Jokerman-Regular.ttf'),
    })
}

const HomeScreen =({navigation})=>{
    const [Fonts,setFonts]=useState(false)
    if(Fonts){
        return(<Index navigation={navigation} />)
    }else{
       return(
           <>
           <AppLoading 
           startAsync={getFonts} 
           onFinish={()=>{setFonts(true)}} 
           />
           </>
       )
    }
}

export default HomeScreen



