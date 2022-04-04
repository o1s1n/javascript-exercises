const ftoc = function(faToCel) 
{
  let result;
  result = ((faToCel -32) * (5/9) * 10);
  return Math.round(result /10);
}

const ctof = function(celToFa) 
{
  let result;
  result = ((celToFa * (9/5)) + 32 * 10);
  return Math.round(result /10);
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};