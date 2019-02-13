function estacionado(){
	var montoselec1=document.getElementById("h").value;
	var montoselec2=document.getElementById("m").value;
	var ph=montoselec1*2.5;
	if(montoselec2>0){
		ph=ph+2.5;
	}
	document.getElementById("preesta").innerHTML="El precio total es de "+ph+" dolares";
}