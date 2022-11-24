<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
//require_once(dirname(__FILE__)."/class_print_solicitud_cotizacion.php");

$file = session::get('PRINT_COTIZADOR');
header('Location: '."tmp/".$file);

?>