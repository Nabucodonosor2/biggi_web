<?php
require_once(dirname(__FILE__)."/../../commonlib/trunk/php/auto_load.php");

require_once(dirname(__FILE__)."/../appl.ini");
require_once(dirname(__FILE__)."/class_buscador.php");

//session_destroy();

session::set('K_ROOT_URL', K_ROOT_URL);
session::set('K_ROOT_DIR', K_ROOT_DIR);
session::set('K_APPL', K_APPL);

if (!session::is_set('wo_buscador')) {
	$w = new wo_buscador();
}
else {
	$w = session::get('wo_buscador');
 	print_r($w);
 	$w->procesa_event();
}
?>