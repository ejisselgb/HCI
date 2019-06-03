function previewImage(id){
	if(id=="default"){
		document.getElementById("preview").src="images/PreviewDefault.PNG";
		document.getElementById("zoom").src="images/PreviewDefaultZoom.PNG";
	}
	if(id=="One"){
		document.getElementById("preview").src="images/PreviewEmbassy.PNG";
		document.getElementById("zoom").src="images/PreviewEmbassyZoom.PNG";
	}
	if(id=="Two"){
		document.getElementById("preview").src="images/PreviewPayment.PNG";
		document.getElementById("zoom").src="images/PreviewPaymentZoom.PNG";
	}
	if(id=="Three"){
		document.getElementById("preview").src="images/PreviewCertificate.PNG";
		document.getElementById("zoom").src="images/PreviewCertificateZoom.PNG";
	}
	if(id=="Four"){
		document.getElementById("preview").src="images/PreviewIncome.PNG";
		document.getElementById("zoom").src="images/PreviewIncomeZoom.PNG";
	}
}

function highlight(id){
	var i;
	var arr=["One","Two","Three","Four"];
	if(document.getElementById("heading"+id).getAttribute('flag')=='false'){
		for (i = 0; i < 4; i++) { 
			if(arr[i]!=id){
		 		document.getElementById("heading"+arr[i]).style.backgroundColor="#2196f3";
		 		document.getElementById("heading"+arr[i]).setAttribute('flag','false');
		 		document.getElementById("heading"+arr[i]).style.color="black";
				document.getElementById(arr[i]).style.color="black";
		 	}
		 	else{
		 		document.getElementById("heading"+id).style.backgroundColor="#3f51b5";
		 		document.getElementById("heading"+id).style.color="white";
		 		document.getElementById(id).style.color="white";
		 		document.getElementById("heading"+id).setAttribute('flag','true');
		 	}
		}
		previewImage(id);
	}
	else{
		for (i = 0; i < 4; i++) { 
			document.getElementById("heading"+arr[i]).style.backgroundColor="#2196f3";
			document.getElementById("heading"+arr[i]).style.color="black";
			document.getElementById(arr[i]).style.color="black";
			document.getElementById("heading"+arr[i]).setAttribute('flag','false');
		}
		previewImage("default");
	}	
}

function checkDownload(){
	var i;
	var arr=["One","Two","Three","Four"];
	var flag=0;
	for (i = 0; i < 4; i++) {
		if(document.getElementById("heading"+arr[i]).getAttribute('flag')=='true'){
			flag=i+1;
		}
	}
	if(flag==0){
		document.getElementById("downloadModalLabel").innerHTML="Operación Fallida";
		document.getElementById("downloadPopUp").innerHTML="<p style='color:red;font-size:32px'><i class='fas fa-exclamation-triangle'></i><p><br>Debes elegir un tipo de documento a descargar y especificar sus detalles en caso de ser necesario!";
	}
	else{
		if(flag==1 && document.getElementById("exampleInputEmail1").value==""){
			document.getElementById("downloadModalLabel").innerHTML="Operación Fallida";
			document.getElementById("downloadPopUp").innerHTML="<p style='color:red;font-size:32px'><i class='fas fa-exclamation-triangle'></i><p><br>No has especificado la Embajada, lo cual es necesario para generar el documento!";
		}
		else{
			document.getElementById("downloadModalLabel").innerHTML="Operación Exitosa";
			document.getElementById("downloadPopUp").innerHTML="<p style='color:green;font-size:32px'><i class='fas fa-check-circle'></i><p><br>Tu documento ha sido descargado con éxito. Revisa tu carpeta de descargas!";
		}
	}
}

function checkEmail(){
	var i;
	var arr=["One","Two","Three","Four"];
	var flag=0;
	for (i = 0; i < 4; i++) {
		if(document.getElementById("heading"+arr[i]).getAttribute('flag')=='true'){
			flag=i+1;
		}
	}
	if(flag==0){
		document.getElementById("emailModalLabel").innerHTML="Operación Fallida";
		document.getElementById("emailPopUp").innerHTML="<p style='color:red;font-size:32px'><i class='fas fa-exclamation-triangle'></i><p><br>Debes elegir un tipo de documento para poder enviarlo por correo, especificando sus detalles en caso de ser necesario!";
	}
	else{
		if(flag==1 && document.getElementById("exampleInputEmail1").value==""){
			document.getElementById("emailModalLabel").innerHTML="Operación Fallida";
			document.getElementById("emailPopUp").innerHTML="<p style='color:red;font-size:32px'><i class='fas fa-exclamation-triangle'></i><p><br>No has especificado la Embajada, lo cual es necesario para generar el documento a enviar por correo!";
		}
		else{
			document.getElementById("emailModalLabel").innerHTML="Operación Exitosa";
			document.getElementById("emailPopUp").innerHTML="<p style='color:green;font-size:32px'><i class='fas fa-check-circle'></i><p><br>Tu documento ha sido enviado por correo con éxito. Revisa tu correo!";
		}
	}
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})