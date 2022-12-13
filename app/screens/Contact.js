import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Header } from "./Header";

const Contact = () => {
  return (
    <>

<Header /> 
 <View style={styles.center}>
      <Text>This is the contact screen</Text>
    </View>
    </>
 
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Contact;