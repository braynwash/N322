import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts ({
    'mont-reg':require('./../assets/fonts/Montserrat-Regular.ttf'),
    'mont-bold':require('./../assets/fonts/Montserrat-Bold.ttf'),
    'mont-med':require('./../assets/fonts/Montserrat-Medium.ttf')
  })
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  );
}
