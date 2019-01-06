
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
 {	
	var btn;
	var _data,randomNumber;
	var feeback;
	var dom;

	//common for all
	//Input elements
		$("#commonMediaText").append('<input id="val1" style="width:37px; left:0px; top:0px;" />');	
		dom = new createjs.DOMElement(document.getElementById("val1"));
		dom.x = 505;
		dom.y = 220;
		_container.addChild(dom);
		$("#val1").attr('maxlength','1');

	
	// i/p element2
	$("#commonMediaText").append('<input id="val2" style="width:37px; left:0px; top:0px;" />');	
		dom = new createjs.DOMElement(document.getElementById("val2"));
		dom.x = 550;
		dom.y = 220;		
		_container.addChild(dom);
		$("#val2").attr('maxlength','1');

	// i/p element3
	$("#commonMediaText").append('<input id="val3" style="width:37px; left:0px; top:0px;" />');	
		dom = new createjs.DOMElement(document.getElementById("val3"));
		dom.x = 598;
		dom.y = 220;		
		_container.addChild(dom);
		$("#val3").attr('maxlength','1');

	// i/p element4
	$("#commonMediaText").append('<input id="val4" style="width:37px; left:0px; top:0px;" />');	
		dom = new createjs.DOMElement(document.getElementById("val4"));
		dom.x = 643;
		dom.y = 220;		
		_container.addChild(dom);
		$("#val4").attr('maxlength','1');

	// i/p element5
	$("#commonMediaText").append('<input id="val5" style="width:37px; left:0px; top:0px;" />');	
		dom = new createjs.DOMElement(document.getElementById("val5"));
		dom.x = 690;
		dom.y = 220;		
		_container.addChild(dom);
		$("#val5").attr('maxlength','1');

	// i/p element6
	$("#commonMediaText").append('<input id="val6" style="width:37px; left:0px; top:0px;" />');	
		dom = new createjs.DOMElement(document.getElementById("val6"));
		dom.x = 736;
		dom.y = 220;		
		_container.addChild(dom);
		$("#val6").attr('maxlength','1');

	// i/p element7
		$("#commonMediaText").append('<input id="val7" style="width:37px; left:0px; top:0px;" />');	
			dom = new createjs.DOMElement(document.getElementById("val7"));
			dom.x = 783;
			dom.y = 220;		
			_container.addChild(dom);
			$("#val7").attr('maxlength','1');

	// i/p element8
	$("#commonMediaText").append('<input id="val8" style="width:37px; left:0px; top:0px;"/>');	
			dom = new createjs.DOMElement(document.getElementById("val8"));
			dom.x = 828;
			dom.y = 220;				
			_container.addChild(dom);
            $("#val8").attr('maxlength','1');
		
	//get bit ans
	$("#commonMediaText").append('<input id="show" style="width:368px; left:0px; top:0px;" disabled="true" />');	
		dom = new createjs.DOMElement(document.getElementById("show"));
		dom.x  = 501.5;
		dom.y = 110;	
		_container.addChild(dom);

//for check button
			var mainresult;

			function generaterandom(limit)
			{

			var randomNumber = Math.floor(Math.random()*(limit+1));	
			$("#show").attr("value",randomNumber);
 
			change(randomNumber);
			}

			function isNum(args)
			{
				args = args.toString();
				if (args.length == 0)
					return false;

				for (var i = 0;i<args.length;i++)
				{
					if (args.substring(i,i+1) < "0" || args.substring(i, i+1) > "9")
					{
						return false;
					}
				}

				return true;
			}
			function deciToBin(arg)
			{
				
				var res1 = 999;
				var args = arg;
				while(args>1)
				{
					var arg1 = parseInt(args/2);
					var arg2 = args%2;
					args = arg1;
					if(res1 == 999)
					{
						res1 = arg2.toString();
					}
					else
					{
						res1 = arg2.toString()+res1.toString();
					}
				}
				if(args == 1 && res1 != 999)
				{
					res1 = args.toString()+res1.toString();
				}
				else if(args == 0 && res1 == 999)
				{
					res1 = 0;
				}
				else if(res1 == 999)
				{
					res1 = 1;
				}
				var ll = res1.length;
				
				while(ll%8 != 0)
				{
					res1 = "0"+res1;
					ll = res1.length;
				}	
				
				/*alert(res1);*/
				
					
				mainresult = res1;
				
			}


			function change(randomNumber)
			{
				if(isNum(randomNumber))
				{
					var result = deciToBin(randomNumber);
					
				}
				
			}

		// FOR Feedback 

		feeback = getCJSElement("TEXTBOX",{subType:"CLOSABLE",x:507.15,y:350.1,width:360,height:116.95,titleId:"ID_INCORRECT_TITLE",bodyId:"ID_INCORRECT_BODY",visible:"0"});			  
		_container.addChild(feeback); 

		var getCheck = function(){
		
		val1 = $("input#val1").attr("value");
		val2 = $("input#val2").attr("value");
		val3 = $("input#val3").attr("value");
		val4 = $("input#val4").attr("value");
		val5 = $("input#val5").attr("value");
		val6 = $("input#val6").attr("value");
		val7 = $("input#val7").attr("value");
		val8 = $("input#val8").attr("value");

		if(val1&&val2&&val3&&val4&&val5&&val6&&val7&&val8!="")
		{
			var user = val1+val2+val3+val4+val5+val6+val7+val8;
		}
		
		if(mainresult==user)
		{
		feeback.setTitleId("ID_CORRECT_TITLE");
				feeback.setBodyId("ID_CORRECT_BODY");
		}
		else
		{		
		feeback.setTitleId("ID_INCORRECT_TITLE");
				feeback.setBodyId("ID_INCORRECT_BODY");
		}
		feeback.visible=1;
			update = true;	
		
		}
		//For Reset
		var getReset = function(){ 
			for(var k=1; k<=9; k++){
				$("input#val"+k).attr("value","");
			}			
			feeback.visible=0;
			}

		//For Reset
		var getNewNub = function(){
			generaterandom(255);
			for(var k=1; k<=9; k++){
				$("input#val"+k).attr("value","");
			}			
			feeback.visible=0;
			}

		//alert(mediaStage);
	btn = getCJSElement("BLUE_BUTTON",{x:504.05,y:288.55,width:108,height:21,size:11,id:"check",compId:"ID_btn01",callback:getCheck});
	_container.addChild(btn);
	
	btn = getCJSElement("BLUE_BUTTON",{x:631,y:288.55,width:108,height:21,size:11,id:"reset",compId:"ID_btn02",callback:getReset});
	_container.addChild(btn);

	btn = getCJSElement("BLUE_BUTTON",{x:759,y:288.55,width:108,height:21,size:11,id:"new_nub",compId:"ID_btn03",callback:getNewNub});
	_container.addChild(btn);




	$('#val1,#val2,#val3,#val4,#val5,#val6,#val7,#val8').keyup(function() {	
	 	var input = $(this),text = input.val().replace(/[^0-1\s]/g, "");
	    input.val(text);
	});
	
	generaterandom(255);//this is to generate default number in the output
	$(function(){	
	generaterandom(255)
	$("#check").click(function(){})	
	});
	
});


