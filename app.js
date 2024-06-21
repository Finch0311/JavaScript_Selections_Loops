console.log("Hello World!\n==========\n");
function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('FIZZBUZZ');
        }    else if(i % 3 == 0){
            console.log('FIZZ');
        } else if(i % 5 == 0){
            console.log('BUZZ');
        } else{
            console.log(i)
        }
    }
}
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i);
    } 
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0) {
        console.log('FIZZBUZZ');
    }    else if(i % 3 == 0){
        console.log('FIZZ');
    } else if(i % 5 == 0){
        console.log('BUZZ');
    } else{
        console.log(i)
    }
}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let small = 1;
let big = 100;
while(small <= big){
    fizzBuzz(small, big);
    small ++;
}

do{
    fizzBuzz(small, big);
    small ++;
} while(small <= big);
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for(i = 0; i <= value; i++){
    if(i == n){
        console.log("Found value!");{
            break;
        }
    } else{
        console.log("Did not find value.")
    }
}
// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let g = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let i = start; i <= g; i++){
    if(i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log('FIZZBUZZ');
    }    else if(i % fizzDivisor == 0){
        console.log('FIZZ');
    } else if(i % buzzDivisor == 0){
        console.log('BUZZ');
    } else{
        console.log(i)
    }
}