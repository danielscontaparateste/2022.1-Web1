

function exibirMsg(){
    document.getElementById("msg").innerHTML = "OI Turma";
}

function somar(){

    var x = document.querySelector("#iptX").value;
	var y = document.querySelector("#iptY").value;

	var res = parseInt(x)+parseInt(y);

    // console.log(res);

	document.querySelector("#resultado").innerHTML = "<br>O resultado da operação é "+res;
	if (res % 2 == 0){
        document.querySelector("#resultado").style.color = "#00ff00";
        document.querySelector("#resultado").style.backgroundColor = "#000";
    }else{
        document.querySelector("#resultado").style.color = "#ff0000";
    }
    
}

function reiniciar(){
    document.querySelector("#resultado").innerHTML = "";
    document.querySelector("#iptX").value = "";
    document.querySelector("#iptY").value = "";

}