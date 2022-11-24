<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("appl.ini");
require_once(dirname(__FILE__)."/common_appl/class_Template_biggi_web.php");

$temp = new Template_biggi_web('representantes.html');

$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
			$sql = "SELECT 	COD_REPRESENTANTE
							,NOM_REGION
							,LINEA_UNO
							,LINEA_DOS
							,LINEA_TRES
							,LINEA_CUATRO
							,LINEA_CINCO
					FROM REPRESENTANTE		
					ORDER BY ORDEN ASC";
			
			$dw = new datawindow($sql,'ZONA');
			$dw->retrieve();
			$result = $db->build_results($sql);
			
			$dw->add_field('NOM_REGION');
			$dw->add_field('LINEA_UNO');
			$dw->add_field('LINEA_DOS');
			$dw->add_field('LINEA_TRES');
			$dw->add_field('LINEA_CUATRO');
			$dw->add_field('LINEA_CINCO');
			for($i=0; $i<$dw->row_count();$i++){
				$dw->set_item($i,'NOM_REGION', $result[$i]['NOM_REGION']);
				$dw->set_item($i,'LINEA_UNO', $result[$i]['LINEA_UNO']);
				$dw->set_item($i,'LINEA_DOS', $result[$i]['LINEA_DOS']);
				$dw->set_item($i,'LINEA_TRES', $result[$i]['LINEA_TRES']);
				$dw->set_item($i,'LINEA_CUATRO', $result[$i]['LINEA_CUATRO']);
				$dw->set_item($i,'LINEA_CINCO', $result[$i]['LINEA_CINCO']);
			}
$dw->habilitar($temp, true);	
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

print $temp->toString();				
?>