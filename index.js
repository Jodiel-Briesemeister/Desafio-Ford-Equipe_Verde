const { criptografar } = require('./criptografar');
const { descriptografar } = require('./descriptografar');

const values = {
    original_value: "Olá tudo bem?",
    cripto_value: "1632-1661-1778-1585-1669-1670-1653-1664-1585-1651-1654-1662-1616",
    token: "5432%$$#4893212ASDSAEF342$@%-",
  }
  
  console.log(criptografar(values.original_value, values.token));
  // 1632-1661-1778-1585-1669-1670-1653-1664-1585-1651-1654-1662-1616
    
  console.log(descriptografar(values.cripto_value, values.token));
  // Olá tudo bem?