import { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Conta } from './Conta';

const conta = new Conta(7320.92);

export default function App() {
  const [saldo, setSaldo] = useState(conta.saldo);
  const [valor, setValor] = useState('');

  const sacar = () => {
    if (valor !== '') {
      setSaldo(conta.sacar(Number(valor)));
      setValor('');
    }
  };

  const depositar = () => {
    setSaldo(conta.depositar(Number(valor)));
    setValor('');
  };

  const foto = {
    uri: 'https://logospng.org/download/santander/logo-santander-2048.png',
  };

  return (
    <View style={estilo.container}>
      <Image style={estilo.imagem} source={foto} />

      <Text style={estilo.saldo}>SALDO ATUAL NA CONTA</Text>

      <Text style={estilo.valorSaldo}>
        {saldo.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Text>

      <Text style={estilo.descricao}>
        Digite o valor abaixo e escolha uma das operações bancárias:
      </Text>

      <TextInput
        style={estilo.input}
        keyboardType="numeric"
        placeholder="0,00"
        onChangeText={(text) => setValor(text)}
        value={valor}
      />

      <TouchableOpacity style={estilo.botao} onPress={sacar}>
        <Text style={estilo.textButton}>SACAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilo.botao} onPress={depositar}>
        <Text style={estilo.textButton}>DEPOSITAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  imagem: {
    width: 300,
    height: 60,
    marginBottom: 20,
    marginTop: 60,
  },

  saldo: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  valorSaldo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },

  descricao: {
    color: 'black',
    width: 250,
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    width: 250,
    height: 40,
    color: 'black',
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: '#dcdcdc',
    borderBottomColor: 'black',
    padding: 10,
    marginBottom: 30,
  },

  botao: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    width: 250,
    marginBottom: 10,
  },

  textButton: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 500,
  },
});
