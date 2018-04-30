const DataBase = require('../db/DataBase')


//console.log(contents)

function getUserById(id){
    const db = new DataBase()
    const obj = JSON.parse(db.readJson())

    let result = ""
    for(element in obj){
        if(element == id)
            return obj[element]
    }

    return result ? result : null;
}

function createUser(obj){

}

console.log(getUserById(2));