import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import { useSignIn } from "@clerk/clerk-expo";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Signin() {

  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();
  const [emailAddress, setEmailAddress] = React.useState();
  const [password, setPassword] = React.useState();

  const onSignInPress = React.useCallback(async () => {
    if(!isLoaded) {
      return;
    }
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password: password,
      });

      if(signInAttempt.status === "complete") {
        await setActive({
          session: signInAttempt.createdSessionId,
        });
        router.push("/(tabs)");
      } else {
        console.log("Email Address: ", emailAddress);
      }

    } catch(err) {
      console.error("Sign in error", err + ' ', JSON.stringify(err,null,2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <View style={styles.content}>
<View style={styles.container}>
  <Text style={styles.header}>Sign In</Text>
      <TextInput
      style={styles.input}
        autoCapitalize="none"
        value={emailAddress}
        keyboardType="email-address"
        placeholder="Email..."
        onChangeText={(email) => {
          console.log("Email entered: ", email);
          setEmailAddress(email);
        }}
      />
      <TextInput
      style={styles.input}
        value={password}
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <View style={styles.btnWrap}>
        <Button style={styles.btn} mode="outlined" onPress={onSignInPress}>
        <Text style={styles.bluetxt}>Sign In</Text>
      </Button>
      </View>
      
      <View>
        <Text style={styles.header}>Don't have an account?</Text>
        <View style={styles.btnWrap}>
          <Button style={styles.btn} mode="outlined" onPress={() => router.push("/(auth)/sign-up")}>
          <Text style={styles.bluetxt}>Sign Up</Text>
        </Button>
        </View>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
 content: {
 backgroundColor: "#000",
  height: "100%",
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center"
 },
  container: {
 width: "55%",
  color: "#FFF",
  
 },
 input: {
marginTop: 30,
 },
 header: {
  color: "#FFF",
  textAlign: "center",
  fontSize: 30
 },
 btn: {
  borderColor: Colors.BLUE,
  borderWidth: 3,
  padding: 5,
  width: "50%",
  borderRadius: 50,
  marginTop: 25,
  marginBottom: 20,
 },
bluetxt: {
  color: Colors.BLUE,
  textAlign: "center",
  fontSize: 18
 },
 btnWrap: {
  display: "flex",
  flex: 1,
  alignItems: "center",
 }
});