import { useAuth } from "@clerk/clerk-expo";
import { Stack, Redirect } from "expo-router";

export default function authroutesLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(tabs)"}/>
  }

  return <Stack screenOptions={{headerShown: false}}/>
}