function capi(){
	var montoselec=document.getElementById("capin").value;
	if ((montoselec<1000)&&(montoselec>100)) {
	var u=montoselec%10;
	var red=(parseInt(montoselec*0.1));
	var d=red%10;
	var rec=(parseInt(red*0.1));
	var c=rec%10;
	var cen=u*100;
	var dec=d*10;
	var num=cen+dec+u;
	if(num==montoselec){
		document.getElementById("capre").innerHTML="Es capicua";
	}
	else
		document.getElementById("capre").innerHTML="No es capicua";
	}
	else
	if (((montoselec<100)&&(montoselec>10))) {
	var u=montoselec%10;
	var red=(parseInt(montoselec*0.1));
	var d=red%10;
	var dec=u*10
	var num=dec+u;
	if(num==montoselec){
		document.getElementById("capre").innerHTML="Es capicua";
	}
	else
		document.getElementById("capre").innerHTML="No es capicua";
	}
	else
	if (montoselec<10) {
		document.getElementById("capre").innerHTML="Es capicua";
	}
}