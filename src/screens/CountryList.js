import React, { useState, useEffect} from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button ,ScrollView,FlatList} from 'react-native'
import {world} from "../../api/data"
import normalize from 'react-native-normalize'
import {DetailCountries} from "../components/StateDetail"

const WorldData=()=>{
    const [data,setData]=useState([])
    const api= async()=>{
        const response= await world.get()
        setData(response.data.countries_stat)
    }   
    
    useEffect(()=>{api()},[])
    // console.log(data)
    return(
        <View style={styles.parent}>
            <Text style={styles.text}>Country Data</Text>

            <FlatList data={data} renderItem={({item})=>{
                return(
                <DetailCountries name={item.country_name} confirmed={item.cases} active={item.active_cases} deaths={item.deaths} recovered={item.total_recovered} />
                )
            }}  keyExtractor={(data)=>{data.country_name}} />
            
        </View>
        
    )
}

const styles=StyleSheet.create({
    text: {
        color: 'white',
        fontFamily: "Bebas Neue",
        fontSize: normalize(70),
        textAlign: "center",
    },
    parent: {
        alignItems: 'center',
        backgroundColor: '#003da1',
        flex: 1,},
})

export default WorldData
