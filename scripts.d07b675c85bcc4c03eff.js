function test(){}function test2(){window.addEventListener("camera-init",e=>{console.log("camera-init",e)})}function manejoAudio(){}function auxiliar(){document.querySelector("[soundhandler]").components.soundhandler.qux()}function movimiento(){var e=document.querySelector("[movehandler]").components.movehandler;return{x:e.rotacionX,y:e.rotacionY}}function validar(){return document.querySelector("[movehandler]").components.movehandler.move}function getTime(e){var n=document.querySelector("[videohandler]").components.videohandler,o=document.querySelector("[videohandler2]").components.videohandler2,r=document.querySelector("[videohandler3]").components.videohandler3,c=document.querySelector("[videohandler4]").components.videohandler4,t=document.querySelector("[videohandler5]").components.videohandler5,a=document.querySelector("[videohandler6]").components.videohandler6;return 0==e?n.vid.currentTime:1==e?o.vid.currentTime:2==e?r.vid.currentTime:3==e?c.vid.currentTime:4==e?t.vid.currentTime:5==e?a.vid.currentTime:void 0}function getActive(){var e=document.querySelector("[videohandler]").components.videohandler,n=document.querySelector("[videohandler2]").components.videohandler2,o=document.querySelector("[videohandler3]").components.videohandler3,r=document.querySelector("[videohandler4]").components.videohandler4,c=document.querySelector("[videohandler5]").components.videohandler5,t=document.querySelector("[videohandler6]").components.videohandler6;return 1==e.active?0:1==n.active?1:1==o.active?2:1==r.active?3:1==c.active?4:1==t.active?5:-1}function mediaPlayer(e,n){var o=document.querySelector("[videohandler]").components.videohandler,r=document.querySelector("[videohandler2]").components.videohandler2,c=document.querySelector("[videohandler3]").components.videohandler3,t=document.querySelector("[videohandler4]").components.videohandler4,a=document.querySelector("[videohandler5]").components.videohandler5,l=document.querySelector("[videohandler6]").components.videohandler6;0==n?1==e?o.vid.play():o.vid.pause():1==n?1==e?r.vid.play():r.vid.pause():2==n?1==e?c.vid.play():c.vid.pause():3==n?1==e?t.vid.play():t.vid.pause():4==n?1==e?a.vid.play():a.vid.pause():5==n&&(1==e?l.vid.play():l.vid.pause())}function canvaz(){var e=new handwriting.Canvas(document.getElementById("can"));console.log(e),e.setCallBack((function(e,n){if(n)throw n;console.log(e)})),e.setOptions({language:"en",numOfReturn:3}),e.recognize()}function push(){console.log("push")}function danfo(e){var n=[];console.log(e);for(let r=0;r<e.length;r++)for(let c=0;c<e[r].partidas.length;c++){var o=e[r].partidas[c];o.item=e[r].nombre,n.push(o)}df=new dfd.DataFrame(n),df.item.plot("plot_div").hist(),df.print()}function checkClick(){var e=document.querySelector("#fresa").components.clickhandler;return"fresa"===e.objCtrl?(e.limpiar(),"fresa"):""}function checkClick1(){var e=document.querySelector("#kiwi").components.clickhandler;return"kiwi"===e.objCtrl?(e.limpiar(),"kiwi"):""}function checkClick2(){var e=document.querySelector("#pina").components.clickhandler;return"pina"===e.objCtrl?(e.limpiar(),"pina"):""}function checkClick3(){var e=document.querySelector("#naranja").components.clickhandler;return"naranja"===e.objCtrl?(e.limpiar(),"naranja"):""}function checkClick4(){var e=document.querySelector("#uvas").components.clickhandler;return"uvas"===e.objCtrl?(e.limpiar(),"uvas"):""}function checkClick5(){var e=document.querySelector("#sandia").components.clickhandler;return"sandia"===e.objCtrl?(e.limpiar(),"sandia"):""}function checkClick6(){var e=document.querySelector("#banana").components.clickhandler;return"banana"===e.objCtrl?(e.limpiar(),"banana"):""}function checkClick7(){var e=document.querySelector("#manzana").components.clickhandler;return"manzana"===e.objCtrl?(e.limpiar(),"manzana"):""}function checkClick8(){var e=document.querySelector("#aceite").components.clickhandler;return"aceite"===e.objCtrl?(e.limpiar(),"aceite"):""}function checkClick9(){var e=document.querySelector("#cocoa").components.clickhandler;return"cocoa"===e.objCtrl?(e.limpiar(),"cocoa"):""}function checkClick10(){var e=document.querySelector("#huevo").components.clickhandler;return"huevo"===e.objCtrl?(e.limpiar(),"huevo"):""}function checkClick11(){var e=document.querySelector("#leche").components.clickhandler;return"leche"===e.objCtrl?(e.limpiar(),"leche"):""}function checkClick12(){var e=document.querySelector("#mani").components.clickhandler;return"mani"===e.objCtrl?(e.limpiar(),"mani"):""}function checkClick13(){var e=document.querySelector("#pan").components.clickhandler;return"pan"===e.objCtrl?(e.limpiar(),"pan"):""}function checkClick14(){var e=document.querySelector("#salsa").components.clickhandler;return"salsa"===e.objCtrl?(e.limpiar(),"salsa"):""}function checkClick15(){var e=document.querySelector("#yogurt").components.clickhandler;return"yogurt"===e.objCtrl?(e.limpiar(),"yogurt"):""}function checkClick16(){var e=document.querySelector("#aguacate").components.clickhandler;return"aguacate"===e.objCtrl?(e.limpiar(),"aguacate"):""}function checkClick17(){var e=document.querySelector("#carne").components.clickhandler;return"carne"===e.objCtrl?(e.limpiar(),"carne"):""}function checkClick18(){var e=document.querySelector("#lechuga").components.clickhandler;return"lechuga"===e.objCtrl?(e.limpiar(),"lechuga"):""}function checkClick19(){var e=document.querySelector("#papa").components.clickhandler;return"papa"===e.objCtrl?(e.limpiar(),"papa"):""}function checkClick20(){var e=document.querySelector("#pollo").components.clickhandler;return"pollo"===e.objCtrl?(e.limpiar(),"pollo"):""}function checkClick21(){var e=document.querySelector("#tomate").components.clickhandler;return"tomate"===e.objCtrl?(e.limpiar(),"tomate"):""}function checkClick22(){var e=document.querySelector("#verdura").components.clickhandler;return"verdura"===e.objCtrl?(e.limpiar(),"verdura"):""}function checkClick23(){var e=document.querySelector("#zanahoria").components.clickhandler;return"zanahoria"===e.objCtrl?(e.limpiar(),"zanahoria"):""}function changeActivity(e){document.querySelector("[run]").components.run.qux2(e)}function pares(){var e=document.querySelector("[run2]").components.run2;console.log(e.par1)}