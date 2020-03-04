const reverse = function(arr) {
    arrReversed = [];
    arr.forEach(item => arrReversed.push(item));
    arrReversed.reverse();
    return arrReversed;
}

const sort = function(arr) {
    arrSorted = [];
    arr.forEach(item => arrSorted.push(item));
    arrSorted.sort();
    return arrSorted;
}

const even = function(arr) {
    let arrEven = [];
    for (let i=0;i<arr.length; i++) {
        if (arr[i]%2==0) {
             arrEven.push(arr[i]);
        }
    }
    return arrEven;
}

numbers = [8,3,2,1,5,4,6];
console.log("Tablice:");
console.log(numbers);
console.log("Sortowanie:");
console.log(sort(numbers));
console.log("Odwrócone:");
console.log(reverse(numbers));
console.log("Parzyste:");
console.log(even(numbers));
console.log("Odwrócone i parzyste:");
console.log(reverse(even(numbers)));
console.log("Parzyste i posortowane:");
console.log(even(sort(numbers)));
