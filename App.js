import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, } from 'react-native-elements';

export default function App() {
  const [ValueEmail, setValueEmail] = React.useState();
  const [ValueNum, setValueNum] = React.useState();

  const ValidateNum = () => {
    let ExpresionValidateNum = /^(\d){10}$/gim
    let ExpresionValidateNumRepit = /(\d)\1{7}/gim
    let ResultValidate = ExpresionValidateNum.test(ValueNum);
    if (ResultValidate) {
      let ResultValidateRepit = ExpresionValidateNumRepit.test(ValueNum);
      if (!ResultValidateRepit) {
        console.log(ValueNum);
        let ValidateIncrement = ValidateNumsequential();
        let ValidateDecrement = ValidateNumsequentialDecrement();
        let countIncremetn = ValidateIncrement.filter(item => item == "true");
        let countDecrement = ValidateDecrement.filter(item => item == "true");
        console.log(ValidateIncrement);
        console.log(ValidateDecrement);
        console.log("Tamaño", countIncremetn.length);
        console.log("Tamaño", countDecrement.length);
        if (countIncremetn.length >= 8 || countDecrement.length >= 8) {
          alert('Numeros consecutivos')
        }
        else {

          alert('Numeros correcto')
        }

      } else {
        alert('no debe haber numeros repetidos')
      }
    } else {
      alert('debe ingresar 10 dígitos')
    }
  }
  const ValidateNumsequential = () => {
    let verifySecuentialIncrement = [];
    for (let i = 0; i < ValueNum.length - 1; i++) {
      let item1 = ValueNum.substr(i, 1);
      let item2 = ValueNum.substr(i + 1, 1);
      let verify = ValidatIncrementDecrement(item1, item2);
      if (verify == -1) {
        verifySecuentialIncrement.push("true");
      }
      else {
        verifySecuentialIncrement.push("false");
      }
    }
    return verifySecuentialIncrement;
  }
  /*const RemoveLastElement=(DataAarray)=>{
    let TempDataArray=[]
    for(let i=0;i<DataAarray.length-1;i++){
      TempDataArray.push(DataAarray[i]);
    }
    return TempDataArray;
  }*/
  const ValidateNumsequentialDecrement = () => {
    let verifySecuential = [];
    for (let i = 0; i < ValueNum.length - 1; i++) {
      let item1 = ValueNum.substr(i, 1);
      let item2 = ValueNum.substr(i + 1, 1)
      let verify = ValidatIncrementDecrement(item1, item2);
      if (verify == 1) {
        verifySecuential.push("true");
      }
      else {
        verifySecuential.push("false");
      }

    }
    return verifySecuential;
  }
  const ValidatIncrementDecrement = (item1, item2) => {
    let result = item1 - item2;
    console.log(item1 + "-" + item2 + "=" + result);
    return result;
  }

  const ValidateEmail = () => {
    let ExpresionValidate = /^\w+[-_\.0-9]?(\w+)?@\w+\.\w+\.?(\w+)?$/gim
    let ResultValidate = ExpresionValidate.test(ValueEmail);
    if (ResultValidate) {
      console.log("email", ValueEmail);
      console.log("email", ResultValidate);
      ValidateEmailDomains();
    }
    else {
      console.log("email", ValueEmail);
      console.log("email", ResultValidate);
      alert('email incorrecto')
    }

  }
  const ValidateEmailDomains = () => {
    let EmailSplit = ValueEmail.split("@");
    EmailSplit = EmailSplit[1];
    let domainsArray = EmailSplit.split(".");
    const tempArrayDuplicate = [];
    for (let i = 0; i < domainsArray.length; i++) {
      if (domainsArray[i + 1] === domainsArray[i]) {
        tempArrayDuplicate.push(domainsArray[i]);
      }
    }
    console.log(domainsArray);
    console.log(tempArrayDuplicate);
    if (tempArrayDuplicate.length === 0) {
      alert('email correcto')
    }
    else {
      alert('email incorrecto')
    }

  }
  return (
    <View style={styles.container}>
      <Text>Correo electrónico</Text>
      <TextInput style={{ width: 300, height: 50, borderWidth: 1 }} placeholder="Correo electrónico" value={ValueEmail} onChangeText={setValueEmail}>

      </TextInput>
      <Button title='Validar email' onPress={() => ValidateEmail()}> </Button>
      <Text>Numero</Text>
      <TextInput maxLength={10} style={{ width: 300, height: 50, borderWidth: 1 }} keyboardType="number-pad" placeholder="numero" value={ValueNum} onChangeText={setValueNum}>


      </TextInput>
      <Button title='Validar numer' onPress={() => ValidateNum()}> </Button>
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
