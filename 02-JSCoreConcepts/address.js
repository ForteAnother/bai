let title = "dr";
let name = "Mateusz";
let surname = 'Kubicki';
let street = 'Długa 15';
let city = 'Kraków';
let zip = '30-781';
let country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/


console.log(title + " " + name + " " + surname + "\n" + "ul." + street + " " + "\n" + zip + " " + city + "\n" + country.toUpperCase());

console.log(`${title} ${name} ${surname}
ul. ${street}\n${zip} ${city}
${country.toUpperCase()}`);


