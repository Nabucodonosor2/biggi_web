<?php
require_once(dirname(__FILE__)."/../../commonlib/trunk/php/auto_load.php");
require_once(dirname(__FILE__)."/../common_appl/class_Template_biggi_web.php");

class wo_buscador extends w_base {
	var $find = '';
	var $dw_cabecera;
	var $dw_listado;
	var $current_page = 1;
	var $first_page = 1;
	var $cant_page_visible = 10;
	var $row_per_page = 2;
	var $last_page = 0;
	
   	function wo_buscador() {
		$this->find = $_REQUEST['busca_producto'];
		session::set("wo_buscador.find", $this->find);
		
		$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
		$sql = "select dbo.f_get_parametro(57) 	 ROW_PER_PAGE
						,dbo.f_get_parametro(58) CANT_PAGE_VISIBLE";
		$result = $db->build_results($sql);
		$this->row_per_page = $result[0]['ROW_PER_PAGE'];
		$this->cant_page_visible = $result[0]['CANT_PAGE_VISIBLE'];
		
		$this->current_page = 1;
		$this->retrieve();

		$this->redraw();
   	}
   function retrieve() {
		//cabecera
		$sql = "select '$this->find' STR_BUSCA";
		$this->dw_cabecera = new datawindow($sql);
		$this->dw_cabecera->retrieve();
		
		//llena tabla INF_PROD_BUSQUEDA
		$session_id = session_id();
		$sql = "exec spi_prod_busqueda '$session_id', '$this->find'";
		$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
		$db->query($sql);

		// obtiene el resultado de la busqueda		 
		$sql = "exec spdw_lista_busqueda '$session_id'";
		$this->dw_listado = new datawindow($sql, "PRODUCTO");
		$this->dw_listado->retrieve($this->find);
		$this->last_page = Ceil($this->dw_listado->row_count() / $this->row_per_page);
		
		$this->dw_listado->add_field('CONTROL_A');
		//$this->dw_listado->add_field('CONTROL_B');
	
		
		$this->dw_listado->add_control(new static_num('PRECIO1'));
		//$this->dw_listado->add_control(new static_num('PRECIO2'));

		//$this->dw_listado->add_field('COD_PRODUCTO_ENCODE1');
		//$this->dw_listado->add_field('COD_PRODUCTO_ENCODE2');
		for($i=0; $i<$this->dw_listado->row_count();$i++) {
			$img_chica_1 = '../imagen_chica.php?cod_producto='.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO1'));
				
				$link_cotizador_a = '../cotizador.php?cod_producto='.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;	
				$nom_producto1 = $this->dw_listado->get_item($i, 'NOM_PRODUCTO1');
				$atributos1 = $this->dw_listado->get_item($i, 'ATRIBUTOS1');
				$precio1 = $this->dw_listado->get_item($i, 'PRECIO1');
				$precio_format = number_format($precio1, 0, ',', '.');
				$link_catalogo_a = '../fichaProducto.php?cod_producto='.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
				$control_a='<div class="searchRes">
						        <ul>
						            <li>
						            	<img src='.$img_chica_1.' height="130" width="130">
						            </li>
						            <li>
						            	<h1>'.$nom_producto1.'</h1>
						            	<p>'.$atributos1.'</p>
						            </li>
						            <li>
						                <h1>Modelo '.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO1')).'0</h1>
						                <!-- <p>Precio: $ '.$precio_format.' + IVA</p> -->
						            </li>
						            <li>
						                <a href="'.$link_catalogo_a.'"><img src="'.K_ROOT_URL.'images/icoCatalog.png" alt="Ver Catálogo"></a>
						                <a href="'.$link_cotizador_a.'"><img src="'.K_ROOT_URL.'images/icoCotiza.png" alt="Añadir al Cotizador"></a>
						            </li>
        						</ul> 
        						</div>';
				$this->dw_listado->set_item($i,'CONTROL_A', $control_a);
		}
		
		//$tope = $this->dw_listado->row_count()-1;
		/*
		for($i=0; $i<$this->dw_listado->row_count();$i++) {
			if($tope==$i){
				$img_chica_1 = '../imagen_chica.php?cod_producto='.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO1'));
				
				$link_cotizador_a = '../cotizador.php?cod_producto='.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;	
				$nom_producto1 = $this->dw_listado->get_item($i, 'NOM_PRODUCTO1');
				$atributos1 = $this->dw_listado->get_item($i, 'ATRIBUTOS1');
				$precio1 = $this->dw_listado->get_item($i, 'PRECIO1');
				$precio_format = number_format($precio1, 0, ',', '.');
				$link_catalogo_a = '../fichaProducto.php?cod_producto='.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
				$control_a='
					<ul>
						<li>
							<figure>
								<img src='.$img_chica_1.'>
							</figure>
							<div>
								<div class="contenedor_h1"><h1 class="h1_familia">'.$nom_producto1.'</h1></div>
									<hr class="hr_familia"> 
				<!--				no se le pone el <ol>, viene del procedimiento asi				-->
								<div class="scroll_familia" style="overflow-x:hidden; overflow-y:auto;">
									
										'.$atributos1.'
									
								</div>
								<div class="precio_familia">
									<label class="label_familia">Modelos: '.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO1')).'</label>
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
				$img_chica_1 = '../imagen_chica.php?cod_producto='.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO1'));
				
				$link_cotizador_a = '../cotizador.php?cod_producto='.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
				$nom_producto1 = $this->dw_listado->get_item($i, 'NOM_PRODUCTO1');
				$atributos1 = $this->dw_listado->get_item($i, 'ATRIBUTOS1');
				$precio1 = $this->dw_listado->get_item($i, 'PRECIO1');
				$precio_format = number_format($precio1, 0, ',', '.');
				$link_catalogo_a = '../fichaProducto.php?cod_producto='.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO1')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
				
				//$img_chica_2 = 'background:url(imagen_chica.php?cod_producto='.urlencode($dw->get_item($i, 'COD_PRODUCTO2')).') #fff no-repeat';
				$img_chica_2 = '../imagen_chica.php?cod_producto='.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO2'));
				
				$link_cotizador_b = '../cotizador.php?cod_producto='.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO2')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
				$nom_producto2 = $this->dw_listado->get_item($i, 'NOM_PRODUCTO2');
				$atributos2 = $this->dw_listado->get_item($i, 'ATRIBUTOS2');
				$precio2 = $this->dw_listado->get_item($i, 'PRECIO2');
				$precio2_format = number_format($precio2, 0, ',', '.');
				$link_catalogo_b = '../fichaProducto.php?cod_producto='.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO2')).'&cod_zona='.$cod_zona.'&cod_familia='.$cod_familia;
			
				$control_a='<ul>
								
						<li>
							<figure>
								<img src='.$img_chica_1.'>
							</figure>
							<div>
								<div class="contenedor_h1"><h1 class="h1_familia">'.$nom_producto1.'</h1></div>
								<hr class="hr_familia"> 
				<!--				no se le pone el <ol>, viene del procedimiento asi				-->
								<div class="scroll_familia" style="overflow-x:hidden; overflow-y:auto;">
									
										'.$atributos1.'
									
								</div>
								<div class="precio_familia">
									<label class="label_familia">Modelos: '.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO1')).'</label>
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
								<img src='.$img_chica_2.'>
							</figure>
							<div>
								<div class="contenedor_h1"><h1 class="h1_familia">'.$nom_producto2.'</h1></div>
								<hr class="hr_familia"> 
				<!--				no se le pone el <ol>, viene del procedimiento asi				-->
								<div class="scroll_familia" style="overflow-x:hidden; overflow-y:auto;">
									
										'.$atributos2.'
									
								</div>	
								<div class="precio_familia">
									<label class="label_familia">Modelos: '.urlencode($this->dw_listado->get_item($i, 'COD_PRODUCTO2')).'</label>
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
			//$this->dw_listado->set_item($i,'CONTROL_B', $control_b);  		}
		$this->save_SESSION();
   }
	function habilita_boton(&$temp, $boton, $habilita) {
		//busca si tiene Imagen en K_CLIENTE
		/*if($boton == 'next'){
			$temp->setVar("WO_".strtoupper($boton), '<li class="prev"><a href="#">>>|</a><li/>');
		}else if($boton == 'last'){
			$temp->setVar("WO_".strtoupper($boton), '<li class="next" ><a href="#">>></a><li/>');
		}*/
		$ruta_imag = '../../commonlib/trunk/images/';
		if (defined('K_CLIENTE')) {
			if (file_exists('../../images_appl/'.K_CLIENTE.'/images/b_'.$boton.'.jpg')){
				$ruta_imag = '../../images_appl/'.K_CLIENTE.'/images/';
			}
		}
		
		if ($habilita){
			$temp->setVar("WO_".strtoupper($boton), '<input name="b_'.$boton.'" id="b_'.$boton.'" src="'.$ruta_imag.'b_'.$boton.'.jpg" type="image" '.
								'onMouseDown="MM_swapImage(\'b_'.$boton.'\',\'\',\''.$ruta_imag.'b_'.$boton.'_click.jpg\',1)" '.
								'onMouseUp="MM_swapImgRestore()" onMouseOut="MM_swapImgRestore()" '.
								'onMouseOver="MM_swapImage(\'b_'.$boton.'\',\'\',\''.$ruta_imag.'b_'.$boton.'_over.jpg\',1)" '.
								'onClick="var d = new Date(); document.getElementById(\'wo_time\').value=d.getTime();" '.
								'/>');
		}else{
			if($boton == 'first'){
				$temp->setVar("WO_".strtoupper($boton), '<li class="prev"><a href="#">|<</a><li/>');
			}else if($boton == 'prev'){
				$temp->setVar("WO_".strtoupper($boton), '<li class="next" ><a href="#"><</a><li/>');
			}
		}
	}
	function paginacion(&$temp) {
		$this->habilita_boton($temp, 'back', true);

		$this->habilita_boton($temp, 'first', ($this->current_page > 1));
		$this->habilita_boton($temp, 'prev', ($this->current_page > 1));
			
		// paginacion
		$paginacion = "";
		for ($i=$this->first_page; ($i < $this->first_page + $this->cant_page_visible) && ($i <= $this->last_page); $i++) {
			if ($i == $this->current_page){
				$paginacion .= '<li><a href="#"/>'.$i.'</a></li> ';
			}else {
				$onclik = 'document.getElementById(\'wo_hidden\').value='.$i.';  var d = new Date(); document.getElementById(\'wo_time\').value=d.getTime(); document.output.submit();';
				$paginacion .= '<li><a href="#" onClick="'.$onclik.'">'.$i.'</a> </li>';
			}
		}
		$temp->setVar("WO_PAGES", $paginacion);
			
		$this->habilita_boton($temp, 'next', ($this->current_page < $this->last_page));
		$this->habilita_boton($temp, 'last', ($this->current_page < $this->last_page));		
	}
   function redraw() {
  		$temp = new Template_biggi_web('buscador.htm');
		//$temp = new Template_appl('buscador.htm');
		
		$this->dw_cabecera->habilitar($temp, true);
		$temp->setVar("VOLVER_LISTA", '<a href="../productos.php">&nbsp;&nbsp;<img src="../../images/ico-back.png" width="11" height="9">&nbsp;&nbsp;Volver a productos</a>');
		
		// Busca cual debe ser el primer link visible y lo deja en first_page
		if ($this->current_page < $this->first_page)
			$this->first_page = $this->current_page - ($this->cant_page_visible / 2);
		elseif (($this->current_page - $this->first_page) > ($this->cant_page_visible / 2))
			$this->first_page = $this->current_page - ($this->cant_page_visible / 2);
		if ($this->first_page < 1)
			$this->first_page = 1;

		// primer registro de la pagina
		$ind = $this->row_per_page * ($this->current_page - 1);
		
		// loop en los registros de la pagina visible
		$i = 0;
		while (($i < $this->row_per_page) && ($ind < $this->dw_listado->row_count())){
			$temp->gotoNext("PRODUCTO");
			$this->dw_listado->fill_record($temp, $ind);
			$i++;
			$ind++;
		}
		if ($this->row_per_page < $this->dw_listado->row_count()){
			$this->paginacion($temp);
		}
		if ($this->dw_listado->row_count()==0) {
			$temp->setVar("NO_RESULT", '<p style="font-family: Arial, Helvetica, sans-serif; font-size: 22px; color:black">No se han encontrado resultados para su búsqueda
							<p style="font-family: Arial, Helvetica, sans-serif; font-size: 25px; color:#E50000">"'.$this->find.'"</p><br/>
							<p style="font-family: Arial, Helvetica, sans-serif; font-size: 22px; color:black">Sugerencias:</p>
							<p style="font-family: Arial, Helvetica, sans-serif; font-size: 19px; color:black"><img width="10" height="13" src="../images/picker.gif"><img width="10" height="13" src="../images/picker.gif">Asegúrese de que todas las palabras estén escritas correctamente.</p>
							<p style="font-family: Arial, Helvetica, sans-serif; font-size: 19px; color:black"><img width="10" height="13" src="../images/picker.gif"><img width="10" height="13" src="../images/picker.gif">Pruebe diferentes palabras clave.</P>
							<p style="font-family: Arial, Helvetica, sans-serif; font-size: 19px; color:black"><img width="10" height="13" src="../images/picker.gif"><img width="10" height="13" src="../images/picker.gif">Pruebe palabras clave más generales.</p>');
		}
		//print_r($temp);
		print $temp->toString();
   }
	function goto_page($pagina) {
		$t = $_REQUEST['wo_time'];
		if (session::is_set("wo_buscador.goto_page")) {
			$t_session = session::get("wo_buscador.goto_page");
			if ($t_session==$t) {
				$this->redraw();
				return;
			}
		}
		session::set("wo_buscador.goto_page", $t);

		$this->current_page = $pagina;
		$this->save_SESSION();
		$this->redraw();
	}
	function first_page() {
		$this->goto_page(1);
	}
	function prev_page() {
		$this->goto_page($this->current_page - 1);
	}
	function last_page() {
		$this->goto_page($this->last_page);
	}
	function next_page() {
		$this->goto_page($this->current_page + 1);
	}
	function procesa_event() {
		if(isset($_REQUEST['wo_hidden']) && $_REQUEST['wo_hidden']!='') {
			$wo_hidden = $_REQUEST['wo_hidden'];
			if (is_numeric($wo_hidden))	{	//  link de paginas
				$this->goto_page($wo_hidden);
			}
		}
		elseif(isset($_REQUEST['b_first_x'])) 
			$this->first_page();
		elseif(isset($_REQUEST['b_prev_x']))
			$this->prev_page();
		elseif(isset($_REQUEST['b_last_x']))
			$this->last_page();
		elseif(isset($_REQUEST['b_next_x'])) {
			$this->next_page();
		}
		else { 
			if ($this->find == $_REQUEST['busca_producto']) {
				$this->goto_page($this->current_page);
			}
			else { 
				$this->wo_buscador();
			}
		}
	}
}
?>