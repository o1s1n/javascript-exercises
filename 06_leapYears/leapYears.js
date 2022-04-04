const leapYears = function(lYear) 
{       
    let result;
    if(lYear % 4 == 0)
    {
        if(lYear % 100 == 0)
        {
            if((lYear % 400 == 0) && (lYear % 100 == 0))
            {            
                return true;                    
            }
            else return false;       
        }
        else
        {
            return true;
        }
    }
    else
    {
        return false;
    }
}
leapYears(700);
// Do not edit below this line
module.exports = leapYears;