<?php
require_once(dirname(__FILE__)."/../../commonlib/trunk/php/auto_load.php");
require_once(dirname(__FILE__)."/../appl.ini");

//load footer
$footer =	'<div class="contacto">
				<div class="innerContacto_1">
					<ul>
						<li>
							<form name="formul" action="envio_mail.php" method="post" onsubmit="return validacion();">
								<ul>
									<li>
										<p>Nombre (*)</p>
										<input name="NOM_CONTACTO" id="NOM_CONTACTO" type="text" class="fnt" required="">
									</li>
									<li>
										<p>Email (*)</p>
										<input name="EMAIL_CONTACTO" id="EMAIL_CONTACTO" type="text" class="fnt" onchange="validate_mail(this);" required="">
									</li>
									<li>
										<p>Empresa</p>
										<input name="EMPRESA_CONTACTO" id="EMPRESA_CONTACTO" type="text" class="fnt" >
									</li>
									<li>
										<p>Rut</p>
										<input name="RUT" id="RUT" type="text" class="fnt" style="width:150px;" > - <input style="width:20px;" class="fnt" name="DIG_VERIF" id="DIG_VERIF">
									</li>
									<li>
										<p>Ciudad (*)</p>
										<input name="COD_CIUDAD" id="COD_CIUDAD" type="text" class="fnt" required="">
									</li>
									<li>
										<p>Teléfono (*)</p>
										<input name="TELEFONO_CONTACTO" id="TELEFONO_CONTACTO" type="text" class="fnt" required="">
									</li>
									<li>
										<p>Celular</p>
										<input name="CELULAR_CONTACTO" id="CELULAR_CONTACTO" type="text" class="fnt" >
									</li>
									<li>
										<p>Consultas y Comentarios</p>
										<textarea name="COMENTARIO_CONTACTO" id="COMENTARIO_CONTACTO"  class="fnt"></textarea>
										<p>CAPTCHA (*)</p>
										<div class="g-recaptcha" data-sitekey="6LcG8hwUAAAAAAkOMWAZ94FSg9btlJPhRwlv0S1w" data-callback="f_valida_soy_robot"></div>
										<input class="input_text" name="NO_SOY_ROBOT_CONTACTO" id="NO_SOY_ROBOT_CONTACTO" type="hidden" value="N" size="100" maxlength="100">
										<input class="sendix" name="b_enviar" type="submit" value="Enviar." align="left" id="b_enviar">
										<br><br>
									</li>
									<li>
			
									</li>
									<li>
										<!--<div class="g-recaptcha" data-sitekey="6LcG8hwUAAAAAAkOMWAZ94FSg9btlJPhRwlv0S1w"></div>-->
									</li>
								</ul>
							</form>
						</li>
						<li>
							<div class="ctTel_1">
								<h1>
									<a href="tel:+56224126200">(56) 22412 6200</a>
								</h1>
							</div><br><br><br>		
							<div class="ctTel_1">
								<h1>
									<a href="tel:+56224126202">(56) 22412 6202</a>
								</h1>
							</div>
							<br><br><br>
							<div class="ctTel_1">
								<h1>
									<a href="tel:+56224126203">(56) 22412 6203</a>
								</h1>
							</div>
							<p class="conTxt">NUESTRA UBICACÍON</p>
							<div  class="embed-container maps">
								<iframe src="https://mapsengine.google.com/map/u/0/embed?mid=zMGCmKXGejE0.k_zfEQAXhndo" style="pointer-events:none" width="570" height="320"></iframe>
							</div>
												
						</li>	
              <li>
                <p class="ctTel_2">VISÍTENOS | CONTÁCTENOS</p>
							<br><br>
							<p class="ctTel_2">Comercial BiGGI (Chile) S.A.</p><br><br>
							<p class="ctTel_2">Avenida Portugal 1726.<p><br>
							<p class="ctTel_2">Santiago - Chile.<p><br>
							<p class="ctTel_2"><a class="tfs_biggi" href="mailto:info@biggi.cl?subject=Contacto via web Comercial BIGGI">INFO@BIGGI.CL</a></p>
             </li>
             <li>
             <p class="ctTel_webpay"><img src="logowp.png" width="181" height="67"></p>
             </li>  
             
					</ul>
				</div>
			</div>
			<footer>2022 Comercial BIGGI (Chile) S.A. - Todos los derechos reservados.</p>(Sitio Web optimizado para Firefox, Chrome y Safari.)</footer>';

session::set('K_FOOTER_WEB', $footer);

?>