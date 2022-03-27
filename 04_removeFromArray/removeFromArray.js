const removeFromArray = function(myArray, ...myNums)
{
    // This passes the first test.
    // This method mutates the original array (which is why we return that array).
    // let arraySplice = myArray.splice(myArray.indexOf(extraNum), 1);

    // console.log("the result = " + myArray);
    // return myArray;

    const filteredArray = myArray.filter(n => !myNums.includes(n));
    return filteredArray;
}

// Do not edit below this line
module.exports = removeFromArray;