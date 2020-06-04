import React, { useState, useEffect, Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Share,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Vibration,
  Platform,
} from "react-native";
import Corona from "../../api/data";
import { world } from "../../api/data";
import normalize from "react-native-normalize";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import { Analytics, PageHit } from "expo-analytics";
import { key } from "../../keys";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import firebase from "firebase";
import "firebase/firestore";
import { AsyncStorage } from "react-native";

const onShare = async () => {
  const response = await Corona.get();
  try {
    const analytics = new Analytics(key());
    analytics
      .hit(new PageHit("Home_Share"))
      .then(() => console.log("HomePage"))
      .catch((e) => console.log(e.message));

    const result = await Share.share({
      message: `Corona Virus Updates - ${"\n"}${"\n"}Confirmed Cases -${
        response.data[0].confirmed
      }${"\n"}Recovered - ${
        response.data[0].recovered
      }${"\n"}Critical Cases - ${response.data[0].critical}${"\n"}Deaths - ${
        response.data[0].deaths
      }${"\n"}${"\n"}Download this App to get the latest Corona Virus Data Updates at your Fingertips .${"\n"} #StayHome ${"\n"} ${"\n"}Download Here :  https://drive.google.com/uc?id=1vyNB-fDHzA6UgRS-u0WmxXNzVp_o3YYk&export=download`,
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

class ShareIcon extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          width: 44,
          height: 44,
          marginLeft: 20,
          marginTop: normalize(30),
        }}
        onPress={() => {
          onShare();
        }}
      >
        <Icon name="share-alt" size={20} color="white" />
      </TouchableOpacity>
    );
  }
}

export const Shareicon = withNavigation(ShareIcon);

const addTokenToFirestore = async (PushToken) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token === null) {
      // Add token to firestore and then to async storage.
      const dbh = firebase.firestore();
      await dbh.collection("Tokens").add({
        token: PushToken,
      });
      await AsyncStorage.setItem("token", PushToken);
      console.log("Token Added to Firestore and Async Storage!");
    } else if (token === PushToken) {
      // Token already up to date
      console.log("Token Already Up to date !");
    } else if (token !== PushToken) {
      // add this new token to firestore and then to async storage
      const dbh = firebase.firestore();
      await dbh.collection("Tokens").add({
        token: PushToken,
      });
      await AsyncStorage.setItem("token", PushToken);
      console.log("Token Updated");
    } else {
      console.log("Something got fucked !");
    }
    // const dbh = firebase.firestore();
    // dbh.collection("Tokens").add({
    //   token: token,
    // });
  } catch (error) {
    console.error(error);
  }
};

export const Index = ({ navigation }) => {
  const [total, setTotal] = useState([]);
  const [delta, setDelta] = useState([]);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState({});
  const api = async () => {
    const response = await Corona.get();
    const delta = await world.get();
    setTotal(response.data);
    setDelta(delta.data.world_total);
  };

  const registerForPushNotificationsAsync = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
      addTokenToFirestore(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.createChannelAndroidAsync("default", {
        name: "default",
        sound: true,
        priority: "max",
        vibrate: [0, 250, 250, 250],
      });
    }
  };

  const handleNotification = (notification) => {
    Vibration.vibrate();
    setNotification(notification);
  };

  useEffect(() => {
    const analytics = new Analytics(key());
    analytics
      .hit(new PageHit("Home"))
      .then(() => console.log("HomePage"))
      .catch((e) => console.log(e.message));
    registerForPushNotificationsAsync();
    Notifications.addListener(handleNotification);
    api();
  }, []);

  const ConvertToIndianSystem = (string) => {
    var x = string;
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
  };
  return (
    <View style={style.parent}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ alignItems: "center", paddingBottom: normalize(240) }}>
          <Text style={style.index}>Corona Virus</Text>
          <Text style={style.index1}>World at a Glance</Text>
          {total.length === 0 ? (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginVertical: normalize(200),
              }}
            >
              <ActivityIndicator size="large" color="white" />
            </View>
          ) : (
            <View style={style.ButtonData}>
              <Text
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: normalize(23),
                  color: "#FF4600",
                }}
              >
                Confirmed - {ConvertToIndianSystem(total[0].confirmed)} (+
                {delta.new_cases})
              </Text>
            </View>
          )}

          {total.length === 0 ? null : (
            <View style={style.ButtonData}>
              <Text
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: normalize(23),
                  color: "#1B41D9",
                }}
              >
                Critical - {ConvertToIndianSystem(total[0].critical)}
              </Text>
            </View>
          )}

          {total.length === 0 ? null : (
            <View style={style.ButtonData}>
              <Text
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: normalize(23),
                  color: "#49A828",
                }}
              >
                Recovered - {ConvertToIndianSystem(total[0].recovered)}{" "}
              </Text>
            </View>
          )}

          {total.length === 0 ? null : (
            <View style={style.ButtonData}>
              <Text
                style={{
                  fontFamily: "Bebas Neue",
                  fontSize: normalize(23),
                  color: "#5A5350",
                }}
              >
                Deaths - {ConvertToIndianSystem(total[0].deaths)} (+
                {delta.new_deaths})
              </Text>
            </View>
          )}

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                api()
                  .then((response) => {
                    const data = [response.data];
                    setTotal(data);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
              style={style.index}
            >
              <View style={style.button}>
                <Text style={style.buttonText}>Refresh</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              navigation={navigation}
              onPress={() => {
                navigation.navigate("Home");
              }}
              style={style.index}
            >
              <View style={style.button}>
                <Text style={style.buttonText}>Check For India</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginTop: normalize(-20) }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Safety");
              }}
              style={style.index}
            >
              <View
                style={{
                  alignSelf: "center",
                  borderRadius: normalize(10),
                  marginBottom: normalize(30),
                  width: normalize(150),
                  alignItems: "center",
                  backgroundColor: "#157ffb",
                  marginHorizontal: normalize(20),
                  marginTop: normalize(15),
                }}
              >
                <Text style={style.buttonText}>Safety Tips</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("World");
              }}
              style={style.index}
            >
              <View
                style={{
                  alignSelf: "center",
                  borderRadius: normalize(10),
                  marginBottom: normalize(30),
                  width: normalize(150),
                  alignItems: "center",
                  backgroundColor: "#157ffb",
                  marginHorizontal: normalize(20),
                  marginTop: normalize(15),
                }}
              >
                <Text style={style.buttonText}>All Countries</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  index: {
    color: "white",
    fontFamily: "Bebas Neue",
    fontSize: normalize(70),
    textAlign: "center",
  },
  index1: {
    color: "white",
    fontFamily: "Agency FB",
    fontSize: normalize(25),
    textAlign: "center",
  },
  button: {
    alignSelf: "center",
    borderRadius: normalize(10),
    marginBottom: normalize(30),
    width: normalize(150),
    alignItems: "center",
    backgroundColor: "#159588",
    marginHorizontal: normalize(20),
    marginTop: normalize(15),
  },
  buttonText: {
    textAlign: "center",
    padding: normalize(20),
    color: "white",
    fontSize: normalize(15),
  },
  data: {
    textAlign: "center",
    fontSize: normalize(40),
  },
  parent: {
    alignItems: "center",
    backgroundColor: "#003da1",
    flex: 1,
  },
  ButtonData: {
    height: "12%",
    borderRadius: normalize(30),
    backgroundColor: "white",
    marginVertical: normalize(13),
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
  },
});
