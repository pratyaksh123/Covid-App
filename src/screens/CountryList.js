import React, { useState, useEffect,Component} from 'react'
import { Text, View, Share,StyleSheet,FlatList,ActivityIndicator,TouchableOpacity} from 'react-native'
import {world} from "../../api/data"
import normalize from 'react-native-normalize'
import {DetailCountries} from "../components/StateDetail"
import {SearchBar} from 'react-native-elements'
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Analytics, PageHit } from 'expo-analytics';
import {key} from "../../keys"




const onShare = async () => {
    const response = await world.get()
    try {
        const analytics = new Analytics(key());
        analytics.hit(new PageHit('Country_Cases_Share'))
        .then(() => console.log("Success"))
        .catch(e => console.log(e.message));


      const result = await Share.share({
        message:`Corona Virus Updates (Top 3 Countries) - ${"\n"}${"\n"}${response.data.countries_stat[0].country_name}${"\n"}${"\n"}Confirmed Cases -${response.data.countries_stat[0].cases}${"\n"}Recovered - ${response.data.countries_stat[0].total_recovered}${"\n"}Active Cases - ${response.data.countries_stat[0].active_cases}${"\n"}Deaths - ${response.data.countries_stat[0].deaths}${"\n"}${"\n"}${response.data.countries_stat[1].country_name}${"\n"}${"\n"}Confirmed Cases -${response.data.countries_stat[1].cases}${"\n"}Recovered - ${response.data.countries_stat[1].total_recovered}${"\n"}Active Cases - ${response.data.countries_stat[1].active_cases}${"\n"}Deaths - ${response.data.countries_stat[1].deaths}${"\n"}${"\n"}${response.data.countries_stat[2].country_name}${"\n"}${"\n"}Confirmed Cases -${response.data.countries_stat[2].cases}${"\n"}Recovered - ${response.data.countries_stat[2].total_recovered}${"\n"}Active Cases - ${response.data.countries_stat[2].active_cases}${"\n"}Deaths - ${response.data.countries_stat[2].deaths}${"\n"}${"\n"}For all Countries,Download this App to get the latest Corona Virus Data Updates at your Fingertips .${"\n"} #StayHome ${"\n"} ${"\n"}Download Here :  https://drive.google.com/uc?id=1vyNB-fDHzA6UgRS-u0WmxXNzVp_o3YYk&export=download`,
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

export const ShareCountry=withNavigation(ShareIcon)



const WorldData=()=>{
    const [data,setData]=useState([])
    const [name,setName]=useState('')
    const [refreshing,setRefresh]=useState(false)
    const api= async()=>{
        const response= await world.get()
        setData(response.data.countries_stat)
    }   
    
    useEffect(()=>{
      const analytics = new Analytics(key());
analytics.hit(new PageHit('CountryCases'))
  .then(() => console.log("Success"))
  .catch(e => console.log(e.message));
      
      api()},[])

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
        {data.length===0?(<View style={{ alignItems: 'center', justifyContent: 'center', marginVertical:normalize(10),}}><ActivityIndicator size="small" color="black" /></View>):(null)}
             
        </View>
        <View style={styles.parent}>
            
            <FlatList data={data} renderItem={({item})=>{
                return(
                <DetailCountries name={item.country_name} confirmed={item.cases} active={item.active_cases} deaths={item.deaths} recovered={item.total_recovered} deltaConfirmed={item.new_cases} deltaDeaths={item.new_deaths} />
                )
            }}  keyExtractor={(data)=>{data.country_name}}
            ListHeaderComponent={
            <>
            <SearchBar      
                placeholder="Search by Country name"        
                lightTheme={true}       
                round  
                containerStyle={{backgroundColor:'#003da1'}}  
                value={name}
                onChangeText={text => searchFilterFunction(text)}
                autoCorrect={false}             
            /> 
            <Text style={{textAlign:'center',fontFamily:'Agency FB',fontSize:normalize(17),color:'white',paddingTop:5}} >Pull to Refresh..</Text>
        </>
        }
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
