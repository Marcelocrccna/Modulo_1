
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
 
loadScript("../../../common/scripts/swfobject.js", registerSWF);
 
 
(slideViewDidLoad = function(slideContainer,id){
	
	var p; // shortcut to reference prototypes

// stage content:




if(id == 1)
	{	
		var textbox = getCJSElement("TEXTBOX",{x:45, y:110,width:580,height:200,bodyId:"ID_bullet01"});
		textbox.visible = true;
	
		
		var textbox2 = getCJSElement("TEXTBOX",{x:45, y:110,width:580,height:200, bodyId:"ID_bullet02"});
		textbox2.visible = false;		
		
		var buttn1 = getCJSElement("BLUE_BUTTON",{x:"265",y:"344.5",width:"150",height:"21",compId:"ID_btn01"});
		
		
		var buttn2 = getCJSElement("BLUE_BUTTON",{x:"265",y:"344.5",width:"150",height:"21",compId:"ID_btn02"});
		buttn2.visible=false;
		slideContainer.addChild(textbox, textbox2,buttn1, buttn2);
		
		buttn1.addEventListener("click",function(ev){
			textbox2.visible = true;
			textbox.visible = false;
			buttn2.visible=true;
			buttn1.visible = false;				
		})
		
		
		buttn2.addEventListener("click",function(ev){
			textbox2.visible = false;
			textbox.visible = true;
			buttn1.visible=true;
			buttn2.visible = false;		
			
		})
		
		
		
		
	}


})