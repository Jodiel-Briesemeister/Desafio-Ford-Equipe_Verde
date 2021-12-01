const changeToString = (value, subvalue) => {
    const valueArray = value.split("-");
    let result = "";
  
    valueArray.forEach((value) => {
        const calcValue = value - subvalue
        result += `${String.fromCharCode(calcValue)}`
    })
  
    return result;
  }
  
  const subHex = (value) => {
    const valueArray = value.split("");
    let result = 0;
  
    valueArray.forEach((value) => {
        result -= value.charCodeAt();
    })
  
    return result;
  };
  
  const removePassword = (value, token) => {
    const tokenNumber = subHex(token);
    const valueArray = value.split("-");

    let result = 0;
  
    valueArray.forEach((value) => {
        if (value !== '') { 
          result -= `${parseInt((value.charCodeAt() - tokenNumber))}-`;
        }
    })

    return result;
  }
  
  const descriptografar = (value, token) => {
    const result = changeToString(removePassword(value, token));
    return result;
  }
  
  console.log(descriptografar("252-252-252-", "ABC"));