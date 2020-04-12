import React,{useEffect,useState,Component} from 'react'
import {Text,TouchableOpacity,Share,View,StyleSheet,ScrollView,ActivityIndicator} from 'react-native'
import {IndiaAPI} from "../../api/data"
import normalize from 'react-native-normalize'
import Detail from "../components/StateDetail"
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Analytics, PageHit } from 'expo-analytics';
import {key} from "../../keys"




const onShare = async () => {
    const response = await IndiaAPI.get()
    try {
        const analytics = new Analytics(key());
        analytics.hit(new PageHit('Share_State'))
        .then(() => console.log("Success"))
        .catch(e => console.log(e.message));


      const result = await Share.share({
        message:`Corona Virus Updates For India (Top 3 States)-${"\n"}${response.data.state_wise.Maharashtra.state}${"\n"}${"\n"}Confirmed Cases -${response.data.state_wise.Maharashtra.confirmed}${"\n"}Recovered - ${response.data.state_wise.Maharashtra.recovered}${"\n"}Active Cases - ${response.data.state_wise.Maharashtra.active}${"\n"}Deaths - ${response.data.state_wise.Maharashtra.deaths}${"\n"}${"\n"}${response.data.state_wise['Tamil Nadu'].state}${"\n"}${"\n"}Confirmed Cases -${response.data.state_wise['Tamil Nadu'].confirmed}${"\n"}Recovered - ${response.data.state_wise['Tamil Nadu'].recovered}${"\n"}Active Cases - ${response.data.state_wise['Tamil Nadu'].active}${"\n"}Deaths - ${response.data.state_wise['Tamil Nadu'].deaths}${"\n"}${"\n"}${response.data.state_wise.Delhi.state}${"\n"}${"\n"}Confirmed Cases -${response.data.state_wise.Delhi.confirmed}${"\n"}Recovered - ${response.data.state_wise.Delhi.recovered}${"\n"}Active Cases - ${response.data.state_wise.Delhi.active}${"\n"}Deaths - ${response.data.state_wise.Delhi.deaths}${"\n"}${"\n"} For all states , Download this App to get the latest Corona Virus Data Updates at your Fingertips .${"\n"} #StayHome ${"\n"} ${"\n"}Download Here :  https://drive.google.com/uc?id=1vyNB-fDHzA6UgRS-u0WmxXNzVp_o3YYk&export=download `,
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

export const ShareState=withNavigation(ShareIcon)



const State=()=>{
    const [results,setResult]=useState([])

    const API= async()=>{
        const response= await IndiaAPI.get()
        setResult(response.data.state_wise)
    }
    useEffect(()=>{
      const analytics = new Analytics(key());
      analytics.hit(new PageHit('State_Wise'))
      .then(() => console.log("Success"))
      .catch(e => console.log(e.message));
      
      API()},[])
    

    return(
        <View style={styles.parent}>
             <ScrollView showsVerticalScrollIndicator={false} style={{flexGrow:1}}>
                 <View style={{paddingBottom:800}}>
            <Text style={styles.text}>State Wise Data</Text>

            <TouchableOpacity 
      onPress={()=>{API()}}
      style={styles.index}>
        <View style={styles.button}>
                        <Text style={styles.buttonText}>Refresh</Text>
                    </View>
      </TouchableOpacity>

        {results.length===0 ?(<View style={{ alignItems: 'center', justifyContent: 'center',}}><ActivityIndicator size="large" color="white" /></View>) :(<Detail name={results.Maharashtra.state} recovered={results.Maharashtra.recovered} deltaConfirmed={results.Maharashtra.deltaconfirmed} deltaDeaths={results.Maharashtra.deltadeaths} deltaRecovered={results.Maharashtra.deltarecovered} confirmed={results.Maharashtra.confirmed} active={results.Maharashtra.active} deaths={results.Maharashtra.deaths} />)}


        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Delhi.deltaconfirmed} deltaDeaths={results.Delhi.deltadeaths} deltaRecovered={results.Delhi.deltarecovered} name={results.Delhi.state} recovered={results.Delhi.recovered} confirmed={results.Delhi.confirmed} active={results.Delhi.active} deaths={results.Delhi.deaths} />)}


        {results.length===0 ?(null) :(<Detail deltaConfirmed={results['Tamil Nadu'].deltaconfirmed} deltaDeaths={results['Tamil Nadu'].deltadeaths} deltaRecovered={results['Tamil Nadu'].deltarecovered} name={results[ 'Tamil Nadu' ].state} recovered={results[ 'Tamil Nadu' ].recovered} confirmed={results[ 'Tamil Nadu' ].confirmed} active={results[ 'Tamil Nadu' ].active} deaths={results[ 'Tamil Nadu' ].deaths} />)}


        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Kerala.deltaconfirmed} deltaDeaths={results.Kerala.deltadeaths} deltaRecovered={results.Kerala.deltarecovered} name={results.Kerala.state} recovered={results.Kerala.recovered} confirmed={results.Kerala.confirmed} active={results.Kerala.active} deaths={results.Kerala.deaths} />)}



        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Telangana.deltaconfirmed} deltaDeaths={results.Telangana.deltadeaths} deltaRecovered={results.Telangana.deltarecovered} name={results.Telangana.state} recovered={results.Telangana.recovered} confirmed={results.Telangana.confirmed} active={results.Telangana.active} deaths={results.Telangana.deaths} />)}


        {results.length===0 ?(null) :(<Detail deltaConfirmed={results['Uttar Pradesh'].deltaconfirmed} deltaDeaths={results['Uttar Pradesh'].deltadeaths} deltaRecovered={results['Uttar Pradesh'].deltarecovered} name={results[ 'Uttar Pradesh' ].state} recovered={results[ 'Uttar Pradesh' ].recovered} confirmed={results[ 'Uttar Pradesh' ].confirmed} active={results[ 'Uttar Pradesh' ].active} deaths={results[ 'Uttar Pradesh' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results['Andhra Pradesh'].deltaconfirmed} deltaDeaths={results['Andhra Pradesh'].deltadeaths} deltaRecovered={results['Andhra Pradesh'].deltarecovered} name={results[ 'Andhra Pradesh' ].state} recovered={results[ 'Andhra Pradesh' ].recovered} confirmed={results[ 'Andhra Pradesh' ].confirmed} active={results[ 'Andhra Pradesh' ].active} deaths={results[ 'Andhra Pradesh' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Rajasthan.deltaconfirmed} deltaDeaths={results.Rajasthan.deltadeaths} deltaRecovered={results.Rajasthan.deltarecovered} name={results.Rajasthan.state} recovered={results.Rajasthan.recovered} confirmed={results.Rajasthan.confirmed} active={results.Rajasthan.active} deaths={results.Rajasthan.deaths} />)}


        {results.length===0 ?(null) :(<Detail deltaConfirmed={results['Madhya Pradesh'].deltaconfirmed} deltaDeaths={results['Madhya Pradesh'].deltadeaths} deltaRecovered={results['Madhya Pradesh'].deltarecovered} name={results[ 'Madhya Pradesh' ].state} recovered={results[ 'Madhya Pradesh' ].recovered} confirmed={results[ 'Madhya Pradesh' ].confirmed} active={results[ 'Madhya Pradesh' ].active} deaths={results[ 'Madhya Pradesh' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results['Jammu and Kashmir'].deltaconfirmed} deltaDeaths={results['Jammu and Kashmir'].deltadeaths} deltaRecovered={results['Jammu and Kashmir'].deltarecovered} name={results[ 'Jammu and Kashmir' ].state} recovered={results[ 'Jammu and Kashmir' ].recovered} confirmed={results[ 'Jammu and Kashmir' ].confirmed} active={results[ 'Jammu and Kashmir' ].active} deaths={results[ 'Jammu and Kashmir' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results['Andaman and Nicobar Islands'].deltaconfirmed} deltaDeaths={results['Andaman and Nicobar Islands'].deltadeaths} deltaRecovered={results['Andaman and Nicobar Islands'].deltarecovered} name={results[ 'Andaman and Nicobar Islands' ].state} recovered={results[ 'Andaman and Nicobar Islands' ].recovered} confirmed={results[ 'Andaman and Nicobar Islands' ].confirmed} active={results[ 'Andaman and Nicobar Islands' ].active} deaths={results[ 'Andaman and Nicobar Islands' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results['West Bengal'].deltaconfirmed} deltaDeaths={results['West Bengal'].deltadeaths} deltaRecovered={results['West Bengal'].deltarecovered} name={results[ 'West Bengal' ].state} recovered={results[ 'West Bengal' ].recovered} confirmed={results[ 'West Bengal' ].confirmed} active={results[ 'West Bengal' ].active} deaths={results[ 'West Bengal' ].deaths} />)}


        {results.length===0 ?(null) :(<Detail deltaConfirmed={results['Himachal Pradesh'].deltaconfirmed} deltaDeaths={results['Himachal Pradesh'].deltadeaths} deltaRecovered={results['Himachal Pradesh'].deltarecovered} name={results[ 'Himachal Pradesh' ].state} recovered={results[ 'Himachal Pradesh' ].recovered} confirmed={results[ 'Himachal Pradesh' ].confirmed} active={results[ 'Himachal Pradesh' ].active} deaths={results[ 'Himachal Pradesh' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results['Arunachal Pradesh'].deltaconfirmed} deltaDeaths={results['Arunachal Pradesh'].deltadeaths} deltaRecovered={results['Arunachal Pradesh'].deltarecovered} name={results[ 'Arunachal Pradesh' ].state} recovered={results[ 'Arunachal Pradesh' ].recovered} confirmed={results[ 'Arunachal Pradesh' ].confirmed} active={results[ 'Arunachal Pradesh' ].active} deaths={results[ 'Arunachal Pradesh' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results['Dadra and Nagar Haveli'].deltaconfirmed} deltaDeaths={results['Dadra and Nagar Haveli'].deltadeaths} deltaRecovered={results['Dadra and Nagar Haveli'].deltarecovered} name={results[ 'Dadra and Nagar Haveli' ].state} recovered={results[ 'Dadra and Nagar Haveli' ].recovered} confirmed={results[ 'Dadra and Nagar Haveli' ].confirmed} active={results[ 'Dadra and Nagar Haveli' ].active} deaths={results[ 'Dadra and Nagar Haveli' ].deaths} />)}

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results['Daman and Diu'].deltaconfirmed} deltaDeaths={results['Daman and Diu'].deltadeaths} deltaRecovered={results['Daman and Diu'].deltarecovered} name={results[ 'Daman and Diu' ].state} recovered={results[ 'Daman and Diu' ].recovered} confirmed={results[ 'Daman and Diu' ].confirmed} active={results[ 'Daman and Diu' ].active} deaths={results[ 'Daman and Diu' ].deaths} />)}



        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Karnataka.deltaconfirmed} deltaDeaths={results.Karnataka.deltadeaths} deltaRecovered={results.Karnataka.deltarecovered} name={results.Karnataka.state} recovered={results.Karnataka.recovered} confirmed={results.Karnataka.confirmed} active={results.Karnataka.active} deaths={results.Karnataka.deaths} />)}


        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Gujarat.deltaconfirmed} deltaDeaths={results.Gujarat.deltadeaths} deltaRecovered={results.Gujarat.deltarecovered} name={results.Gujarat.state} recovered={results.Gujarat.recovered} confirmed={results.Gujarat.confirmed} active={results.Gujarat.active} deaths={results.Gujarat.deaths} />)}



        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Haryana.deltaconfirmed} deltaDeaths={results.Haryana.deltadeaths} deltaRecovered={results.Haryana.deltarecovered} name={results.Haryana.state} recovered={results.Haryana.recovered} confirmed={results.Haryana.confirmed} active={results.Haryana.active} deaths={results.Haryana.deaths} />)}


        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Punjab.deltaconfirmed} deltaDeaths={results.Punjab.deltadeaths} deltaRecovered={results.Punjab.deltarecovered} name={results.Punjab.state} recovered={results.Punjab.recovered} confirmed={results.Punjab.confirmed} active={results.Punjab.active} deaths={results.Punjab.deaths} />)}


        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Bihar.deltaconfirmed} deltaDeaths={results.Bihar.deltadeaths} deltaRecovered={results.Bihar.deltarecovered} name={results.Bihar.state} recovered={results.Bihar.recovered} confirmed={results.Bihar.confirmed} active={results.Bihar.active} deaths={results.Bihar.deaths} />)}


        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Assam.deltaconfirmed} deltaDeaths={results.Assam.deltadeaths} deltaRecovered={results.Assam.deltarecovered} name={results.Assam.state} recovered={results.Assam.recovered} confirmed={results.Assam.confirmed} active={results.Assam.active} deaths={results.Assam.deaths} />)}


        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Uttarakhand.deltaconfirmed} deltaDeaths={results.Uttarakhand.deltadeaths} deltaRecovered={results.Uttarakhand.deltarecovered} name={results.Uttarakhand.state} recovered={results.Uttarakhand.recovered} confirmed={results.Uttarakhand.confirmed} active={results.Uttarakhand.active} deaths={results.Uttarakhand.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Odisha.deltaconfirmed} deltaDeaths={results.Odisha.deltadeaths} deltaRecovered={results.Odisha.deltarecovered} name={results.Odisha.state} recovered={results.Odisha.recovered} confirmed={results.Odisha.confirmed} active={results.Odisha.active} deaths={results.Odisha.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Chandigarh.deltaconfirmed} deltaDeaths={results.Chandigarh.deltadeaths} deltaRecovered={results.Chandigarh.deltarecovered} name={results.Chandigarh.state} recovered={results.Chandigarh.recovered} confirmed={results.Chandigarh.confirmed} active={results.Chandigarh.active} deaths={results.Chandigarh.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Ladakh.deltaconfirmed} deltaDeaths={results.Ladakh.deltadeaths} deltaRecovered={results.Ladakh.deltarecovered} name={results.Ladakh.state} recovered={results.Ladakh.recovered} confirmed={results.Ladakh.confirmed} active={results.Ladakh.active} deaths={results.Ladakh.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Chhattisgarh.deltaconfirmed} deltaDeaths={results.Chhattisgarh.deltadeaths} deltaRecovered={results.Chhattisgarh.deltarecovered} name={results.Chhattisgarh.state} recovered={results.Chhattisgarh.recovered} confirmed={results.Chhattisgarh.confirmed} active={results.Chhattisgarh.active} deaths={results.Chhattisgarh.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Goa.deltaconfirmed} deltaDeaths={results.Goa.deltadeaths} deltaRecovered={results.Goa.deltarecovered} name={results.Goa.state} recovered={results.Goa.recovered} confirmed={results.Goa.confirmed} active={results.Goa.active} deaths={results.Goa.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Puducherry.deltaconfirmed} deltaDeaths={results.Puducherry.deltadeaths} deltaRecovered={results.Puducherry.deltarecovered} name={results.Puducherry.state} recovered={results.Puducherry.recovered} confirmed={results.Puducherry.confirmed} active={results.Puducherry.active} deaths={results.Puducherry.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Jharkhand.deltaconfirmed} deltaDeaths={results.Jharkhand.deltadeaths} deltaRecovered={results.Jharkhand.deltarecovered} name={results.Jharkhand.state} recovered={results.Jharkhand.recovered} confirmed={results.Jharkhand.confirmed} active={results.Jharkhand.active} deaths={results.Jharkhand.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Manipur.deltaconfirmed} deltaDeaths={results.Manipur.deltadeaths} deltaRecovered={results.Manipur.deltarecovered} name={results.Manipur.state} recovered={results.Manipur.recovered} confirmed={results.Manipur.confirmed} active={results.Manipur.active} deaths={results.Manipur.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Mizoram.deltaconfirmed} deltaDeaths={results.Mizoram.deltadeaths} deltaRecovered={results.Mizoram.deltarecovered} name={results.Mizoram.state} recovered={results.Mizoram.recovered} confirmed={results.Mizoram.confirmed} active={results.Mizoram.active} deaths={results.Mizoram.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Lakshadweep.deltaconfirmed} deltaDeaths={results.Lakshadweep.deltadeaths} deltaRecovered={results.Lakshadweep.deltarecovered} name={results.Lakshadweep.state} recovered={results.Lakshadweep.recovered} confirmed={results.Lakshadweep.confirmed} active={results.Lakshadweep.active} deaths={results.Lakshadweep.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Meghalaya.deltaconfirmed} deltaDeaths={results.Meghalaya.deltadeaths} deltaRecovered={results.Meghalaya.deltarecovered} name={results.Meghalaya.state} recovered={results.Meghalaya.recovered} confirmed={results.Meghalaya.confirmed} active={results.Meghalaya.active} deaths={results.Meghalaya.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Nagaland.deltaconfirmed} deltaDeaths={results.Nagaland.deltadeaths} deltaRecovered={results.Nagaland.deltarecovered} name={results.Nagaland.state} recovered={results.Nagaland.recovered} confirmed={results.Nagaland.confirmed} active={results.Nagaland.active} deaths={results.Nagaland.deaths} />)}

           

        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Sikkim.deltaconfirmed} deltaDeaths={results.Sikkim.deltadeaths} deltaRecovered={results.Sikkim.deltarecovered} name={results.Sikkim.state} recovered={results.Sikkim.recovered} confirmed={results.Sikkim.confirmed} active={results.Sikkim.active} deaths={results.Sikkim.deaths} />)}


        {results.length===0 ?(null) :(<Detail deltaConfirmed={results.Tripura.deltaconfirmed} deltaDeaths={results.Tripura.deltadeaths} deltaRecovered={results.Tripura.deltarecovered} name={results.Tripura.state} recovered={results.Tripura.recovered} confirmed={results.Tripura.confirmed} active={results.Tripura.active} deaths={results.Tripura.deaths} />)}

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
    },
  button: {
      alignSelf: 'center',
      borderRadius: normalize(10),
      marginBottom: normalize(8),
      width: normalize(340),
      alignItems: 'center',
      backgroundColor: '#159588',
      marginHorizontal: normalize(20),
      marginTop: normalize(10)},

  buttonText: {
      textAlign: 'center',
      padding: normalize(20),
      color: 'white',
      fontSize: normalize(15),}  ,
  index: {
        color: 'white',
        fontFamily: "Bebas Neue",
        fontSize: normalize(60),
        textAlign: "center",
    },

})

export default State