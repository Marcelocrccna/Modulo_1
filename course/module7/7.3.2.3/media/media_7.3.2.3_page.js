loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
(Animation = function(control,id){		
		var manifest = [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
        {src:"images/Bitmap2.png", id:"Bitmap2"},
        {src:"images/Bitmap3.png", id:"Bitmap3"},
        {src:"images/Bitmap4.png", id:"Bitmap4"}
	];
		return manifest;	
});

