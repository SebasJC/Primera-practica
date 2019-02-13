function parono(){
	var montoselec=document.getElementById("n").value;
	var p=montoselec%2;
	if(p==0){
		document.getElementById("pop").innerHTML="Es par";
	}
	else
		document.getElementById("pop").innerHTML="Es impar";
}