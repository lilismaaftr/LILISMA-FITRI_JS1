console.log('external js')

//  if+else
let x=30
if (x<=6) {
    console.log("TIDAK TUNTAS");
}
else{
   console.log("BOLEH");}

// Nested if
if (x<=10) {
    console.log("BELAJAR LAGI");
} else if (x>=11,x<=20) {
    console.log("HARUS BISA");
} else{
    console.log("SEMANGATT");
}

// switch
switch (x=0){
    case 0:
        console.log("AKU HARUS BISAA");
    break;
    case 15:
        console.log("BELAJAR YANG RAJIN");
    break;
    case 10:
        console.log("PASTI BISAA");
    break;
    default:
        console.log("SEMANGAT UNTUK KITA");}

// for
for(let i=0; i<=15;i++){
    console.log("for ke-" + i);}

// while
while (x<=10) {
    console.log("while ke-"+x);
    x++;}

// dowhile
let p=0
do {
    
    let kosong="while do ke-"
    console.log(kosong+p);
    p++
} while (p<=10);


// function
let o= pungcion(50,2);
console.log("function "+o);

function pungcion(a,b) {
    return a*b;
}