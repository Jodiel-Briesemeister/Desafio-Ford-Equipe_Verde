const sumHex = (value) => {
  const valueArray = value.split("");
  let result = 0;

  valueArray.forEach((value) => {
      result += value.charCodeAt();
  })

  return result;
};

module.exports = {
  sumHex,
}
