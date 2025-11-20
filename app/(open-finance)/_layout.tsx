import { Stack } from "expo-router"
import { View } from "react-native"

export default function openFinanceLayout() {
  
  return  (

    <View style={{backgroundColor:"#030303ff",flex:1}}>
        <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="permission" />
        <Stack.Screen name="select-bank" />
      </Stack>

    </View>
        
    
  );
}