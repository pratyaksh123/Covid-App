import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from "./src/screens/Index"

const Navigator=createStackNavigator({
  Index:HomeScreen,
},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    headerTitle:null,
    headerTitleAlign:'center',
    headerStyle:{
      backgroundColor:'#003da1',
    }
  }
})

export default createAppContainer(Navigator)