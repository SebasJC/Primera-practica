function carro(){
	var mi=30;
	var tot=0;
	var tot2=0;
	var p=0;
	var montoselec=document.getElementById("km").value;
	if ((montoselec>300)&&(montoselec<=1000)) {
		var mo=montoselec-300;
		var ope=(mo/15+30)*0.18+(mo/15+30);
		document.getElementById("res2").innerHTML=ope+"dolares";
	}
	else
	if (montoselec>=1001) {
		var mo=montoselec-1000;
		var ope=(mo/10+135)*0.18+(mo/10+135);
		
		document.getElementById("res2").innerHTML=ope+"dolares";
	}
	else
		 tot=tot+(30*0.18);
			tot2=tot+30;
		document.getElementById("kmf").innerHTML=tot2+" dolares";
}