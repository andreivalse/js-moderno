//fizz Buzz
// multiplos de 3 Fizz
//Multiplos de 5 buzz
// Multiplos de ambos FIZZBUZZ!!!!

for( let i = 1; i <100; i++){
    if( i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FIZZ BUZZ!!!`)
    }else if( i % 5 === 0){
        console.log(`${i} Buzz`)
    }else if( i % 3 === 0){
        console.log(`${i} Fizz`)
    }else {
        console.log(`${i}`)
    }
}