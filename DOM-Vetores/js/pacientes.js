const listaPacientes = [];
const listaPrioridades = [];

function addPaciente(){
    const inputPaciente = document.querySelector('#iptNome');
    listaPacientes.push(inputPaciente.value);

    const inputPrioridade = document.querySelector("#iptPrioridade");
    listaPrioridades.push(inputPrioridade.checked);

    var html = '<ul>';
    for (let k =0; k<listaPacientes.length; k++){
        if (listaPrioridades[k]){
            html = html + "<li>" + listaPacientes[k] + " <span class='classPrioridade'>(Prioridade)</span>"+"</li>";
        }else{
            html = html + "<li>" + listaPacientes[k] + "</li>";
        }    
    }
    html = html + "</ul>";

    document.querySelector('#lista').innerHTML = html;

    inputPaciente.value = "";
    inputPrioridade.checked = false;
    // inputPrioridade.disabled = true;
}

function removerPaciente(){

    listaPacientes.shift();
    listaPrioridades.shift();

    var html = '<ul>';
    for (let k =0; k<listaPacientes.length; k++){
        if (listaPrioridades[k]){
            html = html + "<li>" + listaPacientes[k] + " <span class='classPrioridade'>(Prioridade)</span>"+"</li>";
        }else{
            html = html + "<li>" + listaPacientes[k] + "</li>";
        }    
    }
    html = html + "</ul>";

    document.querySelector('#iptNome').value = '';

    document.querySelector('#lista').innerHTML = html;
}

