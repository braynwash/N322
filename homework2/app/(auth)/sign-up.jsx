import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { useSignUp } from "@clerk/clerk-expo";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Signup() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setPendingVerification(true);
    } catch (error) {
      console.log("Sign up error", JSON.stringify(error));
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace("/(tabs)");
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={styles.content}>
      <View style={styles.container}>
      {!pendingVerification && (
        <>
        <Text style={styles.header}>Create an Account</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={emailAddress}
            keyboardType="email-address"
            placeholder="Email..."
            onChangeText={(email) => setEmailAddress(email)}
          />
          <TextInput
          style={styles.input}
            value={password}
            placeholder="Password..."
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <View style={styles.btnWrap}>
            <Button style={styles.btn} mode="outlined" onPress={onSignUpPress}>
            <Text style={styles.bluetxt}>Sign Up</Text>
          </Button>
          </View>
          
        </>
      )}
      {pendingVerification && (
        <>
          <TextInput
            value={code}
            placeholder="Code..."
            keyboardType="numeric"
            onChangeText={(code) => setCode(code)}
          />
          <View style={styles.btnWrap}>
            <Button style={styles.btn} mode="outlined" onPress={onPressVerify}>
            <Text style={styles.bluetxt}>Verify Email</Text>
          </Button>
          </View>
          
        </>
      )}
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
    backgroundColor: Colors.BLUE,
    padding: 10,
    borderRadius: 50,
    marginTop: 25,
    marginBottom: 20,
   },
  bluetxt: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18
   }
 });