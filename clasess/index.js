// class dunamankan dengan pascalcase
class Kucing{
    // constructor bisa dikatakan sebagai initial nilai
    constructor(jenis,warna_bulu){
        //property
        this.jenis = jenis
        this.warna_bulu = warna_bulu
    }

    //method
    getJenis(){
        return this.jenis
    }
}
// utk mengunkan class,kita perlu membuat instance dari clas tsb
//tipe data instance
const instanceKucing = new Kucing('anggora','putih')
console.log("jenis kucingnya adalah" + instanceKucing.getJenis())

// kalau Object
const Cat = {
    jenis: "anggora",
    warna_bulugetJenis(){
        return 
    }
}