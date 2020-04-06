import * as Font from 'expo-font'
import {AppLoading} from 'expo';
import {Index} from "./HomeScreen"
import { withNavigation } from 'react-navigation';
import React,{ useState,Component} from 'react'
import {TouchableOpacity,Share,Text,View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import normalize from 'react-native-normalize'


const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Test Message www.google.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
  };



class ShareIcon extends Component{
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
            onShare();
        }}>
            <Icon name='share-alt' size={20} color='white'/>
        </TouchableOpacity>
    )
    };
}
export const Shareicon=withNavigation(ShareIcon)


const getFonts=()=>{
    return Font.loadAsync({
        'Bebas Neue':require('../../assets/fonts/BebasNeue-Regular.otf'),
        'Agency FB':require('../../assets/fonts/agency-fb-1361528436.ttf'),
        'Jokerman':require('../../assets/fonts/Jokerman-Regular.ttf'),
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





