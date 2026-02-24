

// for(inicijalni uvjet ; uvijet prekida petlje ; promjena varijable)
// for petlja mora imati jednu varijablu

console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');
console.log('Edunova');

console.log('=====================');

for(let i=0;i<10;i++){
    console.log('Edunova');
}

console.log('=========================');
for(let i=0;i<10;i++) console.log('Edunova')

    for(let i=0;i<10;i++) {

        console.log('Vrijednost i je ${i}')
    }

    console.log('========================')

    let suma=0
    for(let i=0;i<10;i++) {
      console.log(`${suma} + ${i+1} =`);
      suma +=i+1
      console.log(suma);
      //debugger;
      
    }

    console.log('suma' , suma);

    //petlja se može preskočiti i nasilno prekinuti

    console.log('===============');

    for(let i=0;i<10;i++) {
        if(i===7) {
            continue;

        }
        if(i===7) {
            break;
        }

        console.log(i)
    }

    // PETLJA U PETLJI
    console.log('==========================')
    for(let i=0; i<10; i++){
      for(let j=0; j<10; j++) {
        console.log( (i+1) * (j+1));
      }
    }
    console.log('==========================')
    const niz = [2,3,45,5,6];

    for(let i=0; i<niz.length-1;i++){
        console.log(niz[i]);
    }

    console.log('==========================')
    for(const broj of niz) {
        console.log(broj);
    }

    console.log('===============================');

    const ime = 'Marko'; 
    for(let i=0; i<ime.length;i++) {
        console.log(ime[i]);
    }

    console.log('==========================')

     let broj=0;
    //beskonačna petlja
    for(;;){
       
   
          console.log(broj ++);
        break;
        
    }

    
    
  