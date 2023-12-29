//daftar belanja
/*
- tambah Item
-hapus Item
-tampil item
*/

let shoppingList = [];

// fungsi tambah item 
const addItem =(itemName) => {
    const toLowerCase = itemName.toLowerCase();
    shoppingList.push(toLowerCase);
    console.log(`${itemName} telah ditambahkan `);
};

//fungsi utk hapus item
const removeItem = (item) => {
    const toLowerCase = item.toLowerCase();
    const removeIndex = shoppingList.indexOf(toLowerCase);
    shoppingList.splice(removeIndex,1);
    console.log(`${item } berhasil dihapus`);
};

//fungsi utk tampilkan item
const showItem =() => {
    shoppingList.forEach((item, index) =>{
        console.log(`${index +1}. ${item}`);
    });
};

addItem("laptop");
addItem("HandPhone");
addItem("PC");
showItem();
removeItem("pc")
showItem();
