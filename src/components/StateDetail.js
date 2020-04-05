import React,{useEffect,useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import normalize from 'react-native-normalize'

const Detail=({name,confirmed,active,deaths,recovered})=>{
    return(
        

        <View style={styles.ButtonData}>
            <Text style={{textAlign:"center",color:'black',fontFamily:'Bebas Neue',fontSize:normalize(30),marginTop:5}}>{name}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:normalize(13)}}>

            <View style={{alignItems:'center',justifyContent:'center'}}>   
            <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(20), paddingLeft:normalize(10),color:'#FF4600',marginTop:normalize(5),}}>Confirmed</Text>
    <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(20), paddingLeft:normalize(10),color:'#FF4600',marginTop:normalize(5),}}>{confirmed}</Text>
            </View>

            <View style={{alignItems:'center',justifyContent:'center'}}>   
               <Text style={{ fontFamily: 'Bebas Neue' ,fontSize: normalize(20) ,color:'#1B41D9'}}>Active</Text>
    <Text style={{ fontFamily: 'Bebas Neue' ,fontSize: normalize(20) ,color:'#1B41D9'}}>{active}</Text>
            </View>
               <View style={{alignItems:'center',justifyContent:'center'}}>   
               <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(20) ,color:'#49A828',marginTop:normalize(5),}}>Recovered</Text>
               <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(20) ,color:'#49A828',marginTop:normalize(5),}}>{recovered}</Text>
            </View>

               <View style={{alignItems:'center',justifyContent:'center'}}>   
               <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(20),paddingRight:normalize(10) ,color:'#5A5350',marginTop:normalize(5),}}>Deaths</Text>
    <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(20),paddingRight:normalize(10) ,color:'#5A5350',marginTop:normalize(5),}}>{deaths}</Text>
               </View>


            </View>
         
        </View>
        
    )
}

const styles=StyleSheet.create({
    parent:{
        flex:1,
        alignItems:'center',
        marginBottom:normalize(-190),
    },
    ButtonData: {
        marginTop:normalize(20),
        height: "2.17%",
        borderRadius: normalize(30),
        backgroundColor: 'white',
        marginVertical: normalize(13),
        width: "90%",
        alignSelf: 'center',
    },
})

export default Detail