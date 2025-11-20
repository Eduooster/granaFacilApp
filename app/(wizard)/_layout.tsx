import { router, Stack, usePathname } from "expo-router";
import React from "react";
import { View,StyleSheet, Button, TouchableOpacity } from "react-native";
import { Image } from "react-native";

export default function WizardLayout() {
  const pathname = usePathname();

   let stepAtual = 1;
  if (pathname.includes("step2")) stepAtual = 2;
  if (pathname.includes("step3")) stepAtual = 3;
  return  (
    <View style={{ flex: 1 ,backgroundColor:"#030303ff"}}>
            <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => router.back()}
      >
        <Image
          source={require("@/assets/images/seta-esquerda.png")}
          style={{ width: 20, height: 20, tintColor: "white" }}
        />
      </TouchableOpacity>
      
      <View style={styles.progressoContainer}>
        {[1, 2, 3].map((i) => (
          <View
            key={i}
            style={[
              styles.ponto,
              stepAtual >= i ? styles.pontoAtivo : styles.pontoInativo,
            ]}
          />
        ))}
      </View>

      
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="step1" />
        <Stack.Screen name="step2" />
        <Stack.Screen name="step3" />
      </Stack>
    </View>
  );
}
const styles = StyleSheet.create({
  botaoVoltar: {
  position: "absolute",
  top: 40,
  left: 20,
  padding: 10,
},

  progressoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop:100,
    gap: 10,
    
  },
  ponto: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    marginBottom:50
  },
  pontoAtivo: {
    backgroundColor: "#320C5E",
  },
  pontoInativo: {
    backgroundColor: "#ccc",
  },
});