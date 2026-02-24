

// rekurzija - kada mreža zove samu sebe uz uvijet prekida rekurzija
let sum=0;
for(let i=1;i<=100;i++){
    sum+=i;
}
console.log(sum);
function zboji(broj){
    //uvjet prekida rekurzije 
    if(broj===1){
        return 1;
    }
    return broj + zbroji(broj-1);
}

console.log(zbroji(100));

function so(){
    so()
}
so()