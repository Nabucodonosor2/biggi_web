<?php
ini_set('display_errors', 'Off');
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("appl.ini");
require_once(dirname(__FILE__)."/../biggi_comercial/trunk/appl/llamado/class_envio_mail.php"); // local
//require_once(dirname(__FILE__)."/../biggi_comercial/trunk/appl/llamado/class_envio_mail.php"); // oficial

session::set('COD_USUARIO', 1); // en EXECUTE_SP() se necesita leer de la sesion el COD_USUARIO, por ahora se asigna cualquiera, pero se podría crear un usuario nuevo

class print_solicitud_cotizacion extends reporte {
	var $cod_solicitud_cotizacion;
	var $K_ROOT_DIR;

	function print_solicitud_cotizacion(){

		$ip =  $_SERVER['REMOTE_ADDR'];
		$K_PORC_IVA = 1;
		$this->K_ROOT_DIR = session::get('K_ROOT_DIR'); // AGREGADO POR IBRITO 10-07-2019 PARA SOLUCIONAR PROBLEMA INDICADO POR CLIENTES CON ERROR DE SESION.
		$dw_contacto = session::get('dw_contacto');
		session::un_set('dw_contacto');
		$dw_cotizador = session::get('dw_cotizador');
		session::un_set('dw_cotizador');
			
		$nombre		= $dw_contacto['NOM_COTIZADOR']; 		
		$email 		= $dw_contacto['EMAIL_COTIZADOR'];  	// obligatorio
		$rut 		= $dw_contacto['RUT_COTIZADOR'];
		$dif_verif 	= $dw_contacto['DIG_VERIF_COTIZADOR'];
		$empresa 	= $dw_contacto['EMPRESA_COTIZADOR'];
		$ciudad 	= $dw_contacto['CIUDAD_COTIZADOR']; 	
		$telefono 	= $dw_contacto['FONO_COTIZADOR'];		// obligatorio
		$celular 	= $dw_contacto['CEL_COTIZADOR'];
		$comentario = $dw_contacto['OBS_COTIZADOR'];

		$rut	= ($rut == '') ? "NULL" : "$rut";
		$dif_verif	= ($dif_verif == '') ? "NULL" : "$dif_verif";
		$empresa	= ($empresa == '') ? "No ingresado" : "$empresa";
		$celular	= ($celular == '') ? "No ingresado" : "$celular";
		$comentario	= ($comentario == '') ? "No ingresado" : "$comentario";
		$nombre		= (trim($nombre) == '') ? "No ingresado" : "$nombre";
		$ciudad		= (trim($ciudad) == '') ? "No ingresado" : "$ciudad";
		
		$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
		$sql =	"SELECT COD_CIUDAD 
				 FROM CIUDAD
				 WHERE NOM_CIUDAD = '$ciudad'";
		$result = $db->build_results($sql);

		if(count($result)>0) // AGREGADO POR IBRITO 10-07-2019 PARA SOLUCIONAR PROBLEMA INDICADO POR CLIENTES CON ERROR DE SESION.
		  $cod_ciudad = $result[0]['COD_CIUDAD'];
		else 
		    $cod_ciudad = 'NULL';
		
		//$cod_ciudad = $result[0]['COD_CIUDAD'];		
		//$cod_ciudad	= ($cod_ciudad == '') ? "NULL" : "$cod_ciudad";

		$sp='spu_contacto'; 
		$param="'INSERT'
				,NULL
				,'$empresa'
				,$rut
				,'$dif_verif'
				,NULL
				,$cod_ciudad
				,NULL
				,'CONTACTO'
				,'$ciudad'";
				
		$db->BEGIN_TRANSACTION();	
			if($db->EXECUTE_SP($sp, $param)){ //begin IF= 6
				$cod_contacto = $db->get_identity();
				
				$sql = "SELECT dbo.f_get_parametro(".$K_PORC_IVA.")PORC_IVA";
				$result = $db->build_results($sql);
				$porc_iva = $result[0]['PORC_IVA'];

				$sp='spu_solicitud_cotizacion';
				$param="'INSERT'
						,NULL
						,0
						,$porc_iva
						,0
						,0
						,'$ip'
						,$cod_contacto";
				
				if ($db->EXECUTE_SP($sp, $param)){ //begin ELSE = 5
					$sql = "SELECT	MAX(COD_SOLICITUD_COTIZACION)	COD_SOLICITUD_COTIZACION
							FROM	SOLICITUD_COTIZACION";
					$result = $db->build_results($sql);
					$cod_solicitud_cotizacion = $result[0]['COD_SOLICITUD_COTIZACION'];
					
					$error_for = false;
					//begin FOR( cod_solicitud_cotizacion ) = 1
					for($i=0; $i < $dw_cotizador->row_count() ; $i++){
						$cod_producto = $dw_cotizador->get_item($i, 'COD_PRODUCTO');
						$nom_producto = $dw_cotizador->get_item($i, 'NOM_PRODUCTO');
						$cantidad = $dw_cotizador->get_item($i, 'CANTIDAD');
						$precio_venta_publico = $dw_cotizador->get_item($i, 'PRECIO_VENTA_PUBLICO');
						
						$sp_item='spu_item_solicitud_cotizacion';
						$param_item =  "'INSERT'
										,NULL
										,$cod_solicitud_cotizacion
										,'$cod_producto'
										,'$nom_producto'
										,$cantidad
										,$precio_venta_publico
										,0";
						
						if(!$db->EXECUTE_SP($sp_item, $param_item)){
							//$db->ROLLBACK_TRANSACTION();
							$error_for = true;
							break;
						}
					} //end FOR( cod_solicitud_cotizacion ) = 1

					if($error_for){
						$db->ROLLBACK_TRANSACTION();
						return;
					}
					
					$sp='spu_solicitud_cotizacion';
					$param="'ASIGNA_TOTAL', $cod_solicitud_cotizacion";
					$this->cod_solicitud_cotizacion = $cod_solicitud_cotizacion;
					
					if ($db->EXECUTE_SP($sp, $param)){  //begin ELSE = 4
						//$db->COMMIT_TRANSACTION();
						$sp_con_per='spu_contacto_persona';
						$param_con_per	=  "'INSERT'
											,NULL
											,$cod_contacto
											,'$nombre'
											,'$email'
											,NULL
											,'$telefono'
											,'$celular'
											,NULL";
						
						//$db->BEGIN_TRANSACTION();
						if ($db->EXECUTE_SP($sp_con_per, $param_con_per)){ //begin ELSE = 3
							//$db->COMMIT_TRANSACTION();
							$cod_contacto_persona_telefono = $db->get_identity();
							
							$sql =	"SELECT COD_CONTACTO_PERSONA 
									 FROM CONTACTO_PERSONA_TELEFONO 
									 WHERE COD_CONTACTO_PERSONA_TELEFONO = $cod_contacto_persona_telefono";	
							$result = $db->build_results($sql);
							$cod_contacto_persona = $result[0]['COD_CONTACTO_PERSONA'];		
													
							$sp='spu_llamado';
							$param =	"'INSERT'
										 ,NULL
										 ,62
										 ,$cod_contacto
										 ,$cod_contacto_persona
										 ,'$comentario'
										 ,4
										 ,'$telefono'
										 ,'N'
										 ,NULL
										 ,NULL
										 ,NULL
										 ,'Registro automático / Solicitud Cotizacion Web Biggi N° $cod_solicitud_cotizacion' ";

							//$db->BEGIN_TRANSACTION();
							if($db->EXECUTE_SP($sp, $param)){ //begin ELSE = 2
								//$db->COMMIT_TRANSACTION();
								$cod_llamado = $db->get_identity();
								
								$sp = 'spu_solicitud_cotizacion';
								$param = "'LLAMADO'
										 ,$cod_solicitud_cotizacion
										 ,NULL
										 ,NULL
										 ,NULL
										 ,NULL
										 ,NULL
										 ,NULL
										 ,$cod_llamado";
								
								if($db->EXECUTE_SP($sp, $param)){ //end ELSE = 1
									//$db->COMMIT_TRANSACTION();
									$sql=	"SELECT	 dw.COD_DESTINATARIO 
													,dw.RESPONSABLE
											 FROM	DESTINATARIO_WEB dw, DESTINATARIO d
											 WHERE	dw.ORIGEN = 'CONTACTO' 
											   and	d.COD_DESTINATARIO = dw.COD_DESTINATARIO
											   and	d.VIGENTE = 'S'"; 
									$result = $db->build_results($sql);
									
									//begin FOR( cod_destinatario ) = 2
									$error_for = false;
									for($i=0;$i <count($result);$i++){
										$cod_responsable = $result[$i]['COD_DESTINATARIO'];
										$responsable = $result[$i]['RESPONSABLE'];
										$sp="spu_llamado_destinatario";
										$param=	"'INSERT'
												 ,NULL
												 ,$cod_llamado
												 ,$cod_responsable
												 ,'$responsable'";
											
										//$db->BEGIN_TRANSACTION();
										if(!$db->EXECUTE_SP($sp, $param)){
											$error_for = true;
											break;
										}
									} //end FOR( cod_destinatario ) = 2

									if($error_for){
										$db->ROLLBACK_TRANSACTION();
										return;
									}
									
								}else{
									$db->ROLLBACK_TRANSACTION();
									return;
								} //end ELSE = 1
							}else{
								$db->ROLLBACK_TRANSACTION();
								return;
							} //end ELSE = 2
						}else{
							$db->ROLLBACK_TRANSACTION();
							return;
						} //end ELSE = 3
					}else{
						$db->ROLLBACK_TRANSACTION();
						return;
					} //end ELSE = 4
				}else{
					$db->ROLLBACK_TRANSACTION();
					return;
				} //end ELSE = 5
				$db->COMMIT_TRANSACTION();
			}//end IF= 6
		
		class_envio_mail::envio_mail($cod_llamado);
		
		$this->make_reporte();
	}
	
	function make_reporte() {
		// borra todos los archivos temporales que existan de pdf creados
		$this->clean_files(".", "pdf");
		$sql= "SELECT ''";
		// reporte
		$labels = array();
		$xml = "print_cotizador.xml";
		// VMC, 18-2-2011
		// No se llama al ancestro por enredos de autoload
		$this->sql = $sql;
		$this->xml = $xml;	// debe venir como la posicion relativa desde
		$this->labels = $labels;
		$this->titulo = "Solicitud++.pdf";
		$this->con_logo = 0;		
		$this->orientation = 'P';
		$this->unit = 'pt';
		$this->format = 'letter';
		$p = new ReportParser();
		$p->parseRP($this->xml);
		$rdata = new MySQLRD($this->sql, '', '');
		$pdf = PDF::makePDF(array($p), array($this->labels), array($rdata), $this->con_logo,$this->orientation,$this->unit,$this->format);
		$pdf->SetTitle($this->titulo);
		$this->modifica_pdf($pdf, $this->cod_solicitud_cotizacion);
		// sacado de FAQ de FPDF para evitar problemas con IE
		//Determinar un nombre temporal de fichero en el directorio actual
		
		$this->clean_files("tmp", "pdf");
		$file = basename(tempnam("tmp", 'tmp'));
		rename("tmp/".$file, "tmp/".$file.'.pdf');
		$file .= '.pdf';
		//Guardar el PDF en un fichero
		$pdf->Output("tmp/".$file, 'F');
		//$pdf->Output($this->titulo, 'I');
		//Redirección
		if($this->get_tipo_dispositivo() == 'IPAD'){
			header('Location: '."tmp/".$file);
		}else{
			//VM+MH 14-10-2016 se decide que muestre el pdf en la misma ventana, para que funcione en IPAD
			session::set('PRINT_COTIZADOR', $file);
			header('Location: '."index.php?print_solicitud=1");
		}
	}

	function dibuja_uno(&$pdf, $result, $count) {
	    
		////LOGO////
		$pdf->Image('images/fondofinal.jpg', 0, 0,612,792);
		//----------------------------------------------------------------------------------------
		// Condicion 1
		$pdf->SetFont('Helvetica','',9);
		$pdf->SetXY(60, 635);
		$pdf->MultiCell(500, 15, '-	Los valores son referenciales sujetos a confirmación por parte de COMERCIAL BIGGI (CHILE) S.A.','', 'L');
		$pdf->SetXY(60, 650);
		$pdf->MultiCell(500, 15, '-	Por tratarse de una “SOLICITUD DE COTIZACIÓN”, los valores son estimativos y no exactos, por lo que podrían darse diferencias al momento de realizar la compra.', '', 'L');
		$pdf->SetXY(60, 680);
		$pdf->MultiCell(500, 15, '-	Los equipos estan sujeto a stock o existencia al momento de la compra.', '', 'L');
		$pdf->SetXY(60, 695);
		$pdf->MultiCell(500, 15, '-	Un Ejecutivo Comercial se contactará con Ud. para confirmar la "SOLICITUD DE COTIZACION", o sí prefiere comuníquese con nosotros al telefono o fax:(56) 22412 6200 (56-2) 2412 6201 o envíenos mail a info@biggi.cl', '', 'L');
		
		$pdf->SetFont('Helvetica','B',16);
		$pdf->SetXY(35, 742);
		$pdf->MultiCell(542, 50, 'www.biggi.cl  -  info@biggi.cl'.$pdf->Footer(), '', 'C');
		
		////ESTRUCTURA DATOS CONTACTO////
		$pdf->SetFont('Helvetica','B',14);
		$pdf->SetXY(50, 95);
		$pdf->MultiCell(500, 15,'SOLICITUD DE COTIZACION VIA WEB ', 0, 'R');
		$pdf->SetFont('Helvetica','B',14);
		$pdf->SetXY(10, 110);
		$pdf->MultiCell(318, 15,'N° '.$result[0]['COD_SOLICITUD_COTIZACION'], 0, 'R');
		$pdf->SetFont('Helvetica','B',10);
		$pdf->SetXY(500, 120);
		$pdf->MultiCell(80, 15, 'Nº Pag: '.$pdf->PageNo(), 0, 'R');
		$pdf->SetFont('Helvetica','B',11);
		$pdf->SetXY(60, 150);
		$pdf->MultiCell(200, 15,'Razón Social   :  ', 0);
		$pdf->SetXY(60, 170);
		$pdf->MultiCell(250, 15,'Ciudad             :  ', 0);
		$pdf->SetXY(60, 190);
		$pdf->MultiCell(300, 15,'Atención Sr(a) :  ', 0);
		$pdf->SetXY(60, 210);
		$pdf->MultiCell(150, 15,'RUT                  :  ', 0);
		$pdf->SetXY(60, 230);
		$pdf->MultiCell(100, 15,'Teléfono  		        :  ', 0);
		$pdf->SetXY(60, 250);
		$pdf->MultiCell(100, 15,'Celular             :  ', 0);
		$pdf->SetXY(60, 270);
		$pdf->MultiCell(250, 15,'Mail                  :  ', 0);
		$pdf->SetXY(60, 290);
		$pdf->MultiCell(500, 15,'Observación   :  ', 0);
		//-----------------------------------------------------------------------------------------------
		
		$pdf->SetXY(150,150);
		$pdf->MultiCell(400, 15,$result[0]['NOM_CONTACTO'], 'B');
		$pdf->SetXY(150,170);
		$pdf->MultiCell(400, 15,$result[0]['NOM_CIUDAD'], 'B');
		$pdf->SetXY(150,190);
		$pdf->MultiCell(400, 15,$result[0]['NOM_PERSONA'], 'B');
		$pdf->SetXY(150,210);
		if($result[0]['RUT'] == ''){
			$pdf->MultiCell(400, 15,'No ingresado', 'B');
		}else{
			$pdf->MultiCell(400, 15,$result[0]['RUT'].'-'.$result[0]['DIG_VERIF'], 'B');	
		}
		$pdf->SetXY(150,230);
		$pdf->MultiCell(400, 15,$result[0]['TELEFONO'], 'B');
		$pdf->SetXY(150,250);
		$pdf->MultiCell(400, 15,$result[0]['CELULAR'], 'B');
		$pdf->SetXY(150,270);
		$pdf->MultiCell(400, 15,$result[0]['MAIL'], 'B');
		$pdf->SetXY(150,290);
		$pdf->MultiCell(400, 15,$result[0]['MENSAJE'], 'B');
		$Y = $pdf->gety();
		//////Tabla Encabezado//////
		$pdf->SetFont('Helvetica','B',12);
		$pdf->SetXY(40, $Y+20);
		$pdf->MultiCell(30, 15, 'Ít', 0, 'C');
		$pdf->SetXY(70, $Y+20);
		$pdf->MultiCell(265, 15, 'Producto', 0, 'C');
		$pdf->SetXY(335, $Y+20);
		$pdf->MultiCell(65, 15, 'Modelo', 0, 'C');
		$pdf->SetXY(400, $Y+20);
		$pdf->MultiCell(35, 15, 'Cant', 0, 'C');
		$pdf->SetXY(445, $Y+20);
	//	$pdf->MultiCell(60, 15, 'Precio $', 0, 'C');
		//$pdf->MultiCell(60, 15, '', 0, 'C');
//		$pdf->SetXY(503, $Y+20);
		$pdf->SetXY(568, $Y+35);
	//	$pdf->MultiCell(65, 15, 'Total $', 0, 'C');
//		$pdf->MultiCell(65, 15, '', 0, 'C');
		
		//////Recorre registros y añade filas//////
		$e= 1;
		for ($i=0; $i<$count; $i++){
		$Y = $pdf->gety();
			$ITEM = $e * 10;
			//$ITEM = $result[$i]['COD_ITEM_SOLICITUD_COTIZACION'];
			$PRODUCTO = $result[$i]['NOM_PRODUCTO'];
			$MODELO = $result[$i]['COD_PRODUCTO'];
			$CANTIDAD = $result[$i]['CANTIDAD'];
			$PRECIO = $result[$i]['PRECIO'];
			$TOTAL = $result[$i]['TOTAL_PRECIO'];
			//////Limita caracteres de productos//////
			while ($pdf->GetStringWidth($PRODUCTO) > 43 AND $pdf->GetStringWidth($MODELO) > 9) {
					$PRODUCTO = substr($PRODUCTO, 0, 43);
					$MODELO = substr($MODELO, 0, 9);
          			break;
            }
            
            //////Mide altura de la pag. y agrega una nueva//////
			$altura_doc = $pdf->gety();
			
			if ($altura_doc > 500) {
				$pdf->AddPage();
				//$pdf->Image(session::get('K_ROOT_DIR').'images/fondofinal.jpg', 0, 0,612,792);
				$pdf->Image($this->K_ROOT_DIR.'images/fondofinal.jpg', 0, 0,612,792); // AGREGADO POR IBRITO 10-07-2019 PARA SOLUCIONAR PROBLEMA INDICADO POR CLIENTES CON ERROR DE SESION.
				//----------------------------------------------------------------------------------------
				//condicion 2
				$pdf->SetFont('Helvetica','',9);
				$pdf->SetXY(60, 635);
				$pdf->MultiCell(500, 15, '-	Los valores son referenciales sujetos a confirmación por parte de COMERCIAL BIGGI (CHILE) S.A.','', 'L');
				$pdf->SetXY(60, 650);
				$pdf->MultiCell(500, 15, '-	Por tratarse de una “SOLICITUD DE COTIZACIÓN”, los valores son estimativos y no exactos, por lo que podrían darse diferencias al momento de realizar la compra.', '', 'L');
				$pdf->SetXY(60, 680);
				$pdf->MultiCell(500, 15, '-	Los equipos estan sujeto a stock o existencia al momento de la compra.', '', 'L');
				$pdf->SetXY(60, 695);
				$pdf->MultiCell(500, 15, '-	Un Ejecutivo Comercial se contactará con Ud. para confirmar la "SOLICITUD DE COTIZACION", o sí prefiere comuníquese con nosotros al telefono o fax:(56-2) 2412 6200 (56-2) 2412 6201 o envíenos mail a info@biggi.cl', '', 'L');
				
				$pdf->SetFont('Helvetica','B',16);
				$pdf->SetXY(35, 742);
				$pdf->MultiCell(542, 50, 'www.biggi.cl  -  info@biggi.cl'.$pdf->Footer(), '', 'C');
				
				$pdf->SetFont('Helvetica','B',10);
				$pdf->SetXY(500, 120);
				$pdf->MultiCell(80, 15, 'Nº Pag: '.$pdf->PageNo(), 0, 'R');
				$pdf->SetFont('Helvetica','B',12);
				$pdf->SetXY(40, 145);
				$pdf->MultiCell(30, 15, 'Ít', 0, 'C');
				$pdf->SetXY(70, 145);
				$pdf->MultiCell(265, 15, 'Producto', 0, 'C');
				$pdf->SetXY(335, 145);
				$pdf->MultiCell(65, 15, 'Modelo', 0, 'C');
				$pdf->SetXY(400, 145);
				$pdf->MultiCell(35, 15, 'Cant', 0, 'C');
				/*$pdf->SetXY(445, 145);
				$pdf->MultiCell(60, 15, 'Precio $', 0, 'C');
				$pdf->SetXY(495, 145);
				$pdf->MultiCell(65, 15, 'Total $', 0, 'C');*/
				$Y = $pdf->gety();
			}

			$pdf->SetFont('Helvetica','',10);
			$pdf->SetXY(40, $Y);
			$pdf->MultiCell(30, 15,$ITEM, '', 'C');
			$pdf->SetXY(70, $Y);
			$pdf->MultiCell(268, 15,$PRODUCTO, '', 'L');
			$pdf->SetXY(337, $Y);
			$pdf->MultiCell(65, 15,$MODELO, '', 'L');
			$pdf->SetXY(400, $Y);
			$pdf->MultiCell(35, 15, $detalle = number_format($CANTIDAD,1,',',' '), '', 'R');
			//$pdf->SetXY(435, $Y);
			//$pdf->MultiCell(60, 15, $detalle = number_format($PRECIO, 0, ',', '.'), '', 'R');
			//$pdf->SetXY(495, $Y);
			//$pdf->MultiCell(65, 15, $detalle = number_format($TOTAL,0,',','.'), '', 'R');
			
			$nro_pag = $pdf->PageNo();
				if($nro_pag == 1){
					$pdf->Image('images/linea_lados.jpg', 68, $Y-15 ,3, 15);
					$pdf->Image('images/linea_lados.jpg', 68, $Y ,3, 15);
					
					$pdf->Image('images/linea_lados.jpg', 333, $Y-15,3,15);
					$pdf->Image('images/linea_lados.jpg', 333, $Y,3,15);
					
					$pdf->Image('images/linea_lados.jpg', 398, $Y-15,3,15);
					$pdf->Image('images/linea_lados.jpg', 398, $Y,3,15);
					
					$pdf->Image('images/linea_lados.jpg', 445, $Y-15,3,15);
					$pdf->Image('images/linea_lados.jpg', 445, $Y,3,15);
					
					//$pdf->Image('images/linea_lados.jpg', 505, $Y-15,3,15);
					//$pdf->Image('images/linea_lados.jpg', 505, $Y,3,15);
					 
				}
				$e++;
		}
		//////Tabla Totales//////
		$nro_pag = $pdf->PageNo();
		if($nro_pag <> 1){
			//$pdf->Image('images/linea_total.jpg', 320, $Y + 75,240,1);
			$pdf->Image('images/linea_lados.jpg', 68, 145,3,$Y - 132);
			$pdf->Image('images/linea_lados.jpg', 333, 145,3,$Y - 132);
			$pdf->Image('images/linea_lados.jpg', 398, 145,3,$Y - 132);
			$pdf->Image('images/linea_lados.jpg', 445, 145,3,$Y - 132);
			//$pdf->Image('images/linea_lados.jpg', 505, 145,3,$Y - 132);
		}
		if($count < 12){
			//$pdf->Image('images/linea_total.jpg', 320, $Y + 75,240,1);
		}
		$pdf->SetFont('Helvetica','B',12);
	/*	$pdf->SetXY(320, $Y+40);
		$pdf->MultiCell(240, 15, 'Total Neto                $', 0, 'L');
		$pdf->SetXY(320, $Y+55);
		$pdf->MultiCell(240, 15, 'IVA '.$porc_iva = number_format($result[0]['PORC_IVA'],0,',',' ').'%                   $', '', 'L');
		$pdf->SetXY(320, $Y+82);
		$pdf->MultiCell(240, 15, 'Total con IVA          $', '', 'L');
		//------------------------------------------------------------;
		$pdf->SetXY(320, $Y+40);
		$pdf->MultiCell(240, 15,$detalle = number_format($result[0]['TOTAL_NETO'],0,',','.'),'','R');
		$pdf->SetXY(320, $Y+55);
		$pdf->MultiCell(240, 15,$detalle = number_format($result[0]['MONTO_IVA'],0,',','.'),'','R');
		$pdf->SetXY(320, $Y+82);
		$pdf->MultiCell(240, 15,$detalle = number_format($result[0]['TOTAL_CON_IVA'],0,',','.'),'','R');*/
	}
	function modifica_pdf(&$pdf, $cod_solicitud_cotizacion) {
	    
		$pdf->SetAutoPageBreak(true);
		$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
		
		$sql="SELECT	 SC.COD_SOLICITUD_COTIZACION
						,C.COD_CONTACTO
						, CONVERT(VARCHAR(10), SC.FECHA_SOLICITUD_COTIZACION, 103) AS 'FECHA'
						, C.NOM_CONTACTO 
						, C.RUT 
						, C.DIG_VERIF
						, C.NOM_CIUDAD
						,dbo.f_contacto_telefono(CP.COD_CONTACTO_PERSONA,1) TELEFONO 
						,dbo.f_contacto_telefono(CP.COD_CONTACTO_PERSONA,2) CELULAR 
						,CP.NOM_PERSONA--, CW.NOM_CONTACTO_WEB
						,CP.MAIL 
						,LL.MENSAJE
						, ISC.COD_ITEM_SOLICITUD_COTIZACION
						, ISC.NOM_PRODUCTO
						, ISC.COD_PRODUCTO
						, ISC.CANTIDAD
						, ISC.PRECIO
						, ISC.TOTAL_PRECIO
						, SC.TOTAL_NETO
						, SC.PORC_IVA
						, SC.MONTO_IVA
						, SC.TOTAL_CON_IVA
			FROM		SOLICITUD_COTIZACION SC
						,ITEM_SOLICITUD_COTIZACION ISC
						, CONTACTO C
						, PRODUCTO P
						,CONTACTO_PERSONA CP
						,LLAMADO LL
			WHERE	  	SC.COD_SOLICITUD_COTIZACION =  $cod_solicitud_cotizacion
						AND SC.COD_SOLICITUD_COTIZACION = ISC.COD_SOLICITUD_COTIZACION
						AND C.COD_CONTACTO = SC.COD_CONTACTO
						AND P.COD_PRODUCTO = ISC.COD_PRODUCTO
						AND C.COD_CONTACTO = CP.COD_CONTACTO
						AND SC.COD_LLAMADO = LL.COD_LLAMADO";
							
		$result = $db->build_results($sql);
		$count = count($result);
		$this->dibuja_uno($pdf, $result, $count);
	}	
}
?>