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
         sym.$("ModNeutro").hide();
         sym.$("AutoservBanoMaria").hide();
         sym.$("MantLiq").hide();
         sym.$("HervAgua").hide();
         sym.$("Bandejero").hide();
         sym.$("Lavamanos").hide();
         sym.$("LavadoraVajilla").hide();
         sym.$("Batidora").hide();
         sym.$("Meson").hide();
         sym.$("Carro").hide();
         sym.$("MesonDesconche").hide();
         sym.$("LavVajInd").hide();
         sym.$("Estante").hide();
         sym.$("SalseraRef").hide();
         sym.$("MesonRef").hide();
         sym.$("VitRefVis").hide();
         sym.$("Refrigerador").hide();
         sym.$("VitRef").hide();
         sym.$("VitRef2").hide();
         sym.$("VitRef3").hide();
         sym.$("Congelador").hide();
         sym.$("Licuadora").hide();
         sym.$("PelPapas").hide();
         sym.$("Refrigerador2").hide();
         sym.$("ProcVeg").hide();
         sym.$("CocinaSemiInd").hide();
         sym.$("HornoComb").hide();
         sym.$("HornoInd").hide();
         sym.$("Freidora").hide();
         sym.$("PlanchaChurr").hide();
         sym.$("ParrGrill").hide();
         sym.$("SartBas").hide();
         sym.$("Marmita").hide();
         sym.$("Campana").hide();
         sym.$("AnafeInd").hide();
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("SaladBarRef").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn1}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("SaladBarRef").hide();

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
         sym.$("VitRefPsasnte").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn2}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("VitRefPsasnte").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn3}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("ModNeutro").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn3}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("ModNeutro").hide();

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
         sym.$("MantLiq").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn5}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("MantLiq").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn6}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("HervAgua").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn6}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("HervAgua").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn7}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Bandejero").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn7}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Bandejero").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn8}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Bandejero").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn8}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Bandejero").hide();

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
         sym.$("Batidora").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt14}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Batidora").hide();

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

      Symbol.bindElementAction(compId, symbolName, "${btn16}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Meson").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn16}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Meson").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn17}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Meson").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn17}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Meson").hide();

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
         sym.$("Carro").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn20}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Carro").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn21}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Carro").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn21}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Carro").hide();

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
         sym.$("SalseraRef").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn28}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("SalseraRef").hide();

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
         sym.$("VitRef2").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn34}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("VitRef2").hide();

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
         sym.$("Refrigerador2").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn35}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Refrigerador2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn36}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("VitRefVis").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn36}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("VitRefVis").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn37}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Congelador").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn37}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Congelador").hide();

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

      Symbol.bindElementAction(compId, symbolName, "${btn39}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Licuadora").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn39}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Licuadora").hide();

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
         sym.$("ProcVeg").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn41}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("ProcVeg").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn42}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("SalseraRef").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn42}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("SalseraRef").hide();

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
         sym.$("CocinaSemiInd").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn44}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("CocinaSemiInd").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HornoComb}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("HornoCombinado").show();

      });
      //Edge binding end 

      Symbol.bindElementAction(compId, symbolName, "${HornoComb}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("HornoCombinado").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn45}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("HornoComb").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn45}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("HornoComb").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn46}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("HornoInd").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn46}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("HornoInd").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn47}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Bandejero").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn47}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Bandejero").hide();

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
         sym.$("PlanchaChurr").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn49}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("PlanchaChurr").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn50}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("ParrGrill").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn50}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("ParrGrill").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn51}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("SartBas").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn51}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("SartBas").hide();

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
         sym.$("Campana").show();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn53}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Campana").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn54}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("Campana").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn54}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("Campana").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn55}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("AnafeInd").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn55}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("AnafeInd").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn56}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         sym.$("AnafeInd").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn56}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("AnafeInd").hide();

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
         window.open("../productos.php", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=13", "_parent");

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
         window.open("../familiaProd.php?cod_zona=1&cod_familia=17", "_parent");

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
         window.open("../familiaProd.php?cod_zona=1&cod_familia=38", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn33}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=34", "_parent");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn35}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=34", "_parent");

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

      Symbol.bindElementAction(compId, symbolName, "${btn39}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.open("../familiaProd.php?cod_zona=1&cod_familia=24", "_parent");

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
         window.open("../familiaProd.php?cod_zona=1&cod_familia=11", "_parent");

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
   
   //Edge symbol: 'ModNeutro'
   (function(symbolName) {   
   
   })("ModNeutro");
   //Edge symbol end:'ModNeutro'

   //=========================================================
   
   //Edge symbol: 'AutoservBanoMaria'
   (function(symbolName) {   
   
   })("AutoservBanoMaria");
   //Edge symbol end:'AutoservBanoMaria'

   //=========================================================
   
   //Edge symbol: 'MantLiq'
   (function(symbolName) {   
   
   })("MantLiq");
   //Edge symbol end:'MantLiq'

   //=========================================================
   
   //Edge symbol: 'HervAgua'
   (function(symbolName) {   
   
   })("HervAgua");
   //Edge symbol end:'HervAgua'

   //=========================================================
   
   //Edge symbol: 'Bandejero'
   (function(symbolName) {   
   
   })("Bandejero");
   //Edge symbol end:'Bandejero'

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
   
   //Edge symbol: 'Batidora'
   (function(symbolName) {   
   
   })("Batidora");
   //Edge symbol end:'Batidora'

   //=========================================================
   
   //Edge symbol: 'Meson'
   (function(symbolName) {   
   
   })("Meson");
   //Edge symbol end:'Meson'

   //=========================================================
   
   //Edge symbol: 'Carro'
   (function(symbolName) {   
   
   })("Carro");
   //Edge symbol end:'Carro'

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
   
   //Edge symbol: 'SalseraRef'
   (function(symbolName) {   
   
   })("SalseraRef");
   //Edge symbol end:'SalseraRef'

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
   
   //Edge symbol: 'VitRef2'
   (function(symbolName) {   
   
   })("VitRef2");
   //Edge symbol end:'VitRef2'

   //=========================================================
   
   //Edge symbol: 'Refrigerador2'
   (function(symbolName) {   
   
   })("Refrigerador2");
   //Edge symbol end:'Refrigerador2'

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
   
   //Edge symbol: 'Licuadora'
   (function(symbolName) {   
   
   })("Licuadora");
   //Edge symbol end:'Licuadora'

   //=========================================================
   
   //Edge symbol: 'PelPapas'
   (function(symbolName) {   
   
   })("PelPapas");
   //Edge symbol end:'PelPapas'

   //=========================================================
   
   //Edge symbol: 'ProcVeg'
   (function(symbolName) {   
   
   })("ProcVeg");
   //Edge symbol end:'ProcVeg'

   //=========================================================
   
   //Edge symbol: 'CocinaSemiInd'
   (function(symbolName) {   
   
   })("CocinaSemiInd");
   //Edge symbol end:'CocinaSemiInd'

   //=========================================================
   
   //Edge symbol: 'HornoComb'
   (function(symbolName) {   
   
   })("HornoComb");
   //Edge symbol end:'HornoComb'

   //=========================================================
   
   //Edge symbol: 'HornoInd'
   (function(symbolName) {   
   
   })("HornoInd");
   //Edge symbol end:'HornoInd'

   //=========================================================
   
   //Edge symbol: 'Freidora'
   (function(symbolName) {   
   
   })("Freidora");
   //Edge symbol end:'Freidora'

   //=========================================================
   
   //Edge symbol: 'PlanchaChurr'
   (function(symbolName) {   
   
   })("PlanchaChurr");
   //Edge symbol end:'PlanchaChurr'

   //=========================================================
   
   //Edge symbol: 'ParrGrill'
   (function(symbolName) {   
   
   })("ParrGrill");
   //Edge symbol end:'ParrGrill'

   //=========================================================
   
   //Edge symbol: 'SartBas'
   (function(symbolName) {   
   
   })("SartBas");
   //Edge symbol end:'SartBas'

   //=========================================================
   
   //Edge symbol: 'Marmita'
   (function(symbolName) {   
   
   })("Marmita");
   //Edge symbol end:'Marmita'

   //=========================================================
   
   //Edge symbol: 'Campana'
   (function(symbolName) {   
   
   })("Campana");
   //Edge symbol end:'Campana'

   //=========================================================
   
   //Edge symbol: 'AnafeInd'
   (function(symbolName) {   
   
   })("AnafeInd");
   //Edge symbol end:'AnafeInd'
   
   //=========================================================
 
})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-136382260");