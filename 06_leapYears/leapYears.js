const leapYears = function(lYear) 
{       
    let result;
    if(lYear % 4 == 0)
    {
        if(lYear % 100 == 0)
        {
            if((lYear % 400 == 0) && (lYear % 100 == 0))
            {            
                result = true;                    
            }       
            else
            {
                result = false;
            }
        }
        
    }
    else
    {
        result = false;
    }
    //console.log(result);
    return result
}
leapYears(1900);
// Do not edit below this line
module.exports = leapYears;