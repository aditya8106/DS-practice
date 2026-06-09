/* Online Stock Span
Medium
Topics
Company Tags
Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.

For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.
Implement the StockSpanner class:

StockSpanner() Initializes the object of the class.
int next(int price) Returns the span of the stock's price given that today's price is price.
Example 1:

Input: ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]

Output: [null, 1, 1, 1, 2, 1, 4, 6]
Explanation:
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80); // return 1
stockSpanner.next(60); // return 1
stockSpanner.next(70); // return 2
stockSpanner.next(60); // return 1
stockSpanner.next(75); // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85); // return 6 */


/// brute forcce 

class Stack{
    constructor(){
        this.prices=[]
    }
    next(price){
        this.prices.push(price)
        let i = this.prices.length -2
        let span = 1
        while(i>=0 && this.prices[i] <= price){
            span++;
            i--
        }
        return span;
    }
}

const s1 = new Stack();
console.log(s1.next(100)); //1
console.log(s1.next(80)) //1

/// optimal using stack

class StockSpanner {
    constructor() {
        // Stack stores [price, span]
        this.stack = [];
    }

    next(price) {
        // Every new price has at least span 1 (today itself)
        let span = 1;

        // While stack is not empty
        // and top price is <= current price
        while (
            this.stack.length &&
            this.stack[this.stack.length - 1][0] <= price
        ) {

            // Remove the top element
            const [prevPrice, prevSpan] = this.stack.pop();

            // Add its span to current span
            span += prevSpan;
        }

        // Store current price and its calculated span
        this.stack.push([price, span]);

        // Return today's span
        return span;
    }
}


// Create object
const s = new StockSpanner();

console.log(s.next(100)); // 1
console.log(s.next(80));  // 1
console.log(s.next(60));  // 1
console.log(s.next(70));  // 2
console.log(s.next(60));  // 1
console.log(s.next(75));  // 4
console.log(s.next(85));  // 6
