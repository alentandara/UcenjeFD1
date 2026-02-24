//beskonačna while petlja
while(true){
console.log('Edunova');
break;

}

let brojac=0
console.time('while petlja');
while(++brojac<100){
//console.log (brojac);
}
console.timeEnd('while petlja');

let brojUnos = '1262';
//zbroji sve znamenke danog broja
// ulaz: 1262, izlaz 11

console.time('ZB1');
let zbroj = 0
for(let i=0;i<brojUnos.length;i++){
    zbroj += parseInt(brojUnos[i]);
}

console.log(zbroj);
console.timeEnd('ZB1');

console.time('ZB2');
let broj = parseInt(brojUnos);
zbroj=0;
while (broj>0){
    zbroj += broj % 10;
    broj = broj - (broj % 10)
    broj = broj / 10 
}
console.log(zbroj);
console.timeEnd('ZB2')

//ČINJENICA: NITI U FOR, NITI U WHILE SE NE MORA UĆI

let br=-5; 
for(let i=0; i>br;i--){
    console.log('Ušao u for petlju', i);

    
}
let podaciSAPI = [];
while(podaciSAPI.lenght>0){
    console.log('Ušao u while petlju', podaciSAPI.pop()?.ime);
}

