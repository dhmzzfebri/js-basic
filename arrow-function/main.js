// declarasion function
function namaFungsi(){
    return "deklarasi function";
}

// anonymous function
const addTodo = function() {
    return "anonymaous fanction";
};

// arroe function
const greeting = (nama) => `nama fungsi ini ${nama}`;


console.log(addTodo());
console.log(greeting("arrow function"));