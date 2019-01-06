loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


(slideViewDidLoad = function(_container,_id){
	if(_id == 1) {
		 btnXPosArr=[70,367.25,70,367.25];
   	  btnYPosArr=[30.10,30.10,190,190];
		btnNameArr=['btn01','btn02','btn03','btn04']; 
		buttonArr = [];
		buttonClickArr=[];
		buttonOverArr=[];
		bubbleArr=[];
		var lastBtnClick;
		textBoxProps=['ID_titleTxt01', 'ID_bodyTxt01', 89, 372, 502, 110];
		for(var i=0; i < btnXPosArr.length; i++) {
		var container=new createjs.Container();
		_container.addChild(container);
		container.id=i;
		container.cursor='pointer';
		btn = getCJSElement('IMAGE',{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:'../../../common/images/plus_btn.png'});
		buttonArr.push(btn);
		container.addChild(btn);
		btn1 = getCJSElement('IMAGE',{x:btnXPosArr[i],y:btnYPosArr[i],width:48,height:58.70,src:'../../../common/images/plus_btn_over.png'}); buttonOverArr.push(btn1);
		container.addChild(btn1);
		btn1.visible=false;
		btn2 = getCJSElement('IMAGE',{x:btnXPosArr[i]+5,y:btnYPosArr[i]+3,width:35,height:35,src:'../../../common/images/plus_btn_over2.png'});
		buttonClickArr.push(btn2);
		container.addChild(btn2);
		btn2.visible=false;container.addEventListener('click', handlerMethod);
		container.addEventListener('mouseover', handlerOverMethod);
		container.addEventListener('mouseout', handlerOutMethod);
		var tBoxTitle = textBoxProps[0].split('0')[0]+ btnNameArr[i].split('n')[1];
		var tBoxBody = textBoxProps[1].split('0')[0]+ btnNameArr[i].split('n')[1];
		tBox = getCJSElement('TEXTBOX',{x:textBoxProps[2],y:textBoxProps[3],width:textBoxProps[4],height:textBoxProps[5],size: 11, titleId: tBoxTitle, bodyId: tBoxBody});
		bubbleArr[i] = tBox;
		_container.addChild(tBox);
		tBox.visible=false;
		bubbleArr[0].visible=true;
		buttonClickArr[0].visible=true;
		}
		function handlerMethod(event) {for(var i=0; i < btnXPosArr.length; i++) {bubbleArr[i].visible=false; buttonClickArr[i].visible=false;}if(lastBtnClick) {buttonOverArr[lastBtnClick.id].visible=false; 
		lastBtnClick.addEventListener('mouseover', handlerOverMethod); 
		lastBtnClick.addEventListener('mouseout', handlerOutMethod); 
		} 
		bubbleArr[event.target.id].visible=true; 
		buttonClickArr[event.target.id].visible=true; 
		event.target.removeEventListener('mouseover', handlerOverMethod); 
		event.target.removeEventListener('mouseout', handlerOutMethod); 
		lastBtnClick=event.target; 
		} 
		function handlerOverMethod(event) { 
		buttonOverArr[event.target.id].visible=true; 
		} 
		function handlerOutMethod(event) { 
		buttonOverArr[event.target.id].visible=false;
} 
}});














/*function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
	if(_id==1)
	{
	  btnXPosArr=[70,367.25,70,367.25];
   	  btnYPosArr=[30.10,30.10,197.7,197.7];
	buttonArr=[];	
	sampleArray=[];
	bubbleArr=[];
	var lastBtnClick;
bubbleTitleArr=["ID_s1_titleTxt01","ID_s1_titleTxt02","ID_s1_titleTxt03","ID_s1_titleTxt04"]
bubbleTextArr=["ID_s1_bodyTxt01","ID_s1_bodyTxt02","ID_s1_bodyTxt03","ID_s1_bodyTxt04"]
	
		function clickFunction(e){
		if(lastBtnClick!=null){
			
			//$("#"+lastBtnClick).attr("src","plus_btn.png");
			$("#"+lastBtnClick).on("mouseover",mouseOverFunc);
			$("#"+lastBtnClick).on("mouseout",mouseOutFunc);
			bubbleArr[lastBtnClick].visible=false;
		}
	    lastBtnClick=e.target.id
		$("#"+e.target.id).attr("src","plus_btn_over2.png");		
		$("#"+e.target.id).off("mouseover",mouseOverFunc);
		$("#"+e.target.id).off("mouseout",mouseOutFunc);
		bubbleArr[e.target.id].visible=true;

	}
	
	
	function mouseOverFunc(e){	
		$("#"+e.target.id).attr("src","plus_btn_over.png");
	}
	
	
	function mouseOutFunc(e){
		$("#"+e.target.id).attr("src","plus_btn.png");
	}	
		
	for(var i=0;i<4;i++)
	{
         var btn2 = getCJSElement("TEXTBOX",{x:89,y:382.6,width:502,height:100,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
		_container.addChild(btn2);		
		bubbleArr[i]=btn2;
		bubbleArr[i].visible=false;
		
		var htmlElement = document.createElement("div");
		htmlElement.style.cssText = "position:absolute;";
		htmlElement.id = "domElement_"+i;
		htmlElement.innerHTML = "<img id="+i+" 'height='50' width='50' src='plus_btn.png'></img>";
		
		$("#slide_1").append(htmlElement)
		$("#"+i).on("click",clickFunction)
		$("#"+i).on("mouseover",mouseOverFunc);
		$("#"+i).on("mouseout",mouseOutFunc);
		$("#domElement_"+i).css("top",btnYPosArr[i]+"px")
		$("#domElement_"+i).css("left",btnXPosArr[i]+"px")
		$("#domElement_"+i).css("cursor","pointer")	
	}

	var domElement = new createjs.DOMElement(htmlElement);


	}
});*/