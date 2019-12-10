import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import {
  Container,
  Content,
  Header,
  Form,
  Item,
  Button,
  Label,
  Input,
  Col
} from "native-base";

import Colors from "../constants/colors";

const StartScreen = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../img/facebook_profile_image.png")}
      />
      <View style={styles.underLogoContainer}>
        <Image
          style={styles.underLogo}
          source={require("../img/browsing.png")}
        />
        <Image style={styles.underLogo} source={require("../img/photo.png")} />
        <Image style={styles.underLogo} source={require("../img/heart.png")} />
      </View>
      <View style={styles.underTextLogo}>
        <Text style={styles.textUnderLogo}>
          browse + add + rate = imagerate
        </Text>
      </View>
      <Container style={styles.inputsContainer}>
        <Form style={styles.formContainer}>
          <Item style={styles.items}>
            <Input
              style={styles.inputs}
              placeholder="email..."
              placeholderTextColor="white"
              autoCorrect={false}
              autoCapitalize="none"
            />
          </Item>
          <Item style={styles.items}>
            <Input
              style={styles.inputs}
              placeholder="password..."
              placeholderTextColor="white"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
            />
          </Item>
          <Button style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Button>
        </Form>
      </Container>
      <View>
        <Text>New here ?</Text>
        <Button>Sign Up for free !</Button>
        <Image />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8E2735",
    height: "100%",
    width: "100%",
    padding: 20,
    alignItems: "center"
  },
  underLogoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    top: -150
  },
  underLogo: {
    width: 35,
    height: 35
  },
  logo: {
    width: "100%",
    height: 360,
    top: -80
  },
  underTextLogo: {
    alignItems: "center",
    width: "100%",
    top: -120
  },
  textUnderLogo: {
    color: "#FAF189",
    fontSize: 20
  },
  inputsContainer: {
    display: "flex",
    width: 300,
    height: 200,
    backgroundColor: Colors.mainColor,
    top: -120,
    justifyContent: "center",
    alignItems: "center"
  },
  formContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center"
  },
  items: {
    margin: 10
  },
  inputs: {
    backgroundColor: Colors.secondColor,
    width: 200,
    height: 40,
    left: -2,
    color: Colors.mainColor
  },
  button: {
    backgroundColor: Colors.mainColor,
    borderColor: Colors.secondColor,
    borderWidth: 2,
    width: 100,
    height: 40,
    justifyContent: "center",
    marginTop: 10
  },
  buttonText: {
    color: Colors.secondColor,
    fontSize: 18
  }
});

export default StartScreen;
