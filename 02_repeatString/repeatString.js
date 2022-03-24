
const repeatString = function(myString, numOfTimes) 
{
    let result = "";

    if(numOfTimes >= 0)
    {
        for(i = 1; i <= numOfTimes; i++)
        {
            result += myString;
        }
    }
    else
    {
        return 'ERROR';
    }
    
    return result;

}

// Do not edit below this line
module.exports = repeatString;


