import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import Corona from "../../api/data"


const Index = () => {
    const [total, setTotal] = useState([])
    const api = async () => {
        try {
            const response = await Corona.get()
            return response
        }
        catch (e) {
            return ("Please Check your internet connection or try again later")
        }
    }

    // useEffect(() => {
    //     api()
    //         .then((response) => { 
    //             const data = [response.data]
    //             setTotal(data)
    //             console.log(total)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, [])


    return (
        <View style={style.parent}>
            <Text style={style.index} >Corona Virus</Text>
            <Text style={style.index1} >World at a Glance</Text>
            <View style={style.ButtonData}><Text style={{fontFamily:'Bebas Neue',fontSize:23}}>Confirmed - 1,34,000</Text></View>
            <View style={style.ButtonData}><Text style={{fontFamily:'Bebas Neue',fontSize:23}}>Recovered - 2,50,000</Text></View>
            <View style={style.ButtonData}><Text style={{fontFamily:'Bebas Neue',fontSize:23}}>Critical- 4,00,00</Text></View>
            <View style={style.ButtonData}><Text style={{fontFamily:'Bebas Neue',fontSize:23}}>Deaths - 50,000</Text></View>
            {/* <Text style={style.data}>
            Confirmed - {total[0][0].confirmed} {"\n"}
            Recovered - {total[0][0].recovered} {"\n"}
            Critical - {total[0][0].critical}{"\n"}
            Deaths - {total[0][0].deaths}{"\n"}
            </Text> */}

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