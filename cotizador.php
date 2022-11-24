<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("appl.ini");
///require_once("class_help_producto_web.php");
require_once(dirname(__FILE__)."/common_appl/class_Template_biggi_web.php");

unset( $_SESSION["ERROR"] );
$error='';

class edit_text_web extends edit_text {
    function edit_text_web($field, $size, $maxlen) {
        parent::edit_text($field, $size, $maxlen);
        $this->class = 'ctt';
    }
}

$cod_producto = urldecode($_REQUEST['cod_producto']);
$limpio = $_REQUEST['limpio'];
$cod_zona = $_REQUEST['cod_zona'];
$cod_familia = $_REQUEST['cod_familia'];
$opcion = $_REQUEST['opcion'];
$temp = new Template_biggi_web('cotizador.html');

$temp->setVar("ERROR",$_SESSION['$error']);
//print $temp->toString();

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
    
    $browser = $_SERVER['HTTP_USER_AGENT'];
    
    if($limpio =='limpiar'){
        $dw_cotizador = session::get('dw_cotizador');
        while ($dw_cotizador->row_count() > 0)
            $dw_cotizador->delete_row(0);
    }else{
        if (session::is_set('dw_cotizador')) {
            $dw_cotizador = session::get('dw_cotizador');
            $sql ="SELECT COD_PRODUCTO
				   		  ,COD_PRODUCTO COD_PRODUCTO2
				   		  ,NOM_PRODUCTO
				          ,PRECIO_VENTA_PUBLICO
				          ,1 CANTIDAD
				          ,'' IMG
                     FROM PRODUCTO
					WHERE COD_PRODUCTO ='$cod_producto'";
            $db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
            $result = $db->build_results($sql);
            $contador = 0;
            for ($i = 0; $i < $dw_cotizador->row_count(); $i++){
                $cod_producto1 = $dw_cotizador->get_item($i,'COD_PRODUCTO');
                if($cod_producto1 == $cod_producto){
                    $contador = $contador+1;
                }
            }
            if($opcion == 1){
                $contador = 3; // contador en 3 no hace nada espara cuando vuelte de cotizador_cont.php(boton volver)
            }
            
            //	<td><input name="modelo" id="modelo" type="text" class="ctt"></td>
            
            //es porque viene de otra pagina
            if($contador == 0){
                if($result[0]['COD_PRODUCTO'] <> ''){
                    $row = $dw_cotizador->insert_row();
                    $dw_cotizador->set_item($row, 'COD_PRODUCTO',$result[0]['COD_PRODUCTO'] );
                    $dw_cotizador->set_item($row, 'COD_PRODUCTO2', urlencode($result[0]['COD_PRODUCTO2']));
                    $dw_cotizador->set_item($row, 'NOM_PRODUCTO', $result[0]['NOM_PRODUCTO']);
                    $dw_cotizador->set_item($row, 'PRECIO_VENTA_PUBLICO', $result[0]['PRECIO_VENTA_PUBLICO']);
                    $dw_cotizador->set_item($row, 'CANTIDAD', $result[0]['CANTIDAD']);
                    $dw_cotizador->set_item($row, 'COD_ZONA',$cod_zona);
                    $dw_cotizador->set_item($row, 'COD_FAMILIA',$cod_familia);
                }
            }/*else{
            for ($i = 0; $i < $dw_cotizador->row_count(); $i++){
            if(($dw_cotizador->get_item($i,'COD_PRODUCTO') == $cod_producto) && ($dw_cotizador->get_item($i,'COD_PRODUCTO')<>'' && $cod_producto<>'')){
            $cantidad=$dw_cotizador->get_item($i,'CANTIDAD');
            $cantidad = $cantidad +1;
            $dw_cotizador->set_item($i, 'CANTIDAD',$cantidad );
            }
            }
            }*/
        }
        else{
            if($cod_producto == ''){
                
                
                $sql ="SELECT  DISTINCT NULL COD_PRODUCTO
				   		  ,NULL COD_PRODUCTO2
				   		  ,NULL NOM_PRODUCTO
				          ,NULL PRECIO_VENTA_PUBLICO
				          ,NULL CANTIDAD
				          ,NULL COD_ZONA
				          ,NULL COD_FAMILIA
				          FROM PRODUCTO";
            }else{
                
                $sql ="SELECT COD_PRODUCTO
				   		  ,COD_PRODUCTO COD_PRODUCTO2
				   		  ,NOM_PRODUCTO
				          ,PRECIO_VENTA_PUBLICO
				          ,1 CANTIDAD
				          ,0 COD_ZONA
				          ,0 COD_FAMILIA
					 FROM PRODUCTO
					WHERE COD_PRODUCTO ='$cod_producto'";
            }
            $db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
            $result = $db->build_results($sql);
            
            $dw_cotizador = new datawindow($sql,'COTIZADOR',true,true);
            $dw_cotizador->add_control(new static_num('PRECIO_VENTA_PUBLICO'));
            $dw_cotizador->add_control(new edit_num('CANTIDAD',3));
            $dw_cotizador->add_controls_producto_help();
            //edit_text_web
            
            
            //$dw_cotizador->controls['COD_PRODUCTO']->size = 10;
            //$dw_cotizador->controls['NOM_PRODUCTO']->size = 120;
            //onChange COD_PRODUCTO
           // $js = $dw_cotizador->controls['COD_PRODUCTO']->get_onChange();
           // $js =$js."cambia_producto(this);";
            //$dw_cotizador->controls['COD_PRODUCTO']->set_onChange($js);
            //onChange NOM_PRODUCTO
          //  $js = $dw_cotizador->controls['NOM_PRODUCTO']->get_onChange();
          //  $js =$js."cambia_producto(this);";
          //  $dw_cotizador->controls['NOM_PRODUCTO']->set_onChange($js);
            //onChange Cantidad
            $java_script_cant="cambia_cantidad(this);valida_numero(this);";
            $dw_cotizador->controls['CANTIDAD']->set_onChange($java_script_cant);
            
            $dw_cotizador->retrieve();
            $cod_producto2 = $dw_cotizador->get_item(0, 'COD_PRODUCTO2');
            $dw_cotizador->set_item(0, 'COD_PRODUCTO2', urlencode($cod_producto2));
            $dw_cotizador->set_item(0,'COD_ZONA',$cod_zona);
            $dw_cotizador->set_item(0,'COD_FAMILIA',$cod_familia);
            
            if($cod_producto == ''){
                $dw_cotizador->delete_row(0);
            }
        }
        // graba en la sesion
        session::set('dw_cotizador', $dw_cotizador);
        // dibujar
        $dw_cotizador->habilitar($temp, true);
        
        ////////////////// BUSCADOR ///////////
        /*if (session::is_set('wo_buscador')) {
         $find = session::get('wo_buscador.find');
         $temp->setVar("VOLVER_BUSQUEDA", '<a href="appl/buscador/buscador.php?busca_producto='.$find.'" ><img align="right" height="34px" width="200" src="images/volver_abusqueda.png"></a> ');
         }*/
        /////////////////////////////
        if(isset($_POST['b_enviar_cot'])){
            

            session::set('dw_contacto', $_POST);
            session::set('dw_cotizador', $dw_cotizador);
            header('Location: enviar_cotizador.php');
        }
        
        print $temp->toString();
    }
    ?>