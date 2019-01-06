function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{

	  btnXPosArr=[108.9,274.05,410.05];
   	  btnYPosArr=[128.1,128.1,128.1];
	buttonArr=[];	
	sampleArray=[];
	bubbleArr=[];
	var lastBtnClick;
bubbleTitleArr=["ID_s1_titleTxt01","ID_s1_titleTxt02","ID_s1_titleTxt03"]
bubbleTextArr=["ID_s1_bodyTxt01","ID_s1_bodyTxt02","ID_s1_bodyTxt03"]
	
		function clickFunction(e){
		if(lastBtnClick!=null){
			
			$("#"+lastBtnClick).attr("src","plus_btn.png");
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
		
	for(var i=0;i<3;i++)
	{
         var btn2 = getCJSElement("TEXTBOX",{x:115,y:233.6,width:483,height:200,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
		_container.addChild(btn2);		
		bubbleArr[i]=btn2;
		bubbleArr[i].visible=false;
		bubbleArr[0].visible=true;
        
		
		var htmlElement = document.createElement("div");
		htmlElement.style.cssText = "position:absolute;";
		htmlElement.id = "domElement_"+i;
		htmlElement.innerHTML = "<img id="+i+" 'height='50' width='50' src='plus_btn.png'></img>";
		
		$("#mediaContainer").append(htmlElement)
		$("#"+i).on("click",clickFunction)
		$("#"+i).on("mouseover",mouseOverFunc);
		$("#"+i).on("mouseout",mouseOutFunc);
		$("#domElement_"+i).css("top",btnYPosArr[i]+"px")
		$("#domElement_"+i).css("left",btnXPosArr[i]+"px")
		$("#domElement_"+i).css("cursor","pointer")	
	}

	var domElement = new createjs.DOMElement(htmlElement);


	
});