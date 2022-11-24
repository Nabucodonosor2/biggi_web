<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("appl.ini");
require_once(dirname(__FILE__)."/common_appl/class_Template_biggi_web.php");

$temp = new Template_biggi_web('index.htm');	

//$this->temp = new Template_biggi_web($this->html);
$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
/*$sql_producto = "SELECT COD_PRODUCTO, NOM_PRODUCTO ,PRECIO_OFERTA
				FROM PRODUCTO 
			   WHERE ES_OFERTA = 'S'
			   AND COD_TIPO_PRODUCTO not in (4, 5) -- gasto fijo, descontinuado
			   AND ES_RECICLADO = 'N'
				AND PRECIO_OFERTA IN (SELECT MIN(PRECIO_OFERTA)
						FROM PRODUCTO 
					    WHERE ES_OFERTA = 'S')";*/
//tiene los primeros 6 productos, para mostrarlos en la pagina principal como ofertas
$sql_producto = "SELECT top (6) COD_PRODUCTO
					   ,NOM_PRODUCTO
					   ,PRECIO_OFERTA
					   ,PRECIO_ANTES_DE_OFERTA
					   ,CASE
					   		WHEN PRECIO_ANTES_DE_OFERTA = 0 OR 
					   			 PRECIO_ANTES_DE_OFERTA IS NULL OR 
					   			 PRECIO_ANTES_DE_OFERTA < PRECIO_OFERTA THEN 'none'
					   		ELSE ''
					   	END DESC_ANT_OFERTA	 
					   ,'none' VISIBLE_OFERTAS	
				 FROM PRODUCTO 
			     WHERE ES_OFERTA = 'S'";
$result = $db->build_results($sql_producto);

//cantidad de productos en oferta...
$prod_oferta = count($result);

if($prod_oferta!=0){
	$temp->setVar("VISIBLE_OFERTAS",'');
	$temp->setVar("OFERTA_1", '');
	$temp->setVar("OFERTA_2", '');
	$temp->setVar("OFERTA_3", '');
	$temp->setVar("OFERTA_4", '');
	$temp->setVar("OFERTA_5", '');
	$temp->setVar("OFERTA_6", '');
	for($i=0;$i<=$prod_oferta;$i++){
		$cod_producto = $result[$i-1]['COD_PRODUCTO'];
		$nom_producto = $result[$i-1]['NOM_PRODUCTO'];
		$precio_oferta = $result[$i-1]['PRECIO_OFERTA'];
		$precio_antes_de_oferta = $result[$i-1]['PRECIO_ANTES_DE_OFERTA'];
		$desc_ant_oferta = $result[$i-1]['DESC_ANT_OFERTA'];
		$encode = urlencode($cod_producto);
		//cambiar el href, cuando se tenga la pagina de html de ofeertas
		$oferta = '<a href="ofertas.php">
						<div class="boucher">
							<div class="bouName">'.$cod_producto.'</div>
							<div class="precio">'.number_format($precio_oferta, 0, ',', '.').' + IVA</div>
							<img src="imagen_chica.php?cod_producto='.$encode.'"width="130" height="130"/>
						</div>
					</a>'
		;		
		$temp->setVar("OFERTA_".$i, $oferta);
	}
}else{
	$temp->setVar("VISIBLE_OFERTAS",'none');
}
$sql_atributo ="select nom_atributo_producto
   				  from atributo_producto
           		 where cod_producto = '$cod_producto'
         		   and orden in(10,20,30,40)";
$result2 = $db->build_results($sql_atributo);
$atri  = $result2[0]['nom_atributo_producto'];
$atri1 = $result2[1]['nom_atributo_producto'];
$atri2 = $result2[2]['nom_atributo_producto'];
$atri3 = $result2[3]['nom_atributo_producto'];

$encode = urlencode($cod_producto);

//$temp->setVar("COD_PRODUCTO_ENCODE1",$encode);
$temp->setVar("ATRI", $atri);
$temp->setVar("ATRI1", $atri1);
$temp->setVar("ATRI2", $atri2);
$temp->setVar("ATRI3", $atri3);
print $temp->toString();

if (isset($_REQUEST['print_solicitud']))
	print "<script>window.open('print_reporte.php','solicitud_cotizacion')</script>";
?>