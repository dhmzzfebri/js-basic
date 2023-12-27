let animal=["singa","harimau","macan tutul"];

function deleteElemen(index,totalElemen){
    return animal.splice(index,totalElemen);
}

deleteElemen(1,1)
console.log(animal)