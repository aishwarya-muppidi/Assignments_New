//Program for prime number
function isPrime(num:number) {
    if (num <= 1)
        return false;
    for (let i: number = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(25));
console.log(isPrime(1));
