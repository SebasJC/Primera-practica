function notas(){
	var montoselec1=document.getElementById("nota1").value;
	var montoselec2=document.getElementById("nota2").value;
	var montoselec3=document.getElementById("nota3").value;
	var montoselec4=document.getElementById("nota4").value;
	if ((montoselec1<montoselec2)&&(montoselec1<montoselec3)&&(montoselec1<montoselec4)) {
		document.getElementById("notae").innerHTML="Nota eliminada: "+montoselec1;
		var prom=(parseInt(montoselec2)+parseInt(montoselec3)+parseInt(montoselec4))/3;
		document.getElementById("notap").innerHTML="Promedio de notas más altas: "+prom;
	}
	if ((montoselec2<montoselec1)&&(montoselec2<montoselec3)&&(montoselec2<montoselec4)) {
		document.getElementById("notae").innerHTML="Nota eliminada: "+montoselec2;
		var prom=(parseInt(montoselec1)+parseInt(montoselec3)+parseInt(montoselec4))/3;
		document.getElementById("notap").innerHTML="Promedio de notas más altas: "+prom;
	}
	else
	if ((montoselec3<montoselec1)&&(montoselec3<montoselec2)&&(montoselec3<montoselec4)) {
		document.getElementById("notae").innerHTML="Nota eliminada: "+montoselec3;
		var prom=(parseInt(montoselec1)+parseInt(montoselec2)+parseInt(montoselec4))/3;
		document.getElementById("notap").innerHTML="Promedio de notas más altas: "+prom;
	}
	else
	if ((montoselec4<montoselec1)&&(montoselec4<montoselec2)&&(montoselec4<montoselec3)) {
		document.getElementById("notae").innerHTML="Nota eliminada: "+montoselec4;
		var prom=(parseInt(montoselec1)+parseInt(montoselec2)+parseInt(montoselec3))/3;
		document.getElementById("notap").innerHTML="Promedio de notas más altas: "+prom;
	}
}