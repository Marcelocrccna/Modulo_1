loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(_container,_id)
{
btnXPosArr=[24.4,239.1,24.4,245.55];
btnYPosArr=[53.2,53.2,254.45,254.45];
buttonArr=[];
buttonClickArr=[];
buttonOverArr=[];
bubbleArr=[];
sampleArray=[];
var lastBtnClick;
bubbleTitleArr=["ID_titleTxt01","ID_titleTxt02","ID_titleTxt03","ID_titleTxt04"]
bubbleTextArr=["ID_bodyTxt01","ID_bodyTxt02","ID_bodyTxt03","ID_bodyTxt04"]
for(var i=0;i<4;i++)
{
var container=new createjs.Container()
_container.addChild(container);
container.id=i;

container.cursor="pointer";


btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:44,height:54.70,src:"../../../common/images/plus_btn.png",});

buttonArr.push(btn);
container.addChild(btn);

btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:44,height:54.70,src:"../../../common/images/plus_btn_over.png",});

buttonOverArr.push(btn1);
container.addChild(btn1);
btn1.visible=false;

btn4 = getCJSElement("IMAGE",{x:btnXPosArr[i]+5,y:btnYPosArr[i]+3,width:32,height:32,src:"../../../common/images/plus_btn_over2.png",});

buttonClickArr.push(btn4);
container.addChild(btn4);
btn4.visible=false;

container.addEventListener("click", handlerMethod);
container.addEventListener("mouseover", handlerOverMethod);
container.addEventListener("mouseout", handlerOutMethod);
var btn2 = getCJSElement("TEXTBOX",{x:474,y:69,width:180,height:340,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
_container.addChild(btn2);

bubbleArr[i]=btn2;
bubbleArr[i].visible=false;

}

bubbleArr[0].visible=true;
buttonClickArr[0].visible=true;


	 function handlerMethod(event) {
		
		for(var i=0;i<4;i++)
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

	buttonOverArr[event.target.id].visible=true;
	

 }
  function handlerOutMethod(event)
 {
	buttonOverArr[event.target.id].visible=false;
	}

	
});