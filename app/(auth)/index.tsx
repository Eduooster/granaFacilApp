import { router } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCadastro, setShowCadastro] = useState(false);

  useEffect(() => {
    setShowLogin(true); // login abre automaticamente
  }, []);

  function handleOpenLogin() {
    setShowCadastro(false);
    setShowLogin(true);
  }

   function handleOpenCadastro() {
    setShowCadastro(true);
    setShowLogin(false);
  }

  function handleCadastro() {

  router.push("/(wizard)/step1");
}


function handleLogin() {

  router.replace("/(tabs)");
}

  return (
    <>
      
      <SafeAreaView style={styles.textContainer}>
        <Text style={styles.title}> GranaFácil</Text>
        <Text style={styles.subtitle}>Comece gerenciando seu dinheiro</Text>
      </SafeAreaView>

      
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, showLogin ? styles.activeButton : styles.inactiveButton]}
            onPress={handleOpenLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, showCadastro ? styles.activeButton : styles.inactiveButton]}
            onPress={handleOpenCadastro}
          >
            <Text style={styles.buttonText}>Cadastro</Text>
          </TouchableOpacity>
        </View>

        {showLogin && (
          <View style={styles.form}>
            
            <Text style={styles.loginText}>Bem-Vindo de volta</Text>
            <Text style={styles.loginText2}>Faça login para continuar</Text>
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
            <TouchableOpacity style={[styles.button, styles.activeButton]}>
              <Text style={styles.buttonText} onPress={handleLogin}>Entrar</Text>
            </TouchableOpacity>
          </View>
        )}

        {showCadastro && (
          <View style={styles.form}>
            <Text style={styles.formTitle}>Cadastro</Text>
            <TextInput placeholder="Nome" style={styles.input} />
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
            <View style={styles.containerInfos}>
              <Text style={styles.titleInfos}>Cadastre-se e descubra</Text>
              <Text style={styles.subtiltlesInfos}>Onde seu dinheiro vai</Text>
              <Text style={styles.subtiltlesInfos}>Como reduzir gastos automaticos</Text>
              <Text style={styles.subtiltlesInfos}>Quando voçe atingirá suas metas</Text>

            </View>
            <TouchableOpacity style={[styles.button, styles.activeButton]}>
              <Text style={styles.buttonText} onPress={handleCadastro}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  titleInfos:{marginBottom:10},
  subtiltlesInfos:{marginLeft:5,marginBottom:4},
  containerInfos:{backgroundColor:"#320c5e86",borderRadius:20,paddingHorizontal:27,paddingVertical:10,marginBottom:20},
  loginText:{fontSize:20,marginBottom:10},
  loginText2:{marginBottom:20,color:"#706f6fff"},
  container: {
    flex: 1,
    paddingHorizontal: 27,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20,
    color: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    gap:4
  },
  textContainer: {
    width: "100%",
    backgroundColor: "#480E5B",
    paddingVertical: 27,
    alignItems: "center",
  },
  form: {
    marginTop: 10,
    padding: 15,
    borderRadius: 10
  },
  formTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 7,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  activeButton: {
    backgroundColor: "#020202ff",
  },
  inactiveButton: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
