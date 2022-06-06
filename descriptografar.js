const { sumHex } = require('./utils/sumHex');

const changeToString = (value) => {
  const valueArray = value.split("-");
  let result = "";

  valueArray.forEach((value) => {
      if (value !== "") result += `${String.fromCharCode(value)}`;
  })

  return result;
}

const removePassword = (value, token) => {
  const valueArray = value.split("-");
  let result = "";

  valueArray.forEach((value) => {
      if (value !== '') { 
        result += `${parseInt(value) - token}-`;
      }
  })

  return result;
}
  
const descriptografar = (value, token) => {
  const hexToken = sumHex(token);
  const withoutPassword = removePassword(value, hexToken);
  const result = changeToString(withoutPassword);

  return result;
}

module.exports = {
  descriptografar,
}
