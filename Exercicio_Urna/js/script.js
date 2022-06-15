
var candidatos = ['Jessica','Joao Victor','Ismael'];
var votosCands = [0,0,0];
 
function votar(){

    const tempo = 2;
    
    // Desabilitar o botao de votar
    const btnVotar = document.querySelector("#btnVotar");
    btnVotar.disabled = true;

    const btnResultado = document.querySelector("#btnResultado");
    btnResultado.disabled = true;

    const iptCands = document.getElementsByName("candidatos");
    let seVoto = false;
    for (var k=0; k<iptCands.length; k++){
        if (iptCands[k].checked){
            seVoto = true;
            break;
        }
    }

    const spnMsg = document.getElementById("msg");    
    if (seVoto){
        votosCands[k] = votosCands[k]+1;    
        
        contadorRegressivo(tempo, true);

        spnMsg.innerHTML = "Obrigado pelo seu voto. ";
        setTimeout(function () {
            spnMsg.innerHTML = "";
            iptCands[k].checked = false;
            btnVotar.disabled = false;  
            btnResultado.disabled = false; 
            contadorRegressivo(tempo, false);
        }, tempo * 1000);    
    }else{
        spnMsg.innerHTML = "Por favor, selecione o seu candidato. ";
        btnVotar.disabled = false;   
        btnResultado.disabled = false;
    }
}

function resultado(){

    document.querySelector("#btnVotar").disabled = true;
        
    var msg = "<table>";
    for (let k=0; k<candidatos.length; k++){
        msg += "<tr>";
        msg += "<td>"+candidatos[k]+"</td>";
        msg += "<td>"+votosCands[k]+"</td>";
        msg += "</tr>";
    }
    msg += "</table>";
    msg += "<hr>";
    msg += "O vencedor da eleição foi: ";
    msg += getVencedor();


    const spnMsg = document.getElementById("msg");
    spnMsg.innerHTML = msg;

    reiniciar();

}

function getVencedor(){
   
    const max = Math.max.apply(null, votosCands);

    let count = 0;
    for (let k=0; k<votosCands.length; k++){
        if (votosCands[k]==max){
            count = count + 1;
        }
    }
    if (count > 1) return "Empate";

    const idxMax = votosCands.indexOf(max);
    // console.log(max);
    return candidatos[idxMax];
    

}

function reiniciar(){
    const btnVotar = document.querySelector("#btnVotar");
    btnVotar.innerHTML = "Reiniciar";
    
    btnVotar.onclick = function () {
        alert("Essa urna será reiniciada. ");
        // window.location.reload();
        votosCands = [0,0,0];
        const spnMsg = document.getElementById("msg");
        spnMsg.innerHTML = "";
        this.onclick = "";
        this.addEventListener("click", votar);
        this.innerHTML = "Votar";
    } ;


    btnVotar.disabled = false;

}

function contadorRegressivo(tempo, mostrar){
    
    const spnRegressivo = document.querySelector("#regressivo");

    if (mostrar){  
        spnRegressivo.innerHTML = tempo;  
        stReg = setInterval(function () {
            tempo = tempo - 1;
            spnRegressivo.innerHTML = tempo
        }, 1000);
    }else{
        clearInterval(stReg);
        spnRegressivo.innerHTML = "";
    }    
}   