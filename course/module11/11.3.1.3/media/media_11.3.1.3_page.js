loadScript("../../../common/scripts/swfobject.js", registerSWF); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
(slideViewDidLoad = function(_container, _id) {
 if(_id==2)
  {

   highlightedBtnSrc = ['media_11.3.1.3.B.png'];

   var imgElement = document.createElement("div");
    imgElement.style.cssText = "position:absolute;";
   imgElement.id = "domElement_img";
   imgElement.innerHTML = "<img id='imgHighlighted' height='490' width='680' src="+highlightedBtnSrc[0]+"></img>";
   console.log("created");
   $("#slide_2").append(imgElement);
   $("#imgHighlighted").css("top", "-2px");
   $("#imgHighlighted").css("left", "-8px");
    $("#imgHighlighted").css("position", "absolute");
 }  
     var domElement = new createjs.DOMElement(htmlElement);
 });