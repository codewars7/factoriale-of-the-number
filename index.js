let factorialize = (num) => {
  let sum = num
  for (let i = num; num > 1; num--){
    sum *= num-1;
  }
  console.log(sum)
  return sum !== 0 ? sum : 1
}

factorialize(5)
