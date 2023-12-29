class CoffeeShop {
  // Lengkapilah code di bawah ini
  constructor(nama, menu) {
    this.nama = nama;
    this.menu = menu;
  }

  //method order
  getName() {
    return this.nama;
  }
  getMenu() {
    return this.menu;
  }
}

// sample instance
const instanceCoffeShop = new CoffeeShop('GusTea', [' milk tea', ' signature tea', ' gorengan']); 

console.log("Nama CoffeShop :"+" "+ instanceCoffeShop.getName());
instanceCoffeShop.getMenu().forEach(function(daftarMenu){
    console.log(daftarMenu)
});
