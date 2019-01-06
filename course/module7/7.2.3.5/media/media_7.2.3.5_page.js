loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");


function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var interval = setInterval(function(){
if(document.getElementById("preloader")){
if(document.getElementById("preloader").style.display == "none"){
window.clearInterval(interval);
console.log("cleared interval");
var canvas = document.getElementById("canvas");
canvas.width = 1100;

}
}

}, 10);
