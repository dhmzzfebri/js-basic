//ubah ke locsl scope
// const MyAnimal="ayam";

// function MyAnimal(){
//     return hewan
// }
function MyAnimal(param){
    const hewan = "Hewan Kesukaan Saya Adalah : " + param
    return hewan
}
console.log(MyAnimal("Ayam"))

//ubah ke global scope
// function MyAge(){
//     const age = 18;
//     return age;
// }
const age = 17

function MyAge(){
    return age
}
console.log(MyAge())

//ubah ke block scope
// function ordercheck(param){
//     let order;
//     if(param > 0){
//         order ="sedang di proses";
//         return order;
//     }else{
//         order="pesanan kosong";
//         return order;
//     }
// }

// ordercheck(1);
function orderCheck(param){
    let order
    if(param > 0){
        order = "Pesanan sedang diproses"
        console.log(order)
    } else {
        order = "Pesanan Kosong"
        console.log(order)
    }
}
orderCheck(1)