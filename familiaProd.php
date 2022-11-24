<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("appl.ini");
require_once(dirname(__FILE__)."/common_appl/class_Template_biggi_web.php");

$cod_familia = $_REQUEST['cod_familia'];
$a_cod_familia = $_REQUEST['cod_familia'];
$cod_zona = $_REQUEST['cod_zona'];
$sub_cod_zona = $_REQUEST['cod_zona'];
$tipo = $_REQUEST['tipo']; //tipo=1->producto standard; tipo=2->producto econoline
$swich = false;

function folder_producto($cod_producto){
	$cod_producto_folder = preg_replace("%[^A-Z^0-9^-]%", "_", $cod_producto);
	return "../producto_imagen/producto/$cod_producto_folder";
}
	
function cod_producto_char($cod_producto){
	$cod_producto = preg_replace("%[^A-Z^0-9^-]%", "_", $cod_producto);
	return $cod_producto;
}

$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);	
if (isset($_REQUEST['sub_cod_familia']))
	$sub_cod_familia = $_REQUEST['sub_cod_familia'];
else {
	$sql_sub = "SELECT COD_SUBFAMILIA 
	  		  FROM FAMILIA_SUBFAMILIA
	  		  WHERE COD_FAMILIA = $cod_familia
	  		  order by ORDEN";
	$result_sub = $db->build_results($sql_sub);
	if (count($result_sub)==0)
		$sub_cod_familia = 0;	// no tiene subfamilia
	else
		$sub_cod_familia = $result_sub[0]['COD_SUBFAMILIA'];
	
}
$db_s = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);

	$temp = new Template_biggi_web('familiaProd.html');
	
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
	
	$sql = "select NOM_ZONA
	  			  ,NOM_PUBLICO 
	 		from   ZONA, FAMILIA
	 		where  COD_ZONA = $cod_zona
		 	and    COD_FAMILIA  = $cod_familia";
	 
	$dw = new datawindow($sql);
	$dw->retrieve();
	$dw->habilitar($temp, true);
	//se llama a este procedimiento, porque carga los atributos con los <lo class="ol_familia">
	$sql = "exec spdw_listado_producto_new {KEY1}";
	$dw = new datawindow($sql, "PRODUCTO");
	
	$dw->add_control(new static_num('PRECIO1'));
	$dw->add_control(new static_num('PRECIO2'));
	if($sub_cod_familia <> 0)
		$dw->retrieve($sub_cod_familia);
	else
		$dw->retrieve($cod_familia);
	$dw->add_field('IMAGEN_CHICA_1');
	$dw->add_field('IMAGEN_CHICA_2');
	$dw->add_field('NOM_PRODUCTO');
	
	
	$dw->add_field('COD_ZONA');
	$dw->add_field('COD_FAMILIA');
	$dw->add_field('DIRECCION');
	$dw->add_field('NOMA_FAMILIA');
	$dw->add_field('NOMB_FAMILIA');
	$dw->add_field('DIV_SUB_FAMILIA_LISTA');
	$dw->add_field('LINK_COTIZADOR_A');
	$dw->add_field('LINK_COTIZADOR_B');
	$dw->add_field('CONTROL_A');
	$dw->add_field('CONTROL_B');
	
	/*SELECT MUESTRA FAMILIAS*/
	$sql_familia = "SELECT F.NOM_PUBLICO
						,ZF.COD_FAMILIA
						,'' NOM
						,ZF.COD_ZONA
					FROM ZONA_FAMILIA ZF, FAMILIA F 
					WHERE ZF.COD_FAMILIA = F.COD_FAMILIA
					AND ZF. COD_ZONA = $cod_zona
					ORDER BY F.NOM_PUBLICO";
	$result_familia = $db->build_results($sql_familia);
	$prodbox_A ='';
	$prodbox_B ='';
	
	for($h=0;$h<count($result_familia);$h++){
		$aux_cod_familia = $result_familia[$h]['COD_FAMILIA'];
		//caso par
		$check = '';	
		if($aux_cod_familia == $a_cod_familia ){
			$check = '<img class="boton_rojo" src="images/ico-red.png">&nbsp;&nbsp;';	
		}
		
		//if(($h % 2) == 0){
			$nom_publico	=	$result_familia[$h]['NOM_PUBLICO'];
			$aux_cod_familia	=	$result_familia[$h]['COD_FAMILIA'];
			$aux_cod_zona		=	$result_familia[$h]['COD_ZONA'];
			$prodbox_A		=	$prodbox_A.'<li><a id="lista_familia_'.$h.'" href="familiaProd.php?cod_zona='.$aux_cod_zona.'&cod_familia='.$aux_cod_familia.'&tipo=1">'.$check.$nom_publico.'</a></li>';
		//}else{
		//	$nom_publico	=	$result_familia[$h]['NOM_PUBLICO'];
		//	$aux_cod_familia	=	$result_familia[$h]['COD_FAMILIA'];
		//	$aux_cod_zona		=	$result_familia[$h]['COD_ZONA'];
		//	$prodbox_B		=	$prodbox_B.'<li><a id="lista_familia_'.$h.'" href="familiaProd.php?cod_zona='.$aux_cod_zona.'&cod_familia='.$aux_cod_familia.'&tipo=1">'.$check.$nom_publico.'</a></li>';
		//}
		if($a_cod_familia==''){
			$prodbox_A		=	$prodbox_A.'<li><a id="lista_familia_'.$h.'" href="familiaProd.php?cod_zona='.$aux_cod_zona.'&cod_familia='.$aux_cod_familia.'&tipo=1">'.$check.$nom_publico.'</a></li>';
			$prodbox_B		=	$prodbox_B.'<li><a id="lista_familia_'.$h.'" href="familiaProd.php?cod_zona='.$aux_cod_zona.'&cod_familia='.$aux_cod_familia.'&tipo=1">'.$nom_publico.'</a></li>';
		}
		
	}
	$temp->setVar("NOMA_FAMILIA", $prodbox_A);//VARIABLE QUE MUESTRA LOS LINK
	$temp->setVar("NOMB_FAMILIA", $prodbox_B);//VARIABLE QUE MUESTRA LOS LINK
	
	if($sub_cod_familia <> 0){
		$sql_sub_f ="SELECT F.NOM_PUBLICO , CONVERT(VARCHAR,FS.COD_SUBFAMILIA), A.COD_FAMILIA, A.NOM_PUBLICO NOM_SUBFAMILIA 
					  FROM FAMILIA F , FAMILIA_SUBFAMILIA FS, FAMILIA A
					 WHERE F.COD_FAMILIA = $cod_familia
					 AND F.COD_FAMILIA = FS.COD_FAMILIA
					 and FS.COD_SUBFAMILIA = A.COD_FAMILIA
					 and A.ES_SUBFAMILIA = 'S'
					 and A.ECONOLINE = 'N'
					   order by FS.ORDEN";
		$result_f = $db_s->build_results($sql_sub_f);
		$sub_prodbox_A	=	"";
		$sub_prodbox_B	=	"";
		
		$sql = "SELECT  count(*) CANT				
				  FROM FAMILIA_ACCESORIO FA , PRODUCTO P 
				  WHERE FA.COD_FAMILIA =$sub_cod_familia
			     	AND P.COD_PRODUCTO = FA.COD_PRODUCTO";
		$result = $db_s->build_results($sql);
		$cant = $result[0]['CANT'];
		
		if($cant != 0){
			$accesorio="lista_accesorio.php?cod_zona=$cod_zona&cod_familia=$sub_cod_familia&tipo=$tipo&sub_cod_familia=$cod_familia";
			$img='<img align="right" height="34px" width="200" src="images/accesorios_boton.png">';
			$swich = true;
		}
		else{
			$swich = false;
		}
		
		$aux_sub_cod_familia = $sub_cod_familia;
		for($x=0;$x<count($result_f);$x++){
			//caso par
			$nom_publico = $result_f[$x]['NOM_SUBFAMILIA'];
			$sub_cod_familia = $result_f[$x]['COD_FAMILIA'];
			
		$check_sub = '';	
		if($aux_sub_cod_familia == $sub_cod_familia ){
			$check_sub = '<img src="images/ico-red.png" width="8">&nbsp;&nbsp;';	
		}
		
			//if(($x % 2) == 0){
				$sub_prodbox_A	=	$sub_prodbox_A.'<li><a id="lista_subfamilia_'.$x.'" href="familiaProd.php?cod_zona='.$sub_cod_zona.'&cod_familia='.$cod_familia.'&sub_cod_familia='.$sub_cod_familia.'&tipo=1">'.$check_sub.$nom_publico.'</a></li>';
			//}else{
			//	$sub_prodbox_B	=	$sub_prodbox_B.'<li><a id="lista_subfamilia_'.$x.'" href="familiaProd.php?cod_zona='.$sub_cod_zona.'&cod_familia='.$cod_familia.'&sub_cod_familia='.$sub_cod_familia.'&tipo=1">'.$check_sub.$nom_publico.'</a></li>';
			//}
				
		}
		
		$div_sub_familia = '<div class="headFamil" >
								<div class="nmf">'.$result_f[0]['NOM_PUBLICO'].'</div>
								<ul class="sousMenu">
									'.$sub_prodbox_A.'
								</ul>
								<ul class="sousMenu">
									'.$sub_prodbox_B.'
								</ul>
							</div>';
		$temp->setVar("DIV_SUB_FAMILIA_LISTA", $div_sub_familia);//VARIABLE QUE MUESTRA LOS LINK
	}
	
	$standar='productos.php';
	$econo='ecoline.php';
	
	if($sub_cod_familia <> 0)
		$sql_acc="SELECT  P.COD_PRODUCTO						
				  FROM FAMILIA_ACCESORIO FA , PRODUCTO P 
				  WHERE FA.COD_FAMILIA = $sub_cod_familia
			     	AND P.COD_PRODUCTO = FA.COD_PRODUCTO";
	else
		$sql_acc="SELECT  P.COD_PRODUCTO						
				  FROM FAMILIA_ACCESORIO FA , PRODUCTO P 
				  WHERE FA.COD_FAMILIA = $cod_familia
			     	AND P.COD_PRODUCTO = FA.COD_PRODUCTO";
	$result = $db->build_results($sql_acc);
	
	if(($result[0]['COD_PRODUCTO'] == '')){
		if($swich == false){
			$accesorio='';
			$img='';
		}
	}else{
		$accesorio="lista_accesorio.php?cod_zona=$cod_zona&cod_familia=$cod_familia&tipo=$tipo";
		$img='<img align="right" height="34px" width="200" src="images/accesorios_boton.png">';
	}
	
	$posiocion	=	'background-position:0 -39px';
	if($tipo == 1){
		$temp->setVar("VOLVER_LISTA", '<a href="productos.php"><< Volver a productos</a>');
		$temp->setVar("POSICION_STAND", "$posiocion");
	}
	else{
		$temp->setVar("VOLVER_LISTA", '<a href="econoline.php"><< Volver a productos</a>');
		$temp->setVar("POSICION_ECO", "$posiocion");
	}
	$temp->setVar("ACCESORIO",$accesorio);
	$temp->setVar("IMG",$img);
	$temp->setVar("BODY_SUBFAMILIA","");
	
	for($i=0; $i<$dw->row_count();$i++) {
		$dw->set_item($i, 'COD_ZONA', $cod_zona);
		$dw->set_item($i, 'COD_FAMILIA', $cod_familia);
		$USA_FOTO_ANTIGUA1 = $dw->get_item($i, 'USA_FOTO_ANTIGUA1');
		$USA_FOTO_ANTIGUA2 = $dw->get_item($i, 'USA_FOTO_ANTIGUA2');
		
		if($USA_FOTO_ANTIGUA1 == 'S'){
			$width1 = 173;
			$height1 = 230;
		}else{
			$width1 = 230;
			$height1 = 230;
		}
		
		if($USA_FOTO_ANTIGUA2 == 'S'){
			$width2 = 173;
			$height2 = 230;
		}else{
			$width2 = 230;
			$height2 = 230;
		}
		
		$img_chica_1 = folder_producto($dw->get_item($i, 'COD_PRODUCTO1')).'/'.cod_producto_char($dw->get_item($i, 'COD_PRODUCTO1')).'_CAT1.jpg';
		
		$link_cotizador_a = 'cotizador.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
		$nom_producto1 = $dw->get_item($i, 'NOM_PRODUCTO1');
		$atributos1 = $dw->get_item($i, 'ATRIBUTOS1');
		$precio1 = $dw->get_item($i, 'PRECIO1');
		$precio_format = number_format($precio1, 0, ',', '.');
		$link_catalogo_a = 'fichaProducto.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
		
		$img_chica_2 = folder_producto($dw->get_item($i, 'COD_PRODUCTO2')).'/'.cod_producto_char($dw->get_item($i, 'COD_PRODUCTO2')).'_CAT1.jpg';
	
		$link_cotizador_b = 'cotizador.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO2')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
		$nom_producto2 = $dw->get_item($i, 'NOM_PRODUCTO2');
		$atributos2 = $dw->get_item($i, 'ATRIBUTOS2');
		$precio2 = $dw->get_item($i, 'PRECIO2');
		$precio_format2 = number_format($precio2, 0, ',', '.');
		$link_catalogo_b = 'fichaProducto.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO2')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
	
		$control_a='
			<ul>
				<li>
					<a href="'.$link_catalogo_a.'">
						<div class="vouFoto" align="center">
							<img src='.$img_chica_1.' width="'.$width1.'" height="'.$height1.'">
						</div>
					</a>
					<h1>'.$nom_producto1.'</h1><hr/>
					<div class="vouTxt">
					<!--no se le pone el <ol>, viene del procedimiento asi-->
					'.$atributos1.'
					</div>
					<a href="'.$link_catalogo_a.'">
						<div class="precio" style="padding-bottom: 7px; padding-top: 6px;">
							<label>Modelo: '.urldecode($dw->get_item($i, 'COD_PRODUCTO1')).'</label>
							<br style="margin-bottom: 3px;">
							<!-- <h5 style="color: white;">Precio: $ '.$precio_format.' + IVA</h5> -->
						</div>
					</a>
					<a href="'.$link_cotizador_a.'">
						<div class="cotizador"><h5>Agregar al cotizador</h5></div>
					</a>
					<a href="'.$link_catalogo_a.'">
						<div class="catalogo"><h5>Ver catálogo</h5></div>
					</a>
				</li>
			</ul>';
			
		if ($nom_producto2 == ''){
			$control_b = '';
		}else{
			$control_b='
				<ul>
					<li>
						<a href="'.$link_catalogo_b.'">
							<div class="vouFoto" align="center">
								<img src='.$img_chica_2.' width="'.$width2.'" height="'.$height2.'">
							</div>
						</a>
						<h1>'.$nom_producto2.'</h1><hr/>
						<div class="vouTxt">
						<!--no se le pone el <ol>, viene del procedimiento asi-->
						'.$atributos2.'
						</div>
						<a href="'.$link_catalogo_b.'">
							<div class="precio" style="padding-bottom: 7px; padding-top: 6px;">
								<label>Modelo: '.urldecode($dw->get_item($i, 'COD_PRODUCTO2')).'</label>
								<br style="margin-bottom: 3px;">
								<!-- <h5 style="color: white;">Precio: $ '.$precio_format2.' + IVA</h5> -->
							</div>
						</a>
						<a href="'.$link_cotizador_b.'">
							<div class="cotizador"><h5>Agregar al cotizador</h5></div>
						</a>
						<a href="'.$link_catalogo_b.'">
							<div class="catalogo"><h5>Ver catálogo</h5></div>
						</a>
					</li>
				</ul>';
		}
		$dw->set_item($i,'CONTROL_A', $control_a);
		$dw->set_item($i,'CONTROL_B', $control_b);
	}
	
	$dw->habilitar($temp, true);

print $temp->toString();
?>