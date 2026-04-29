function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } 
        let profit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, profit);/// we can write it as maxProfit = profit > maxProfit ? profit : maxProfit;
    }
    
    return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0