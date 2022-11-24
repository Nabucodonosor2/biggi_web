<?php
require_once(dirname(__FILE__)."/../commonlib/trunk/php/auto_load.php");
require_once("appl.ini");
//require_once(dirname(__FILE__)."/../biggi/trunk/appl/llamado/class_envio_mail.php"); // local
require_once(dirname(__FILE__)."/../biggi_comercial/trunk/appl/llamado/class_envio_mail.php"); // oficial

session::set('COD_USUARIO', 1);

$NOM_CONTACTO = $_REQUEST['NOM_CONTACTO'];
$EMAIL_CONTACTO = $_REQUEST['EMAIL_CONTACTO'];
$EMPRESA_CONTACTO = $_REQUEST['EMPRESA_CONTACTO'];
$TELEFONO_CONTACTO = $_REQUEST['TELEFONO_CONTACTO'];
$CELULAR_CONTACTO = $_REQUEST['CELULAR_CONTACTO'];
$COMENTARIO_CONTACTO = $_REQUEST['COMENTARIO_CONTACTO'];
$CIUDAD = $_REQUEST['COD_CIUDAD'];
$RUT = $_REQUEST['RUT'];
$DIG_VERIF = $_REQUEST['DIG_VERIF'];

if($NOM_CONTACTO == '' && $NOM_CONTACTO == 'null' && $NOM_CONTACTO == '	' &&
	$EMAIL_CONTACTO == '' && $EMAIL_CONTACTO == 'null' &&$EMAIL_CONTACTO == ' ' && 
			$TELEFONO_CONTACTO == '' && $TELEFONO_CONTACTO == 'null' && $TELEFONO_CONTACTO == ' ' && 
						$CIUDAD == '' && $CIUDAD == 'null' && $CIUDAD == ' '){

						echo 'hola';
	print "<script language='JavaScript'>
			alert('Mensaje no pudo ser enviado correctamente');
			</script>";

	print "	<script type='text/javascript'>
			window.location='index.php';
			</script>";
	return;								
}

$RUT = $RUT=='' ? "null" : $RUT;

	$db = new database(K_TIPO_BD, K_SERVER, K_BD, K_USER, K_PASS);
	$sp= 'spu_contacto'; 
	$param= "'INSERT', NULL, '$EMPRESA_CONTACTO', $RUT, '$DIG_VERIF', NULL, NULL, NULL, 'CONTACTAR WEB', '$CIUDAD'";
	
	$db->BEGIN_TRANSACTION();
	if ($db->EXECUTE_SP($sp, $param)){ //begin ELSE = 4
		$cod_contacto = $db->get_identity();		
		$sp = 'spu_contacto_persona';
		$param	=	"'INSERT'
					,NULL
					,$cod_contacto
					,'$NOM_CONTACTO'
					,'$EMAIL_CONTACTO'
					,NULL
					,'$TELEFONO_CONTACTO'
					,'$CELULAR_CONTACTO'
					,NULL";

		if($db->EXECUTE_SP($sp, $param)){ //begin ELSE = 3
			$cod_contacto_persona_telefono = $db->get_identity();
														
			$sql = "SELECT COD_CONTACTO_PERSONA 
					FROM CONTACTO_PERSONA_TELEFONO 
					WHERE COD_CONTACTO_PERSONA_TELEFONO = $cod_contacto_persona_telefono";	
			$result = $db->build_results($sql);
			$cod_contacto_persona = $result[0]['COD_CONTACTO_PERSONA'];		

			$sp='spu_llamado';
							$param="'INSERT'
									,null
								    ,62
								    ,$cod_contacto
									,$cod_contacto_persona
								    ,'$COMENTARIO_CONTACTO'
								    ,5 --local 7 oficial
									,'$TELEFONO_CONTACTO\n$CELULAR_CONTACTO'
								    ,'N'
									,NULL
									,NULL
									,NULL
									,'Registro automático / Contáctenos Web Biggi'";

			if($db->EXECUTE_SP($sp, $param)){ //begin ELSE = 2
				$cod_llamado = $db->get_identity();
				$sp='spu_contacto_telefono';
				$param = "'INSERT'
						  ,null
						  ,$cod_contacto
						  ,'$TELEFONO_CONTACTO'";

				if($db->EXECUTE_SP($sp, $param)){ //begin ELSE = 1
					$sql = "SELECT	 dw.COD_DESTINATARIO 
									,dw.RESPONSABLE
							FROM DESTINATARIO_WEB dw, DESTINATARIO d
							WHERE dw.ORIGEN = 'CONTACTAR WEB' 
							and d.COD_DESTINATARIO = dw.COD_DESTINATARIO
							and d.VIGENTE = 'S'"; 
					$result = $db->build_results($sql);
					
					 //begin FOR( count($result) ) = 1
					$error_for = false;
					for($i=0;$i <count($result);$i++){
						$cod_responsable = $result[$i]['COD_DESTINATARIO'];
						$responsable = $result[$i]['RESPONSABLE'];
										
						$sp="spu_llamado_destinatario";
						$param ="'INSERT'
								 ,NULL
								 ,$cod_llamado
								 ,$cod_responsable
								 ,'$responsable'";
														
						if(!$db->EXECUTE_SP($sp, $param)){
							$error_for = true;
							break;
						}
					}
					 //end FOR( count($result) ) = 1
					
					if($error_for){
						$db->ROLLBACK_TRANSACTION();
						return;
					}
					
				}else{
					$db->ROLLBACK_TRANSACTION();
					return;
				}//end ELSE = 1
				
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

	//se  termina toda la transaccion SQL;
	$db->COMMIT_TRANSACTION();
	
class_envio_mail::envio_mail($cod_llamado);
print "<script language='JavaScript'>
                alert('Mensaje enviado correctamente');
                </script>";

print "	<script type='text/javascript'>
		window.location='index.php';
		</script>";
?>