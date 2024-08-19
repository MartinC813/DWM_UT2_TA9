const getOdds = (nums) =>{
    return nums.filter((numeros) => numeros % 2 !== 0);
}


const nums = [1,2,3,4,5,6,7,8]


console.log(getOdds(nums))
  