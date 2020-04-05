import React,{useEffect,useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import {IndiaAPI} from "../../api/data"
import normalize from 'react-native-normalize'
import Detail from "../components/StateDetail"


const State=()=>{
    const [results,setResult]=useState([])

    const API= async()=>{
        const response= await IndiaAPI.get()
        setResult(response.data.state_wise)
    }
    useEffect(()=>{API()},[])
    const StateListArray=Object.keys(results)

    return(
        <View style={styles.parent}>
            <Text style={styles.text}>State Wise Data</Text>
            <ScrollView>
            <Detail/>
            </ScrollView>
        </View>
        
    )
}
const styles=StyleSheet.create({
    parent:{
        flex:1,
        backgroundColor:'#003da1'
    },
    text:{
        fontFamily:'Bebas Neue',
        fontSize:normalize(70),
        color:'white',
        textAlign:'center',
    }
})

export default State