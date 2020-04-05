import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,Image,ScrollView } from 'react-native'
import {IndiaAPI} from "../../api/data"
import normalize from 'react-native-normalize'


const Home=({navigation})=>{
    const [results,setResult]=useState([])

    const API= async()=>{
        const response= await IndiaAPI.get()
        setResult(response.data.total_values)
    }
    useEffect(()=>{API()},[])
    console.log(results.active)

    const ConvertToIndianSystem = (string) => {
        var x = string;
        x = x.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res;
    }

    return(
        <View style={styles.parent}>

            <ScrollView>
                <View style={{paddingBottom:normalize(220)}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}> 
            <Image style={styles.image} source={require('../../assets/img/flag-round-250.png')} ></Image>
            <Text style={styles.text}>  India Cases</Text>
            </View>
            <Text style={{fontFamily:"Agency FB",color:'white',textAlign:'center',}}>Updated- {results.lastupdatedtime}</Text>
            <View style={{alignItems:'center'}}>

            {results.length === 0 ? (<View style={{ alignItems: 'center', justifyContent: 'center', marginVertical:normalize(180),}}><Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(23), color: 'white',paddingVertical:normalize(50) }} >Loading..</Text></View>) : (<View style={styles.ButtonData}><Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(23) ,color:'#FF4600'}}>Confirmed - {ConvertToIndianSystem(results.confirmed)}</Text></View>)}


            {results.length === 0 ? (null) : (<View style={styles.ButtonData}><Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(23),color:'#1B41D9' }}>Active - {ConvertToIndianSystem(results.active)}</Text></View>)}

            {results.length === 0 ? (null) : (<View style={styles.ButtonData}><Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(23),color:'#5A5350' }}>Deaths - {ConvertToIndianSystem(results.deaths)}</Text></View>)}

            {results.length === 0 ? (null) : (<View style={styles.ButtonData1}><Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(23),color:'#49A828' }}>Recovered - {ConvertToIndianSystem(results.recovered)}</Text></View>)}
            </View>

            <View style={{marginTop:normalize(-80)}}>
            <TouchableOpacity onPress={() => {
                    API()
                }} style={styles.index}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Refresh</Text>
                    </View>
                </TouchableOpacity>

            <TouchableOpacity  onPress={() => {
                    navigation.navigate('StateList')
                }} style={styles.index}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Check State/District-wise Data</Text>
                    </View>
                </TouchableOpacity>
                </View>
                </View>
                </ScrollView>
        </View>
        
    )
}

const styles=StyleSheet.create({
    index: {
        color: 'white',
        fontFamily: "Bebas Neue",
        fontSize: normalize(60),
        textAlign: "center",
    },
    ButtonData: {
        marginTop:normalize(20),
        height: "14%",
        borderRadius: normalize(30),
        backgroundColor: 'white',
        marginVertical: normalize(13),
        width: "70%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:normalize(14),
    },
    ButtonData1: {
        marginTop:normalize(20),
        height: "14%",
        borderRadius: normalize(30),
        backgroundColor: 'white',
        marginVertical: normalize(13),
        width: "70%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:normalize(50),
    },
    parent:{
        backgroundColor:"#003da1",
        flex:1,
    },
    text:{
        fontSize:normalize(70),
        color:'white',
        fontFamily:'Bebas Neue',
    },
    image:{
        height:normalize(60),
        width:normalize(60)
    },
    button: {
        alignSelf: 'center',
        borderRadius: normalize(10),
        marginBottom: normalize(20),
        width: normalize(350),
        alignItems: 'center',
        backgroundColor: '#159588',
        marginHorizontal: normalize(20),
        marginTop: normalize(10)},

    buttonText: {
        textAlign: 'center',
        padding: normalize(20),
        color: 'white',
        fontSize: normalize(15),}    
})

export default Home