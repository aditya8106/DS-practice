function twoSum2(numbers, target){
    let arr  = numbers.map((num , i)=> [num,i]);
            arr.sort((a,b)=>a[0]-b[0]);
            let left= 0;
            let right= arr.length-1;
            while(left < right){
                let tot = arr[left][0] + arr[right][0];
                if(tot == target ){
                    return [arr[left][1] + 1, arr[right][1] + 1]
                }else if( tot < target){
                    left++;
                }else{
                    right--;
                }
        }
}
console.log(twoSum2([2, 7, 11, 15], 9));