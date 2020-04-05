import React,{useEffect,useState} from 'react'
import {Text,View,StyleSheet,ScrollView} from 'react-native'
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
    

    return(
        <View style={styles.parent}>
             <ScrollView style={{flexGrow:1}}>
                 <View style={{paddingBottom:600}}>
            <Text style={styles.text}>State Wise Data</Text>


        {results.length===0 ?(<View style={{ alignItems: 'center', justifyContent: 'center',paddingVertical:normalize(150) }}><Text style={{ fontFamily: 'Bebas Neue', fontSize: normalize(23), color: 'white', }} >Loading..</Text></View>) :(<Detail name={results.Maharashtra.state} recovered={results.Maharashtra.recovered} confirmed={results.Maharashtra.confirmed} active={results.Maharashtra.active} deaths={results.Maharashtra.deaths} />)}


        {results.length===0 ?(null) :(<Detail name={results.Delhi.state} recovered={results.Delhi.recovered} confirmed={results.Delhi.confirmed} active={results.Delhi.active} deaths={results.Delhi.deaths} />)}


        {results.length===0 ?(null) :(<Detail name={results[ 'Tamil Nadu' ].state} recovered={results[ 'Tamil Nadu' ].recovered} confirmed={results[ 'Tamil Nadu' ].confirmed} active={results[ 'Tamil Nadu' ].active} deaths={results[ 'Tamil Nadu' ].deaths} />)}


        {results.length===0 ?(null) :(<Detail name={results.Kerala.state} recovered={results.Kerala.recovered} confirmed={results.Kerala.confirmed} active={results.Kerala.active} deaths={results.Kerala.deaths} />)}



        {results.length===0 ?(null) :(<Detail name={results.Telangana.state} recovered={results.Telangana.recovered} confirmed={results.Telangana.confirmed} active={results.Telangana.active} deaths={results.Telangana.deaths} />)}


        {results.length===0 ?(null) :(<Detail name={results[ 'Uttar Pradesh' ].state} recovered={results[ 'Uttar Pradesh' ].recovered} confirmed={results[ 'Uttar Pradesh' ].confirmed} active={results[ 'Uttar Pradesh' ].active} deaths={results[ 'Uttar Pradesh' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail name={results[ 'Andhra Pradesh' ].state} recovered={results[ 'Andhra Pradesh' ].recovered} confirmed={results[ 'Andhra Pradesh' ].confirmed} active={results[ 'Andhra Pradesh' ].active} deaths={results[ 'Andhra Pradesh' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail name={results.Rajasthan.state} recovered={results.Rajasthan.recovered} confirmed={results.Rajasthan.confirmed} active={results.Rajasthan.active} deaths={results.Rajasthan.deaths} />)}


        {results.length===0 ?(null) :(<Detail name={results[ 'Madhya Pradesh' ].state} recovered={results[ 'Madhya Pradesh' ].recovered} confirmed={results[ 'Madhya Pradesh' ].confirmed} active={results[ 'Madhya Pradesh' ].active} deaths={results[ 'Madhya Pradesh' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail name={results[ 'Jammu and Kashmir' ].state} recovered={results[ 'Jammu and Kashmir' ].recovered} confirmed={results[ 'Jammu and Kashmir' ].confirmed} active={results[ 'Jammu and Kashmir' ].active} deaths={results[ 'Jammu and Kashmir' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail name={results[ 'Andaman and Nicobar Islands' ].state} recovered={results[ 'Andaman and Nicobar Islands' ].recovered} confirmed={results[ 'Andaman and Nicobar Islands' ].confirmed} active={results[ 'Andaman and Nicobar Islands' ].active} deaths={results[ 'Andaman and Nicobar Islands' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail name={results[ 'West Bengal' ].state} recovered={results[ 'West Bengal' ].recovered} confirmed={results[ 'West Bengal' ].confirmed} active={results[ 'West Bengal' ].active} deaths={results[ 'West Bengal' ].deaths} />)}


        {results.length===0 ?(null) :(<Detail name={results[ 'Himachal Pradesh' ].state} recovered={results[ 'Himachal Pradesh' ].recovered} confirmed={results[ 'Himachal Pradesh' ].confirmed} active={results[ 'Himachal Pradesh' ].active} deaths={results[ 'Himachal Pradesh' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail name={results[ 'Arunachal Pradesh' ].state} recovered={results[ 'Arunachal Pradesh' ].recovered} confirmed={results[ 'Arunachal Pradesh' ].confirmed} active={results[ 'Arunachal Pradesh' ].active} deaths={results[ 'Arunachal Pradesh' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail name={results[ 'Dadra and Nagar Haveli' ].state} recovered={results[ 'Dadra and Nagar Haveli' ].recovered} confirmed={results[ 'Dadra and Nagar Haveli' ].confirmed} active={results[ 'Dadra and Nagar Haveli' ].active} deaths={results[ 'Dadra and Nagar Haveli' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail name={results[ 'Daman and Diu' ].state} recovered={results[ 'Daman and Diu' ].recovered} confirmed={results[ 'Daman and Diu' ].confirmed} active={results[ 'Daman and Diu' ].active} deaths={results[ 'Daman and Diu' ].deaths} />)}



        {results.length===0 ?(null) :(<Detail name={results.Karnataka.state} recovered={results.Karnataka.recovered} confirmed={results.Karnataka.confirmed} active={results.Karnataka.active} deaths={results.Karnataka.deaths} />)}


        {results.length===0 ?(null) :(<Detail name={results.Gujarat.state} recovered={results.Gujarat.recovered} confirmed={results.Gujarat.confirmed} active={results.Gujarat.active} deaths={results.Gujarat.deaths} />)}



        {results.length===0 ?(null) :(<Detail name={results.Haryana.state} recovered={results.Haryana.recovered} confirmed={results.Haryana.confirmed} active={results.Haryana.active} deaths={results.Haryana.deaths} />)}


        {results.length===0 ?(null) :(<Detail name={results.Punjab.state} recovered={results.Punjab.recovered} confirmed={results.Punjab.confirmed} active={results.Punjab.active} deaths={results.Punjab.deaths} />)}


        {results.length===0 ?(null) :(<Detail name={results.Bihar.state} recovered={results.Bihar.recovered} confirmed={results.Bihar.confirmed} active={results.Bihar.active} deaths={results.Bihar.deaths} />)}


        {results.length===0 ?(null) :(<Detail name={results.Assam.state} recovered={results.Assam.recovered} confirmed={results.Assam.confirmed} active={results.Assam.active} deaths={results.Assam.deaths} />)}


        {results.length===0 ?(null) :(<Detail name={results.Uttarakhand.state} recovered={results.Uttarakhand.recovered} confirmed={results.Uttarakhand.confirmed} active={results.Uttarakhand.active} deaths={results.Uttarakhand.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail name={results.Odisha.state} recovered={results.Odisha.recovered} confirmed={results.Odisha.confirmed} active={results.Odisha.active} deaths={results.Odisha.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail name={results.Chandigarh.state} recovered={results.Chandigarh.recovered} confirmed={results.Chandigarh.confirmed} active={results.Chandigarh.active} deaths={results.Chandigarh.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail name={results.Ladakh.state} recovered={results.Ladakh.recovered} confirmed={results.Ladakh.confirmed} active={results.Ladakh.active} deaths={results.Ladakh.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail name={results.Chhattisgarh.state} recovered={results.Chhattisgarh.recovered} confirmed={results.Chhattisgarh.confirmed} active={results.Chhattisgarh.active} deaths={results.Chhattisgarh.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail name={results.Goa.state} recovered={results.Goa.recovered} confirmed={results.Goa.confirmed} active={results.Goa.active} deaths={results.Goa.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail name={results.Puducherry.state} recovered={results.Puducherry.recovered} confirmed={results.Puducherry.confirmed} active={results.Puducherry.active} deaths={results.Puducherry.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail name={results.Jharkhand.state} recovered={results.Jharkhand.recovered} confirmed={results.Jharkhand.confirmed} active={results.Jharkhand.active} deaths={results.Jharkhand.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail name={results.Manipur.state} recovered={results.Manipur.recovered} confirmed={results.Manipur.confirmed} active={results.Manipur.active} deaths={results.Manipur.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail name={results.Mizoram.state} recovered={results.Mizoram.recovered} confirmed={results.Mizoram.confirmed} active={results.Mizoram.active} deaths={results.Mizoram.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail name={results.Lakshadweep.state} recovered={results.Lakshadweep.recovered} confirmed={results.Lakshadweep.confirmed} active={results.Lakshadweep.active} deaths={results.Lakshadweep.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail name={results.Meghalaya.state} recovered={results.Meghalaya.recovered} confirmed={results.Meghalaya.confirmed} active={results.Meghalaya.active} deaths={results.Meghalaya.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail name={results.Nagaland.state} recovered={results.Nagaland.recovered} confirmed={results.Nagaland.confirmed} active={results.Nagaland.active} deaths={results.Nagaland.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail name={results.Sikkim.state} recovered={results.Sikkim.recovered} confirmed={results.Sikkim.confirmed} active={results.Sikkim.active} deaths={results.Sikkim.deaths} />)}


        {results.length===0 ?(null) :(<Detail name={results.Tripura.state} recovered={results.Tripura.recovered} confirmed={results.Tripura.confirmed} active={results.Tripura.active} deaths={results.Tripura.deaths} />)}

        <Text style={styles.text2}>Help us Fight COVID-19 just by</Text> 
        <Text style={styles.text1}>#StayingHome :)</Text> 

                </View>
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
        fontSize:normalize(60),
        color:'white',
        textAlign:'center',
    },
    text1:{
        fontFamily:'Agency FB',
        fontSize:normalize(55),
        color:'white',
        textAlign:'center',
    },
    text2:{
        fontFamily:'Agency FB',
        fontSize:normalize(35),
        color:'white',
        textAlign:'center',
    }
})

export default State