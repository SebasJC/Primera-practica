function dado1(){
	var mensaje="Excelente";
	var mensaje2="Muy bien";
	var mensaje3="Regular";
	var mensaje4="Pesimo";
	num1= Math.round(Math.random()*(6-1)+1);
	document.getElementById("dado1").innerHTML=num1;
	num2= Math.round(Math.random()*(6-1)+1);
	document.getElementById("dado2").innerHTML=num2;
	num3= Math.round(Math.random()*(6-1)+1);
	document.getElementById("dado3").innerHTML=num3;

	if ((num1==6)&&(num2==6)&&(num3==6)) {
		document.getElementById("dadof").innerHTML=mensaje;
	}
	else
	if (((num1==6)&&(num2==6))||((num1==6)&&(num3==6))||((num3==6)&&(num2==6))) {
		document.getElementById("dadof").innerHTML=mensaje2;
	}
	else
	if ((num1==6)||(num2==6)||(num3==6)){
		document.getElementById("dadof").innerHTML=mensaje3;
	}
	else
		document.getElementById("dadof").innerHTML=mensaje4;
}