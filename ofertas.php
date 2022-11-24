<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("appl.ini");
require_once(dirname(__FILE__)."/common_appl/class_Template_biggi_web.php");

$temp = new Template_biggi_web('ofertas.html');

$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
$sql = "exec spdw_mostrar_oferta_web";

$dw = new datawindow($sql,"OFERTAS");

$dw->retrieve();

$dw->add_field('COD_PRODUCTO_ENCODE1');
$dw->add_field('PRUEBA');
$dw->add_field('COD_PRODUCTO');
$dw->add_field('PRECIO_ANTES_OFERTA');

$height_m = 0;

for($i=0; $i<$dw->row_count();$i++) {
	$height_t = $dw->get_item($i, 'HEIGHT_OFERTA');
	if($i == 0){
		$height_m = $dw->get_item($i, 'HEIGHT_OFERTA');
	}
	if($height_t > $height_m){
		$height_m = $height_t;
	}
	
	$dw->set_item($i, 'COD_PRODUCTO_ENCODE1', urlencode($dw->get_item($i, 'COD_PRODUCTO')));
	$dw->set_item($i, 'COD_PRODUCTO', $dw->get_item($i, 'COD_PRODUCTO'));

	$PRECIO = $dw->get_item($i, 'PRECIO_OFERTA');
	$dw->set_item($i, 'PRECIO_OFERTA',number_format($PRECIO, 0, ',', '.'));
}

for($j=0; $j < $dw->row_count(); $j++){
	$dw->set_item($j, 'PRUEBA',$height_m+10);
	$cod_producto = $dw->get_item($j, 'COD_PRODUCTO');
	$sql = "SELECT PRECIO_ANTES_DE_OFERTA
					,CASE
					WHEN PRECIO_ANTES_DE_OFERTA = 0 OR
						PRECIO_ANTES_DE_OFERTA IS NULL OR
						PRECIO_ANTES_DE_OFERTA < PRECIO_OFERTA THEN 'none'
					ELSE ''
					END DESC_ANT_OFERTA
			FROM PRODUCTO
			WHERE COD_PRODUCTO = '$cod_producto'";
	$result = $db->build_results($sql);
	$dw->set_item($j, 'PRECIO_ANTES_OFERTA', '<div style="display:'.$result[0]['DESC_ANT_OFERTA'].';font-size: 11px;">
											  	(Precio normal: $ '.number_format($result[0]['PRECIO_ANTES_DE_OFERTA'], 0, ',', '.').'.-)
											  </div>');
}
$dw->habilitar($temp, true);
print $temp->toString();
?>