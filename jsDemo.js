const arr = [1,2,3,4,5,6,2,1,1,3,2];
console.log(arr);
console.log(typeof arr);
console.log('-----------------');
const newArr = [...new Set(arr)];
console.log(newArr);
console.log(typeof newArr);
console.log('-----------------');
const set = new Set(arr);
console.log(set);
console.log(typeof set);



