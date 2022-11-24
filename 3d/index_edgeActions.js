/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.$("SaladBarRef").hide();
         sym.$("VitRefPsasnte").hide();
         sym.$("AutoservBanoMaria").hide();
         sym.$("TCD35L").hide();
         sym.$("CBI35").hide();
         sym.$("CC300").hide();
         sym.$("MSBR4").hide();
         sym.$("BAR").hide();
         sym.$("BARE").hide();
         sym.$("MAN90").hide();
         sym.$("BGN30").hide();
         sym.$("MEL").hide();
         sym.$("MSL").hide();
         sym.$("SVB140").hide();
         sym.$("Lavamanos").hide();
         sym.$("LavadoraVajilla").hide();
         sym.$("BI60").hide();
         sym.$("Meson").hide();
         sym.$("CAR1").hide();
         sym.$("MesonDesconche").hide();
         sym.$("LavVajInd").hide();
         sym.$("C200M").hide();
         sym.$("Estante").hide();
         sym.$("SR3").hide();
         sym.$("MesonRef").hide();
         sym.$("VitRefVis").hide();
         sym.$("Refrigerador").hide();
         sym.$("VitRef").hide();
         sym.$("VRI400").hide();
         sym.$("VitRef3").hide();
         sym.$("Congelador").hide();
         sym.$("PelPapas").hide();
         sym.$("FV400").hide();
         sym.$("R301D").hide();
         sym.$("CG6H").hide();
         sym.$("HDE101M").hide();
         sym.$("HG3").hide();
         sym.$("Freidora").hide();
         sym.$("PG").hide();
         sym.$("GGM").hide();
         sym.$("SB80").hide();
         sym.$("Marmita").hide();
         sym.$("C300").hide();
         sym.$("AnafeInd").hide();
		 sym.$("CG6C").hide();
		 sym.$("ModNeutro").hide();		
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("MSBR4").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("MSBR4").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("../familiaProd.php?cod_zona=1&cod_familia=21", "_parent");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("SVB140").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("SVB140").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn4}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("AutoservBanoMaria").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn4}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("AutoservBanoMaria").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn5}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("TCD35L").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn5}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("TCD35L").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn6}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("CBI35").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn6}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("CBI35").hide();

      });
      //Edge binding end
	  
      Symbol.bindElementAction(compId, symbolName, "${btn37}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("CC300").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn37}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("CC300").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn7}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("BARE").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn7}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("BARE").hide();

      });
      //Edge binding end
	 
      Symbol.bindElementAction(compId, symbolName, "${btn3}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("MAN90").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn3}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("MAN90").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn8}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("BGN30").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn8}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("BGN30").hide();

      });
      //Edge binding end
	  
      Symbol.bindElementAction(compId, symbolName, "${btn16}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("MSL").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn16}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("MSL").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn9}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Lavamanos").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn9}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Lavamanos").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn10}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Lavamanos").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn10}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Lavamanos").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn11}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("LavadoraVajilla").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn11}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("LavadoraVajilla").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn12}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("LavadoraVajilla").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn12}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("LavadoraVajilla").hide();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${bt14}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("BI60").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt14}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("BI60").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn15}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Meson").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn15}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Meson").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn17}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("MEL").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn17}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("MEL").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn18}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Meson").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn18}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Meson").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn19}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Meson").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn19}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Meson").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn20}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("CAR1").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn20}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("CAR1").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn21}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("CAR1").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn21}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("CAR1").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn22}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("MesonDesconche").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn22}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("MesonDesconche").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn23}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("LavVajInd").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn23}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("LavVajInd").hide();

      });
      //Edge binding end
	  
      Symbol.bindElementAction(compId, symbolName, "${btn99}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("C200M").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn99}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("C200M").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn24}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Estante").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn24}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Estante").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn25}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Estante").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn25}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Estante").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn26}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Estante").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn26}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Estante").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn27}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Estante").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn27}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Estante").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn28}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("SR3").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn28}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("SR3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn29}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("MesonRef").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn29}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("MesonRef").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn30}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("VitRefVis").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn30}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("VitRefVis").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn31}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Refrigerador").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn31}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Refrigerador").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn32}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("VitRef").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn32}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("VitRef").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn34}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("VRI400").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn34}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("VRI400").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn33}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Refrigerador").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn33}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Refrigerador").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn35}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("FV400").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn35}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("FV400").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn36}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("VRI400").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn36}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("VRI400").hide();

      });
      //Edge binding end



      Symbol.bindElementAction(compId, symbolName, "${btn38}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("LavadoraVajilla").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn38}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("LavadoraVajilla").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn40}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("PelPapas").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn40}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("PelPapas").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn41}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("R301D").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn41}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("R301D").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn42}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("SR3").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn42}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("SR3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn43}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("MesonRef").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn43}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("MesonRef").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn44}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("CG6H").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn44}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("CG6H").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HDE101M}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("HDE101Minado").show();

      });
      //Edge binding end 

      Symbol.bindElementAction(compId, symbolName, "${HDE101M}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("HDE101Minado").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn45}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("HDE101M").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn45}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("HDE101M").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn46}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("HG3").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn46}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("HG3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn47}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("BAR").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn47}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("BAR").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn48}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Freidora").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn48}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Freidora").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn49}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("PG").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn49}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("PG").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn50}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("GGM").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn50}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("GGM").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn51}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("SB80").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn51}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("SB80").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn52}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Marmita").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn52}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Marmita").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn53}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("C300").show();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn53}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("C300").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn54}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("C300").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn54}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("C300").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn55}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("CG6C").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn55}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("CG6C").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn56}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("CG6C").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn56}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("CG6C").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn6}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Ir a una nueva dirección URL en la ventana actual
         // (sustituya "_self" por el atributo de destino correspondiente)
         window.open("../familiaProd.php?cod_zona=1&cod_familia=8", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=15", "_parent");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=111", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=13&sub_cod_familia=110&tipo=13", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn7}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=1", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn8}", "click", function(sym, e) {
         // insertar código para doble clic de ratón aquí
         window.open("../familiaProd.php?cod_zona=1&cod_familia=1", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn9}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=25", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn10}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=25", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn11}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=11", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn12}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=11", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt14}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=23", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn15}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=17", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn16}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=2&cod_familia=12", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn18}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=17", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn19}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=17", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn20}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=3", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn21}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=3", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn22}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=17", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn23}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=12", "_parent");

      });
      //Edge binding end
	  
      Symbol.bindElementAction(compId, symbolName, "${btn99}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=2", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn24}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=6", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn25}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=6", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn26}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=6", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn27}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=6", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn28}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=37", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn29}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=36", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn43}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=36", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn30}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=38", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn31}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=34", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn32}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=38", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn34}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=4&cod_familia=87", "_parent");
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn33}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=34", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn35}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=4&cod_familia=87", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn36}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=38", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn37}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=35", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn40}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=32", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn41}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=26", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn42}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=37", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn44}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=5", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn45}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=10", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn46}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=9", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn47}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=1", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn48}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=7", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn50}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=18", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn51}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=22", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn52}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=16", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn54}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=2", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn55}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=4", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn56}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=4", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=38", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn17}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=2&cod_familia=12", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn38}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=11", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn49}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=19", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn53}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=2", "_parent");

      });
      //Edge binding end
      		
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'BaseCuad'
   (function(symbolName) {   
   
   })("BaseCuad");
   //Edge symbol end:'BaseCuad'

   //=========================================================
   
   //Edge symbol: 'SaladBarRef'
   (function(symbolName) {   
   
   })("SaladBarRef");
   //Edge symbol end:'SaladBarRef'

   //=========================================================
   
   //Edge symbol: 'cdcd'
   (function(symbolName) {   
   
   })("cdcd");
   //Edge symbol end:'cdcd'

   //=========================================================
   
   //Edge symbol: 'CEDE'
   (function(symbolName) {   
   
   })("CEDE");
   //Edge symbol end:'CEDE'

   //=========================================================
   
   //Edge symbol: 'btn2'
   (function(symbolName) {   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseover", function(sym, e) {
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "mouseout", function(sym, e) {
      
      
      });
      //Edge binding end

   })("btn2");
   //Edge symbol end:'btn2'

   //=========================================================
   
   //Edge symbol: 'AutoservBanoMaria'
   (function(symbolName) {   
   
   })("AutoservBanoMaria");
   //Edge symbol end:'AutoservBanoMaria'

   //=========================================================
   
   //Edge symbol: 'TCD35L'
   (function(symbolName) {   
   
   })("TCD35L");
   //Edge symbol end:'TCD35L'

   //=========================================================
   
   //Edge symbol: 'CBI35'
   (function(symbolName) {   
   
   })("CBI35");
   //Edge symbol end:'CBI35'

   //=========================================================

   //Edge symbol: 'CC300'
   (function(symbolName) {   
   
   })("CC300");
   //Edge symbol end:'CC300'

   //=========================================================
   
   //Edge symbol: 'MSBR4'
   (function(symbolName) {   
   
   })("MSBR4");
   //Edge symbol end:'MSBR4'

   //=========================================================

   //Edge symbol: 'BAR'
   (function(symbolName) {   
   
   })("BAR");
   //Edge symbol end:'BAR'
   
   //=========================================================
   
   //Edge symbol: 'BARE'
   (function(symbolName) {   
   
   })("BARE");
   //Edge symbol end:'BARE'

   //=========================================================
   
   //Edge symbol: 'MAN90'
   (function(symbolName) {   
   
   })("MAN90");
   //Edge symbol end:'MAN90'

   //=========================================================
   
   //Edge symbol: 'BGN30'
   (function(symbolName) {   
   
   })("BGN30");
   //Edge symbol end:'BGN30'

   //=========================================================
  
   //Edge symbol: 'MEL'
   (function(symbolName) {   
   
   })("MEL");
   //Edge symbol end:'MEL'

   //=========================================================


   //Edge symbol: 'MSL'
   (function(symbolName) {   
   
   })("MSL");
   //Edge symbol end:'MSL'

   //=========================================================

   //Edge symbol: 'SVB140'
   (function(symbolName) {   
   
   })("SVB140");
   //Edge symbol end:'SVB140'

   //=========================================================
   
   //Edge symbol: 'Lavamanos'
   (function(symbolName) {   
   
   })("Lavamanos");
   //Edge symbol end:'Lavamanos'

   //=========================================================
   
   //Edge symbol: 'LavadoraVajilla'
   (function(symbolName) {   
   
   })("LavadoraVajilla");
   //Edge symbol end:'LavadoraVajilla'

   //=========================================================
   
   //Edge symbol: 'BI60'
   (function(symbolName) {   
   
   })("BI60");
   //Edge symbol end:'BI60'

   //=========================================================
   
   //Edge symbol: 'Meson'
   (function(symbolName) {   
   
   })("Meson");
   //Edge symbol end:'Meson'

   //=========================================================
   
   //Edge symbol: 'CAR1'
   (function(symbolName) {   
   
   })("CAR1");
   //Edge symbol end:'CAR1'

   //=========================================================
   
   //Edge symbol: 'MesonDesconche'
   (function(symbolName) {   
   
   })("MesonDesconche");
   //Edge symbol end:'MesonDesconche'

   //=========================================================
   
   //Edge symbol: 'LavVajInd'
   (function(symbolName) {   
   
   })("LavVajInd");
   //Edge symbol end:'LavVajInd'

   //=========================================================
   
   //Edge symbol: 'Estante'
   (function(symbolName) {   
   
   })("Estante");
   //Edge symbol end:'Estante'

   //=========================================================
   
   //Edge symbol: 'SR3'
   (function(symbolName) {   
   
   })("SR3");
   //Edge symbol end:'SR3'

   //=========================================================
   
   //Edge symbol: 'MesonRef'
   (function(symbolName) {   
   
   })("MesonRef");
   //Edge symbol end:'MesonRef'

   //=========================================================
   
   //Edge symbol: 'VitRefVis'
   (function(symbolName) {   
   
   })("VitRefVis");
   //Edge symbol end:'VitRefVis'

   //=========================================================
   
   //Edge symbol: 'Refrigerador'
   (function(symbolName) {   
   
   })("Refrigerador");
   //Edge symbol end:'Refrigerador'

   //=========================================================
   
   //Edge symbol: 'VitRef'
   (function(symbolName) {   
   
   })("VitRef");
   //Edge symbol end:'VitRef'

   //=========================================================
   
   //Edge symbol: 'VRI400'
   (function(symbolName) {   
   
   })("VRI400");
   //Edge symbol end:'VRI400'

   //=========================================================
   
   //Edge symbol: 'FV400'
   (function(symbolName) {   
   
   })("FV400");
   //Edge symbol end:'FV400'

   //=========================================================
   
   //Edge symbol: 'VitRef3'
   (function(symbolName) {   
   
   })("VitRef3");
   //Edge symbol end:'VitRef3'

   //=========================================================
   
   //Edge symbol: 'Congelador'
   (function(symbolName) {   
   
   })("Congelador");
   //Edge symbol end:'Congelador'

   //=========================================================
   
   //Edge symbol: 'PelPapas'
   (function(symbolName) {   
   
   })("PelPapas");
   //Edge symbol end:'PelPapas'

   //=========================================================
   
   //Edge symbol: 'R301D'
   (function(symbolName) {   
   
   })("R301D");
   //Edge symbol end:'R301D'

   //=========================================================
   
   //Edge symbol: 'CG6H'
   (function(symbolName) {   
   
   })("CG6H");
   //Edge symbol end:'CG6H'

   //=========================================================
   
   //Edge symbol: 'HDE101M'
   (function(symbolName) {   
   
   })("HDE101M");
   //Edge symbol end:'HDE101M'

   //=========================================================
   
   //Edge symbol: 'HG3'
   (function(symbolName) {   
   
   })("HG3");
   //Edge symbol end:'HG3'

   //=========================================================
   
   //Edge symbol: 'Freidora'
   (function(symbolName) {   
   
   })("Freidora");
   //Edge symbol end:'Freidora'

   //=========================================================
   
   //Edge symbol: 'PG'
   (function(symbolName) {   
   
   })("PG");
   //Edge symbol end:'PG'

   //=========================================================
   
   //Edge symbol: 'GGM'
   (function(symbolName) {   
   
   })("GGM");
   //Edge symbol end:'GGM'

   //=========================================================
   
   //Edge symbol: 'SB80'
   (function(symbolName) {   
   
   })("SB80");
   //Edge symbol end:'SB80'

   //=========================================================
   
   //Edge symbol: 'Marmita'
   (function(symbolName) {   
   
   })("Marmita");
   //Edge symbol end:'Marmita'

   //=========================================================
   
   //Edge symbol: 'C300'
   (function(symbolName) {   
   
   })("C300");
   //Edge symbol end:'C300'

   //=========================================================
   
   //Edge symbol: 'AnafeInd'
   (function(symbolName) {   
   
   })("AnafeInd");
   //Edge symbol end:'AnafeInd'
   
   //=========================================================
 
   
   //Edge symbol: 'CG6C'
   (function(symbolName) {   
   
   })("CG6C");
   //Edge symbol end:'CG6C'
   
   //=========================================================
 
})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-136382260");