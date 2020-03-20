let names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        let namesByLetter = [];
        
        for (let i=0;i<names.length;i++) {
            if (names[i].charAt(0) == letter) {
                namesByLetter.push(names[i]);
            }
        }

        return namesByLetter; // names (array) which starts with the letter
    }

    sort() {
        let namesCopy = this.names.concat();
        return namesCopy.sort(); // names (array) in alphabetical order 
    }

    get() {
        
        return names; // names (array) in alphabetical order 
    }

    getFirst(n) {
        let namesPartially = [];
        for (let i=0;i<n;i++) {
            namesPartially.push(names[i]);
        }
        
        return namesPartially; // get first 'n' names (array) 
    }
}


const getFirst2 = function (letter, number) {
    let namesPartially = [];
    for (let i=0;i<number;i++) {
        namesPartially.push(letter[i]);
    }
    
    return namesPartially; // get first 'n' names (array) 
}



students = new Students(names);


console.log("Studenci normalnie:");
console.log(students.get());

console.log("Studenci alfabetycznie:");
console.log(students.sort());

console.log("Studenci na P:")
console.log(students.startWith('P'));


console.log("Studenci na M, alfabetycznie:")
console.log(students.startWith('M').sort());

console.log("Pierwsze 4 osoby z tablicy:");
console.log(students.getFirst(4)); 

console.log("Pierwsze 2 osoby na M, alfabetycznie:");
console.log(getFirst2(students.startWith('M').sort(),2));







