//contoh 1
function kali(a,b){
    if (b === undefined){
        b = 5;
    }
    return a  * b
}
console.log(kali(10))

//contoh 2
function menyapa(nama){
    if(nama === undefined){
        nama= "dimas"
    }
    return nama
}
console.log("hai.selamat siang "+ menyapa("budi"))

// buat 3 function dng parameter opsional
// kalau opsional parameternya tdk di isi maka return nilai default
// sedangkan kalau opsional parameter di isi maka yg direturn adalah nilai parameter