function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(Animation = function(control,id){
		
	
	var manifest = [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap10.png", id:"Bitmap10"},
		{src:"images/Bitmap11.png", id:"Bitmap11"},
		{src:"images/Bitmap12.png", id:"Bitmap12"},
		{src:"images/Bitmap13.png", id:"Bitmap13"},
		{src:"images/Bitmap14.png", id:"Bitmap14"},
		{src:"images/Bitmap15.png", id:"Bitmap15"},
		{src:"images/Bitmap16.png", id:"Bitmap16"},
		{src:"images/Bitmap17.png", id:"Bitmap17"},
		{src:"images/Bitmap18.png", id:"Bitmap18"},
		{src:"images/Bitmap19.png", id:"Bitmap19"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap20.png", id:"Bitmap20"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/Bitmap6.png", id:"Bitmap6"},
		{src:"images/Bitmap7.png", id:"Bitmap7"},
		{src:"images/Bitmap8.png", id:"Bitmap8"},
		{src:"images/Bitmap9.png", id:"Bitmap9"}
	];
	return manifest;			
});
