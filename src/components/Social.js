import React from 'react'
import {Image,View,TouchableOpacity,StyleSheet,Text,Linking} from 'react-native'
import normalize from 'react-native-normalize'
import { TouchableHighlight } from 'react-native-gesture-handler'


const Social=()=>{
    return(
        <View style={{flexDirection:'row',justifyContent:'space-around',alignContent:'center',marginTop:10}}>
            <TouchableOpacity 
            onPress={()=>{Linking.openURL("https://www.instagram.com/pratyaksh.tyagi/")}}
            >
            <View>
            <Image style={StyleSheet.image} source={require("../../assets/img/insta.png")}/>
            </View>

            </TouchableOpacity>



            <TouchableOpacity
            
            onPress={()=>{Linking.openURL("https://www.facebook.com/pratyaksh.tyagi.52")}}>
                <View>
                <Image style={StyleSheet.image} source={require("../../assets/img/facebook.png")}/>
                </View>
            </TouchableOpacity>


            <TouchableOpacity
            onPress={()=>{Linking.openURL("https://www.linkedin.com/in/pratyaksh-tyagi-59759718b/")}}
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