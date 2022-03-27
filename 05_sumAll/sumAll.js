const sumAll = function(intA, intB)
{
    let largeInt;
    let smallInt;
    let result = 0;
    //check for largest

    if(!((intA || intB) < 0))
    {
        if (Number.isInteger(intA) && Number.isInteger(intB))
        {
            if(intA>intB)
            {
                largeInt = intA;
                smallInt = intB;
            }
            else
            {
                largeInt = intB;
                smallInt = intA;
            }
        }
        else
        {
            return 'ERROR';
        }
    
            for (let i = smallInt; i < largeInt+1; i++)
            {
                result += i;
            }
            // console.log(result);
            return result;
    }
    else
    {
        return 'ERROR';
    }
}
 
// Do not edit below this line
module.exports = sumAll;
