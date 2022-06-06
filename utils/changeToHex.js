const changeToHex = (value) => {
  const valueArray = value.split("");
  let result = "";

  valueArray.forEach((value) => {
      result += `${value.charCodeAt()}-`;
  })

  return result;
}

module.exports = {
  changeToHex,
}
