async function main(){
    try{
        if(await getResultado(5) > 10){
            console.log('É maior que 10')
            if(await getResultado(2) > 10)
            console.log('É maior que 10')
        }
    } catch(e){
        console.log(e)
    }
}

main();

function getResultado(result){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result * 2.5);    
        }, 3000)
    })
}