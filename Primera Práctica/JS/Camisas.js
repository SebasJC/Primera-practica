function comprar(){
	var montoselec=document.getElementById("cam").value;
	var uncua=0.125;
	var cincho=0.20;
	var mas=0.315;
	if(montoselec<=4){
		var tot=montoselec*10000;
		var des=tot-(tot/uncua);
		document.getElementById("cams").innerHTML="El precio sin descuento es "+tot;
		document.getElementById("camf").innerHTML="El precio final es "+des;
	}
	else
	if(montoselec<=8){
		var tot=montoselec*10000;
		var des=tot-(tot*cincho);
		document.getElementById("cams").innerHTML="El precio sin descuento es "+tot;
		document.getElementById("camf").innerHTML="El precio final es "+des;
	}
	else
	if(montoselec>8){
		var tot=montoselec*10000;
		var des=tot-(tot/mas);
		document.getElementById("cams").innerHTML="El precio sin descuento es "+tot;
		document.getElementById("camf").innerHTML="El precio final es "+des;
	}
}