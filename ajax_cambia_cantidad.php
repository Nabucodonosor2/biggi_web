<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("appl.ini");

$cantidad = $_REQUEST['cantidad'];
$cod_producto = $_REQUEST['cod_producto']; 
$dw_cotizador = session::get('dw_cotizador');
	//// Cambiar la cantidad
	for ($i = 0; $i < $dw_cotizador->row_count(); $i++){
		if($dw_cotizador->get_item($i,'COD_PRODUCTO') == $cod_producto){
				$dw_cotizador->set_item($i, 'CANTIDAD',$cantidad );
			}
		}
print $cod_producto ;
	
session::set('dw_cotizador', $dw_cotizador);

?>

