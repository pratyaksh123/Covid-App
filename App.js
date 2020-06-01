import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { HomeScreen } from "./src/screens/Index";
import Home from "./src/screens/India";
import State from "./src/screens/StateWise";
import WorldData from "./src/screens/CountryList";
import Safety from "./src/screens/SafetyTips";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Developer } from "./src/screens/Developer";
import HamburgerIcon from "./src/screens/Developer";
import { Shareicon } from "./src/screens/HomeScreen";
import { ShareIndia } from "./src/screens/India";
import { ShareState } from "./src/screens/StateWise";
import { ShareCountry } from "./src/screens/CountryList";

const Navigator = createStackNavigator(
  {
    Index: {
      screen: HomeScreen,
      navigationOptions: {
        headerLeft: () => <HamburgerIcon />,
        headerTitle: "#StayHome",
        headerRight: () => <Shareicon />,
      },
    },
    World: {
      screen: WorldData,
      navigationOptions: {
        headerRight: () => <ShareCountry />,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerRight: () => <ShareIndia />,
      },
    },
    Safety: {
      screen: Safety,
      navigationOptions: {
        headerRight: () => <Shareicon />,
      },
    },
    StateList: {
      screen: State,
      navigationOptions: {
        headerRight: () => <ShareState />,
      },
    },
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      headerTitle: null,
      headerTitleAlign: "center",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#003da1",
      },
    },
  }
);

const Drawer = createDrawerNavigator(
  {
    Home: Navigator,
    Developer: createStackNavigator(
      { Developer },
      {
        defaultNavigationOptions: {
          headerLeft: () => <HamburgerIcon />,
          headerRight: () => <Shareicon />,
          headerTitle: "Developer's Info",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#003da1",
          },
        },
      }
    ),
  },
  {
    drawerType: "slide",
  }
);

export default createAppContainer(Drawer);
