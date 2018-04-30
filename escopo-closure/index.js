// self invoking function
var conta = (function() {
    var contador = 0;

    return function() {
        contador++;
        console.log(contador);
    }

})();

conta();
conta();
conta();

var closure = (function() {
    contador = 0;
    return {
        addCliente: function(clientes, nome){
            clientes.push(nome);
            contador++;
        },
        qtdClientes: function () {
            console.log(contador)
        }
    }
})();

clientes = [];

closure.addCliente(clientes, "Edson");
closure.addCliente(clientes, "Henrique");
closure.addCliente(clientes, "Pedro");

console.log(clientes);
console.log(closure.qtdClientes);