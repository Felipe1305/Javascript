function defaultParams(a = 1, b = 2, c = 3){
    console.log(a,b,c)
}

defaultParams()

console.log(1,2,3,4,5,6,7,8,9,10)


function logNums (nums){
    for (var n of nums){
        console.log(n)
    }
}

logNums([5,8,6])

function logNums2 (...nums){
    //Posso simplifcar ainda mais a função passando apenas o Array de nums dentro do console.log. INCRÍVEL!!
    console.log(Array.isArray(nums))
    for (var n of nums){
        console.log(n)
    }
}

logNums2(1,2,3,5,8,6)

function sumAll(...nums){
    let total = 0
    for (let n of nums) {
        total += n
    }
    return total
}
//É possível passar varios parametros e a função java receber eles como um array, apenas com a anotação de operador spread/rest



console.log(sumAll(5,8,5,8,5,89))