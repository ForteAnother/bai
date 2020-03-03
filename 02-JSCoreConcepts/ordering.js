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
            arr.forEach(item => arrEven.push(item));
        }
    }
    return arrEven;
}

numbers = [8,3,2,1,5,4,6];
console.log("Tablice: \n");
console.log(numbers);
console.log("Sortowanie");
console.log(sort(numbers));
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));
