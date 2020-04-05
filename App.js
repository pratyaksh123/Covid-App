import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from "./src/screens/Index"
import Home from "./src/screens/India"
import State from "./src/screens/StateWise"


const Navigator=createStackNavigator({
  Index:HomeScreen,
  Home:Home,
  StateList:State,
},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    headerTitle:null,
    headerTitleAlign:'center',
    headerTintColor:'white',
    headerStyle:{
      backgroundColor:'#003da1',
    }
  }
})

export default createAppContainer(Navigator)