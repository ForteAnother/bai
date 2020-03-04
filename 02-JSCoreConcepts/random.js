let tablicaDziesiec = [];

const losujDziesiec = () => {
    
    for (let i=0; i<10; i++) {
    let x = Math.floor(Math.random()*16)+5;
    tablicaDziesiec.push(x);
    }

    console.log("Losowa tablica:");
    console.log(tablicaDziesiec);
    return null;

}

losujDziesiec();