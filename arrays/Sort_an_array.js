/* 
  Sort an Array
Medium
Topics
Company Tags
You are given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

Example 1:

Input: nums = [10,9,1,1,1,2,3,1]

Output: [1,1,1,1,2,3,9,10]
Example 2:

Input: nums = [5,10,2,1,3]

Output: [1,2,3,5,10] */


//brute force 

function brute(nums){
for(let i=0;i<nums.length;i++){
            for(let j=0;j<nums.length -1-i;j++){
                if(nums[j]>nums[j+1]){
                    let temp = nums[j]
                    nums[j]=nums[j+1]
                    nums[j+1]=temp
                }
            }
       }

        return nums;

}
console.log(brute([10,9,1,1,1,2,3,1])) ;


////optimal merge sort devide and conqure


var sortArray = function(nums) {
    mergeSort(nums, 0, nums.length - 1);
    return nums;
};

function mergeSort(arr, left, right) {

    if(left >= right) return;

    let mid = Math.floor((left + right) / 2);

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {

    let temp = [];

    let i = left;
    let j = mid + 1;

    while(i <= mid && j <= right) {

        if(arr[i] <= arr[j]) {
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++;
        }
    }

    while(i <= mid) {
        temp.push(arr[i]);
        i++;
    }

    while(j <= right) {
        temp.push(arr[j]);
        j++;
    }

    for(let k = left; k <= right; k++) {
        arr[k] = temp[k - left];
    }
}

console.log(sortArray([10,9,1,1,1,2,3,1])) ;
