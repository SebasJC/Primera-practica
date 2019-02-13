function mvp(){
	var n1=document.getElementById("mvp1").value;
	var n2=document.getElementById("mvp2").value;
	var n3=document.getElementById("mvp3").value;
	if ((n1<n2)&&(n1<n3)) {
		document.getElementById("mvpf").innerHTML=n1;
	}
	else
	if ((n2<n1)&&(n2<n3)) {
		document.getElementById("mvpf").innerHTML=n2;
	}
	else
	if ((n3<n2)&&(n3<n1)) {
		document.getElementById("mvpf").innerHTML=n3;
	}
	else
		document.getElementById("mvpf").innerHTML=n1;
}