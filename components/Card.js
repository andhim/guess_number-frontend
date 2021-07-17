import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    //   shadow only works on ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 8, //need this for Android to render shadow
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default Card;
