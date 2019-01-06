function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
	if(_id==1){
		var totalButton=3;
var btnXPosArr=[50,97,138];
var btnYPosArr=[164.80,164.80,164.80];
var buttonArr=[];
var buttonClickArr=[];
var buttonOverArr=[];
var bubbleArr=[];
var sampleArray=[];
var lastBtnClick;
bubbleTitleArr=["ID_titleTxt01","ID_titleTxt02","ID_titleTxt03"]
bubbleTextArr=["ID_bodyTxt01","ID_bodyTxt02","ID_bodyTxt03"]
for(var i=0;i<totalButton;i++)
{
var container=new createjs.Container()
_container.addChild(container);
container.id=i;

container.cursor="pointer";


btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"../../../common/images/plus_btn.png",});

buttonArr.push(btn);
container.addChild(btn);

btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"../../../common/images/plus_btn_over.png",});

buttonOverArr.push(btn1);
container.addChild(btn1);
btn1.visible=false;

btn4 = getCJSElement("IMAGE",{x:btnXPosArr[i]+5,y:btnYPosArr[i]+3,width:35,height:35,src:"../../../common/images/plus_btn_over2.png",});

buttonClickArr.push(btn4);
container.addChild(btn4);
btn4.visible=false;

container.addEventListener("click", handlerMethod);
container.addEventListener("mouseover", handlerOverMethod);
container.addEventListener("mouseout", handlerOutMethod);
var btn2 = getCJSElement("TEXTBOX",{x:40,y:375,width:600,height:105,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i],});

_container.addChild(btn2);
bubbleArr[i]=btn2;
bubbleArr[i].visible=false;
bubbleArr[0].visible=true;
buttonClickArr[0].visible=true;

}

}




	
	function handlerMethod(event) {
		console.log("handlerMethod");
		for(var i=0;i<totalButton;i++)
		{
	
		bubbleArr[i].visible=false;
		buttonClickArr[i].visible=false;
		
		}
		if(lastBtnClick)
		{
		buttonOverArr[lastBtnClick.id].visible=false;
		lastBtnClick.addEventListener("mouseover", handlerOverMethod);
		lastBtnClick.addEventListener("mouseout", handlerOutMethod);
		}
		bubbleArr[event.target.id].visible=true;
		buttonClickArr[event.target.id].visible=true;

       event.target.removeEventListener("mouseover", handlerOverMethod);
       event.target.removeEventListener("mouseout", handlerOutMethod);
	   lastBtnClick=event.target;
	   
 }
 
 function handlerOverMethod(event)
 {
 	console.log("handlerOverMethod");

	buttonOverArr[event.target.id].visible=true;
	

 }
  function handlerOutMethod(event)
 {
 	console.log("handlerOutMethod");
	buttonOverArr[event.target.id].visible=false;
	}

	
});