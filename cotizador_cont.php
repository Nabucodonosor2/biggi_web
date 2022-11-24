<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("appl.ini");
require_once(dirname(__FILE__)."/common_appl/class_Template_biggi_web.php");

//buscar productos en oferta,para ocultar o mostrar el menu ofertas
//-------------------------------------------------------------------
$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
$sql_producto = "SELECT * ,
				'' VISIBLE_OFERTAS	
				 FROM PRODUCTO 
			     WHERE PUBLICAR_EN_HOME = 'S'";

$result = $db->build_results($sql_producto);
$prod_oferta = count($result);
if($prod_oferta == 0){
	$temp->setVar("VISIBLE_OFERTAS",'none');
}	
//-------------------------------------------------------------------
if (isset($_POST['b_volver'])) {
	$dw_contacto = session::get('dw_contacto');
	$dw_contacto->get_values_from_POST();
	session::set('dw_contacto', $dw_contacto);
	header('Location: cotizador.php?opcion=1');
}
/*else if (isset($_POST['b_enviar'])) {
	$dw_contacto = session::get('dw_contacto');
	$dw_contacto->get_values_from_POST();
	session::set('dw_contacto', $dw_contacto);
	header('Location: enviar_cotizador.php');
}*/
else {	// viene del listado de items cotizados
	$temp = new Template_biggi_web('cotizador_cont.html');

	if (session::is_set('dw_contacto')) {
		$dw_contacto = session::get('dw_contacto');
	}else{
			$sql ="SELECT  NULL NOMBRE
				   		  ,NULL EMAIL
				   		  ,NULL RUT
				   		  ,NULL DIG_VERIF
				          ,NULL EMPRESA
				          ,NULL CIUDAD
				          ,NULL TELEFONO 
				          ,NULL CELULAR
				          ,NULL COMENTARIOS";
	  
		$dw_contacto = new datawindow($sql);
		
		$dw_contacto->add_control(new edit_text('NOMBRE',37,100));
		$dw_contacto->add_control(new edit_mail('EMAIL',37,100));
		$dw_contacto->add_control($control=new edit_num('RUT',15,8));
		$control->set_onChange('valida_numero(this.value)');
		$dw_contacto->add_control($control=new edit_num('DIG_VERIF',2,1));
		$control->set_onChange('valida_numero(this.value)');
		$dw_contacto->add_control(new edit_text('EMPRESA',37,100));
		$dw_contacto->add_control(new edit_text('CIUDAD',37,50));
		$dw_contacto->add_control(new edit_text('TELEFONO',37,20));
		$dw_contacto->add_control(new edit_text('CELULAR',37,20));
		$dw_contacto->add_control(new edit_text_multiline('COMENTARIOS',27,6));
		
		$dw_contacto->retrieve();
		session::set('dw_contacto', $dw_contacto);
	}
	$dw_contacto->habilitar($temp, true);
	print $temp->toString();
}
	
?>