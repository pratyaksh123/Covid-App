import React,{useEffect,useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import normalize from 'react-native-normalize'

const Detail=()=>{
    return(
        <View><Text style={{fontSize:30,color:'white',fontFamily:'Agency FB',textAlign:'center'}}>Coming Soon...</Text></View>
        


        // <View style={styles.parent}>
            
        //     <View style={styles.ButtonData}>
        //     <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(30) ,color:'#49A828',marginTop:normalize(5),marginBottom:normalize(15)}}>Uttarakhand</Text>

        //     <View style={{flexDirection:'row',justifyContent:'space-between',alignSelf:"stretch"}}>

        //     <View style={{alignItems:'center'}}>
        //     <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(20),paddingLeft:normalize(10) ,color:'#FF4600',marginTop:normalize(5),}}>Confirmed</Text>
        //     <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(20),paddingLeft:normalize(10) ,color:'#FF4600',marginTop:normalize(5),}}>50</Text>
        //     </View>

        //     <View style={{alignItems:'center'}}>
        //     <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(20) ,color:'#1B41D9',marginTop:normalize(5),}}>Active</Text>
        //     <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(20) ,color:'#1B41D9',marginTop:normalize(5),}}>50</Text>
        //     </View>

        //     <View style={{alignItems:'center'}}>
        //     <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(20) ,color:'#49A828',marginTop:normalize(5),}}>Recovered</Text>
        //     <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(20) ,color:'#49A828',marginTop:normalize(5),}}>50</Text>
        //     </View>

        //     <View style={{alignItems:'center'}}>
        //     <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(20),paddingRight:normalize(10) ,color:'#5A5350',marginTop:normalize(5),}}>Deaths</Text>
        //     <Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(20),paddingRight:normalize(10) ,color:'#5A5350',marginTop:normalize(5),}}>50</Text>
        //     </View>
           
        //     </View>
        //     </View>
            
        // </View>
        
        
    )
}

const styles=StyleSheet.create({
    parent:{
        alignItems:'center',
        marginBottom:normalize(-190),
    },
    ButtonData: {
        marginTop:normalize(20),
        height: "34%",
        borderRadius: normalize(30),
        backgroundColor: 'white',
        marginVertical: normalize(13),
        width: "90%",
        alignItems: 'center',
    },
})

export default Detail