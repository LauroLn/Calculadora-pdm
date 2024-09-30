import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState(''); // Estado para armazenar o valor atual
  const [resultado, setResultado] = useState(''); // Estado para o resultado

  const adicionarValor = (valor) => {
    // Adiciona o valor ao input
    setInput(input + valor);
  };

  const limpar = () => {
    // Limpa o input e o resultado
    setInput('');
    setResultado('');
  };

  const calcular = () => {
    // Realiza o cálculo com eval
    try {
      setResultado(eval(input)); // Calcula a expressão
    } catch (erro) {
      setResultado('Erro');
    }
  };

  return (
    <View style={styles.container}>
      {/* Display */}
      <Text style={styles.display}>{input}</Text>
      <Text style={styles.result}>{resultado}</Text>

      {/* Botões */}
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => adicionarValor('1')} style={styles.button}><Text>1</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarValor('2')} style={styles.button}><Text>2</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarValor('3')} style={styles.button}><Text>3</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarValor('+')} style={styles.button}><Text>+</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => adicionarValor('4')} style={styles.button}><Text>4</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarValor('5')} style={styles.button}><Text>5</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarValor('6')} style={styles.button}><Text>6</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarValor('-')} style={styles.button}><Text>-</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => adicionarValor('7')} style={styles.button}><Text>7</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarValor('8')} style={styles.button}><Text>8</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarValor('9')} style={styles.button}><Text>9</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarValor('*')} style={styles.button}><Text>*</Text></TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={limpar} style={styles.button}><Text>C</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarValor('0')} style={styles.button}><Text>0</Text></TouchableOpacity>
          <TouchableOpacity onPress={calcular} style={styles.button}><Text>=</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => adicionarValor('/')} style={styles.button}><Text>/</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  display: {
    fontSize: 30,
    backgroundColor: '#f1f1f1',
    padding: 10,
    width: '80%',
    textAlign: 'right',
    marginBottom: 10,
  },
  result: {
    fontSize: 24,
    backgroundColor: '#fff',
    padding: 10,
    width: '80%',
    textAlign: 'right',
    marginBottom: 20,
  },
  buttons: {
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ededed',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
  },
});
