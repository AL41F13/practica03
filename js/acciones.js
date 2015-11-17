// JavaScript Document
$(document).ready(function(e) {  // esperar que el documento este listo
document.addEventListener("deviceready",function(){  // esperar asta que el dispositvo este listo
$("#btnconsulta"), on  ("click",function () { // esto solo hace que de click al elmento de btnconsulta
	alert ("preguntando.....");
	function pregunta()
	{
		datos=""; // crear una variebla llamada datos 
		$.ajax({  type:"POST", url:"192.168.1.30/procesar.php", // el tipo de informacion tipo post y en donde se va a enviar la in formacion  la cual la recibira post 
		data: datos 
		}).done(function (mensaje){
			alert (mensaje); 
		});//done
	}//pregunta

	
});


}); 
});

