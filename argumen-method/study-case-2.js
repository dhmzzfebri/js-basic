// sebuah warung kopi
const coffeeShop ={
    name: "Gustea",
    menus:{
        signature_tea: 5,
        milk_tea: 3,
        cireng :10,
        gorengan: 5,
    },
    // buat method dng nama orderA
    // order a akan mengurangi isi dari property
    // signature_tea -1
    // cireng -3
    // gorengan -3

    orderA(){
        const s=
        this.menus.signature_tea -= 1;
        this.menus.cireng -= 3;
        this.menus.gorengan -= 3;
        return "Sisa stok signature Tea: " + this.menus.signature_tea + "\n" +
               "Sisa stok milk Tea: " + this.menus.milk_tea + "\n" +
               "Sisa stok cireng: " + this.menus.cireng + "\n" +
               "Sisa stok gorengan: " + this.menus.gorengan;


        // return nilai adalah sisa stok menu
        // sample output
        // "sisa stok signature Tea: "+menu.signature_tea
        // "sisa stok milk Tea: "+menu.milk_tea
        // "sisa stok cirengTea: "+menu.cireng
        // "sisa stok gorengan: "+menu.gorengan
    }
        
    
}
console.log(coffeeShop.orderA());