class Person {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }

    nazwijOsobe() {
        console.log(this.imie + " " + this.nazwisko.toUpperCase());
    }

    nazwijInicjaly() {
        console.log(this.imie.charAt(0) + "." + this.nazwisko.charAt(0) + ".");
    }
}

osobaPierwsza = new Person ("Jan", "Nowak");
osobaDruga = new Person("Tomasz","Karczewski");
console.log("Zapisane osoby:");
osobaPierwsza.nazwijOsobe();
osobaDruga.nazwijInicjaly();