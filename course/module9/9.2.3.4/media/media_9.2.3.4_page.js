function registerSWF() {
   swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {
	if(_id==2)
	{

   highlightedBtnSrc = ['media_9.2.3.4.B.png'];

   var imgElement = document.createElement("div");
    imgElement.style.cssText = "position:absolute;";
   imgElement.id = "domElement_img";
   imgElement.innerHTML = "<img id='imgHighlighted' height='490' width='680' src="+highlightedBtnSrc[0]+"></img>";
   console.log("created");
   $("#slide_2").append(imgElement);
   $("#imgHighlighted").css("top", "0px");
   $("#imgHighlighted").css("left", "0px");
 }  
 if(_id==3)
	{

   highlightedBtnSrc = ['media_9.2.3.4.C.png'];

   var imgElement = document.createElement("div");
    imgElement.style.cssText = "position:absolute;";
   imgElement.id = "domElement_img";
   imgElement.innerHTML = "<img id='imgHighlighted' height='490' width='680' src="+highlightedBtnSrc[0]+"></img>";
   console.log("created");
   $("#slide_3").append(imgElement);
   $("#imgHighlighted").css("top", "10px");
   $("#imgHighlighted").css("left", "0px");
 }  

 if(_id==4)
	{

   highlightedBtnSrc = ['media_9.2.3.4.D.png'];

   var imgElement = document.createElement("div");
    imgElement.style.cssText = "position:absolute;";
   imgElement.id = "domElement_img";
   imgElement.innerHTML = "<img id='imgHighlighted' height='490' width='680' src="+highlightedBtnSrc[0]+"></img>";
   console.log("created");
   $("#slide_4").append(imgElement);
   $("#imgHighlighted").css("top", "0px");
   $("#imgHighlighted").css("left", "0px");
 }  


 if(_id==5)
	{

   highlightedBtnSrc = ['media_9.2.3.4.E.png'];

   var imgElement = document.createElement("div");
    imgElement.style.cssText = "position:absolute;";
   imgElement.id = "domElement_img";
   imgElement.innerHTML = "<img id='imgHighlighted' height='490' width='680' src="+highlightedBtnSrc[0]+"></img>";
   console.log("created");
   $("#slide_5").append(imgElement);
   $("#imgHighlighted").css("top", "0px");
   $("#imgHighlighted").css("left", "0px");
 }  

   var domElement = new createjs.DOMElement(htmlElement);



});