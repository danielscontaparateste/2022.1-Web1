
var candidatos = ['Jessica','Joao Victor','Ismael'];
var votosCands = [0,0,0];

function votar(){
    const iptCands = document.getElementsByName("candidatos");
    for (var k=0; k<iptCands.length; k++){
        if (iptCands[k].checked){
           break;
        }
    }

    votosCands[k] = votosCands[k]+1;    

    const spnMsg = document.getElementById("msg");
    spnMsg.innerHTML = "Obrigado pelo seu voto. ";    
    
}

function resultado(){
    
    var msg = "<table>";
    for (let k=0; k<candidatos.length; k++){
        msg += "<tr>";
        msg += "<td>"+candidatos[k]+"</td>";
        msg += "<td>"+votosCands[k]+"</td>";
        msg += "</tr>";
    }
    msg += "</table>";

    const spnMsg = document.getElementById("msg");
    spnMsg.innerHTML = msg;

}