import React, { useState, useEffect} from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button ,ScrollView,FlatList, RefreshControl} from 'react-native'
import {world} from "../../api/data"
import normalize from 'react-native-normalize'
import {DetailCountries} from "../components/StateDetail"
import {SearchBar} from 'react-native-elements'



const WorldData=()=>{
    const [data,setData]=useState([])
    const [name,setName]=useState('')
    const [refreshing,setRefresh]=useState(false)
    const api= async()=>{
        const response= await world.get()
        setData(response.data.countries_stat)
    }   
    
    useEffect(()=>{api()},[])

    searchFilterFunction = text => {    
          setName(text)
          const newData =   data.filter(item => {    
          const itemData = `${item.country_name.toUpperCase()}`;
          const textData = text.toUpperCase();
            
           return (itemData.indexOf(textData) > -1);    
        });
        setData(newData);  
      };

    return(
        <>
        <View>
        <Text style={styles.text}>Country Data</Text>
        {data.length===0?(<Text style={{textAlign:'center',fontFamily:'Bebas Neue',fontSize:normalize(23)}}>Loading..</Text>):(null)}
             
        </View>
        <View style={styles.parent}>


            <FlatList data={data} renderItem={({item})=>{
                return(
                <DetailCountries name={item.country_name} confirmed={item.cases} active={item.active_cases} deaths={item.deaths} recovered={item.total_recovered} />
                )
            }}  keyExtractor={(data)=>{data.country_name}}
            ListHeaderComponent={<SearchBar      
                placeholder="Search by Country name"        
                lightTheme={true}       
                round  
                containerStyle={{backgroundColor:'#003da1'}}  
                value={name}
                onChangeText={text => searchFilterFunction(text)}
                autoCorrect={false}             
            />}
            refreshing={refreshing}
            onRefresh={()=>{api()}}
            showsVerticalScrollIndicator={false}
        />
            
        </View>
        </>
        
    )
}

const styles=StyleSheet.create({
    text: {
        color: 'black',
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
