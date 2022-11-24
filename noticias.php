<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
//require_once("appl.ini");
require_once(dirname(__FILE__)."/common_appl/class_Template_biggi_web.php");

$temp = new Template_biggi_web('noticias.html');

$noticia = urldecode($_REQUEST['noticia']);
//$temp = new Template_appl('noticias.html');	
if($noticia == ''){
$noticia = 'noticia151.htm';
}
$temp->setVar("NOTICIA_INI", $noticia);

//buscar productos en oferta,para ocultar o mostrar el menu ofertas
//-------------------------------------------------------------------
$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
$sql_producto = "SELECT * ,
				'' VISIBLE_OFERTAS	
				 FROM PRODUCTO 
			     WHERE PUBLICAR_EN_HOME = 'S'";

$result = $db->build_results($sql_producto);
$prod_oferta = count($result);
if($prod_oferta==0)
	$temp->setVar("VISIBLE_OFERTAS",'none');
//-------------------------------------------------------------------
/*
$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
$sql = "select getdate() ";
$result = $db->build_results($sql);
*/
print $temp->toString();
?>