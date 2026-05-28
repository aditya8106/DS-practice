/* // Example:
// candles = [3,2,1,3]
//
// max = 0
// count = 0
//
// i = 0
// candles[i] = 3
//
// 3 > 0
// update max = 3
// count = 1
//
// --------------------------------
//
// i = 1
// candles[i] = 2
//
// 2 is not greater than max
// 2 is not equal to max
//
// no changes
//
// --------------------------------
//
// i = 2
// candles[i] = 1
//
// 1 is not greater than max
// 1 is not equal to max
//
// no changes
//
// --------------------------------
//
// i = 3
// candles[i] = 3
//
// 3 === max
//
// another tallest candle found
// count++
//
// count = 2
//
// --------------------------------
//
// Final Answer = 2
//
// Theory:
// max keeps track of tallest candle height.
// count keeps track of how many candles
// have that tallest height. */ 


function Answer(arr){
  let max =0
  let count =0
  for(let i =0;i<arr.length;i++){
    if(arr[i] > max){
        max = arr[i]
        count =1
    }else if(arr[i] === max){
        count++;
    }
  }
  return count
}

console.log(Answer([3,2,1,3]))  