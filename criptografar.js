const changeToHex = (value) => {
  const valueArray = value.split("");
  let result = "";

  valueArray.forEach((value) => {
      result += `${value.charCodeAt()}-`
  })

  return result;
}

const sumHex = (value) => {
  const valueArray = value.split("");
  let result = 0;

  valueArray.forEach((value) => {
      result += value.charCodeAt();
  })

  return result;
};

const addPassword = (value, token) => {
  const tokenNumber = sumHex(token);
  const valueArray = value.split("-");
  console.log(valueArray)
  let result = "";

  valueArray.forEach((value) => {
      if (value !== '') { 
        result += `${value.charCodeAt() + tokenNumber}-`;
      }
  })

  return result;
}

const criptografar = (value, token) => {
  const result = addPassword(changeToHex(value), token);
  return result;
}

console.log(criptografar("ABC", "ABC"));