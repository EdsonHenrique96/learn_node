const closure = function(innitialValeu) {
    let count = innitialValeu;

    return {
        contar: function() {
            count++;
        },
        escrever: function() {
            console.log(count);
        }
    }
};

module.exports = closure;
