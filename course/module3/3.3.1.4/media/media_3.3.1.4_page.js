loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var mainMovieClip;

(Animation = function(control,id){		
	var manifest = [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/CiscoWebpage1copy.jpg", id:"CiscoWebpage1copy"}
	];
		return manifest;	
});

(slideViewDidLoad = function(slideContainer,id){
		var c=document.getElementById("canvas");
	    c.height=490;

	    //var doc = $('#media-container').find('#media').contents();
	    //$(doc).find('canvas').css({'height':'490px'})
});