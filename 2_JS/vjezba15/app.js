
// Očekujem da će se ovo duže izvršavatiset
function duziPoziv(){
setTimeout(()=> {
//ovdje se čeka 5 sekundi
// ovako gnježđene uzrokuje callbackhell
povratnaFunkcija();
}, 5000);
console.log('Prošlo je 5 sekundi');
}
function povratnaFunkcija(){
    console.log('Početak')
}
console.log('Početak');
duziPoziv();

async function apiPoziv(naziv, url, milisekundi=1000) {
console.log(naziv, url,milisekundi);
return await cekaj(milisekundi);
}

//async function cekaj(ms) {
//    return new Promise(resolve=>{
 //       set setTimeout (()=> {
 //           resolve(7);
 //       } ms);
 //   });
//}
  //  async function izvedi() {

 //     const r1 = await apiPoziv('Primjer 1', 'https://http.dog', 4000);

//console.log(r1);  

//console.log(await apiPoziv('P2','URL2', '1000'));

//console.log(await apiPoziv('P3 čekam 3 sekunde', 'URL3', 3000));

//for(let i=0, i<10, i++){
 //   console.log(await apiPoziv(i+1, 'URL'+(i+1)*1000)));
//}
   await fetch(''https://dogapi.dog/api/v1/facts?number=20'')
   .then (res => res.jason())
   .then (data => data.facts.forEach(0=>{
    const li = document.createElement('li');
    li.innerText=0;
    document.getElementById('podaci')
    .appendChild(li);
   }));
   
 }  
 for(let i=0;i<10;i++){
izvedi();
 }


