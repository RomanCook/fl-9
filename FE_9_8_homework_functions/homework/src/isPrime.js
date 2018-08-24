const two =2
function isPrime(){
    let prime = parseInt(prompt(`Enter natural number`,0))
    let primeIs = true
    if(prime < two ){
        primeIs = false
    }else{
        for(let i = 2; i <= prime-1; i++){
            if(prime%i === 0){
                primeIs = false
            }
        }
    }
    console.log(`isPrime(${prime});=>`,primeIs)
}
isPrime();