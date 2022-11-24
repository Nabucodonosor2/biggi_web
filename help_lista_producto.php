<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("class_help_producto_web.php");

$sql = $_REQUEST['sql'];
$sql = str_replace("\\'", "'", $sql);		// Las comillas simples ', vuelven como \'

help_producto_web::draw_htm_lista_producto($sql);
?>