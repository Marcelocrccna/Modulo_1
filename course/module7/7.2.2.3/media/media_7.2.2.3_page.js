loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(_container, _id) {
	if(_id == 2){
		var htmlElement = document.createElement("div");
        htmlElement.style.cssText = "position:absolute;";
        htmlElement.id = "domElement_" + _id;

        $("#slide_"+_id).append(htmlElement);

        var _html = "<img id='slide2_img' height='490' width='680' src='media_7.2.2.3.png'></img>";

        $("#domElement_"+_id).append(_html);
	}
});