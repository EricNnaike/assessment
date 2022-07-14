function arraySum(array, target) {
    let store = [];
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        for(let j = 1; j < array.length; j++) {
            if((array[i] + array[j]) === target){
                store.push(array[i], array[j]);
            }
        }
    }
    return store;
}
console.log(arraySum([2,5,7,10], 9));