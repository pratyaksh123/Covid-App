import React from 'react'
import {Image,View,TouchableOpacity,StyleSheet,Linking} from 'react-native'
import normalize from 'react-native-normalize'
import { Analytics, PageHit } from 'expo-analytics';



const Social=()=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'space-around',alignContent:'center',marginTop:10}}>
            <TouchableOpacity onPress={()=>{
                const analytics = new Analytics('UA-163012734-2');
                analytics.hit(new PageHit('Instagram'))
                .then(() => Linking.openURL("https://www.instagram.com/pratyaksh.tyagi/"))
                .catch(e => console.log(e.message));
                }}
            >
            <View>
            <Image style={StyleSheet.image} source={require("../../assets/img/insta.png")}/>
            </View>

            </TouchableOpacity>


            <TouchableOpacity
            
            onPress={()=>{
                const analytics = new Analytics('UA-163012734-2');
                analytics.hit(new PageHit('Facebook'))
                .then(() =>  Linking.openURL("https://www.facebook.com/pratyaksh.tyagi.52"))
                .catch(e => console.log(e.message));
                
               }}>
                <View>
                <Image style={StyleSheet.image} source={require("../../assets/img/facebook.png")}/>
                </View>
            </TouchableOpacity>


            <TouchableOpacity
            onPress={()=>{
                const analytics = new Analytics('UA-163012734-2');
                analytics.hit(new PageHit('LinkedIN'))
                .then(() => Linking.openURL("https://www.linkedin.com/in/pratyaksh-tyagi-59759718b/"))
                .catch(e => console.log(e.message));
                
                }}
            >
                <View>
                <Image style={StyleSheet.image} source={require("../../assets/img/linkedin.png")}/>
                </View>
            </TouchableOpacity>


            
            
        </View>
    )
}

const styles=StyleSheet.create({
    image:{
        borderRadius:normalize(50),
        height:normalize(10,"height"),
        width:normalize(10,"height"),
    }
})

export default Social