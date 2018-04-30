const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('A promisse foi resolvida')
    }, 2000)
})

const promise2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('A promisse foi rejeitada')
    }, 2000)
})

console.log('Enquanto ...')
console.log('Isso...')
console.log('O restante do ... ')
console.log('Codigo vai .... ')
console.log('Sendo resolvido ...')

promise.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log('Promise 1 foi rejeitada : ' + err)
})

promise2.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log('Promise 2 foi rejeitada : ' + err)
})

Promise.all([promise, promise2])
    .then(result => console.log(result))
    .catch(err => console.log('Deu ruim'))