function delete_line(boton_eliminar) {
	var vl_record = get_num_rec_field(boton_eliminar.id);
	var ajax = nuevoAjax();
	var php = "ajax_elimina_tr.php?record="+vl_record+"&tipo=eliminar";
	ajax.open("GET", php, false);
	ajax.send(null);
	var tr = document.getElementById('COTIZADOR_'+vl_record); 
	tr.parentNode.removeChild(tr);
}
function limpiar() {
	//de ser un confirm
	my_alert('Al precionar el boton Limpiar se borraran los productos');
	var vl_table = document.getElementById("COTIZADOR");
	var vl_tr = document.getElementById("DW_TR_ID");
	var vl_tabla_x = vl_table.rows.length;
	 for(var i= vl_tabla_x -1; i>=0; i --){
	   vl_table.deleteRow(vl_tr);
  	}
	var ajax = nuevoAjax();
	var php = "cotizador.php?limpio=limpiar";
	ajax.open("GET", php, false);
	ajax.send(null);
}

function valida_solicitud() {
 	
 	var vl_tabla = document.getElementById('COTIZADOR');
	var aTR = vl_tabla.getElementsByTagName("tr");
	
 	for (var i=0; i<aTR.length; i++) {
		var vl_record = get_num_rec_field(aTR[i].id);
		var vl_cod_producto = document.getElementById('COD_PRODUCTO_' + vl_record).value;
			if(vl_cod_producto == ""){
			
				var ajax = nuevoAjax();
				var php = "ajax_elimina_tr.php?record="+vl_record+"&tipo=validar";
				ajax.open("GET", php, false);
				ajax.send(null);
				var tr = document.getElementById('COTIZADOR_'+vl_record); 
				tr.parentNode.removeChild(tr);
				
			}
	}
	for (var i=0; i<aTR.length; i++) {
		var vl_record = get_num_rec_field(aTR[i].id);
		var vl_cod_producto = document.getElementById('COD_PRODUCTO_' + vl_record).value;
			if(vl_cod_producto == ""){
			
				var ajax = nuevoAjax();
				var php = "ajax_elimina_tr.php?record="+vl_record+"&tipo=validar";
				ajax.open("GET", php, false);
				ajax.send(null);
				var tr = document.getElementById('COTIZADOR_'+vl_record); 
				tr.parentNode.removeChild(tr);
			}
	}
	var vl_table = document.getElementById("COTIZADOR");
	var vl_tabla_x = vl_table.rows.length;
	if(vl_tabla_x == 0){
		my_alert('Debe Seleccionar al menos 1 producto');
		return false;	
	}
	
	var vl_validate_d = validacion_datos_cotizacion();
		if(vl_validate_d == false)
			return false;
		
		cambia_producto()
	return true;		
}
function validacion_datos_cotizacion() {
/*por llenar*/
	var nom_cotizador = document.getElementById("NOM_COTIZADOR").value;
	var rut_cotizador = document.getElementById('RUT_COTIZADOR').value;
	var empresa_cotizador = document.getElementById("EMPRESA_COTIZADOR").value;
	var email_cotizador = document.getElementById("EMAIL_COTIZADOR").value;
	var ciudad_cotizador = document.getElementById("CIUDAD_COTIZADOR").value;
	var fono_cotizador = document.getElementById("FONO_COTIZADOR").value;
	var cel_cotizador = document.getElementById("CEL_COTIZADOR").value;
	var obs_cotizador = document.getElementById("OBS_COTIZADOR").value;
	var valida_no_soy_robot = document.getElementById("VALIDA_NO_SOY_ROBOT").value;
	
	if(email_cotizador.length==0){
		my_alert("Por favor ingresar Email Contacto");
		document.getElementById("EMAIL_COTIZADOR").focus();
		return false;
	}else if (email_cotizador.length > 0){
		var vl_validate = validate_mail(document.getElementById("EMAIL_COTIZADOR"));
		if(vl_validate == false)
			return false;
	}
	if(trim(fono_cotizador).length==0){
		my_alert("Por favor ingresar teléfono Contacto");
		document.getElementById("FONO_COTIZADOR").focus();
		return false;
	}
	if(valida_no_soy_robot=='N'){
		my_alert("Debe validar CAPTCHA");
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
function cambia_cantidad(vl_cant) {

 	var vl_record = get_num_rec_field(vl_cant.id);
 	var vl_cantidad =document.getElementById("CANTIDAD_"+vl_record).value;
 	var vl_cod_producto =document.getElementById("COD_PRODUCTO_"+vl_record).value;
	var ajax = nuevoAjax();
	var php = "ajax_cambia_cantidad.php?cantidad="+vl_cantidad+"&cod_producto="+URLEncode(vl_cod_producto);
	ajax.open("GET", php, false);
	ajax.send(null);
	var resp = URLDecode(ajax.responseText);
} 	

function cambia_producto() {
    

 	var vl_tabla = document.getElementById('COTIZADOR');
	var aTR = vl_tabla.getElementsByTagName("tr");
	
 	for (var i=0; i<aTR.length; i++) {
		var vl_record = get_num_rec_field(aTR[i].id);
		
	 	var vl_cod_producto = document.getElementById("COD_PRODUCTO_"+vl_record).value;
	 	var vl_nom_producto = document.getElementById("NOM_PRODUCTO_"+vl_record).value;
	 	var vl_cantidad =document.getElementById("CANTIDAD_"+vl_record).value;
	 	
	 	var vl_cod_producto_iner =document.getElementById("COD_PRODUCTO_"+vl_record).innerHTML;
	 		 	
	 	var vl_precio = document.getElementById("PRECIO_VENTA_PUBLICO_"+vl_record).innerHTML;
	 	vl_precio = vl_precio.replace(".","");
	 	vl_precio_venta = to_num(vl_precio);
	 	
	 	var ajax = nuevoAjax();
		var php = "ajax_cambio_producto.php?cod_producto="+URLEncode(vl_cod_producto)+"&nom_producto="+URLEncode(vl_nom_producto)+"&vl_record="+vl_record+"&precio="+vl_precio_venta+"&cantidad="+vl_cantidad;
		ajax.open("GET", php, false);
		ajax.send(null);
		
	}
	
	return true;
	
 	
	
}

function agregar_linea_html(tabla_id, ve_linea) {
	/* [0] = linea html
	   [1] = focus */
	   
	var resp = ve_linea.split('|');	
	var table_aux = document.createElement("TABLE"); 
	table_aux.innerHTML = resp[0];
 	var children = table_aux.childNodes;
	for (var i=0; i < children.length; i++) {
		if (children[i].nodeName=='TBODY') {
		  	var children2 = children[i].childNodes;
		  	for (j=0; j < children2.length; j++) {
				if (children2[j].nodeName=='TR') {
					var tr_contenido = children2[j].innerHTML;
					var tabla = document.getElementById(tabla_id); 
					
					var tbody = null; 
					var child_tabla = tabla.childNodes;
					for (k=0; k < child_tabla.length; k++)
						if (child_tabla[k].nodeName=='TBODY') {
							tbody = child_tabla[k];
							break;
						}
					if (! tbody) {
						tbody = document.createElement("TBODY"); 
						tabla.appendChild(tbody);
					}		
					tbody.appendChild(children2[j]);
					var campo_id;
					if (resp[1]!='')
						campo_id = resp[1];
					else {
						// El focus quedara en el primer campo
						pos1 = tr_contenido.search(/\bid\b/);
						pos1 = tr_contenido.indexOf('"', pos1);			// abre comilla
						pos2 = tr_contenido.indexOf('"', pos1 + 1);	// cierra comilla
						campo_id = tr_contenido.substr(pos1 + 1, pos2 - pos1 - 1);
					}
					var campo = document.getElementById(campo_id); 
					campo.focus();
					return get_num_rec_field(campo.id);
				}
			}
		}
	}
}

function agregar_linea_html_ie(tabla_id, ve_linea) {
	var vl_tr = "";
	var resp = ve_linea.split('|');	
	var div_item_table = document.getElementById('DIV_' + tabla_id);
	vl_tr = resp[0];
	
	var vl_inner = div_item_table.innerHTML;
	var vl_pos = vl_inner.lastIndexOf('</TBODY></TABLE>');
	vl_inner = vl_inner.substr(0, vl_pos) + vl_tr + vl_inner.substr(vl_pos);
	div_item_table.innerHTML = vl_inner;
}

function agregar(){
	var ajax = nuevoAjax();
	ajax.open("GET", "ajax_agrega_tr.php", false);
	ajax.send(null);	
	if (navigator.appName=='Microsoft Internet Explorer')
		return agregar_linea_html_ie('COTIZADOR', ajax.responseText);
	else
		return agregar_linea_html('COTIZADOR', ajax.responseText);
}
function detale_producto(ve_aref) {
	var vl_param = ve_aref.href.split('?');
	var vl_php = vl_param[0]; 
	vl_param = vl_param[1].split('&');
	
	var vl_record = get_num_rec_field(ve_aref.parentNode.parentNode.id);
	
	var vl_cod_producto = document.getElementById('COD_PRODUCTO_' + vl_record).value;
	if (vl_cod_producto=='')
		return false;
		
	vl_href = vl_php+"?cod_producto="+URLEncode(vl_cod_producto)+"&"+vl_param[1]+"&"+vl_param[2];
	
	
	ve_aref.href = vl_href;
	return true;
}

function valida_numero(num){
	var id= get_num_rec_field(num.id);
    if (!/^([0-9])*$/.test(num.value)){
      my_alert("El(los) valor(es) " + num.value + " no es(son) un número");
     	    document.getElementById('CANTIDAD_'+id).value = 1;
     		document.getElementById('CANTIDAD_'+id).focus();
    }
}
function enableBtn(){
	document.getElementById("VALIDA_NO_SOY_ROBOT").value = 'S';	
}