//Criar uma função range que retorne os valores de acordo com os paramentro passados.
//A) retorna uma contagem até o numero passado. 
//Ex range(5) -> [1,2,3,4,5]

function range(a,b,c = 1){
    const n1 = b===undefined ? 1: a
    const n2 = b===undefined ? a: b
    const step = n1 <= n2 ? Math.abs(c) : -Math.abs(c)
    
    const nums = []

    for(let i=n1;n1<=n2 ? i<=n2 : i>=n2; i+=step) {
        nums.push(i)
    }
    return nums
    
}

console.log(range(5))

//B) A função recebe dois parametros

console.log(range(6,11))

//C) A função recebendo tres paramentos, os dois primeiros sendo a contagem e o terceiro o incremento da contagem.

console.log(range(10,19,2))

//D) A função recebe um numero maior com primeiro paramentro.
console.log(range(6,2))

//E) 
console.log(range(8,-3, 4))
