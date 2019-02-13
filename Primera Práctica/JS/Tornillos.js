function tornillo(){
	var n1=document.getElementById("tornillos").value;
	var n2=document.getElementById("defecto").value;
	if ((n1>10000)&&(n2<200)) {
		document.getElementById("profin").innerHTML="Grado 8";
	}
	else
	if ((n1<=10000)&&(n2<200)) {
		document.getElementById("profin").innerHTML="Grado 7";
	}
	else
	if ((n1>10000)&&(n2>=200)) {
		document.getElementById("profin").innerHTML="Grado 6";
	}
	else
		document.getElementById("profin").innerHTML="Grado 5";
}