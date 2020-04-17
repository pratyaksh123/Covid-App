import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Analytics, PageHit } from "expo-analytics";
import { key } from "../../keys";

const Safety = () => {
  const analytics = new Analytics(key());
  analytics
    .hit(new PageHit("Safety_Tips"))
    .then(() => console.log("Success"))
    .catch((e) => console.log(e.message));

  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/img/wash.png")}
        resizeMode="stretch"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
});

export default Safety;
