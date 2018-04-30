const fs = require('fs')


module.exports = class DataBase{

    constructor(name = 10) {
        this.name = name;
    }

    openDb(){
       
    }

    write(){

    }

    readRaw(){

    }

    readJson(){
        return fs.readFileSync('./var/db.json', 'utf8', (err, result) =>{ result })        
    }

    append(){

    }

    close(){

    }

}