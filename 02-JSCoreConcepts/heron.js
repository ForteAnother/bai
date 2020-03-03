// boki trójkąta
let a = 3;
let b = 4;
let c = 5;
let h = 7;



// Pole trójkąta o bokach a, b oraz c wynosi pole .

let triangleCalc = (a,b,c) => {
    let p = 1/2 * (a+b+c);
    return Math.sqrt(p * (p-a)*(p-b)*(p-c));
};

console.log(`Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${triangleCalc(a,b,c)}`);