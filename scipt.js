var gerar = window.document.getElementsByTagName('input')[1]
gerar.addEventListener('click', Gerar)

function Gerar() {
    // Armazenando o que o usuário irá digitar
    var numero = window.document.getElementsByTagName('input')[0]
    var x = Number(numero.value)

    // Pegando o Seletor
    var selecao = window.document.getElementById('tab')

    if (x == 0) {
        window.alert('[ERRO] Digite um número')
    } else {
        selecao.innerHTML = ''
        /* for (var y = 1; y <= 10; y++) {
            // Criando o option do select pra acrescentar elementos
            var item = document.createElement('option')
            item.text = `${x} x ${y} = ${x * y}`
            item.value = `selecao${y}`// Não tem muito sentido para o Js no entando para as outras linguagem isso é importante.
            selecao.appendChild(item)
        } */
        // Usando o while 
        var y = 1
        while ( y <= 10){
            var item = document.createElement('option')
            item.text = `${x} x ${y} = ${x*y}`
            item.value = `selecao${y}`
            selecao.appendChild(item)
            y++
        
        }
        
    }
}