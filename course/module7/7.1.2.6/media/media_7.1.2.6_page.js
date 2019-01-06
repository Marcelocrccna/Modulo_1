
// function registerSWF(){
	// swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
// }

// loadScript("../../../common/scripts/swfobject.js", registerSWF);

// (slideViewDidLoad = function(_container,_id)
// {
// if(_id == 1){
// var totalButton=5;
// btnXPosArr=[163,220,211,211,210];
// btnYPosArr=[117,161,222,302,382];
// buttonArr=[];
// buttonClickArr=[];
// buttonOverArr=[];
// bubbleArr=[];
// sampleArray=[];
// var lastBtnClick;
// bubbleTitleArr=["ID_s1_titleTxt01","ID_s1_titleTxt02","ID_s1_titleTxt03","ID_s1_titleTxt04","ID_s1_titleTxt05"]
// bubbleTextArr=["ID_s1_bodyTxt01","ID_s1_bodyTxt02","ID_s1_bodyTxt03","ID_s1_bodyTxt04","ID_s1_bodyTxt05"]
// for(var i=0;i<5;i++)
// {
// var container=new createjs.Container()
// _container.addChild(container);
// container.id=i;

// container.cursor="pointer";


// btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn.png",});

// buttonArr.push(btn);
// container.addChild(btn);

// btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn_over.png",});

// buttonOverArr.push(btn1);
// container.addChild(btn1);
// btn1.visible=false;

// btn4 = getCJSElement("IMAGE",{x:btnXPosArr[i]+5,y:btnYPosArr[i]+3,width:35,height:35,src:"plus_btn_over2.png",});

// buttonClickArr.push(btn4);
// container.addChild(btn4);
// btn4.visible=false;

// container.addEventListener("click", handlerMethod);
// container.addEventListener("mouseover", handlerOverMethod);
// container.addEventListener("mouseout", handlerOutMethod);
// var btn2 = getCJSElement("TEXTBOX",{x:428,y:147,width:230,height:230,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
// _container.addChild(btn2);

// bubbleArr[i]=btn2;
// bubbleArr[i].visible=false;



// }}


// if(_id == 2){
// var totalButton=5;
// btnXPosArr=[163,220,211,211,210];
// btnYPosArr=[117,161,222,302,382];
// buttonArr=[];
// buttonClickArr=[];
// buttonOverArr=[];
// bubbleArr=[];
// sampleArray=[];
// var lastBtnClick;
// bubbleTitleArr=["ID_s2_titleTxt01","ID_s2_titleTxt02","ID_s2_titleTxt03","ID_s2_titleTxt04","ID_s2_titleTxt05"]
// bubbleTextArr=["ID_s2_bodyTxt01","ID_s2_bodyTxt02","ID_s2_bodyTxt03","ID_s2_bodyTxt04","ID_s2_bodyTxt05"]
// for(var i=0;i<5;i++)
// {
// var container=new createjs.Container()
// _container.addChild(container);
// container.id=i;

// container.cursor="pointer";


// btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn.png",});

// buttonArr.push(btn);
// container.addChild(btn);

// btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:"plus_btn_over.png",});

// buttonOverArr.push(btn1);
// container.addChild(btn1);
// btn1.visible=false;

// btn4 = getCJSElement("IMAGE",{x:btnXPosArr[i]+5,y:btnYPosArr[i]+3,width:35,height:35,src:"plus_btn_over2.png",});

// buttonClickArr.push(btn4);
// container.addChild(btn4);
// btn4.visible=false;

// container.addEventListener("click", handlerMethod);
// container.addEventListener("mouseover", handlerOverMethod);
// container.addEventListener("mouseout", handlerOutMethod);
// var btn2 = getCJSElement("TEXTBOX",{x:428,y:147,width:230,height:230,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
// _container.addChild(btn2);

// bubbleArr[i]=btn2;
// bubbleArr[i].visible=false;

// }}


	 // function handlerMethod(event) {
		
		// for(var i=0;i<totalButton;i++)
		// {
	
		// bubbleArr[i].visible=false;
		// buttonClickArr[i].visible=false;
		
		// }
		// if(lastBtnClick)
		// {
		// buttonOverArr[lastBtnClick.id].visible=false;
		// lastBtnClick.addEventListener("mouseover", handlerOverMethod);
		// lastBtnClick.addEventListener("mouseout", handlerOutMethod);
		// }
		// bubbleArr[event.target.id].visible=true;
		// buttonClickArr[event.target.id].visible=true;

       // event.target.removeEventListener("mouseover", handlerOverMethod);
       // event.target.removeEventListener("mouseout", handlerOutMethod);
	   // lastBtnClick=event.target;
	   
 // }
 
 // function handlerOverMethod(event)
 // {

	// buttonOverArr[event.target.id].visible=true;
	

 // }
  // function handlerOutMethod(event)
 // {
	// buttonOverArr[event.target.id].visible=false;
	// }

	
// });


function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
	if(_id == 1){
var totalButton=5;
btnXPosArr=[163,220,211,211,210];
btnYPosArr=[117,161,222,302,382];
var buttonArr=[];
var buttonClickArr=[];
var buttonOverArr=[];
var bubbleArr=[];
var sampleArray=[];
var lastBtnClick;
bubbleTitleArr=["ID_s1_titleTxt01","ID_s1_titleTxt02","ID_s1_titleTxt03","ID_s1_titleTxt04","ID_s1_titleTxt05"]
bubbleTextArr=["ID_s1_bodyTxt01","ID_s1_bodyTxt02","ID_s1_bodyTxt03","ID_s1_bodyTxt04","ID_s1_bodyTxt05"]
for(var i=0;i<totalButton;i++)
{
var container=new createjs.Container()
_container.addChild(container);
container.id=i;

container.cursor="pointer";


btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:43,height:53.70,src:'../../../common/images/plus_btn.png',});

buttonArr.push(btn);
container.addChild(btn);

btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:43,height:53.70,src:'../../../common/images/plus_btn_over.png',});

buttonOverArr.push(btn1);
container.addChild(btn1);
btn1.visible=false;

btn4 = getCJSElement("IMAGE",{x:btnXPosArr[i]+5,y:btnYPosArr[i]+3,width:31,height:31,src:'../../../common/images/plus_btn_over2.png',});

buttonClickArr.push(btn4);
container.addChild(btn4);
btn4.visible=false;

container.addEventListener("click", handlerMethod);
container.addEventListener("mouseover", handlerOverMethod);
container.addEventListener("mouseout", handlerOutMethod);
var btn2 = getCJSElement("TEXTBOX",{x:340,y:100,width:250,height:290,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
_container.addChild(btn2);

bubbleArr[i]=btn2;
bubbleArr[i].visible=false;

}
bubbleArr[0].visible=true;
buttonClickArr[0].visible=true;
	}


if(_id == 2){
var totalButton=5;

btnXPosArr=[163,220,211,211,210];
btnYPosArr=[117,161,222,302,382];
var buttonArr=[];
var buttonClickArr=[];
var buttonOverArr=[];
var bubbleArr=[];
var sampleArray=[];
var lastBtnClick;
bubbleTitleArr=["ID_s2_titleTxt01","ID_s2_titleTxt02","ID_s2_titleTxt03","ID_s2_titleTxt04","ID_s2_titleTxt05"]
bubbleTextArr=["ID_s2_bodyTxt01","ID_s2_bodyTxt02","ID_s2_bodyTxt03","ID_s2_bodyTxt04","ID_s2_bodyTxt05"]
for(var i=0;i<totalButton;i++)
{
var container=new createjs.Container()
_container.addChild(container);
container.id=i;

container.cursor="pointer";


btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:43,height:53.70,src:'../../../common/images/plus_btn.png',});

buttonArr.push(btn);
container.addChild(btn);

btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:43,height:53.70,src:'../../../common/images/plus_btn_over.png',});

buttonOverArr.push(btn1);
container.addChild(btn1);
btn1.visible=false;

btn4 = getCJSElement("IMAGE",{x:btnXPosArr[i]+5,y:btnYPosArr[i]+3,width:31,height:31,src:'../../../common/images/plus_btn_over2.png',});

buttonClickArr.push(btn4);
container.addChild(btn4);
btn4.visible=false;

container.addEventListener("click", handlerMethod);
container.addEventListener("mouseover", handlerOverMethod);
container.addEventListener("mouseout", handlerOutMethod);
var btn2 = getCJSElement("TEXTBOX",{x:425.25,y:142,width:200,height:250,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
_container.addChild(btn2);

bubbleArr[i]=btn2;
bubbleArr[i].visible=false;

}
bubbleArr[0].visible=true;
buttonClickArr[0].visible=true;
	}
	
	 function handlerMethod(event) {
		
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

	buttonOverArr[event.target.id].visible=true;
	

 }
  function handlerOutMethod(event)
 {
	buttonOverArr[event.target.id].visible=false;
	}
	
});

