
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
(Animation = function(control,id){		
		var manifest = [
		{src:"images/colloutImg.png", id:"colloutImg"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/_if.png", id:"_if"},
		{src:"images/media_1322.png", id:"media_1322"},
		{src:"images/media_1322pngcopy.jpg", id:"media_1322pngcopy"},
		{src:"images/orangearrow.png", id:"orangearrow"},
		{src:"images/questionmark.png", id:"questionmark"}
	];
		return manifest;	
});
(slideViewDidLoad = function(_container,_id)
{
	if(_id==2){


  btnXPosArr=[88,96.4,292.4];
  btnYPosArr=[187,43,19];
buttonArr=[];
buttonClickArr=[];
buttonOverArr=[];
bubbleArr=[];
sampleArray=[];
var lastBtnClick;
bubbleTitleArr=["ID_s1_titleTxt01","ID_s1_titleTxt02","ID_s1_titleTxt03"]
bubbleTextArr=["ID_s1_bodyTxt01","ID_s1_bodyTxt02","ID_s1_bodyTxt03"]
for(var i=0;i<3;i++)
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
var btn2 = getCJSElement("TEXTBOX",{x:85,y:337,width:507.3,height:135,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
_container.addChild(btn2);
bubbleArr[i]=btn2;
bubbleArr[i].visible=false;
bubbleArr[0].visible=true;
buttonClickArr[0].visible=true;

}
}

	 function handlerMethod(event) {
		
		for(var i=0;i<3;i++)
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