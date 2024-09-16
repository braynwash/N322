import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts ({
    "gillSans":require("./../assets/fonts/Gill Sans.otf"),
    "gillBold":require("./../assets/fonts/Gill Sans Bold.otf"),
  })
  return (
    <Stack screenOptions={{title: "Cool Cats, Guaranteed!"}}>
      <Stack.Screen name="index"/>
    </Stack>
  );
}
