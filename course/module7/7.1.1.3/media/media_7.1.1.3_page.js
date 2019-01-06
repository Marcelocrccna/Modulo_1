function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container, _id) {
	if(_id == 1){
		btnXPosArr=[48.7, 48.7, 48.7, 48.7];
		btnYPosArr=[86, 143, 207, 265];
		buttonArr=[];
		buttonClickArr=[];
		buttonOverArr=[];
		bubbleArr=[];
		sampleArray=[];
		var lastBtnClick;
		bubbleTitleArr=["ID_titleTxt01","ID_titleTxt02","ID_titleTxt03","ID_titleTxt04"]
		bubbleTextArr=["ID_bodyTxt01","ID_bodyTxt02","ID_bodyTxt03","ID_bodyTxt04"]

		defaultClickedBtn = 0;

		var htmlElement = document.createElement("div");
        htmlElement.style.cssText = "position:absolute;";
        htmlElement.id = "domElement_" + _id;
        
       	$("#slide_"+_id).append(htmlElement);
		for(var i=0;i<4;i++) {
			var _html
			if(i == 0) {
				_html = "<img id='slide1_btn_" + i + "' height='35' width='35' src='../../../common/images/plus_btn_over2.png'></img>";
			} else {
				_html = "<img id='slide1_btn_" + i + "' height='50' width='50' src='../../../common/images/plus_btn.png'></img>";
			}
			$("#domElement_"+_id).append(_html);

			$('#slide1_btn_'+i).css({"position": "absolute", "margin-top": btnYPosArr[i]+3+"px", "margin-left": btnXPosArr[i]+5+"px"})


			$("#slide1_btn_" + i).on("mouseover", mouseOverFunc);
	        $("#slide1_btn_" + i).on("mouseout", mouseOutFunc);
	        $("#slide1_btn_" + i).on("click", clickFunction);
			var btn2 = getCJSElement("TEXTBOX",{x:40,y:344,width:600,height:120,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
			if(i != 0) btn2.visible = false;
			bubbleArr.push(btn2);
			_container.addChild(btn2);
		}

		function mouseOverFunc(e) {
	    	if(defaultClickedBtn == e.target.id.split('btn_')[1]){
	    		return;
	    	}
	        $("#" + e.target.id).attr("src", "../../../common/images/plus_btn_over.png");
	    }

	    function mouseOutFunc(e) {
    		if(defaultClickedBtn == e.target.id.split('btn_')[1]){
	    		return;
	    	}
	        $("#" + e.target.id).attr("src", "../../../common/images/plus_btn.png");
	    }

	    function clickFunction(e) {

	    	if(defaultClickedBtn == e.target.id.split('btn_')[1]){
	    		return;
	    	}
	    	//$("#imgHighlighted").attr("src", highlightedBtnSrc[e.target.id]);
	        if (lastBtnClick != null) {
	            $("#slide1_btn_" + lastBtnClick).attr("src", "../../../common/images/plus_btn.png");
	            $("#slide1_btn_" + lastBtnClick).css({"width":"45px","height":"45px"});
	            $("#slide1_btn_" + lastBtnClick).on("mouseover", mouseOverFunc);
	            $("#slide1_btn_" + lastBtnClick).on("mouseout", mouseOutFunc);
	            bubbleArr[lastBtnClick].visible = false;

	        }else{
	        	$("#slide1_btn_0").attr("src", "../../../common/images/plus_btn.png");
	            $("#slide1_btn_0").css({"width":"45px","height":"45px"});
	            $("#slide1_btn_0").on("mouseover", mouseOverFunc);
	            $("#slide1_btn_0").on("mouseout", mouseOutFunc);
	            bubbleArr[0].visible = false;
	        }
	        lastBtnClick = e.target.id.split('btn_')[1]
	        $("#" + e.target.id).attr("src", "../../../common/images/plus_btn_over2.png");
	        $("#" + e.target.id).css({"position": "absolute", "width":"35px","height":"35px", "margin-top": btnYPosArr[lastBtnClick]+3+"px", "margin-left": btnXPosArr[lastBtnClick]+5+"px"});
	        $("#" + e.target.id).off("mouseover", mouseOverFunc);
	        $("#" + e.target.id).off("mouseout", mouseOutFunc);
	        bubbleArr[e.target.id.split('btn_')[1]].visible = true;

	        defaultClickedBtn = e.target.id;
	    }
	}

	if(_id == 3){
		btnXPosArr3=[48.7, 48.7, 48.7, 48.7];
		btnYPosArr3=[86, 143, 207, 265];
		buttonArr3=[];
		buttonClickArr3=[];
		buttonOverArr3=[];
		bubbleArr3=[];
		sampleArray3=[];
		var lastBtnClick3;
		bubbleTitleArr3=["ID_s3_titleTxt01","ID_s3_titleTxt02","ID_s3_titleTxt03","ID_s3_titleTxt04"]
		bubbleTextArr3=["ID_s3_bodyTxt01","ID_s3_bodyTxt02","ID_s3_bodyTxt03","ID_s3_bodyTxt04"]

		defaultClickedBtn3 = 0;

		var htmlElement = document.createElement("div");
        htmlElement.style.cssText = "position:absolute;";
        htmlElement.id = "domElement_" + _id;
        
       	$("#slide_"+_id).append(htmlElement);
		for(var i=0;i<4;i++) {
			var _html
			if(i == 0) {
				_html = "<img id='slide3_btn_" + i + "' height='35' width='35' src='../../../common/images/plus_btn_over2.png'></img>";
			} else {
				_html = "<img id='slide3_btn_" + i + "' height='50' width='50' src='../../../common/images/plus_btn.png'></img>";
			}
			$("#domElement_"+_id).append(_html);

			$('#slide3_btn_'+i).css({"position": "absolute", "margin-top": btnYPosArr3[i]+3+"px", "margin-left": btnXPosArr3[i]+5+"px"})


			$("#slide3_btn_" + i).on("mouseover", mouseOverFunc3);
	        $("#slide3_btn_" + i).on("mouseout", mouseOutFunc3);
	        $("#slide3_btn_" + i).on("click", clickFunction3);
			var btn2 = getCJSElement("TEXTBOX",{x:40,y:344,width:600,height:120,size:11,titleId:bubbleTitleArr3[i],bodyId:bubbleTextArr3[i]});
			if(i != 0) btn2.visible = false;
			bubbleArr3.push(btn2);
			_container.addChild(btn2);
		}

		function mouseOverFunc3(e) {
	    	if(defaultClickedBtn3 == e.target.id.split('btn_')[1]){
	    		return;
	    	}
	        $("#" + e.target.id).attr("src", "../../../common/images/plus_btn_over.png");
	    }

	    function mouseOutFunc3(e) {
    		if(defaultClickedBtn3 == e.target.id.split('btn_')[1]){
	    		return;
	    	}
	        $("#" + e.target.id).attr("src", "../../../common/images/plus_btn.png");
	    }

	    function clickFunction3(e) {

	    	if(defaultClickedBtn3 == e.target.id.split('btn_')[1]){
	    		return;
	    	}
	    	//$("#imgHighlighted").attr("src", highlightedBtnSrc[e.target.id]);
	        if (lastBtnClick3 != null) {
	            $("#slide3_btn_" + lastBtnClick3).attr("src", "../../../common/images/plus_btn.png");
	            $("#slide3_btn_" + lastBtnClick3).css({"width":"45px","height":"45px"});
	            $("#slide3_btn_" + lastBtnClick3).on("mouseover", mouseOverFunc3);
	            $("#slide3_btn_" + lastBtnClick3).on("mouseout", mouseOutFunc3);
	            bubbleArr3[lastBtnClick3].visible = false;

	        }else{
	        	$("#slide3_btn_0").attr("src", "../../../common/images/plus_btn.png");
	            $("#slide3_btn_0").css({"width":"45px","height":"45px"});
	            $("#slide3_btn_0").on("mouseover", mouseOverFunc3);
	            $("#slide3_btn_0").on("mouseout", mouseOutFunc3);
	            bubbleArr3[0].visible = false;
	        }
	        lastBtnClick3 = e.target.id.split('btn_')[1]
	        $("#" + e.target.id).attr("src", "../../../common/images/plus_btn_over2.png");
	        $("#" + e.target.id).css({"position": "absolute", "width":"35px","height":"35px", "margin-top": btnYPosArr3[lastBtnClick3]+3+"px", "margin-left": btnXPosArr3[lastBtnClick3]+5+"px"});
	        $("#" + e.target.id).off("mouseover", mouseOverFunc3);
	        $("#" + e.target.id).off("mouseout", mouseOutFunc3);
	        bubbleArr3[e.target.id.split('btn_')[1]].visible = true;

	        defaultClickedBtn3 = e.target.id;
	    }
	}	
});
