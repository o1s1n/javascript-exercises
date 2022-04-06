const ftoc = function(faToCel) 
{
  let result;
  convertTemp = ((faToCel - 32) * (5/9));
  console.log("firstCalc = " + convertTemp);
  console.log("MidCalc = " + Math.round(convertTemp * 10));
  result = Math.round(convertTemp * 10) /10;
  console.log ("finalCalc = " + result);
  return result;
}

const ctof = function(celToFa) 
{
  let result;
  convertTemp = (((celToFa * 9/5) + 32));
  console.log("firstCalc = " + convertTemp);
  console.log("MidCalc = " + Math.round(convertTemp * 10));
  result = Math.round(convertTemp * 10) /10;
  console.log ("finalCalc = " + result);
  return result;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};