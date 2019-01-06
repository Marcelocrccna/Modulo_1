function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
var clickBool=false;
btnXPos=60.45;
btnYPos=16.95;
var textContainer;




  var hit = new createjs.Shape();
		hit.graphics.beginFill("#000000").drawRect(0,0,680,490);
		hit.alpha=0.4;
		 _container.addChild(hit);
		 hit.visible=false;

var container=new createjs.Container()
_container.addChild(container);
container.cursor="pointer";


  

btn = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:43,height:43,src:"trans_btn.png",});
container.addChild(btn);


btn1 = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:43,height:43,src:"trans_btn_over.png",});
container.addChild(btn1);
btn1.visible=false;


btn2 = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:43,height:43,src:"cross.png",});
container.addChild(btn2);
btn2.visible=false;



		ID_txt01 = getCJSElement("TEXT",{x:268,y:130,compId:"ID_trans01",width:55,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up+down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt01);
		ID_txt01.visible=false;

		ID_txt02 = getCJSElement("TEXT",{x:400,y:140,compId:"ID_trans02",width:45,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up+down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt02);
		ID_txt02.visible=false;

		ID_txt03 = getCJSElement("TEXT",{x:321.45,y:204,compId:"ID_trans03",width:65,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up+down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt03);
		ID_txt03.visible=false;

		ID_txt04 = getCJSElement("TEXT",{x:386.45,y:258,compId:"ID_trans04",width:48,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up+down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt04);
		ID_txt04.visible=false;

		ID_txt05 = getCJSElement("TEXT",{x:260.7,y:305,compId:"ID_trans05",width:31,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up+down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt05);
		ID_txt05.visible=false;

		ID_txt06 = getCJSElement("TEXT",{x:313.45,y:311.4,compId:"ID_trans06",width:64,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up+down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt06);
		ID_txt06.visible=false;

		ID_txt07 = getCJSElement("TEXT",{x:100.75,y:215,compId:"ID_trans07",width:67,color:"#ffffff",bgColor:"#000000",align:"center",expand:"up+down",bgWithoutBorder:"true",corner:3});
        _container.addChild(ID_txt07);
		ID_txt07.visible=false;

		

		
		
     


container.addEventListener("click", handlerMethod);
container.addEventListener("mouseover", handlerOverMethod);
container.addEventListener("mouseout", handlerOutMethod);
//var btn2 = getCJSElement("TEXTBOX",{x:405.95,y:96,width:234.75,height:287,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
//_container.addChild(btn2);






	 function handlerMethod(event) {
		
		if(clickBool==false)
		{
	
			ID_txt01.visible=true;
			ID_txt02.visible=true;
			ID_txt03.visible=true;
			ID_txt04.visible=true;
			ID_txt05.visible=true;
			ID_txt06.visible=true;
			ID_txt07.visible=true;

			

		
	
		btn2.visible=true;
		
		hit.visible=true;
		$("#ID_title").css("opacity","0.4");
		clickBool=true;
		}
		else 
		{
			
		
		ID_txt01.visible=false;
		ID_txt02.visible=false;
		ID_txt03.visible=false;
		ID_txt04.visible=false;
		ID_txt05.visible=false;
		ID_txt06.visible=false;
		ID_txt07.visible=false;

		
		
			clickBool=false;
			
			btn2.visible=false;
			hit.visible=false;
			$("#ID_title").css("opacity","1");
		}
	
	   
 }
 
 function handlerOverMethod(event)
 {

	btn1.visible=true;
	

 }
  function handlerOutMethod(event)
 {
	btn1.visible=false;
	}

	
});