<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("appl.ini");

$record = $_REQUEST['record'];
$tipo = $_REQUEST['tipo'];

$dw_cotizador = session::get('dw_cotizador');


if ($tipo == 'eliminar'){
	for ($i = 0; $i < $dw_cotizador->row_count(); $i++){
		if($dw_cotizador->redirect($i) == $record){
			$dw_cotizador->delete_row($i);
		}
	}
}
// elimina las filas en blanco
else if($tipo == 'validar' ){
	for ($i = 0; $i < $dw_cotizador->row_count(); $i++){
		if($dw_cotizador->redirect($i) == $record){
			$dw_cotizador->delete_row($i);
		} 	
	}		
}	

session::set('dw_cotizador', $dw_cotizador);
?>