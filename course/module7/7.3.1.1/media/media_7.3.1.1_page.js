
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){		
		var manifest = [{src:"images/Bitmap1.png", id:"Bitmap1"},
        {src:"images/Bitmap2.png", id:"Bitmap2"}];	
		return manifest;	
});

var interval = setInterval(function(){
    if(document.getElementById("preloader")){
        if(document.getElementById("preloader").style.display == "none"){
            window.clearInterval(interval);
            console.log("cleared interval");
            var canvas = document.getElementById("canvas");
            canvas.height = 490;

        }
    }

}, 10)