
// #1 Lengkapilah kode di bawah ini.
const tiger = {
    name: "Daniel",
    fur: "Orange",
    food: ["Raw Chicken Meat", "Beef"],
    getFood(){
        return  this.name  + " suka makan " +  this.food
    }

}
const DanielLikes = tiger.getFood()
console.log(DanielLikes)


const eagle = {
    name:"Elang",
    fur:"hitam",
    food:"ikan",
    voice:"kuiw...",
    getElang() {
        return "Suara "  + this.name  +" "+ this.voice
    }
}
const suaraElang = eagle.getElang()
console.log(suaraElang)

// #3 Lengkapilah kode di bawah ini
const uniqueNumber = {
    n: [3, 7, 5, 15, 13, 2, 30, 27, 45],
    multipleOfFive() {
        if (n % 3 === 0) {
            return n;
    }
}
}