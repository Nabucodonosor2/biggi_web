<?php
//ini_set('display_errors', 'On');
require_once(dirname(__FILE__)."/../../commonlib/trunk/php/auto_load.php");
require_once(dirname(__FILE__)."/../common_appl/class_Template_biggi_web.php");
require_once("../appl.ini");
session::set('K_ROOT_URL', K_ROOT_URL);
session::set('K_ROOT_DIR', K_ROOT_DIR);
session::set('K_APPL', K_APPL);

class buscador_biggi{
	function buscador_biggi(){
		$temp = new Template_biggi_web("buscador.htm");
		$find = $_REQUEST['busca_producto'];
		
		//cabecera
		$sql = "select '$find' STR_BUSCA";
		$dw_cabecera = new datawindow($sql);
		$dw_cabecera->retrieve();
		
		//llena tabla INF_PROD_BUSQUEDA
		$session_id = session_id();
		$sql = "exec spi_prod_busqueda '$session_id', '$find'";
		$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
		$db->query($sql);
		
		// obtiene el resultado de la busqueda
		$sql = "exec spdw_lista_busqueda_new '$session_id'";
		$dw_listado = new datawindow($sql, "PRODUCTO");
		$dw_listado->retrieve($find);
		$dw_listado->add_field('CONTROL_A');
		$dw_listado->add_control(new static_num('PRECIO1'));
		
		for($i=0 ; $i < $dw_listado->row_count() ;$i++){
			$USA_FOTO_ANTIGUA = $dw_listado->get_item($i, 'USA_FOTO_ANTIGUA');
			
			if($USA_FOTO_ANTIGUA == 'S')
				$img_chica_1 = '../imagen_chica.php?cod_producto='.urlencode($dw_listado->get_item($i, 'COD_PRODUCTO1'));
			else
				$img_chica_1 = $this->folder_producto($dw_listado->get_item($i, 'COD_PRODUCTO1')).'/'.$this->cod_producto_char($dw_listado->get_item($i, 'COD_PRODUCTO1')).'_CAT1.jpg';
				
			$link_cotizador_a = '../cotizador.php?cod_producto='.urlencode($dw_listado->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;	
			$nom_producto1 = $dw_listado->get_item($i, 'NOM_PRODUCTO1');
			$atributos1 = $dw_listado->get_item($i, 'ATRIBUTOS1');
			$precio1 = $dw_listado->get_item($i, 'PRECIO1');
			$precio_format = number_format($precio1, 0, ',', '.');
			$link_catalogo_a = '../fichaProducto.php?cod_producto='.urlencode($dw_listado->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
			
			$control_a='<div class="searchRes">
					        <ul>
					            <li>
					            	<img src='.$img_chica_1.'  height="130" width="130">
					            </li>
					            <li>
					            	<h1>'.$nom_producto1.'</h1>
					            	    '.$atributos1.'
					            </li>
					            <li>
					                <h1>Modelo '.$dw_listado->get_item($i, 'COD_PRODUCTO1').'</h1>
					                <!-- <p>Precio: $ '.$precio_format.' + IVA</p> -->
					            </li>
					            <li>
					                <a href="'.$link_catalogo_a.'"><img src="'.K_ROOT_URL.'images/icoCatalog.png" alt="Ver Catálogo" title="Ver Catálogo"></a>
					                <a href="'.$link_cotizador_a.'"><img src="'.K_ROOT_URL.'images/icoCotiza.png" alt="Añadir al Cotizador" title="Añadir al Cotizador"></a>
					            </li>
        					</ul> 
        					</div>';
			$dw_listado->set_item($i,'CONTROL_A', $control_a);
		}
		/*{
			$control_a='<div class="alert alert-error">
        <a class="close" data-dismiss="alert">×</a>
        <strong>¡Oh, no!</strong> Cambia un par de cosas e intenta enviarlo otra vez.
      </div>';
			
			$dw_listado->set_item($i,'CONTROL_A', $control_a);
		}*/
		if($dw_listado->row_count() == 0){
			$control_a='<div class="searchRes alert alert-error">
							<h1><span class="text-warning">No se han encontrado resultados para su búsqueda:</span></h1>
						    <br/>
							<p class="text-warning">
							<h1><strong>"'.$find.'"</strong></h1></p>
						    <br/>
							<h1> 	<span class="text-warning">Sugerencias:</span></h1>
						     

							<dl>
							  <dt> >> <span class="text-warning">Asegúrese de que todas las palabras estén escritas correctamente.</span></dt>
							  <dt> >> <span class="text-warning">Pruebe diferentes palabras clave.</span></dt>
							  <dt> >> <span class="text-warning">Pruebe palabras clave más generales.</span></dt>
							</dl>
</div>
						  ';
			
			$temp->setVar('CONTROL_B', $control_a);
		}
		
		$sql_producto = "SELECT COUNT(COD_PRODUCTO)OFERTA
						FROM PRODUCTO 
						 WHERE ES_OFERTA = 'S'";
		$result = $db->build_results($sql_producto);
		$prod_oferta = $result[0]['OFERTA'];
		if($prod_oferta >0)
			$temp->setVar("VISIBLE_OFERTAS",'');
		else if($prod_oferta == 0)
			$temp->setVar("VISIBLE_OFERTAS",'none');
			
		$dw_cabecera->habilitar($temp, true);
		$dw_listado->habilitar($temp, true);
		
		print $temp->toString();
	}
	
	function folder_producto($cod_producto){
		$cod_producto_folder = preg_replace("%[^A-Z^0-9^-]%", "_", $cod_producto);
		return "../../producto_imagen/producto/$cod_producto_folder";
	}
		
	function cod_producto_char($cod_producto){
		$cod_producto = preg_replace("%[^A-Z^0-9^-]%", "_", $cod_producto);
		return $cod_producto;
	}
}

$w = new buscador_biggi();
?>