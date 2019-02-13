function elección(){
	var J=document.getElementById("ele1").value;
	var P=document.getElementById("ele2").value;
	var M=document.getElementById("ele3").value;
	if (J==51) {
		document.getElementById("elef").innerHTML="Gana Juan";
	}
	else
	if (P==51) {
		document.getElementById("elef").innerHTML="Gana Pedro";
	}
	if (M==51) {
		document.getElementById("elef").innerHTML="Gana María";
	}
	if ((J==P)||(J==P)||(P==M)||(M=J)){
		document.getElementById("elef").innerHTML="Elección anulada";
	}
	else
	segunda()
}
function segunda(){
	alert()
}