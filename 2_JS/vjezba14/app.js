// posebna vrsta funkcije koje se mogu zaustaviti usljed izvođenja i nastaviti
//* označava da je to generator funkcija
function* brojevniGenerator(){
    console.log("Početak rada generatora");
yield true; //1. pauza
yield 2.8 ; //2. pauza
yield 33; //3. pauza
return 'Gotov';
}

const generator=brojevniGenerator();
// sada če se tek krenuti izvoditi funkcija brojevni generator
/*
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
*/

let g;
do{
    g=generator.next();
    console.log(g);
}  while(!g.done);

function* sljedeciId(){
    let id=1; 
    while(true){
        yield `ID_${id++}`;
    }
}
const id= sljedeciId();

console.log(`SljedeciId: ${id.next().value}`);

for(let i=0;i<10;i++){
    console.log(`Sljedeći ID u petlji: ${id.next().value}`);
}

function* razgovor(){
    let odgovor;
    while(true){
odgovor=yield'Kako se zoveš';
console.log(`Generator kaže:Drago mi je, ${odgovor}`;
    }
}

const chat= razgovor();

let pitanje=chat.next().value;
console.log(pitanje);

// Pošalji Marko i odmah dohvati sljedeće pitanje

pitanje=chat:next('Marko').value;
console.log(pitanje);

pitanje=chat.next('Marko').value;
console.log(pitanje);
console.log(chat.next('Marija').value);