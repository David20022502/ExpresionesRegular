import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, } from 'react-native-elements';
import {ValidateNumber,ValidateEmail} from './Validations'
export default function App() {
  const [ValueEmail, setValueEmail] = React.useState();
  const [ValueNum, setValueNum] = React.useState();
  const [Response, setResponse] = React.useState();
  React.useEffect(()=>{
    console.log(Response);
  },[Response])
  const Validator=()=>{
    let data = ValidateEmail(ValueEmail);
    setResponse(data);
  }
  const Validator1=()=>{
    let data = ValidateNumber(ValueNum);
    setResponse(data);
  }
  return (
    <View style={styles.container}>
      <Text>Correo electrónico</Text>
      <TextInput style={{ width: 300, height: 50, borderWidth: 1 }} placeholder="Correo electrónico" value={ValueEmail} onChangeText={setValueEmail}>

      </TextInput>
      <Button title='Validar email' onPress={() => Validator()}> </Button>
      <Text>Numero</Text>
      <TextInput maxLength={10} style={{ width: 300, height: 50, borderWidth: 1 }} keyboardType="number-pad" placeholder="numero" value={ValueNum} onChangeText={setValueNum}>


      </TextInput>
      <Button title='Validar numer' onPress={() => Validator1()}> </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
