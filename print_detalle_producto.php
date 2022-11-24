<?php
require_once("appl.ini");
require_once(dirname(__FILE__)."/../biggi_comercial/trunk/appl/producto_web/class_print_folleto_producto.php");
require_once(dirname(__FILE__)."/../biggi_comercial/trunk/appl/producto_web/FPDF/fpdf.php");
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");

$cod_producto = urldecode($_REQUEST['cod_producto']);

$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
$sql = "SELECT dbo.f_prod_web('$cod_producto') ES_PUBLICADO_WEB";
$result = $db->build_results($sql);

if($result[0]['ES_PUBLICADO_WEB'] == 'S'){
	$pdf = new FPDF('P','pt','letter');
	$print = new print_folleto_producto();
	
	$print->folleto($cod_producto, $pdf);
	$pdf->Output("Folleto.pdf", 'I');
}else{
	header ("Location:error404.php");
}
?>