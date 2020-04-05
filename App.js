import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {HomeScreen} from "./src/screens/Index"
import Home from "./src/screens/India"
import State from "./src/screens/StateWise"
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Developer} from "./src/screens/Developer"
import HamburgerIcon from './src/screens/Developer';



const Navigator=createStackNavigator({
  Index:HomeScreen,
  Home:Home,
  StateList:State,
},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    headerLeft:(<HamburgerIcon/>),
    headerTitle:null,
    headerTitleAlign:'center',
    headerTintColor:'white',
    headerStyle:{
      backgroundColor:'#003da1',
    }
  }
})


const Drawer=createDrawerNavigator({
  Home:Navigator,
  Developer:createStackNavigator({Developer},{
  defaultNavigationOptions:{
  headerLeft:(<HamburgerIcon/>),
  headerTitle:"Developer's Info",
  headerTintColor:'white',
  headerTitleAlign:'center',
  headerStyle:{
    backgroundColor:'#003da1',
}
}
  }),
},{
  drawerType:'slide',
})

export default createAppContainer(Drawer)

