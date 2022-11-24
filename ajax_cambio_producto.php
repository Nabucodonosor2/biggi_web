<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("appl.ini");

$cod_producto = urldecode($_REQUEST['cod_producto']);
$nom_producto = urldecode($_REQUEST['nom_producto']); 
$vl_record = $_REQUEST['vl_record'];
$precio = urldecode($_REQUEST['precio']);
$cantidad = $_REQUEST['cantidad'];

$dw_cotizador = session::get('dw_cotizador');

for ($i = 0; $i < $dw_cotizador->row_count(); $i++){
	if($dw_cotizador->redirect($i) == $vl_record){
		$dw_cotizador->set_item($i, 'COD_PRODUCTO',$cod_producto );
		$dw_cotizador->set_item($i, 'NOM_PRODUCTO',$nom_producto );
		$dw_cotizador->set_item($i, 'CANTIDAD',$cantidad );
		$dw_cotizador->set_item($i, 'PRECIO_VENTA_PUBLICO',$precio );
		
		$dw_cotizador->set_item($i, 'COD_PRODUCTO2', urlencode($cod_producto));
		$dw_cotizador->set_item($i, 'COD_ZONA',$cod_zona);
		$dw_cotizador->set_item($i, 'COD_FAMILIA',$cod_familia);
	}
session::set('dw_cotizador', $dw_cotizador);
}

?>