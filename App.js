import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from "./src/screens/Index"
import Home from "./src/screens/India"


const Navigator=createStackNavigator({
  Index:HomeScreen,
  Home:Home,
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