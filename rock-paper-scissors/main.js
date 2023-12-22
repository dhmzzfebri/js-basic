function computerSelect(){
    let select = ["batu","gunting","kertas"];
    let index = Math.floor(Math.random() * select.length);
    return select[index];
}
// console.log(computerSelect());

// function winner(param1,param2){
//     if(param1 === param2){
//         return Seri;
//     }else if(
//         (param1 === "gunting" && param2 ==="batu" )||
//         (param1=== "kertas" && param2 ==="gunting") || 
//         (param1 === "batu" && param2 === "kertas")
//         ) {
//             return "pemenang";
//         } else{
//             return "computer";
//         }
// }

// function play(main){
//     let user = main
//     let computer = computer()
//     let result = winner(user,computer)
//     console.log('pemain memilih ${user}')
// }