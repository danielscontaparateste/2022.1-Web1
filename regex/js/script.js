function validar(){
	//let re = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/; // Expressao regular

	// let re = new RegExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/);

	// let re = new RegExp(/\d/);
	// let re = new RegExp(/^\d{3}\.\d{2}_\d-\d\/[ab]{2}.{1,3}$/);
	let re = new RegExp(/^[a-z]{3}\.\d{2}_\d-[xy]\/[AB]{2}.*$/);

	//Obter a string digitada
	const str = document.querySelector("#iptDado").value;
	const lbl = document.querySelector("#lblmsg");

	// console.log(`String: ${str}`);

	if (re.test(str)){
		lbl.textContent = "Validado";
	}else{
		lbl.textContent = "Não Validado";
	}

	// console.log(re.exec(str));

}

