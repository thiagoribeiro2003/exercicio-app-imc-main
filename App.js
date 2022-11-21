import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { useState } from "react";
const App = () => {
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const nomeDigitado = (nomeDigitado) => {
    setNome(nomeDigitado);
    console.log(nomeDigitado);
  };

  const pesoDigitado = (pesoDigitado) => {
    setPeso(pesoDigitado);
    console.log(pesoDigitado);
  };

  const alturaDigitado = (alturaDigitado) => {
    setAltura(alturaDigitado);
    console.log(alturaDigitado);
  };

  return (
    <>
      <SafeAreaView style={estilos.safeContainer}>
        <StatusBar barStyle="default" />

        <View style={estilos.containerTitulo}>
          <Text style={estilos.titulo}> App IMC </Text>
        </View>

        <View style={estilos.formulario}>
          {/**/}
          <View>
            <TextInput
              style={estilos.campoNome}
              placeholder="Informe seu  nome"
              onChangeText={nomeDigitado}
              value={nome}
            />
          </View>

          <View style={estilos.pesoAltura}>
            <TextInput
              style={estilos.campoPeso}
              placeholder="Peso (ex: 80)"
              onChangeText={pesoDigitado}
              value={peso}
            />

            <TextInput
              style={estilos.campoAltura}
              placeholder="Altura (ex: 1.75)"
              onChangeText={alturaDigitado}
              value={altura}
            />
          </View>

          <View>
            <Pressable style={estilos.botao}>
              <Text style={estilos.textoBotao}>Calcular IMC</Text>
            </Pressable>
          </View>
          {/**/}
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

const estilos = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  containerTitulo: {
    backgroundColor: "#000",
    justifyContent: "center",
    height: 130,
  },
  titulo: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "white",
  },
  campoNome: {
    fontSize: 16,
    height: 64,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  campoPeso: {
    backgroundColor: "white",
    fontSize: 16,
    height: 64,
    width: "40%",
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  campoAltura: {
    backgroundColor: "white",
    fontSize: 16,
    height: 64,
    width: "40%",
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  pesoAltura: {
    flexDirection: "row",
  },
  botao: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    height: 64,
  },
  textoBotao: {
    fontSize: 18,
    color: "white",
  },
});
