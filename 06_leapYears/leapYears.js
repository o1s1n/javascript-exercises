const leapYears = function(myYear) 
{
    ((myYear % 4 == 0) && (myYear % 400 !== 0) && (myYear % 100 !== 0)) ? true : false;
}
// Do not edit below this line
module.exports = leapYears;
