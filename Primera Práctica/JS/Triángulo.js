function triángulo(){
	var h=document.getElementById("ladol").value;
	var c1=document.getElementById("cateto1").value;
	var c2=document.getElementById("cateto2").value;
	var tot=0;
	tot=(parseInt(c1)+parseInt(c2));
	if ((parseInt(tot)>parseInt(h))) {
		document.getElementById("son").innerHTML="Sí es triángulo";
		if (((parseInt(c1)==parseInt(c2))&&(parseInt(c1)!=parseInt(h)))) {
 			document.getElementById("qte").innerHTML="Isóceles";
		}
		else
		if (((parseInt(c1)==parseInt(c2))&&(parseInt(c1)==parseInt(h)))) {
			document.getElementById("qte").innerHTML="Equilátero";
		}
		else
			document.getElementById("qte").innerHTML="Escaleno";
		}
	else
	document.getElementById("son").innerHTML="No es triángulo";
	
}

