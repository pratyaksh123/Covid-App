import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Index from "./src/screens/Index"

const Navigator=createStackNavigator({
  Index:Index,
},{
  initialRouteName:'Index',
  defaultNavigationOptions:{
    title:'Vamos Corona',
    headerTitleAlign:'center',
    headerStyle:{
      backgroundColor:'#003da1',
    }
  }
})

export default createAppContainer(Navigator)