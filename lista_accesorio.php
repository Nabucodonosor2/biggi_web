<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("appl.ini");
require_once(dirname(__FILE__)."/common_appl/class_Template_biggi_web.php");

$cod_familia = $_REQUEST['cod_familia'];
$cod_zona = $_REQUEST['cod_zona'];
$tipo = $_REQUEST['tipo']; //tipo=1->producto standard; tipo=2->producto econoline
$temp = new Template_biggi_web('lista_accesorio.html');
$sub_cod_familia = $_REQUEST['sub_cod_familia'];

$sql = "select 'ACCESORIOS' NOM_ZONA
  			  ,NOM_FAMILIA
 		from   ZONA, FAMILIA
 		where  COD_ZONA = $cod_zona
	 	and    COD_FAMILIA  = $cod_familia";
 
$dw = new datawindow($sql);
$dw->retrieve();
$dw->habilitar($temp, true);
$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
//$sql = "exec spdw_listado_accesorio_new {KEY1}";
$sql = "exec spdw_listado_accesorio {KEY1}";
$dw = new datawindow($sql, "PRODUCTO");

//$dw->add_control(new static_num('ATRIBUTOS1'));
$dw->add_control(new static_num('PRECIO1'));
//$dw->add_control(new static_num('PRECIO2'));
$dw->retrieve($cod_familia);
$dw->add_field('COD_PRODUCTO_ENCODE1');
//$dw->add_field('COD_PRODUCTO_ENCODE2');
$dw->add_field('CONTROL_A');
//$dw->add_field('CONTROL_B');

$dw->add_field('COD_ZONA');
$dw->add_field('COD_FAMILIA');
$dw->add_field('DIRECCION');

$standar='familia_producto.php';
$econo='familia_producto_e.php';

$posicion = 'background-position:0 -39px';
if($tipo == 1){
	$temp->setVar("VOLVER_LISTA", '<a href="productos.php"><< Volver a productos</a>');
	$temp->setVar("POSICION_STAND", "$posicion");
}
else{
	$temp->setVar("VOLVER_LISTA", '<a href="econoline.php">&nbsp;&nbsp;<img src="images/ico-back.png" width="11" height="9">&nbsp;&nbsp;Volver a productos</a>');
	$temp->setVar("POSICION_ECO", "$posicion");
}
if($sub_cod_familia != 0){
	$temp->setVar("VOLVER_A_PRODUCTO", '<a href="productos.php?cod_zona='.$cod_zona.'&cod_familia='.$sub_cod_familia.'&tipo='.$tipo.'">&nbsp;&nbsp;<img src="images/volver _aproductos.png" width="230" height="34" align="right"></a>');
	
	for($i=0; $i<$dw->row_count();$i++) {
		$dw->set_item($i, 'COD_PRODUCTO_ENCODE1', urlencode($dw->get_item($i, 'COD_PRODUCTO1')));
		//$dw->set_item($i, 'COD_PRODUCTO_ENCODE2', urlencode($dw->get_item($i, 'COD_PRODUCTO2')));
		$dw->set_item($i, 'COD_ZONA', '');
		$dw->set_item($i, 'COD_FAMILIA', $sub_cod_familia);
			
	}
$tope = $dw->row_count()-1;
	
	for($i=0; $i<$dw->row_count();$i++) {
		$dw->set_item($i, 'COD_ZONA', $cod_zona);
		$dw->set_item($i, 'COD_FAMILIA', $cod_familia);
		/*if($tope==$i){
			$img_chica_1 = 'imagen_chica.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1'));
			
			
			
			$link_cotizador_a = 'cotizador.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;	
			$nom_producto1 = $dw->get_item($i, 'NOM_PRODUCTO1');
			$atributos1 = '';
			$precio1 = $dw->get_item($i, 'PRECIO1');
			$precio_format = number_format($precio1, 0, ',', '.');
			$link_catalogo_a = 'fichaProducto.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
			$control_a='
				<ul>
					<li>
						<figure>
							<img src='.$img_chica_1.' height="130" width="130">
						</figure>
						<div>
							<div class="contenedor_h1"><h1 class="h1_familia">'.$nom_producto1.'</h1></div>
								<hr class="hr_familia"> 
			<!--				no se le pone el <ol>, viene del procedimiento asi				-->
							<div class="scroll_familia" style="overflow-x:hidden; overflow-y:auto;">
								
									'.$atributos1.'
								
							</div>
							<div class="precio_familia">
								<label class="label_familia">Modelos: '.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'</label>
								<h5 class="h5_familia">Precio: $ '.$precio_format.' + IVA</h5>
							</div>
							<a href="'.$link_cotizador_a.'">
								<div class="cotizador_familia"><h5>Agregar al cotizador</h5></div>
							</a>
							<a href="'.$link_catalogo_a.'">
								<div class="cotizador_familia"><h5>Ver Catálogo</h5></div>
							</a>
						</div>
					</li>
				</ul>
			';	
			$control_b='';
		}else{
			$img_chica_1 = 'imagen_chica.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1'));
			
			$link_cotizador_a = 'cotizador.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
			$nom_producto1 = $dw->get_item($i, 'NOM_PRODUCTO1');
			$atributos1 = '';
			$precio1 = $dw->get_item($i, 'PRECIO1');
			$precio_format = number_format($precio1, 0, ',', '.');
			$link_catalogo_a = 'fichaProducto.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
			
			$img_chica_2 = 'imagen_chica.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO2'));
			
			$link_cotizador_b = 'cotizador.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO2')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
			$nom_producto2 = $dw->get_item($i, 'NOM_PRODUCTO2');
			$atributos2 = '';
			$precio2 = $dw->get_item($i, 'PRECIO2');
			$precio2_format = number_format($precio2, 0, ',', '.');
			$link_catalogo_b = 'fichaProducto.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO2')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
		
			$control_a='<ul>
							
					<li>
						<figure>
							<img src='.$img_chica_1.' height="130" width="130">
						</figure>
						<div>
							<div class="contenedor_h1"><h1 class="h1_familia">'.$nom_producto1.'</h1></div>
							<hr class="hr_familia"> 
			<!--				no se le pone el <ol>, viene del procedimiento asi				-->
							<div class="scroll_familia" style="overflow-x:hidden; overflow-y:auto;">
								
									'.$atributos1.'
								
							</div>
							<div class="precio_familia">
								<label class="label_familia">Modelos: '.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'</label>
								<h5 class="h5_familia">Precio: $ '.$precio_format.' + IVA</h5>
							</div>
							<a href="'.$link_cotizador_a.'">
								<div class="cotizador_familia"><h5>Agregar al cotizador</h5></div>
							</a>
							<a href="'.$link_catalogo_a.'">
								<div class="cotizador_familia"><h5>Ver Catálogo</h5></div>
							</a>
						</div>
					</li>
				</ul>
			';	
			$control_b='<ul>
					<li>
						<figure>
							<img src='.$img_chica_2.' height="130" width="130">
						</figure>
						<div>
							<div class="contenedor_h1"><h1 class="h1_familia">'.$nom_producto2.'</h1></div>
							<hr class="hr_familia"> 
			<!--				no se le pone el <ol>, viene del procedimiento asi				-->
							<div class="scroll_familia" style="overflow-x:hidden; overflow-y:auto;">
								
									'.$atributos2.'
								
							</div>	
							<div class="precio_familia">
								<label class="label_familia">Modelos: '.urlencode($dw->get_item($i, 'COD_PRODUCTO2')).'</label>
								<h5 class="h5_familia">Precio: $ '.$precio2_format.' + IVA</h5>
							</div>
							<a href="'.$link_cotizador_b.'">
								<div class="cotizador_familia"><h5>Agregar al cotizador</h5></div>
							</a>
							<a href="'.$link_catalogo_b.'">
								<div class="cotizador_familia"><h5>Ver Catálogo</h5></div>
							</a>
						</div>	
					</li>
				</ul>
			';
		}*/
		$img_chica_1 = 'imagen_chica.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1'));
		$link_cotizador_a = 'cotizador.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;	
		$nom_producto1 = $dw->get_item($i, 'NOM_PRODUCTO1');
		$atributos1 = $dw->get_item($i, 'ATRIBUTOS1');
		$precio1 = $dw->get_item($i, 'PRECIO1');
		$precio_format = number_format($precio1, 0, ',', '.');
		$link_catalogo_a = 'fichaProducto.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
		$control_a='
			<div class="searchAcc">
				<ul>
					<li>
						<!-- <img src='.$img_chica_1.' height="130" width="130"> -->
					</li>
					<li>	
						<h1>'.$nom_producto1.'</h1>
							'.$atributos1.'
					</li>
					<li>			
							<h1>Modelo: '.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'</h1>
							<p>Precio: $ '.$precio_format.' + IVA</p>
					</li>
					<li>
							<a href="'.$link_catalogo_a.'"><img src="images/icoCatalog.png" alt="Ver Catálogo"></a>
							<a href="'.$link_cotizador_a.'"><img src="images/icoCotiza.png" alt="Añadir al Cotizador"></a>
					</li>
				</ul>
			</div>	
		';	
		$dw->set_item($i,'CONTROL_A', $control_a);
		//$dw->set_item($i,'CONTROL_B', $control_b);
	}
	
	
	$dw->habilitar($temp, true);
}else{
	$temp->setVar("VOLVER_A_PRODUCTO", '<a href="lista_producto.php?cod_zona='.$cod_zona.'&cod_familia='.$cod_familia.'&tipo='.$tipo.'">&nbsp;&nbsp;<img src="images/volver _aproductos.png" width="230" height="34" align="right"></a>');
	
	for($i=0; $i<$dw->row_count();$i++) {
		$dw->set_item($i, 'COD_PRODUCTO_ENCODE1', urlencode($dw->get_item($i, 'COD_PRODUCTO1')));
		$dw->set_item($i, 'COD_ZONA', '');
		$dw->set_item($i, 'COD_FAMILIA', $cod_familia);
			
	}
$tope = $dw->row_count()-1;
	
for($i=0; $i<$dw->row_count();$i++) {
		$dw->set_item($i, 'COD_ZONA', $cod_zona);
		$dw->set_item($i, 'COD_FAMILIA', $cod_familia);
		/*if($tope==$i){
			$img_chica_1 = 'imagen_chica.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1'));
			
			
			
			$link_cotizador_a = 'cotizador.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;	
			$nom_producto1 = $dw->get_item($i, 'NOM_PRODUCTO1');
			$atributos1 = '';
			$precio1 = $dw->get_item($i, 'PRECIO1');
			$precio_format = number_format($precio1, 0, ',', '.');
			$link_catalogo_a = 'fichaProducto.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
			$control_a='
				<ul>
					<li>
						<figure>
							<img src='.$img_chica_1.' height="130" width="130">
						</figure>
						<div>
							<div class="contenedor_h1"><h1 class="h1_familia">'.$nom_producto1.'</h1></div>
								<hr class="hr_familia"> 
			<!--				no se le pone el <ol>, viene del procedimiento asi				-->
							<div class="scroll_familia" style="overflow-x:hidden; overflow-y:auto;">
								
									'.$atributos1.'
								
							</div>
							<div class="precio_familia">
								<label class="label_familia">Modelos: '.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'</label>
								<h5 class="h5_familia">Precio: $ '.$precio_format.' + IVA</h5>
							</div>
							<a href="'.$link_cotizador_a.'">
								<div class="cotizador_familia"><h5>Agregar al cotizador</h5></div>
							</a>
							<a href="'.$link_catalogo_a.'">
								<div class="cotizador_familia"><h5>Ver Catálogo</h5></div>
							</a>
						</div>
					</li>
				</ul>
			';	
			$control_b='';
		}else{
			$img_chica_1 = 'imagen_chica.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1'));
			
			$link_cotizador_a = 'cotizador.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
			$nom_producto1 = $dw->get_item($i, 'NOM_PRODUCTO1');
			$atributos1 = '';
			$precio1 = $dw->get_item($i, 'PRECIO1');
			$precio_format = number_format($precio1, 0, ',', '.');
			$link_catalogo_a = 'fichaProducto.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
			
			$img_chica_2 = 'imagen_chica.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO2'));
			
			$link_cotizador_b = 'cotizador.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO2')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
			$nom_producto2 = $dw->get_item($i, 'NOM_PRODUCTO2');
			$atributos2 = '';
			$precio2 = $dw->get_item($i, 'PRECIO2');
			$precio2_format = number_format($precio2, 0, ',', '.');
			$link_catalogo_b = 'fichaProducto.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO2')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
		
			$control_a='<ul>
							
					<li>
						<figure>
							<img src='.$img_chica_1.' height="130" width="130">
						</figure>
						<div>
							<div class="contenedor_h1"><h1 class="h1_familia">'.$nom_producto1.'</h1></div>
							<hr class="hr_familia"> 
			<!--				no se le pone el <ol>, viene del procedimiento asi				-->
							<div class="scroll_familia" style="overflow-x:hidden; overflow-y:auto;">
								
									'.$atributos1.'
								
							</div>
							<div class="precio_familia">
								<label class="label_familia">Modelos: '.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'</label>
								<h5 class="h5_familia">Precio: $ '.$precio_format.' + IVA</h5>
							</div>
							<a href="'.$link_cotizador_a.'">
								<div class="cotizador_familia"><h5>Agregar al cotizador</h5></div>
							</a>
							<a href="'.$link_catalogo_a.'">
								<div class="cotizador_familia"><h5>Ver Catálogo</h5></div>
							</a>
						</div>
					</li>
				</ul>
			';	
			$control_b='<ul>
					<li>
						<figure>
							<img src='.$img_chica_2.' height="130" width="130">
						</figure>
						<div>
							<div class="contenedor_h1"><h1 class="h1_familia">'.$nom_producto2.'</h1></div>
							<hr class="hr_familia"> 
			<!--				no se le pone el <ol>, viene del procedimiento asi				-->
							<div class="scroll_familia" style="overflow-x:hidden; overflow-y:auto;">
								
									'.$atributos2.'
								
							</div>	
							<div class="precio_familia">
								<label class="label_familia">Modelos: '.urlencode($dw->get_item($i, 'COD_PRODUCTO2')).'</label>
								<h5 class="h5_familia">Precio: $ '.$precio2_format.' + IVA</h5>
							</div>
							<a href="'.$link_cotizador_b.'">
								<div class="cotizador_familia"><h5>Agregar al cotizador</h5></div>
							</a>
							<a href="'.$link_catalogo_b.'">
								<div class="cotizador_familia"><h5>Ver Catálogo</h5></div>
							</a>
						</div>	
					</li>
				</ul>
			';
		}*/
		$img_chica_1 = 'imagen_chica.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1'));
		$link_cotizador_a = 'cotizador.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;	
		$nom_producto1 = $dw->get_item($i, 'NOM_PRODUCTO1');
		$atributos1 = $dw->get_item($i, 'ATRIBUTOS1');
		$precio1 = $dw->get_item($i, 'PRECIO1');
		$precio_format = number_format($precio1, 0, ',', '.');
		$link_catalogo_a = 'fichaProducto.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
		$control_a='
			<div class="searchAcc">
				<ul>
					<li>
						<!-- <img src='.$img_chica_1.' height="130" width="130"> -->
					</li>
					<li>	
						<h1>'.$nom_producto1.'</h1>
							'.$atributos1.'
					</li>
					<li>			
							<h1>Modelo: '.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'</h1>
							<!-- <p>Precio: $ '.$precio_format.' + IVA</p> -->
					</li>
					<li>
							<a href="'.$link_catalogo_a.'"><img src="images/icoCatalog.png" alt="Ver Catálogo"></a>
							<a href="'.$link_cotizador_a.'"><img src="images/icoCotiza.png" alt="Añadir al Cotizador"></a>
					</li>
				</ul>
			</div>	
		';
		$dw->set_item($i,'CONTROL_A', $control_a);
		//$dw->set_item($i,'CONTROL_B', $control_b);
	}
	$dw->habilitar($temp, true);
}
print $temp->toString();
?>