import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, Button } from "react-native-paper";
import { useSignIn } from "@clerk/clerk-expo";
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
    <View style={styles.container}>
      <TextInput
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
        value={password}
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button mode="outlined" onPress={onSignInPress}>
        Sign In
      </Button>
      <View>
        <Text>Don't have an account?</Text>
        <Button mode="outlined" onPress={() => router.push("/(auth)/sign-up")}>
          <Text>Sign Up</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: "#000",
 }
});