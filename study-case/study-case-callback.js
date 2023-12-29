// assessment
// buat 1 collback dan 1 closure
// callback terdiri 2 function,1 sebagai callback 1 sebagai pemanggil
// closure terdiri 2 function,1 sebagai callback 1 sebagai pemanggil
// branch : feat/study-case-callback

// callback
function perkalihan(a, b) {
    return a * b;
}
function luasPersegi(a, b) {
    let luas = perkalihan(a, b);
    return luas;
}
function hitungLuasPersegi(panjang, lebar) {
    return luasPersegi(panjang, lebar);
}

console.log('Hasil luas persegi: ' + hitungLuasPersegi(10, 5));




//closure
function greeting() {
    return "bagaimana dengan pendapat anda?";
}
function tampilkan(callbackgreeting) {
    let greetingpesan = callbackgreeting();
    console.log('tampilkan pesan: ' + greetingpesan);
}
tampilkan(function () {
    return greeting();
});