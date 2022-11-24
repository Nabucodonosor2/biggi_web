<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
$dw_cotizador = session::get('dw_cotizador');
$row = $dw_cotizador->insert_row();
$dw_cotizador->set_item($row, 'CANTIDAD', 1);
session::set('dw_cotizador', $dw_cotizador);

// retornamos el html de la nueva linea (todo el tr)
//chdir($this->work_directory);
$temp = new Template_appl("cotizador.html");
$linea = $temp->structure["blocks"]['COTIZADOR']['body'];

// crea los datos del ultimo record recien agregado
$temp->gotoNext('COTIZADOR');
$dw_cotizador->fill_record($temp, $row);	// Ultimo registro

$ind_block = array_keys($temp->content["blocks"]['COTIZADOR'][0]['values']);
for ($j=0; $j<count($temp->content["blocks"]['COTIZADOR'][0]['values']); $j++)
	$linea = str_replace('{'.$ind_block[$j].'}', $temp->content["blocks"]['COTIZADOR'][0]['values'][$ind_block[$j]], $linea);

// retorna para el ajax el html del nuevo "tr" y el campo de focus si existe
if ($dw_cotizador->first_focus != '')
	print $linea.'|'.$dw_cotizador->first_focus.'_'.$dw_cotizador->redirect($row);
else
	print $linea.'|';
?>