<?php
require_once(dirname(__FILE__)."/../../commonlib/trunk/php/auto_load.php");
include("load_menu_web.php");

class Template_biggi_web extends Template_appl {
	function Template_biggi_web($filename, $js_onload='') {
		parent::Template_appl($filename);
		//$this->setVar('K_MENU_WEB', session::get("K_MENU_WEB"));
		//$this->setVar('K_ROOT_URL', session::get('K_ROOT_URL'));
		$this->setVar('K_FOOTER_WEB', session::get('K_FOOTER_WEB'));
		
	}
}
?>