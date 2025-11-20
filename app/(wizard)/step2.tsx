import { wizardData } from "@/src/data/wizzardData";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Button,StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native";

export default function Step2() {
  const step = wizardData[1]; 
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const router = useRouter();

  return (
    <View style={styles.container}>
           
          <Text style={styles.title}>{step.pergunta}</Text>
    
          {step.opcoes.map((opcao) => (
            <TouchableOpacity
              key={opcao}
              style={[
                styles.card,
                selecionado === opcao && styles.cardSelecionado
              ]}
             onPress={() => {
                setSelecionado(opcao);
                router.push("/(wizard)/step3");
              }}
              
              
            > 
              <View style={styles.containerCard}>
                 <Text style={styles.cardText} >{opcao}</Text>
              <Image
                source={require("@/assets/images/image.png")}
                style={{ width: 10, height: 10 ,tintColor:"white"}}
              />
    
              </View>
             
              
            </TouchableOpacity>
          ))}
    
          
    
        
        </View>
  );
}

const styles = StyleSheet.create({
  botao:{backgroundColor:"white"},
  containerCard:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:300},
  button:{backgroundColor:"white",borderRadius:10,textAlign:"center",paddingVertical: 12,
  paddingHorizontal: 20,width:150,alignItems:"center",alignSelf:"center"},

  container: {
    padding: 20,
    backgroundColor:"#030303ff",
    flex:1
    
  },
  title: {
    fontSize: 20,
    marginBottom: 40,
    fontWeight: "bold",color:"white"
  },
  card: {
    padding: 15,
    backgroundColor: "#8007c72a",
    borderRadius: 10,
    marginBottom: 20,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  cardSelecionado: {
    backgroundColor: "#320C5E",
  },
  cardText: {
    color: "white"
  },
  ponto: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
  }
});


