import * as Font from 'expo-font'
import {AppLoading} from 'expo';
import {Index} from "./HomeScreen"
import { withNavigation } from 'react-navigation';
import React,{ useState,Component} from 'react'
import {TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import normalize from 'react-native-normalize'


class BackButton extends Component{
    render() {
    return (
        <TouchableOpacity
        style={{
            width: 44,
            height: 44,
            marginLeft: 20,
            marginTop: normalize(30),
        }}
        onPress={()=>{
            this.props.navigation.openDrawer();
        }}>
            <Icon name='arrow-left' size={20} color='white'/>
        </TouchableOpacity>
    )
    };
}
export const Back=withNavigation(BackButton)

const getFonts=()=>{
    return Font.loadAsync({
        'Bebas Neue':require('../../assets/fonts/BebasNeue-Regular.otf'),
        'Agency FB':require('../../assets/fonts/agency-fb-1361528436.ttf'),
        'Baloo':require('../../assets/fonts/BalooThambi2-Regular.ttf'),
    })
}

export const HomeScreen =({navigation})=>{
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





