function sum(){
    let sum = 0;
    return function number(num){
        sum += num;
        return sum;
    }
}
let result = sum();
console.log(result(3));
console.log(result(6));
console.log(result(30));