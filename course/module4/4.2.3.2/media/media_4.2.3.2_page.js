
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{	
  	btnXPosArr=[244,244,244,244,244];
	btnYPosArr=[50,98,146,194,242];
buttonArr=[];
buttonClickArr=[];
buttonOverArr=[];
bubbleArr=[];
sampleArray=[];
var lastBtnClick;
bubbleTitleArr=["ID_PopTitle01","ID_PopTitle02","ID_PopTitle03","ID_PopTitle04","ID_PopTitle05"];
bubbleTextArr=["ID_PopBody01","ID_PopBody02","ID_PopBody03","ID_PopBody04","ID_PopBody05"];
imagePathArray = ["cableView0.png","cableView1.png","cableView2.png","cableView3.png","cableView4.png","cableView5.png"];
imageArray = [];
for(var i=0;i<5;i++)
{
var container=new createjs.Container()
_container.addChild(container);
container.id=i;

container.cursor="pointer";
    
for(var j = 0; j < imagePathArray.length; j++) {
    img = getCJSElement("IMAGE",{x:"0",y:"0",width:680,height:490,src:imagePathArray[j]});
    imageArray.push(img);
    container.addChild(img);
    if(j != 0) {
        img.visible = false;
    }
}


btn = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:45,height:55.70,src:"../../../common/images/plus_btn.png",});

buttonArr.push(btn);
container.addChild(btn);

btn1 = getCJSElement("IMAGE",{x:btnXPosArr[i],y:btnYPosArr[i],width:45,height:55.70,src:"../../../common/images/plus_btn_over.png",});

buttonOverArr.push(btn1);
container.addChild(btn1);
btn1.visible=false;

btn4 = getCJSElement("IMAGE",{x:btnXPosArr[i]+5,y:btnYPosArr[i]+3,width:32.5,height:32.5,src:"../../../common/images/plus_btn_over2.png",});

buttonClickArr.push(btn4);
container.addChild(btn4);
btn4.visible=false;

container.addEventListener("click", handlerMethod);
container.addEventListener("mouseover", handlerOverMethod);
container.addEventListener("mouseout", handlerOutMethod);
var btn2 = getCJSElement("TEXTBOX",{x:425,y:45,width:225,height:279,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
_container.addChild(btn2);

bubbleArr[i]=btn2;
bubbleArr[i].visible=false;
bubbleArr[0].visible=true;
buttonClickArr[0].visible=true;
}

	 function handlerMethod(event) {
		
		for(var i=0;i<5;i++)
		{
	
		bubbleArr[i].visible=false;
		buttonClickArr[i].visible=false;
            
		
		}
         
         for(var j=0; j<imageArray.length;j++) {
            imageArray[j].visible = false; 
         }
		if(lastBtnClick)
		{
		buttonOverArr[lastBtnClick.id].visible=false;
		lastBtnClick.addEventListener("mouseover", handlerOverMethod);
		lastBtnClick.addEventListener("mouseout", handlerOutMethod);
		}
		bubbleArr[event.target.id].visible=true;
		buttonClickArr[event.target.id].visible=true;
        imageArray[event.target.id+1].visible = true;

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
