<?php
//ini_set('display_errors', 'On');
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("appl.ini");
require_once(dirname(__FILE__)."/common_appl/class_Template_biggi_web.php");

$temp = new Template_biggi_web('productos.html');

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
/**
 * Carga los items y sus productos.
**/

$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
			$sql = "SELECT COD_ZONA,
						NOM_ZONA,
						ORDEN,
						'' NOMB_FAMILIA 
					FROM ZONA
				WHERE ECONOLINE = 'N'
				AND PUBLICA_WEB = 'S'
				ORDER BY ORDEN";
			$dw = new datawindow($sql,'ZONA_FAMILIA');
			$dw->retrieve();
			$result = $db->build_results($sql);
			
			$dw->add_field('NOM_ZONA');
			$dw->add_field('NOMB_FAMILIA');
			$dw->add_field('RUTA_ZONA');
			$dw->add_field('RUTA_FAMILIA');
			//Cada dos "Header" debe abrir y cerrar un <li>
			//contar=cantidad de header que dibuja
			$contar=0;
			
			for($i=0; $i<$dw->row_count();$i++){
				if($contar<2){//la primera vez que entra pasa, y dibuja el header
					$cod_zona = $result[$i]['COD_ZONA'];
					$dw->set_item($i,'NOM_ZONA', $result[$i]['NOM_ZONA']);
					$dw->set_item($i,'NOMB_FAMILIA', '1');
									
					$sql_familia = "SELECT F.NOM_PUBLICO ,
										   ZF.COD_FAMILIA,
										   '' NOM,
										   ZF.COD_ZONA
									FROM ZONA_FAMILIA ZF, FAMILIA F 
									WHERE ZF.COD_FAMILIA = F.COD_FAMILIA
									AND ZF. COD_ZONA = $cod_zona
									ORDER BY F.NOM_PUBLICO";
					//$dw_familia = new datawindow($sql_familia,'FAMILIA');
					$result_familia = $db->build_results($sql_familia);
				 	//cuando se presiona el header para entrar en la familiaProd el cod familia que se le pasa
					//es el primer producto que hay en la lista y la foto del header
					if($cod_zona == 1){
						 $img='images/prod01.png';// autoservicio
						 $cod_familia=1;			//Bandejeros
					}else if($cod_zona == 2){
						 $img='images/prod02.png';// zona lavado
						 $cod_familia=25;			//Lavamanos
					}else if($cod_zona == 3){
						 $img='images/prod03.png';// bodega
						 $cod_familia=6;			//Estantes
					}else if($cod_zona == 4){			
						 $img='images/prod04.png';// cocina fria
						 $cod_familia=23;			//Batidoras
					}else if($cod_zona == 5){
						 $img='images/prod05.png';// preelaboracion
						 $cod_familia=107;			//Armarios y Gabinetes			
					}else if($cod_zona == 6){
						 $img='images/prod06.png';// cocina caliente
						 $cod_familia=4;			//Anafes y Cocinas Industriales
					}else if($cod_zona == 7){
						 $img='images/prod07.png';// zona recepcion
						 $cod_familia=1;			//Bandejeros
					}else if($cod_zona == 18){	
						 $img='images/prod08.png';//Repuestos y Accesorios
						 $cod_familia=86;			//Depósitos resina
					}
					//carga controles 					
					$image_zona='background:url('.$img.') #fff no-repeat top right;';
					
					
					
					$href_header = 'familiaProd.php?cod_zona='.$cod_zona.'&cod_familia='.$cod_familia.'&tipo=1';
					$h1_inicio = '<a href="'.$href_header.'"><h1>';
					$h1_fin ='</h1></a>';
					$div_inicio='<div class="prodClass" height="330px" style="'.$image_zona.'">';
					$div_fin='</div>';
					$prodbox='';
					$li_inicio = '<li>';
					$li_fin = '</li>';
					
					$contar++;//sumamos uno mas al contar, queda en 1
						for($h=0;$h<count($result_familia);$h++){//dibuja los productos del header
							$nom_publico = $result_familia[$h]['NOM_PUBLICO'];
							$cod_familia = $result_familia[$h]['COD_FAMILIA'];
							$cod_zona =    $result_familia[$h]['COD_ZONA'];
							if($h == 0){
								if($contar==1)//cada vez qie sea 1, va a poner la <li>
									$dw->set_item($i,'NOM_ZONA',$li_inicio.$div_inicio.$h1_inicio.$result[$i]['NOM_ZONA'].$h1_fin);
								else//cuando sea 2 va a dibujar el mismo div, pero sin el <li>	
									$dw->set_item($i,'NOM_ZONA',$div_inicio.$h1_inicio.$result[$i]['NOM_ZONA'].$h1_fin);
							}
							$ruta_familia='familiaProd.php?cod_zona='.$cod_zona.'&cod_familia='.$cod_familia.'&tipo=1';
							$prodbox=$prodbox.'<ol><a href="'.$ruta_familia.'">'.$nom_publico.'</a></ol>';
						}
				if($contar==1)//cuando contar sea 1, va a terminar la lista de productos sin el <li>		
					$dw->set_item($i,"NOMB_FAMILIA",$prodbox.$div_fin);
				else//cuando sea dos debe terminar la sentencia con un </li>
					$dw->set_item($i,"NOMB_FAMILIA",$prodbox.$div_fin.$li_fin);
					
				if($contar==2)//si contar es 2, se inicializa en 0 para que pase denuevo por el for;
					$contar=0;		
			}				
		}
$dw->habilitar($temp, true);	
print $temp->toString();		
?>