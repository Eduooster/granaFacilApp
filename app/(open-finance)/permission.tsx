
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { wizardData } from "@/src/data/wizzardData";
import { useRouter } from "expo-router";
import { router } from "expo-router";
import { Image } from "react-native";


export default function Permission() {
 

    function handleHome(){
        router.replace("/(tabs)");
    }

   

  return (
    <View style={styles.container}>
        <Text style={{color:"white",fontSize:26,marginTop:50}}>Organize seu dinheiro em segundos</Text>
         <Text style={{color:"white",fontSize:20,padding:10,textAlign:"center",marginTop:20}}>Automatize seus gastos conectando seu banco</Text>
         <Image
                   source={require("@/assets/images/image-removebg-preview (1).png")}
                   style={{ width: 300, height: 300 }}
            />
        
        <View style={{flexDirection:"row",alignItems:"center", marginTop:40}}>
            <Image
                   source={require("@/assets/images/checked.png")}
                   style={{ width: 30, height: 30 }}
            />
            <Text style={{color:"white",fontSize:14,textAlign:"center"}}>Conexão segura via Open finance</Text>
         
        </View>

          <View style={{flexDirection:"row",alignItems:"center", marginTop:20}}>
            <Image
                   source={require("@/assets/images/checked.png")}
                   style={{ width: 30, height: 30 }}
            />
            <Text style={{color:"white",fontSize:14,textAlign:"center"}}>Registro automático de receitas e despesas</Text>
         </View>

         <TouchableOpacity style={styles.button}>
            <Text style={{color:"white" , padding:5}}>Conectar sua conta bancária</Text>

        </TouchableOpacity>

         <TouchableOpacity style={{}}>
                       <Text style={{color:"white",fontSize:14,textAlign:"center",marginTop:10}} onPress={handleHome}>Conectar depois</Text>
    </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    padding: 20,
    backgroundColor:"#030303ff",
    flex:1
    
  },
  button: {
    padding:5,
    borderRadius: 8,
    backgroundColor:"#520c64ff",width:250,marginTop:35,alignSelf:"center"
  }
});



