<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("appl.ini");
require_once(dirname(__FILE__)."/common_appl/class_Template_biggi_web.php");

function folder_producto($cod_producto){
	$cod_producto_folder = preg_replace("%[^A-Z^0-9^-]%", "_", $cod_producto);
	return "../producto_imagen/producto/$cod_producto_folder";
}
	
function cod_producto_char($cod_producto){
	$cod_producto = preg_replace("%[^A-Z^0-9^-]%", "_", $cod_producto);
	return $cod_producto;
}

$cod_producto = urldecode($_REQUEST['cod_producto']);
$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
$sql = "select COD_TIPO_PRODUCTO
		from PRODUCTO
		where COD_PRODUCTO = '$cod_producto'";
$result = $db->build_results($sql);
$cod_tipo_producto = $result[0]['COD_TIPO_PRODUCTO'];


//MH 25042022 REVISA QUE SI EL EQUIPO ESTA MARCADO COMO PARA PUBLICARSE EN WEB BIGGI
//MH 25042022 ESTABA PASANDO QUE SI UN EQUIPO NO ESTABA PUBLICADO LO PODIAN ENCONTRAR IGUAL USANDO GOOGLE POR EJEMPLO "CGC-6H"
$sql2 = "SELECT dbo.f_prod_web(COD_PRODUCTO) PUBLICA_EQ FROM PRODUCTO WHERE COD_PRODUCTO = '$cod_producto'";
$result2 = $db->build_results($sql2);
$publica_eq = $result2[0]['PUBLICA_EQ'];


if ($cod_tipo_producto==4 || $cod_tipo_producto==5 || $publica_eq == 'N') {
	//header('Location: '."index.php?link_no_valido=1");
	header('Location: '."error404.php");
	return;
}
		
$cod_zona = $_REQUEST['cod_zona'];
$cod_familia = $_REQUEST['cod_familia'];
$temp = new Template_biggi_web('fichaProducto.html');

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

$sql_fam = "SELECT NOM_PUBLICO FROM FAMILIA WHERE COD_FAMILIA = $cod_familia";
$result1 = $db->build_results($sql_fam);
$AUX_NOM_PUBLICO = $result1[0]['NOM_PUBLICO'];


//-------------------------------------------------------------------
if ($cod_zona=='') {
	$sql = "select null NOM_ZONA
  			  		,null NOM_FAMILIA";
}
else {
	$sql = "select NOM_ZONA
  			  ,NOM_FAMILIA
	 		from  ZONA, FAMILIA
			where COD_ZONA = $cod_zona
	 		and   COD_FAMILIA  = $cod_familia";
} 		

$dw = new datawindow($sql);
$dw->retrieve();
$dw->habilitar($temp, true);


$sql = "exec spdw_detalle_producto '$cod_producto'";

$dw = new datawindow($sql);
$dw->add_control(new static_num('PRECIO1'));
$dw->add_control(new static_num('VOLUMEN1',4));
$dw->add_control(new static_num('VOLUMEN_EMB1',4));
$dw->add_control(new static_text('NOM_PRODUCTO1'));
$dw->retrieve($cod_producto);
$dw->add_field('COD_PRODUCTO_ENCODE');
$dw->set_item(0, 'COD_PRODUCTO_ENCODE', urlencode($cod_producto));

$dw->add_field('COD_ZONA');
$dw->set_item(0, 'COD_ZONA', $cod_zona);

$dw->add_field('COD_FAMILIA');
$dw->set_item(0, 'COD_FAMILIA', $cod_familia);

$sql = "SELECT USA_FOTO_ANTIGUA
		FROM PRODUCTO
		WHERE COD_PRODUCTO = '$cod_producto'";
$result = $db->build_results($sql);
$USA_FOTO_ANTIGUA = $result[0]['USA_FOTO_ANTIGUA'];
$ruta_foto = folder_producto($cod_producto).'/'.cod_producto_char($cod_producto).'_CAT1.jpg';

if($USA_FOTO_ANTIGUA == 'S')
	$imagen_grande = '<img src="'.$ruta_foto.'" height="400" width="300">';
else
	$imagen_grande = '<img src="'.$ruta_foto.'" height="400" width="400">';
	
$dw->add_field('IMAGEN_GRANDE');
$dw->set_item(0, 'IMAGEN_GRANDE', $imagen_grande);

$agregar_cotizador= 'cotizador.php?cod_producto='.urlencode($cod_producto).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
$dw->add_field('LINK_COTIZADOR');
$dw->set_item(0, 'LINK_COTIZADOR', $agregar_cotizador);

$agregar_cotizador= 'href="print_detalle_producto.php?cod_producto='.urlencode($cod_producto).'"
 						target="_blank" align="center"';
$dw->add_field('LINK_PDF');
$dw->set_item(0, 'LINK_PDF', $agregar_cotizador);



$nro_cesmec = $dw->get_item(0, 'NRO_CESMEC');
if($nro_cesmec!='')
	$div = '<div id="cesmec">'.$nro_cesmec.'</div>';
else
	$div = '';


$dw->add_field('DIV_CESMEC');
$dw->set_item(0, 'DIV_CESMEC', $div);
	
$link_back = '<a href="familiaProd.php?cod_zona='.$cod_zona.'&cod_familia='.$cod_familia.'&tipo=1">VOLVER A '.$AUX_NOM_PUBLICO.'</a>';
//$link_back = 'VOLVER A '.$link_back;
$temp->setVar("VOLVER_LISTA", '<a href="productos.php"><< Volver a productos</a>');
$temp->setVar("VOLVER_LISTA1", $link_back);
// http://www.biggi.cl/sysbiggi_new/biggi_web/familiaProd.php?cod_zona=4&cod_familia=23&tipo=1
// familiaProd.php?cod_zona=4&cod_familia=23&tipo=1

////////////////// BUSCADOR ///////////
if (session::is_set('wo_buscador')) {
	$find = session::get('wo_buscador.find');
	$temp->setVar("VOLVER_BUSQUEDA", '<a href="appl/buscador/buscador_new.php?busca_producto='.$find.'" ><img align="right" height="34px" width="200" src="images/volver_abusqueda.png"></a> ');
}
/////////////////////////////

$dw->habilitar($temp, true);
print $temp->toString();
?>