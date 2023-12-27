function f1() {
    setTimeout(function(){
        console.log("aku asynchronous!")
    }, 3000)
}

// setTimeout(callback | closure,waktu)
// 1 detik = 100

function f2(){
    setTimeout(function(){
        console.log("pangil aku..")
    },3000)
}

function f3(){
    console.log("aku ketiga..")
}
f1()
f2()
f3()