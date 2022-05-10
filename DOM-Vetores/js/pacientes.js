const listaPacientes = [];

function addPaciente(){
    const nomePaciente = document.querySelector('#iptNome').value;
    listaPacientes.push(nomePaciente);

    var html = '<ul>';
    for (let k =0; k<listaPacientes.length; k++){
        html = html + "<li>" + listaPacientes[k] + "</li>";
    }
    html = html + "</ul>";

    document.querySelector('#lista').innerHTML = html;
}

function removerPaciente(){

    /* Exercicio de casa : verificar se o vetor está 
    vazio antes de aplicar a função para remover elemento do vetor */
    listaPacientes.shift();

    var html = '<ul>';
    for (let k =0; k<listaPacientes.length; k++){
        html = html + "<li>" + listaPacientes[k] + "</li>";
    }
    html = html + "</ul>";

    document.querySelector('#iptNome').value = '';

    document.querySelector('#lista').innerHTML = html;
}

