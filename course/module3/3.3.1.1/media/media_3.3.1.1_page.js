loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
(Animation = function(control,id){		
var manifest= [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap4.png", id:"Bitmap4"}
	];
		return manifest;	
});


	
	
(slide1 = function(slideContainer){
	
 

	activity = getActivityElement({div:"slide_1",subType:"ANIMATION", movieClipId:"anim02", totalFrames:"324"})
	slideContainer.activity_2 = activity;
	slideContainer.addChild(activity);
	
	activity = getActivityElement({div:"slide_1",subType:"ANIMATION", movieClipId:"anim01", totalFrames:"207"})
	slideContainer.activity_1 = activity;
	slideContainer.addChild(activity);
	
			
	btn = getCJSElement("BLUE_BUTTON",{x:182.75,y:409.25,width:150,height:21,compId:"ID_s1_btn01",callback:btnHandler,id:"1"});
	btn.setSelected(true);
	slideContainer.btn_1 = btn;	
	slideContainer.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:346.55,y:409.25,width:150,height:21,compId:"ID_s1_btn02",callback:btnHandler,id:"2"});
	slideContainer.btn_2 = btn;
	slideContainer.addChild(btn);
	btnHandler(1)
	
	function btnHandler(id)
	{					
		slideContainer.btn_1.setSelected(false);	
		slideContainer.btn_2.setSelected(false);	
		
		slideContainer["btn_"+id].setSelected(true);
		slideContainer.getStage().update();
		slideContainer.activity_1.visible = false;
		slideContainer.activity_2.visible = false;
	
		slideContainer["activity_"+id].visible = true;
		slideContainer.getStage().update();
		update = true;
	}
	
});

(slideViewDidLoad = function(slideContainer,id){
	
 
	if(id == 1)
	{	
		loadImages([{src:"../../../common/scripts/templates_ext_dev.js", id:"ext"}],function(){			
		slide1(slideContainer);
		});
	}
	
});




