const { changeToHex } = require('./utils/changeToHex');
const { sumHex } = require('./utils/sumHex');

const addPassword = (value, token) => {
  const valueArray = value.split("-");
  let result = "";

  valueArray.forEach((value, index) => {
      if (value !== '') {
        if (index+2 === valueArray.length) {
          result += `${parseInt(value) + token}`;
        } else {
          result += `${parseInt(value) + token}-`;
        }
      }
  })

  return result;
}

const criptografar = (value, token) => {
  const hexValue = changeToHex(value)
  const hexToken = sumHex(token);

  const result = addPassword(hexValue, hexToken);
  return result;
}

module.exports = {
  criptografar,
}
