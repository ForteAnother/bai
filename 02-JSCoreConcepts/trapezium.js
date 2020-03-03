let podstawa;
let gora;
let wysokosc;

const wyliczTrapez = (podstawa, gora, wysokosc) => {
    return (podstawa+gora)*wysokosc/2;
}


console.log("Pole trapezu to: \n");
console.log(wyliczTrapez(5,5,10));