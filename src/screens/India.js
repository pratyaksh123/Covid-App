import React, { useState, useEffect,Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,Image,ScrollView,ActivityIndicator ,Share} from 'react-native'
import {IndiaAPI} from "../../api/data"
import normalize from 'react-native-normalize'
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';



const onShare = async () => {
    const response = await IndiaAPI.get()
    try {
      const result = await Share.share({
        message:`Corona Virus Updates For India - ${"\n"}${"\n"}Confirmed Cases -${response.data.total_values.confirmed}${"\n"}Recovered - ${response.data.total_values.recovered}${"\n"}Active Cases - ${response.data.total_values.active}${"\n"}Deaths - ${response.data.total_values.deaths}${"\n"}${"\n"}Download this App to get the latest Corona Virus Data Updates at your Fingertips .${"\n"} #StayHome ${"\n"} ${"\n"}Download Here :  <link> `,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
  };



class ShareIcon extends Component{
    render() {
    return (
        <TouchableOpacity
        style={{
            width: 44,
            height: 44,
            marginLeft: 20,
            marginTop: normalize(30),
        }}
        onPress={()=>{
            onShare();
        }}>
            <Icon name='share-alt' size={20} color='white'/>
        </TouchableOpacity>
    )
    };
}

export const ShareIndia=withNavigation(ShareIcon)




const Home=({navigation})=>{
    const [results,setResult]=useState([])

    const API= async()=>{
        const response= await IndiaAPI.get()
        setResult(response.data.total_values)
    }
    useEffect(()=>{API()},[])

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

            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{paddingBottom:normalize(280)}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}> 
            <Image style={styles.image} source={require('../../assets/img/flag-round-250.png')} ></Image>
            <Text style={styles.text}>  India Cases</Text>
            </View>
            <Text style={{fontFamily:"Agency FB",color:'white',textAlign:'center',}}>Updated- {results.lastupdatedtime}</Text>
            <View style={{alignItems:'center'}}>

            {results.length === 0 ? (<View style={{ alignItems: 'center', justifyContent: 'center', marginVertical:normalize(200),}}><ActivityIndicator size="large" color="white" /></View>) : (<View style={styles.ButtonData}><Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(23) ,color:'#FF4600'}}>Confirmed - {ConvertToIndianSystem(results.confirmed)}</Text></View>)}


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