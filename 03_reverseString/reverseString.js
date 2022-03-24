const reverseString = function(myString) 
{
    let splitString = myString.split("");
    let result = "";
    
    for (i = splitString.length -1; i >= 0; i--)
    {
        result += splitString[i];
    }
    return result;
}

// Do not edit below this line
module.exports = reverseString;
