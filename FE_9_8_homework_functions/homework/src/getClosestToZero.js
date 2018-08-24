function getClosestToZero(){
    let n = prompt('Enter quantity of integer arguments',0)
    for(let i = 1; i <= n; i++){
        arguments[i] = parseInt(prompt(`Enter argument # ${i}`,0))
    }
    let closestToZero = Math.abs(arguments[1])
    for(let j = 2; j <= n; j++){
        if(0 - Math.abs(arguments[j]) > 0 - Math.abs(closestToZero)){
            closestToZero = arguments[j]
        }
    }
    console.log(`getClosestToZero () //=>`,closestToZero)
}
getClosestToZero();