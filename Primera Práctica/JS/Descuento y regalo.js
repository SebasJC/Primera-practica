function ptienda(){
	var regalo=0;
	var montoselec=document.getElementById("pro").value;
	var pre=montoselec*100;
	if(montoselec>=36){
		var pre2=pre-(pre*0.15);
		regalo=montoselec/12-3;
		document.getElementById("prof").innerHTML="El costo es de "+pre2;
		document.getElementById("regu").innerHTML=regalo;
	}
	else
	if(montoselec<36){
		var pe2=pre-(pre*0.10);
		document.getElementById("prof").innerHTML="El costo es de "+pe2;
		document.getElementById("regu").innerHTML=regalo;
	}
	else
		alert("hola");
		var pre3=pre-(pre*0.15);
		document.getElementById("prof").innerHTML="El costo es de "+pre3;
		document.getElementById("regu").innerHTML=regalo;
	
	
}