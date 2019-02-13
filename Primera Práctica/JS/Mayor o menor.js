function mayor(){
	var montoselec1=document.getElementById("num1").value;
	var montoselec2=document.getElementById("num2").value;
	var montoselec3=document.getElementById("num3").value;
	if((montoselec1>montoselec2)&&(montoselec1>montoselec3)){
		document.getElementById("resultado").innerHTML=montoselec1;
		if(montoselec2>montoselec3){
		document.getElementById("resultado2").innerHTML=montoselec2;
		document.getElementById("resultado3").innerHTML=montoselec3;
		}
		else if(montoselec3>montoselec2){
		document.getElementById("resultado2").innerHTML=montoselec3;
		document.getElementById("resultado3").innerHTML=montoselec2;
		}
		else
		document.getElementById("resultado2").innerHTML=montoselec2;
		document.getElementById("resultado3").innerHTML=montoselec3;
	}
	else if((montoselec2>montoselec1)&&(montoselec2>montoselec3)){
		document.getElementById("resultado").innerHTML=montoselec2;
		if(montoselec1>montoselec3){
		document.getElementById("resultado2").innerHTML=montoselec1;
		document.getElementById("resultado3").innerHTML=montoselec3;
		}
		else if(montoselec3>montoselec1){
		document.getElementById("resultado2").innerHTML=montoselec3;
		document.getElementById("resultado3").innerHTML=montoselec1;
		}
		else
		document.getElementById("resultado2").innerHTML=montoselec1;
		document.getElementById("resultado3").innerHTML=montoselec3;
	}
	else if((montoselec3>montoselec1)&&(montoselec3>montoselec2)){
		document.getElementById("resultado").innerHTML=montoselec3;
		if(montoselec1>montoselec2){
		document.getElementById("resultado2").innerHTML=montoselec1;
		document.getElementById("resultado3").innerHTML=montoselec2;
		}
		else if(montoselec2>montoselec1){
		document.getElementById("resultado2").innerHTML=montoselec2;
		document.getElementById("resultado3").innerHTML=montoselec1;
		}
		else
		document.getElementById("resultado2").innerHTML=montoselec1;
		document.getElementById("resultado3").innerHTML=montoselec2;
	}
		else
		document.getElementById("resultado2").innerHTML="Todo "+montoselec1;
}

