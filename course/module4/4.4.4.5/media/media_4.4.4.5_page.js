loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var mainMovieClip;

(Animation = function(control,id)
{		
	var manifest = [
		{src:"images/Bitmap1.png", id:"Bitmap1"}
	];
		return manifest;	
});

