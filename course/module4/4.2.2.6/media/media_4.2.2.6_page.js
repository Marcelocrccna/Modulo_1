
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(DragnDrop = function(container1,manifest){

	var stage = container1.getStage();
	var mouseTarget;	// the display object currently under the mouse, or being dragged
	var dragStarted;	// indicates whether we are currently in a drag operation
	var offset;
	update = true;
	var correctAnswersArr=[["bmp_0","bmp_9"],["bmp_1","bmp_8"],["bmp_4","bmp_15"],["bmp_5","bmp_12"],["bmp_2","bmp_13"],["bmp_3","bmp_14"],["bmp_6","bmp_11"],["bmp_7","bmp_10"]];
	
	
	function stop() {
		createjs.Ticker.removeEventListener("tick", tick);
	}

	function imageLoaded(imgs) {
		// create and populate the screen with random daisies:
		for(var i = 0; i < manifest.length; i++){
			if(i<17){
			var bitmap = new createjs.Bitmap(imgs[String(manifest[i].id)]);
			
			bitmap.x = manifest[i].x;
			bitmap.y = manifest[i].y;
			bitmap.regX = bitmap.image.width/2|0;
			bitmap.regY = bitmap.image.height/2|0;
			bitmap.name = "bmp_"+i;
			bitmap.cursor="pointer";
			container1.addChild(bitmap);
			
			
			if(i<16 && i>=8){
				// wrapper function to provide scope for the event handlers:
				(function(target) {
				
					bitmap.onPress = function(evt) {
						// bump the target in front of it's siblings:
						//container1.addChild(target);
						
						getHitTarget(evt.target);
						
						ansPopupWindow1.visible=0;
						container1.setChildIndex(target, stage.getNumChildren() - 2);
						//var offset = {x:target.x-evt.stageX, y:target.y-evt.stageY};
						var point2 = container1.globalToLocal(evt.stageX, evt.stageY);
						var offset = {x:evt.target.x-point2.x, y:evt.target.y-point2.y};	

						// add a handler to the event object's onMouseMove callback
						// this will be active until the user releases the mouse button:
						evt.onMouseMove = function(ev) {
							var point = container1.globalToLocal(ev.stageX, ev.stageY);
							ev.target.x =(point.x + offset.x);
							ev.target.y = (point.y + offset.y);	
		
							//target.x = ev.stageX+offset.x;
							//target.y = ev.stageY+offset.y;
							// indicate that the stage should be updated on the next tick:
							update = true;
						}
						evt.onMouseUp = function(ev){
							getHitTarget(ev.target);
							align(ev.target);
						}
					}
					bitmap.onMouseOver=function(evt){
					
						evt.target.shadow = new createjs.Shadow("#038BD1", 0, 0, 10);
					}
					bitmap.onMouseOut=function(evt){
						evt.target.shadow = new createjs.Shadow("#038BD1", 0, 0, 0);
					}
				})(bitmap);
			}
			if(i<8){
				bitmap.alpha=0;
				
				
				var bitmap = new createjs.Bitmap("../../../common/images/tick.png");
				container1.addChild(bitmap);
				bitmap.x=manifest[i].x-8;
				bitmap.y=manifest[i].y+64;
				bitmap.name="tick_"+i;
				bitmap.visible=0;
				
				//wrong image
				bitmap = new createjs.Bitmap("../../../common/images/wrong.png");
				container1.addChild(bitmap);
				bitmap.x=manifest[i].x-8;
				bitmap.y=manifest[i].y+64;
				bitmap.name="wrong_"+i;
				bitmap.visible=0;
			}
		}

		createjs.Ticker.addEventListener("tick", tick);
		}
	}
	
	
	
	function getHitTarget(o){
	
		for(var p=0; p<8; p++){
			hitO=container1.getChildByName("bmp_"+p);
			collision = ndgmr.checkPixelCollision(o,hitO,0,true);
			if(collision){
				container1.getChildByName("tick_"+p).visible=0;
				container1.getChildByName("wrong_"+p).visible=0;
				break;
			}
		}
	
	}
	
	function align(o){
	
	
		var num=o.name.split("bmp_")[1];
		
	
		var hitO;
		var collision=false;
		for(var p=0; p<8; p++){
			hitO=container1.getChildByName("bmp_"+p);
			collision = ndgmr.checkPixelCollision(o,hitO,0,true);
			if(collision){
				break;
			}
		}
		if(collision){
			o.x=hitO.x;
			o.y=hitO.y;
		}else{
			
			//alert(num);
			createjs.Tween.get(o,{override:true}).to({x:manifest[num].x, y:manifest[num].y}, 500,createjs.Ease.sineInOut);
		}
		
		
		for(var m=8; m<17; m++){
			if(num==m){
				continue;
			}else{
				hitSibling = container1.getChildByName("bmp_"+m);
				collision = ndgmr.checkPixelCollision(o,hitSibling,0,true);
				if(collision){
					createjs.Tween.get(hitSibling,{override:true}).to({x:manifest[m].x, y:manifest[m].y}, 500,createjs.Ease.sineInOut);
				}
			}
		}
	
	}

	function tick(event) {
		// this set makes it so the stage only re-renders when an event handler indicates a change has happened.
		if (update) {
			update = false; // only update once
			stage.update(event);
		}
	}
		
	function checkHandler(){
		
		var allcorrect=true;
		for(var k=0; k<8; k++){
			var o1=container1.getChildByName(correctAnswersArr[k][0]);
			var o2=container1.getChildByName(correctAnswersArr[k][1]);
			collision = ndgmr.checkPixelCollision(o1,o2,0,true);
			if(collision){
				container1.getChildByName("tick_"+correctAnswersArr[k][0].split("_")[1]).visible=1;
			}else{
				for(var j=0; j<8; j++){
					var o1=container1.getChildByName(correctAnswersArr[k][0]);
					var o2=container1.getChildByName(correctAnswersArr[j][1]);
					collision2 = ndgmr.checkPixelCollision(o1,o2,0,true);
					if(collision2){
					
						container1.getChildByName("wrong_"+correctAnswersArr[k][0].split("_")[1]).visible=1;
					//allcorrect=false;
					}
				}
				//container1.getChildByName("wrong_"+k).visible=1;
				allcorrect=false;
			}
		}
		
		ansPopupWindow1.visible=1;
		if(allcorrect){
			ansPopupWindow1.setTitleId("ID_s1_CORRECT_TITLE");
			ansPopupWindow1.setBodyId("ID_s1_CORRECT_BODY");
		}else{
			ansPopupWindow1.setTitleId("ID_s1_INCORRECT_TITLE");
			ansPopupWindow1.setBodyId("ID_s1_INCORRECT_BODY");
		}
		
		stage.update();
		
	}		
	function undoHandler()
	{
		
	}		
	function resetHandler(){
	
		for(var l=0; l<8; l++){
			container1.getChildByName("tick_"+l).visible=0;
			container1.getChildByName("wrong_"+l).visible=0;
		}
		
		ansPopupWindow1.visible=0;
		for(var i = 8;i<17;i++)
		{
			createjs.Tween.get(container1.getChildByName("bmp_"+i),{override:true}).to({x:manifest[i].x, y:manifest[i].y}, 500,createjs.Ease.sineInOut);
			//container1.getChildByName("bmp_"+i).x=manifest[i].x;
			//container1.getChildByName("bmp_"+i).y=manifest[i].y;
		}
	}
	
	function answerHandler(){
		
		update = true;
	}
	
	
	
	var btn;
	
	btn = getCJSElement("BLUE_BUTTON",{x:76,y:419,width:155,height:21,div:"slide_1",compId:"ID_s1_CHECK",id:"check",callback:checkHandler});
	container1.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:76,y:453,width:155,height:21,div:"slide_1",compId:"ID_s1_RESET",id:"reset",callback:resetHandler});
	container1.addChild(btn);
	
	ansPopupWindow1 = getCJSElement("TEXTBOX",{x:350,y:155,width:300,div:"slide_1",height:200,subType:"CLOSABLE",titleId:"ID_s1_CORRECT_TITLE",bodyId:"ID_s1_CORRECT_BODY",visible:"0"});
	container1.addChild(ansPopupWindow1);
		
	var imgArr = [];
	for(var i = 0;i<manifest.length;i++)
	{
		imgArr.push({src:manifest[i].src, id:manifest[i].id});
	}
	loadImages(imgArr,imageLoaded);
	
});




(DragnDrop2 = function(container2,manifest){

	var stage = container2.getStage();
	var mouseTarget;	// the display object currently under the mouse, or being dragged
	var dragStarted;	// indicates whether we are currently in a drag operation
	var offset;
	update = true;
	var correctAnswersArr=[["bmp_0","bmp_13"],["bmp_1","bmp_12"],["bmp_4","bmp_15"],["bmp_5","bmp_8"],["bmp_2","bmp_9"],["bmp_3","bmp_14"],["bmp_6","bmp_11"],["bmp_7","bmp_10"]];
	
	
	function stop() {
		createjs.Ticker.removeEventListener("tick", tick);
	}

	function imageLoaded(imgs) {
		// create and populate the screen with random daisies:
		for(var i = 0; i < manifest.length; i++){
			if(i<17){
			var bitmap = new createjs.Bitmap(imgs[String(manifest[i].id)]);
			
			bitmap.x = manifest[i].x;
			bitmap.y = manifest[i].y;
			bitmap.regX = bitmap.image.width/2|0;
			bitmap.regY = bitmap.image.height/2|0;
			bitmap.name = "bmp_"+i;
			bitmap.cursor="pointer";
			container2.addChild(bitmap);
			
			
			if(i<16 && i>=8){
				// wrapper function to provide scope for the event handlers:
				(function(target) {
				
					bitmap.onPress = function(evt) {
						// bump the target in front of it's siblings:
						//container2.addChild(target);
						
						getHitTarget(evt.target);
						
						ansPopupWindow2.visible=0;
						container2.setChildIndex(target, stage.getNumChildren() - 2);
						//var offset = {x:target.x-evt.stageX, y:target.y-evt.stageY};
						var point2 = container2.globalToLocal(evt.stageX, evt.stageY);
						var offset = {x:evt.target.x-point2.x, y:evt.target.y-point2.y};	

						// add a handler to the event object's onMouseMove callback
						// this will be active until the user releases the mouse button:
						evt.onMouseMove = function(ev) {
							var point = container2.globalToLocal(ev.stageX, ev.stageY);
							ev.target.x =(point.x + offset.x);
							ev.target.y = (point.y + offset.y);	
		
							//target.x = ev.stageX+offset.x;
							//target.y = ev.stageY+offset.y;
							// indicate that the stage should be updated on the next tick:
							update = true;
						}
						evt.onMouseUp = function(ev){
							getHitTarget(ev.target);
							align(ev.target);
						}
					}
					bitmap.onMouseOver=function(evt){
					
						evt.target.shadow = new createjs.Shadow("#038BD1", 0, 0, 10);
					}
					bitmap.onMouseOut=function(evt){
						evt.target.shadow = new createjs.Shadow("#038BD1", 0, 0, 0);
					}
				})(bitmap);
			}
			if(i<8){
				bitmap.alpha=0;
				
				
				var bitmap = new createjs.Bitmap("../../../common/images/tick.png");
				container2.addChild(bitmap);
				bitmap.x=manifest[i].x-8;
				bitmap.y=manifest[i].y+64;
				bitmap.name="tick_"+i;
				bitmap.visible=0;
				
				//wrong image
				bitmap = new createjs.Bitmap("../../../common/images/wrong.png");
				container2.addChild(bitmap);
				bitmap.x=manifest[i].x-8;
				bitmap.y=manifest[i].y+64;
				bitmap.name="wrong_"+i;
				bitmap.visible=0;
			}
		}

		createjs.Ticker.addEventListener("tick", tick);
		}
	}
	
	
	
	function getHitTarget(o){
	
		for(var p=0; p<8; p++){
			hitO=container2.getChildByName("bmp_"+p);
			collision = ndgmr.checkPixelCollision(o,hitO,0,true);
			if(collision){
				container2.getChildByName("tick_"+p).visible=0;
				container2.getChildByName("wrong_"+p).visible=0;
				break;
			}
		}
	
	}
	
	function align(o){
	
	
		var num=o.name.split("bmp_")[1];
		
	
		var hitO;
		var collision=false;
		for(var p=0; p<8; p++){
			hitO=container2.getChildByName("bmp_"+p);
			collision = ndgmr.checkPixelCollision(o,hitO,0,true);
			if(collision){
				break;
			}
		}
		if(collision){
			o.x=hitO.x;
			o.y=hitO.y;
		}else{
			
			//alert(num);
			createjs.Tween.get(o,{override:true}).to({x:manifest[num].x, y:manifest[num].y}, 500,createjs.Ease.sineInOut);
		}
		
		
		for(var m=8; m<17; m++){
			if(num==m){
				continue;
			}else{
				hitSibling = container2.getChildByName("bmp_"+m);
				collision = ndgmr.checkPixelCollision(o,hitSibling,0,true);
				if(collision){
					createjs.Tween.get(hitSibling,{override:true}).to({x:manifest[m].x, y:manifest[m].y}, 500,createjs.Ease.sineInOut);
				}
			}
		}
	
	}

	function tick(event) {
		// this set makes it so the stage only re-renders when an event handler indicates a change has happened.
		if (update) {
			update = false; // only update once
			stage.update(event);
		}
	}
		
	function checkHandler(){
		
		var allcorrect=true;
		for(var k=0; k<8; k++){
			var o1=container2.getChildByName(correctAnswersArr[k][0]);
			var o2=container2.getChildByName(correctAnswersArr[k][1]);
			collision = ndgmr.checkPixelCollision(o1,o2,0,true);
			if(collision){
				container2.getChildByName("tick_"+correctAnswersArr[k][0].split("_")[1]).visible=1;
			}else{
				for(var j=0; j<8; j++){
					var o1=container2.getChildByName(correctAnswersArr[k][0]);
					var o2=container2.getChildByName(correctAnswersArr[j][1]);
					collision2 = ndgmr.checkPixelCollision(o1,o2,0,true);
					if(collision2){
					
						container2.getChildByName("wrong_"+correctAnswersArr[k][0].split("_")[1]).visible=1;
					//allcorrect=false;
					}
				}
				//container2.getChildByName("wrong_"+k).visible=1;
				allcorrect=false;
			}
		}
		
		ansPopupWindow2.visible=1;
		if(allcorrect){
			ansPopupWindow2.setTitleId("ID_s2_CORRECT_TITLE");
			ansPopupWindow2.setBodyId("ID_s2_CORRECT_BODY");
		}else{
			ansPopupWindow2.setTitleId("ID_s2_INCORRECT_TITLE");
			ansPopupWindow2.setBodyId("ID_s2_INCORRECT_BODY");
		}
		
		stage.update();
		
	}		
	function undoHandler()
	{
		
	}		
	function resetHandler(){
	
		for(var l=0; l<8; l++){
			container2.getChildByName("tick_"+l).visible=0;
			container2.getChildByName("wrong_"+l).visible=0;
		}
		
		ansPopupWindow2.visible=0;
		for(var i = 8;i<17;i++)
		{
			createjs.Tween.get(container2.getChildByName("bmp_"+i),{override:true}).to({x:manifest[i].x, y:manifest[i].y}, 500,createjs.Ease.sineInOut);
			//container2.getChildByName("bmp_"+i).x=manifest[i].x;
			//container2.getChildByName("bmp_"+i).y=manifest[i].y;
		}
	}
	
	function answerHandler(){
		
		update = true;
	}
	
	
	
	var btn;
	
	btn = getCJSElement("BLUE_BUTTON",{x:76,y:419,width:155,height:21,div:"slide_2",compId:"ID_s2_CHECK",id:"check",callback:checkHandler});
	container2.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:76,y:452,width:155,height:21,div:"slide_2",compId:"ID_s2_RESET",id:"reset",callback:resetHandler});
	container2.addChild(btn);
	
	ansPopupWindow2 = getCJSElement("TEXTBOX",{x:350,y:155,div:"slide_2",width:300,height:200,subType:"CLOSABLE",titleId:"ID_s2_CORRECT_TITLE",bodyId:"ID_s2_CORRECT_BODY",visible:"0"});
	container2.addChild(ansPopupWindow2);
		
	var imgArr = [];
	for(var i = 0;i<manifest.length;i++)
	{
		imgArr.push({src:manifest[i].src, id:manifest[i].id});
	}
	loadImages(imgArr,imageLoaded);
	
});
(slideViewDidLoad = function(container,id){
	if(id==1){
	var con=container
	var manifest;
		
		manifest = [{src:"graphicwirecoverblank.png", id:"w9",x:620,y:201},
				{src:"graphicwirecoverblank.png", id:"w10",x:645,y:201},
				{src:"graphicwirecoverblank.png", id:"w11",x:670,y:201},
				{src:"graphicwirecoverblank.png", id:"w12",x:695,y:201},
				{src:"graphicwirecoverblank.png", id:"w13",x:720,y:201},
				{src:"graphicwirecoverblank.png", id:"w14",x:745,y:201},
				{src:"graphicwirecoverblank.png", id:"w15",x:770,y:201},
				{src:"graphicwirecoverblank.png", id:"w16",x:795,y:201},
				{src:"1.png", id:"w1",x:388,y:185},
				{src:"2.png", id:"w2",x:418,y:185},
				{src:"3.png", id:"w3",x:448,y:185},
				{src:"4.png", id:"w4",x:478,y:185},
				{src:"5.png", id:"w5",x:388,y:314},
				{src:"6.png", id:"w6",x:418,y:314},
				{src:"7.png", id:"w7",x:448,y:314},
				{src:"8.png", id:"w8",x:478,y:314},
				{src:"top.png", id:"w17",x:708,y:127},
				{src:"ndgmr.Collision.js", id:"colldet"}
            ];			
		var act = new DragnDrop(container,manifest);

	}
	else if(id==2){
		var manifest;
		var con1=container
		manifest = [{src:"graphicwirecoverblank.png", id:"w9",x:620,y:201},
				{src:"graphicwirecoverblank.png", id:"w10",x:645,y:201},
				{src:"graphicwirecoverblank.png", id:"w11",x:670,y:201},
				{src:"graphicwirecoverblank.png", id:"w12",x:695,y:201},
				{src:"graphicwirecoverblank.png", id:"w13",x:720,y:201},
				{src:"graphicwirecoverblank.png", id:"w14",x:745,y:201},
				{src:"graphicwirecoverblank.png", id:"w15",x:770,y:201},
				{src:"graphicwirecoverblank.png", id:"w16",x:795,y:201},
				{src:"1.png", id:"w1",x:388,y:185},
				{src:"2.png", id:"w2",x:418,y:185},
				{src:"3.png", id:"w3",x:448,y:185},
				{src:"4.png", id:"w4",x:478,y:185},
				{src:"5.png", id:"w5",x:388,y:314},
				{src:"6.png", id:"w6",x:418,y:314},
				{src:"7.png", id:"w7",x:448,y:314},
				{src:"8.png", id:"w8",x:478,y:314},
				{src:"top.png", id:"w17",x:708,y:127},
				{src:"ndgmr.Collision.js", id:"colldet"}
            ];			
		var act = new DragnDrop2(container,manifest);
	}
	
}); 
