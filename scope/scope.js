//local scope
function greeting(param){
    const greet ="selamat datang" + param;
    return greet;

}
// console.log(greet);



//global scopo
const myname="yanto";
function yournama(){
    return myname;
}
console.log(myname);



// block scope
if (1 === 1){
    const istrue = "itu benar";
    console.log(istrue);
}else{
    const istrue="maaft itu salah";
    console.log(istrue);
}

function myfavoritfood(param){
    if (param ==="nasi goreng"){
        const favorit ="ini makan kesukaan saya";
        console.log(favorit);
    }else{
        const favorit ="bukan makanan kesukaan saya";
        console.log(favorit);
    }
}
myfavoritfood("nasi goreng");