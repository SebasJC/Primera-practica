function cifras(){
	var n1=document.getElementById("3c").value;
	var	u=n1%10;
	var red=(parseInt(n1*0.1));
	var d=red%10;
	var rec=(parseInt(red*0.1));
	var c=rec%10;
	if((u>d)&&(d>c)) {
	var cf=u*100;
	var df=d*10;
	var uf=c; 
	var nf=cf+df+uf;
	document.getElementById("numf").innerHTML=nf;
	}
	else
	if((c>d)&&(d>u)) {
	var cf=c*100;
	var df=d*10;
	var uf=u; 
	var nf=cf+df+uf;
	document.getElementById("numf").innerHTML=nf;
	}
	else
	if((u>c)&&(c>d)) {
	var cf=u*100;
	var df=c*10;
	var uf=d; 
	var nf=cf+df+uf;
	document.getElementById("numf").innerHTML=nf;
	}
	else
	if((d>c)&&(c>u)) {
	var cf=d*100;
	var df=c*10;
	var uf=u; 
	var nf=cf+df+uf;
	document.getElementById("numf").innerHTML=nf;
	}
	else
	if((d>u)&&(u>c)) {
	var cf=d*100;
	var df=u*10;
	var uf=c; 
	var nf=cf+df+uf;
	document.getElementById("numf").innerHTML=nf;
	}
	else
	if((c>u)&&(u>d)) {
	var cf=c*100;
	var df=u*10;
	var uf=d; 
	var nf=cf+df+uf;
	document.getElementById("numf").innerHTML=nf;
	}
	else
	if ((u>c)&&(c==d)) {
	var cf=u*100;
	var df=c*10;
	var uf=c;
	var nf=cf+df+uf;
	document.getElementById("numf").innerHTML=nf;
	}
	else
	if ((d>u)&&(u==c)) {
	var cf=d*100;
	var df=u*10;
	var uf=u;
	var nf=cf+df+uf;
	document.getElementById("numf").innerHTML=nf;
	}
	else
	if ((c>u)&&(u==d)) {
	var cf=c*100;
	var df=u*10;
	var uf=u;
	var nf=cf+df+uf;
	document.getElementById("numf").innerHTML=nf;
	}
	else
	var cf=c*100;
	var df=c*10;
	var uf=c;
	var nf=cf+df+uf;
	document.getElementById("numf").innerHTML=nf;
}