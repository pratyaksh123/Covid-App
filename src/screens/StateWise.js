import React, { useEffect, useState, Component } from "react";
import {
  Text,
  TouchableOpacity,
  Share,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { IndiaAPI } from "../../api/data";
import normalize from "react-native-normalize";
import Detail from "../components/StateDetail";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import { Analytics, PageHit } from "expo-analytics";
import { key } from "../../keys";
import { FlatList } from "react-native-gesture-handler";

const onShare = async () => {
  const response = await IndiaAPI.get();
  try {
    const analytics = new Analytics(key());
    analytics
      .hit(new PageHit("Share_State"))
      .then(() => console.log("Success"))
      .catch((e) => console.log(e.message));

    const result = await Share.share({
      message: `Corona Virus Updates For India (Top 3 States)-${"\n"}${
        response.data.state_wise.Maharashtra.state
      }${"\n"}${"\n"}Confirmed Cases -${
        response.data.state_wise.Maharashtra.confirmed
      }${"\n"}Recovered - ${
        response.data.state_wise.Maharashtra.recovered
      }${"\n"}Active Cases - ${
        response.data.state_wise.Maharashtra.active
      }${"\n"}Deaths - ${
        response.data.state_wise.Maharashtra.deaths
      }${"\n"}${"\n"}${
        response.data.state_wise["Tamil Nadu"].state
      }${"\n"}${"\n"}Confirmed Cases -${
        response.data.state_wise["Tamil Nadu"].confirmed
      }${"\n"}Recovered - ${
        response.data.state_wise["Tamil Nadu"].recovered
      }${"\n"}Active Cases - ${
        response.data.state_wise["Tamil Nadu"].active
      }${"\n"}Deaths - ${
        response.data.state_wise["Tamil Nadu"].deaths
      }${"\n"}${"\n"}${
        response.data.state_wise.Delhi.state
      }${"\n"}${"\n"}Confirmed Cases -${
        response.data.state_wise.Delhi.confirmed
      }${"\n"}Recovered - ${
        response.data.state_wise.Delhi.recovered
      }${"\n"}Active Cases - ${
        response.data.state_wise.Delhi.active
      }${"\n"}Deaths - ${
        response.data.state_wise.Delhi.deaths
      }${"\n"}${"\n"} For all states , Download this App to get the latest Corona Virus Data Updates at your Fingertips .${"\n"} #StayHome ${"\n"} ${"\n"}Download Here :  https://drive.google.com/uc?id=1vyNB-fDHzA6UgRS-u0WmxXNzVp_o3YYk&export=download `,
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

export const ShareState = withNavigation(ShareIcon);

const State = () => {
  const [results, setResult] = useState([]);
  const API = async () => {
    const response = await IndiaAPI.get();
    setResult(Object.values(response.data.state_wise));
  };
  useEffect(() => {
    const analytics = new Analytics(key());
    analytics
      .hit(new PageHit("State_Wise"))
      .then(() => console.log("Success"))
      .catch((e) => console.log(e.message));

    API();
  }, []);

  return (
    <View style={styles.parent}>
      <Text style={styles.text}>State Wise Data</Text>

      <TouchableOpacity
        onPress={() => {
          API();
        }}
        style={styles.index}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Refresh</Text>
        </View>
      </TouchableOpacity>

      <FlatList
        data={results}
        ListEmptyComponent={() => {
          return <ActivityIndicator />;
        }}
        renderItem={({ item }) => {
          return (
            <Detail
              name={item.state}
              confirmed={item.confirmed}
              active={item.active}
              deaths={item.deaths}
              recovered={item.recovered}
              deltaConfirmed={item.deltaconfirmed}
              deltaDeaths={item.deltadeaths}
              deltaRecovered={item.deltarecovered}
            />
          );
        }}
        keyExtractor={(item) => `${item.confirmed * Math.random() * 5676}`}
      />

      <Text style={styles.text2}>Help us Fight COVID-19 just by</Text>
      <Text style={styles.text1}>#StayingHome :)</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "#003da1",
  },
  text: {
    fontFamily: "Bebas Neue",
    fontSize: normalize(60),
    color: "white",
    textAlign: "center",
  },
  text1: {
    fontFamily: "Agency FB",
    fontSize: normalize(55),
    color: "white",
    textAlign: "center",
  },
  text2: {
    fontFamily: "Agency FB",
    fontSize: normalize(35),
    color: "white",
    textAlign: "center",
  },
  button: {
    alignSelf: "center",
    borderRadius: normalize(10),
    marginBottom: normalize(8),
    width: normalize(340),
    alignItems: "center",
    backgroundColor: "#159588",
    marginHorizontal: normalize(20),
    marginTop: normalize(10),
  },

  buttonText: {
    textAlign: "center",
    padding: normalize(20),
    color: "white",
    fontSize: normalize(15),
  },
  index: {
    color: "white",
    fontFamily: "Bebas Neue",
    fontSize: normalize(60),
    textAlign: "center",
  },
});

export default State;
