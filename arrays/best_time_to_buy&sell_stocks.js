/*  

Best Time to Buy and Sell Stock II
Medium
Topics
Company Tags
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. However, you can buy it then immediately sell it on the same day. Also, you are allowed to perform any number of transactions but can hold at most one share of the stock at any time.

Find and return the maximum profit you can achieve.

Example 1:

Input: prices = [7,1,5,3,6,4]

Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4. Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3. Total profit is 4 + 3 = 7.

Example 2:

Input: prices = [1,2,3,4,5]

Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4. Total profit is 4.

Constraints:

*/  

// brute force  and optimal same code

function buysellstock(prices){
    let profit =0 
    for(let i=1; i<prices.length; i++){
        if (prices[i] > prices[i-1]){ // if current price is greater than previous price then we will buy at previous price and sell at current price   
         profit += prices[i] - prices[i-1]; // profit will be current price - previous price + profit
        }

    }
    return profit;
}

console.log(buysellstock([7,1,5,3,6,4])); // output 7
console.log(buysellstock([1,2,3,4,5])); // output 4