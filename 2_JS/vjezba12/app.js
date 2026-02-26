// funkcininalne metode - skraćuju kod, standardno se koriste

//prvo nam trebaju podaci

const korisnici =[

    {id: 1, ime: 'Ana', prezime: 'Kartek', godina: 25, admin: false},
    {id: 2, ime: 'Đuro', prezime: 'Plenković', godina: 28, admin: true},
    {id: 3, ime: 'Marija', prezime: 'Pavelić', godina: 40, admin: true},
    {id: 4, ime: 'Ivan', prezime: 'Jurković', godina: 32, admin: true},
    {id: 5, ime: 'Marko', prezime: 'Kraljević', godina: 30, admin: false}
];
for(let i=0; i<korisnici.length; i++){
    console.log(korisnici[i].ime);

}



console.log('********************');
korisnici.forEach(o => console.log(o.ime));


korisnici.forEach(o => {
    let poruka = 'Poštovan';
    if(o.ime.endsWith('a')){
        poruka += 'i gospodine';
   }else{
    poruka += 'a gospođo';
   }
   console.log(`${poruka} ${o.ime} ${o.prezime}`);
});

const samoImena = korisnici.map(o=>o.ime);
console.log(samoImena);

const maliNiz = korisnici.map(({id,ime, prezime }) => ({sifra: id, imeOsobe: ime + ' '+ prezime}));

console.log(maliNiz);
console.log('***************');

//find
const pronaden = korisnici.find(o => o.id ===3);
console.log(pronaden);

console.log(korisnici.find(o => o.id ===10)?.ime);

console.log(korisnici.findIndex(o=> o.ime==='Ivan'));

//filter ()

console.log(korisnici.filter(o=>o.godina>30));

//reduce()

console.log(korisnici.reduce((suma,o) => suma+ o.godina, 0));

//some()

const imaAdmin = korisnici.some(o => o.admin===true);
console.log(imaAdmin ? 'Ima admin' : 'Nema Admin');

//every

const sviPunoljetni = korisnici.every(o => o.godina >=18);
console.log(sviPunoljetni ? 'Svi su punoljetni' : 'Nisu svi punoljetni');