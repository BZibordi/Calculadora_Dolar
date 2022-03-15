import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {

  const [valor, setValor] = useState('');

  function Converter()
    {
    const cotacao = 5.13
    const conversao = parseFloat(valor) * cotacao


      alert(`O valor é de: ${conversao} dólares`);
    }


  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Conversor de Dólares</Text>

      <Image style={styles.imagem, {width: 200, height: 200, borderRadius: 10, marginTop: 40}}
        source={{uri: 'https://conteudo.imguol.com.br/c/noticias/e9/2021/02/25/real-registrou-forte-desvalorizacao-frente-do-dolar-no-ano-passado-1614248929569_v2_900x506.jpg.webp'}}
      />

      <TextInput
        style={styles.caixa}
        onChangeText={setValor} 
        placeholder='Valor em reais'
        keyboardType='numeric'
      />

      <TouchableOpacity 
        style={styles.botao}
        onPress={Converter}
      >
          <Text style={styles.textobotao}> Calcular </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5c6d1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 200,
    borderRightColor: '#D1E7C2',
    borderLeftWidth: 200,
    borderLeftColor: '#D1E7C2',
    
  },
  texto: {
    fontSize: 45,
    color:'#000',
  },
  caixa: {
    backgroundColor: '#D1E7C2',
    marginTop: 40,
    padding: 20,
    fontSize: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: "000"
  },
  botao: {
    marginTop: 40,
    width: 250,
    height: 65,
    backgroundColor: '#D1E7C2',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: "000"
  },
  textobotao: {
    fontSize: 25,
  },


});
