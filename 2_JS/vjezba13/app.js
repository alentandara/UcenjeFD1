
//OP je objektno orjentirano projektiranje

// probaj ovo naučit pa makar napamet

//Klasa je opisnik objekta, objekt je instanca klase

class Osoba{
     //OOP princip učahurivanje, skrivanje svojstava
    #ime
    //omogućavanje pristupa skrivenim svojstvu
    get ime(){return this.#ime;}
    set ime(s) {this.#ime=s;}

    constructor(){
        console.log("Konstruiram objekt iz klase Osoba")
    }
}
// Objekt je instanca )pojavnost klase
// o je objek
let o=new Osoba(); //new je poziv konstruktora
o.ime = 'Pero';
console.log(o.ime)

const d=new Date();
console.log(d.getDate());

const jucer=new Date(2025,1,24);

const student=new Osoba('Nikolina');
console.log(student.ime);

class Polaznik extends Osoba{

    #odradioObaveze;
    get odradioObaveze(){return this.#odradioObaveze;}
    set odradioObaveze(b){this.#odradioObaveze=b}

    constructor(ime='', b=false) {
        super(ime);
        this.#odradioObaveze = b;
    }
}

[
    new Polaznik('Lucija', false), new Polaznik('Rita', true)
].forEach(o=>console.log(o.ime, o.odradioObaveze));

const p= new Polaznik();
p.ime = 'Karlo';
p.odradioObaveze=true;

console.log(p.ime, p.odradioObaveze);

class Predavac extends Osoba{
#redoviti;
get redoviti(){return this.#redoviti}
constructor(ime='', redoviti=false){
    super(ime);
    this.#redoviti=redoviti;
}

}
const predavac = new Predavac('Gordana',true);
console.log(`${predavac});
console.log(p);

console.log(jucer);
//JS još implementira polimorfizam (višeobličje)

// ideja objekta je da bude kontejner za podatke i metode koji upravljaju

// U OOP ako želimo samo logiku bez potrebe pamćenja podataka koristimo 

class Pomoćno{
      static slucajniBroj(min=0, max=0){
      if (min===0 && max===0){
      return Math.random();
      }
      return ((Math.random()* (max - min)+ ))
      }

}
      