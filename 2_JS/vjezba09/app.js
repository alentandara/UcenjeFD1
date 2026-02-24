const ispisiUKonzolu=true;

//funkcija je skup naredbi s određenom svrhom, koji ćemo više puta pozivati = DRV
//osnovne vrste funkcije 
// ne prima vrijednost, ne vraća vrijednost
function pozdraviSvijet(){
    console.log ('Hello world')
    //return se može i ne mora napisati
}
// poziv funkcije
pozdraviSvijet()

//2. prima parametre, ne vraća vrijednost

//definiranje funkcije
function parniBrojevi(odBroja, doBroja){
    //parametri se odvajaju zarezom



    const max = odBroja>doBroja ? odBroja : doBroja
    const min = odBroja>doBroja ? odBroja : doBroja
    for(let i=min; i<=max;i++){
        if(i%2===0){
            console.log(i)
        }

    }




    for(let i=odBroja;i<doBroja;i++){
        if(i%2===0){
            console.log(i)
        }
    }
}
// poziv funkcije
log('Prvi poziv')
parniBrojevi(3,8);
log('Drugi poziv')
parniBrojevi(59,65);
parniBrojevi(12,7);

function log(poruka){
    
    }
    console.log('--------------------------');
    console.log('poruka');
    console.log('-----------------------');


// 3. Ne prima parametre, vraća vrijednost
// Definiranje funkcije
function slucajniBroj(){
    const broj = Math.random();
    log(broj);
    let intb=parseInt('uvecano')
    return intb;
}
// i funkciju koja vraća vrijednost možemo pozvati bez da ju dodijelimo nečemu

slucajniBroj();

const sb= slucajniBroj();

log(sb);

console.log((Math.random()*1000).toFixed(0));
console.log((Math.random() * (58-22) +22).toFixed(0));

// 4. prima parametre, vraća vrijednost- najčešće korišćen
// definiranje funkcije

function zbrojPrimBrojeva(odBroja,doBroja){
    for(let i=odBroja; i<=doBroja; i++){
        prim=true;
        for(let j=2; j<i;j++){
            prim=false;
            break
        }
    }
    if(prim){
        suma += i;
    }
    return 'suma';
}

log(zbrojPrimBrojeva(3,80));
// pozdravArrow(); ->ovo ne radi prije deklariranja funkcije
//arrow funkcija
const pozdravArrow = () => console.log('Hello Arrow');

pozdravArrow();

//funkcija u objektu

const brojevi={
    slucajniBroj: (a,b) => {
        return 7;
    },
    nula: () =>{return 0}
}

log(brojevi['slučajniBroj']());


