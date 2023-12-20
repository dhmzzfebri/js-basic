// apa itu callback dalam JS
// memanggilfungsi di dalam fungsi

// contoh 1
function perkalihan(a,b){
    return a*b
}
function luasPersegi(sisi){
    const luas = perkalihan(sisi,sisi)
    return luas
}
console.log(luasPersegi(4))


// contoh 2
function pertambahan(a,b){
    return a+b
}

function kelilingpersegipanjang(p,l){
    // fungsi mencari keliling
    // let k = 2 * p + l

    //callback
    let keliling = pertambahan(p,l)

    return perkalihan(keliling,2)
}
console.log('hasil kelilingpersegi:' +kelilingpersegipanjang(10,5,perkalihan,pertambahan))

// contoh 3
function greeting(){
    return "apakah harimu baik-baik saja kawan?"
}
function tampilkan(callbackgreeting){
    let greeting = callbackgreeting()
    console.log('tampilkan pesan:' + greeting)
}
tampilkan(greeting)

// closure
tampilkan(function()
{
    return "ini closure!"
})

