function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
var manifest = [
		{src:"images/3_1_1_6.png", id:"_3_1_1_6"}
		];
	return manifest;			
});