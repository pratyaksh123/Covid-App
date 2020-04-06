import React,{Component} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,Image,ScrollView, Linking} from 'react-native'
import normalize from 'react-native-normalize'
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Social from "../components/Social"



class HamburgerIcon extends Component{
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
            this.props.navigation.openDrawer();
        }}>
            <Icon name='menu' size={20} color='white'/>
        </TouchableOpacity>
    )
    };
}

export default withNavigation(HamburgerIcon);


export const Developer=(props)=>{
    console.log(props.navigation.navigate)

    const openURL = (url) => {
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
      }
    
    
    return(
        <View style={{flex:1,backgroundColor:'#003da1'}}> 
        <ScrollView>
            <View style={{paddingBottom:200}}>
        <Text style={styles.text2}>Corona Virus tracker App</Text>
        <View style={{justifyContent:'center'}}>
       
        
        <Text style={styles.text1}>This is an open-source cross platform application built on react native, for realtime Corona Virus Data Updates.Contributions are welcome</Text>

        <TouchableOpacity onPress={()=>{openURL('https://github.com/pratyaksh123/Vete_Corona')}} style={{flexDirection:'row',height:"10%",alignItems:'center',justifyContent:'center',margin:normalize(30,"height")}}>
            <Image style={styles.image} source={require("../../assets/img/25231.png")} />
                <Text style={styles.text1}>   Github Source</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{openURL('mailto:tyagi.6@iitj.ac.in')}} style={{flexDirection:'row',height:"10%",alignItems:'center',justifyContent:'center'}}>
            <Image style={styles.image} source={require("../../assets/img/mail.png")} />
                <Text style={styles.text1}>  Feedback/Bugs ? </Text>
        </TouchableOpacity>



        <TouchableOpacity onPress={()=>
            {props.navigation.navigate('Home')}}>
                <View style={styles.button}>
                <Text style={styles.text1}>Home</Text>
                </View>
            </TouchableOpacity>

            <View style={{flexDirection:'row',height:"15%",alignItems:'center',justifyContent:'center',margin:normalize(20),marginTop:normalize(-50)}}>
            <Image style={styles.myimage} source={require("../../assets/img/myimage.png")} />
            <Text style={styles.text3}>  Pratyaksh Tyagi</Text>
            </View>

            <Text style={styles.text4}>B.Tech (1st yr)</Text>
            <Text style={styles.text3}>Indian Institute Of Technology Jodhpur</Text>
            <Social/>

            </View>
            </View>
            </ScrollView>
          
        </View>

        
       
    )
}

const styles=StyleSheet.create({
    myimage:{
        height:normalize(80,"height"),
        width:normalize(90,"width"),
        borderRadius:normalize(100),
    },
    image:{
        alignSelf:'center',
        height:normalize(55,"height"),
        width:normalize(60,"width"),
    },
    text:{
        textAlign:'center',
        fontSize:normalize(30),
        color:'white',
        fontFamily:'Bebas Neue'
    },
    text2:{
        paddingTop:normalize(10),
        textAlign:'center',
        fontSize:normalize(40),
        color:'white',
        fontFamily:'Bebas Neue',
        marginBottom:5,
    },
    text1:{
        textAlign:'center',
        fontSize:normalize(25),
        color:'white',
        fontFamily:'Agency FB',
    },
    text3:{
        textAlign:'center',
        fontSize:normalize(22),
        color:'white',
        fontFamily:'Baloo',        
    },
    text4:{
        textAlign:'center',
        fontSize:normalize(15),
        color:'white',
        fontFamily:'Baloo',
        
    },
    button:{
        alignSelf:'center',
        height:"27%",
        width:"50%",
        backgroundColor:'#157ffb',
        borderRadius:normalize(30),
        justifyContent:'center',
        marginTop:normalize(15),
    }
})

