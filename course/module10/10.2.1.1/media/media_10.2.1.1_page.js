function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {
	if(_id == 1){
		$('#ID_static_1').on("click", function () {			
			window.open('http://www.cisco.com/index.html');
		});
	}
})