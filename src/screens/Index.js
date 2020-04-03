import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'
import Corona from "../../api/data"
import * as Font from 'expo-font'
import {AppLoading} from 'expo'


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

    const getFont=()=>{
        return Font.loadAsync({
            'Bebas Neue':require('../../assets/fonts/BebasNeue-Regular.otf')
        })
    }


    return (
        <View style={style.parent}>
            <Text style={style.index} >Corona Virus Tracker</Text>
            {/* <Text style={style.data}>
            Confirmed - {total[0][0].confirmed} {"\n"}
            Recovered - {total[0][0].recovered} {"\n"}
            Critical - {total[0][0].critical}{"\n"}
            Deaths - {total[0][0].deaths}{"\n"}
            </Text> */}
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
        </View>
    )
}


const style = StyleSheet.create({
    index: {
        color:'white',
        fontFamily:"Bebas Neue",
        fontSize: 30,
        textAlign: "center",
    },
    button: {
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        
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
        backgroundColor:'#003da1',
        flex:1,
    }
})

export default Index