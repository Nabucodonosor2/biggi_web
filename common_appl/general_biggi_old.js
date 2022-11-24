function my_alert(ve_mensaje) {
		jQuery(function ($) {
		// Load dialog on page load
		//$('#basic-modal-content').modal();
	
		// Load dialog on clic
		$('#basic-modal-content').modal();
		$('#basic-modal-content').text(ve_mensaje);
	});
}
function validacion() {
	var nombre = document.getElementById("NOM_CONTACTO").value;
	var cod_ciudad = document.getElementById('COD_CIUDAD').value;
	var telefono = document.getElementById("TELEFONO_CONTACTO").value;
	
	if(nombre.length==0){
		my_alert("Por favor ingresar Nombre Contacto");
		return false;
	}
	if(cod_ciudad.length==0){
		my_alert("Por favor seleccionar Ciudad");
		return false;
	}
	if(telefono.length==0){
		my_alert("Por favor escriba su telefono");
		return false;
	}
}
function validate_mail(theElement ){
	var s = theElement.value;	
	var filter=/^[A-Za-z][A-Za-z0-9_.-]*@[A-Za-z0-9_-]+\.[A-Za-z0-9_.-]+[A-za-z]$/;
	if (s.length == 0 ) return true;
	if (filter.test(s))
		return true;
	else
		my_alert("Ingrese una dirección de correo válida");
		theElement.value='';
		theElement.focus();
	return false;
}