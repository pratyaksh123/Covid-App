import React from 'react'
import {Image,Text,View,StyleSheet} from 'react-native'

const Safety=()=>{
    return(
        <View>
            <Image style={styles.image} source={require("../../assets/img/wash.png")} resizeMode="stretch" />
        </View>
        
    )
}

const styles=StyleSheet.create({
    image:{
        height:"100%",
        width:"100%",
    }
})

export default Safety