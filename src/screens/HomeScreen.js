import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import Corona from "../../api/data"
import { AppLoading } from 'expo'

const Index = () => {
    const [total, setTotal] = useState([])
    const api =  async () => {
            const response = await Corona.get()
            setTotal(response.data)
    }

    useEffect(()=>{api()},[])

    const ConvertToIndianSystem=(string)=>{
        var x=string;
        x=x.toString();
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers != '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res;
    }
   
    console.log(total)
    return (
        <View style={style.parent}>
            <Text style={style.index} >Corona Virus</Text>
            <Text style={style.index1} >World at a Glance</Text>
            {total.length===0?(<View style={{alignItems:'center',justifyContent:'center',flex:1}}><Text style={{fontFamily:'Bebas Neue',fontSize:23,color:'white',}} >Loading..</Text></View>):(<View style={style.ButtonData}><Text style={{fontFamily:'Bebas Neue',fontSize:23}}>Confirmed - {ConvertToIndianSystem(total[0].confirmed)}</Text></View>)}
            {total.length===0?(null):(<View style={style.ButtonData}><Text style={{fontFamily:'Bebas Neue',fontSize:23}}>Recovered - {ConvertToIndianSystem(total[0].recovered)} </Text></View>)}
            {total.length===0?(null):(<View style={style.ButtonData}><Text style={{fontFamily:'Bebas Neue',fontSize:23}}>Critical - {ConvertToIndianSystem(total[0].critical)}</Text></View>)}
            {total.length===0?(null):(<View style={style.ButtonData}><Text style={{fontFamily:'Bebas Neue',fontSize:23}}>Deaths - {ConvertToIndianSystem(total[0].deaths)}</Text></View>)}

            <View style={{flexDirection:'row',}}>
            <TouchableOpacity onPress={() => {
                api()
                .then((response) => {
                    const data = [response.data]
                    setTotal(data)
                })
                .catch((error) => {
                    console.log(error)
                })
            }} style={style.index}>
                <View style={style.button}>
                    <Text style={style.buttonText}>Refresh</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                api()
                .then((response) => {
                    const data = [response.data]
                    setTotal(data)
                })
                .catch((error) => {
                    console.log(error)
                })
            }} style={style.index}>
                <View style={style.button}>
                    <Text style={style.buttonText}>Check For India</Text>
                </View>
            </TouchableOpacity>
            </View>


            <View style={{flexDirection:'row',marginTop:-20,}}>
            <TouchableOpacity onPress={() => {
                api()
                .then((response) => {
                    const data = [response.data]
                    setTotal(data)
                })
                .catch((error) => {
                    console.log(error)
                })
            }} style={style.index}>
                <View style={{alignSelf: 'center',
                borderRadius: 10,
                marginBottom: 30,
                width: 150,
                alignItems: 'center',
                backgroundColor: '#157ffb',
                marginHorizontal:20,
                marginTop:15,}}>
                    <Text style={style.buttonText}>Safety Tips</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                api()
                .then((response) => {
                    const data = [response.data]
                    setTotal(data)
                })
                .catch((error) => {
                    console.log(error)
                })
            }} style={style.index}>
                <View style={{alignSelf: 'center',
                borderRadius: 10,
                marginBottom: 30,
                width: 150,
                alignItems: 'center',
                backgroundColor: '#157ffb',
                marginHorizontal:20,
                marginTop:15,}}>
                    <Text style={style.buttonText}>All Countries</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    index: {
        color:'white',
        fontFamily:"Bebas Neue",
        fontSize: 60,
        textAlign: "center",
    },
    index1: {
        color:'white',
        fontFamily:"Agency FB",
        fontSize: 30,
        textAlign: "center",
    },
    button: {
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 30,
        width: 150,
        alignItems: 'center',
        backgroundColor: '#159588',
        marginHorizontal:20,
        marginTop:15,
        
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white',
        fontSize: 15,
    },
    data: {
        textAlign: 'center',
        fontSize: 40,
    },
    parent:{
        alignItems:'center',
        backgroundColor:'#003da1',
        flex:1,
    },
    ButtonData:{
        height:70,
        borderRadius:30,
        backgroundColor:'white',
        marginVertical:13,
        width:260,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default Index