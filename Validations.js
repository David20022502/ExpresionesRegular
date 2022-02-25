export const ValidateNumber = (ValueNum) => {
    let Response={
        Result:null,
        message:null,
    };
    let ExpresionValidateNum = /^(\d){10}$/gim
    let ExpresionValidateNumRepit = /(\d)\1{7}/gim
    let ResultValidate = ExpresionValidateNum.test(ValueNum);
    if (ResultValidate) {
      let ResultValidateRepit = ExpresionValidateNumRepit.test(ValueNum);
      if (!ResultValidateRepit) {
        let ValidateIncrement = ValidateNumsequential(ValueNum);
        let ValidateDecrement = ValidateNumsequentialDecrement(ValueNum);
        let countIncremetn = ValidateIncrement.filter(item => item == "true");
        let countDecrement = ValidateDecrement.filter(item => item == "true");
        if (countIncremetn.length >=7  || countDecrement.length >= 7) {
            Response.Result=false;
            Response.message="Numeros Consecutivos"
            return Response;
        }
        else {
            Response.Result=true;
            Response.message="Numero correcto"
            return Response;

        }

      } else {
        Response.Result=false;
        Response.message="No debe haber numeros repetidos"
        return Response;

      }
    } else {
        Response.Result=false;
        Response.message="Debe ingresar 10 dígitos"
        return Response;

    }
  }
  const ValidateNumsequential = (ValueNum) => {
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
  const ValidateNumsequentialDecrement = (ValueNum) => {
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
    return result;
  }
  export const ValidateEmail = (ValueEmail) => {
    let Response={
        Result:null,
        message:null,
    };
    let ExpresionValidate = /^\w+[-_\.0-9]?(\w+)?@\w+\.\w+\.?(\w+)?$/gim
    let ResultValidate = ExpresionValidate.test(ValueEmail);
    if (ResultValidate) {
      let TempResult=ValidateEmailDomains(ValueEmail);
      return TempResult;
    }
    else {
      Response.Result=false;
      Response.message="Email Incorrecto"
      return Response;

    }

  }

const ValidateEmailDomains = (ValueEmail) => {
    let Response={
        Result:null,
        message:null,
    };
    let EmailSplit = ValueEmail.split("@");
    EmailSplit = EmailSplit[1];
    let domainsArray = EmailSplit.split(".");
    const tempArrayDuplicate = [];
    for (let i = 0; i < domainsArray.length; i++) {
      if (domainsArray[i + 1] === domainsArray[i]) {
        tempArrayDuplicate.push(domainsArray[i]);
      }
    }
    if (tempArrayDuplicate.length === 0) {
      Response.Result=true;
      Response.message="Email Correcto"
      return Response;
      
    }
    else {
      //alert('email incorrecto')
      Response.Result=false;
      Response.message="Email Incorrecto"
      return Response;
    }

}
