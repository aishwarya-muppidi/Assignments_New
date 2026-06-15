function maxProfit(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        // Update minimum price so far
        if (price < minPrice) {
            minPrice = price;
        } 
        // Calculate profit if sold today
        else {
            const profit = price - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])); 
console.log(maxProfit([7, 6, 4, 3, 1]));