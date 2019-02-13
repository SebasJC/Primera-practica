function mayor(){
	var montoselec1=document.getElementById("num1").value;
	var montoselec2=document.getElementById("num2").value;
	var montoselec3=document.getElementById("num3").value;
	var mensaje=montoselec1
	var mensaje2=montoselec2
	var mensaje3=montoselec3
	if((montoselec1.value>montoselec2.value)&&(montoselec1.value>montoselec3.value)&&(montoselec2.value>montoselec3))
		document.getElementById("resultado").innerHTML=mensaje;
		document.getElementById("resultado").innerHTML=mensaje2;
		document.getElementById("resultado").innerHTML=mensaje3;
}
