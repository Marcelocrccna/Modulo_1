(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 680,
	height: 490,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap4.png", id:"Bitmap4"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,60);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,17);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,193);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,82);

(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt07", width:"201",expand:"up+down",class:"orangeCallOut"}); 
	//this.text = new cjs.Text("id:ID_txt07,w:201.90,a:l,e:u+d", "bold 12px 'Times New Roman'", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160.9,17.6);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt05", width:"149",expand:"down"}); 
	//this.text = new cjs.Text("id:ID_txt05,w:149,a:c,e:d", "bold 12px 'Times New Roman'", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,134.4,17.6);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt06", width:"101",expand:"up+down"}); 
	//this.text = new cjs.Text("id:ID_txt08,w:101,a:r,e:u+d", "bold 12px 'Times New Roman'", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,147.9,17.6);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt03", width:"100",expand:"up+down"}); 
	//this.text = new cjs.Text("id:ID_txt03,w:100,a:c,e:u+d", "bold 12px 'Times New Roman'", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,147.9,17.6);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt04", width:"100",expand:"up+down"}); 
	//this.text = new cjs.Text("id:ID_txt04,w:100,a:c,e:u+d", "bold 12px 'Times New Roman'", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,147.9,17.6);



(lib.boxshadowclip = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzEEQgEAAgDgEQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIAAn3QAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQADgCAEgBIPmAAQAEABADACQADAEAAADIAAHzQAAADgDADQgDAEgEAAg");
	this.shape.setTransform(51,26);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,52);


(lib.txt01a = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt01a", width:"100",expand:"up+down"}); 
	//this.text = new cjs.Text("id:ID_txt01a,w:100,a:c,e:u+d", "bold 12px 'Times New Roman'", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,153.9,17.6);



(lib.LAN_trailer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* import classes.media.LazyText.LazyText
		var lazyTxt:LazyText;
		
		lazyTxt.antiAliasType="normal";*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt01", width:"100",expand:"up+down"}); 
	//this.text = new cjs.Text("id:ID_txt01,w:100,a:c,e:u+d", "bold 11px 'Times New Roman'", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 172;
	this.text.setTransform(0,0);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.7,17.6);

(lib.LAN_header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* import classes.media.LazyText.LazyText
		var lazyTxt:LazyText;
		
		lazyTxt.antiAliasType="normal";*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text

	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt02", width:"100",expand:"up+down"}); 
	//this.text = new cjs.Text("id:ID_txt02,w:100,a:c,e:u+d", "bold 12px 'Times New Roman'", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.setTransform(0,0);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.9,17.6);


(lib.boxteal = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#077A77").s().p("AnpDwIAAnfIPSAAIAAHfg");
	this.shape.setTransform(51,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnzEEQgEgBgDgDQgCgCgBgEIAAnzQABgEACgDQADgCAEgBIPmAAQAFABACACQADADAAAEIAAHzQAAAEgDACQgCADgFABgAnpDwIPSAAIAAnfIvSAAg");
	this.shape_1.setTransform(51,26);

	// drop shadow box
	this.instance = new lib.boxshadowclip();
	this.instance.setTransform(50,25,1,1,0,0,0,50,25);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,3);

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,109,60);


(lib.boxpurple = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzEEQgEgBgDgDQgCgCgBgEIAAnzQABgEACgDQADgCAEgBIPmAAQAFABACACQADADAAAEIAAHzQAAAEgDACQgCADgFABgAnpDwIPSAAIAAnfIvSAAg");
	this.shape.setTransform(51,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#652C8A").s().p("AnpDwIAAnfIPSAAIAAHfg");
	this.shape_1.setTransform(51,26);

	// drop shadow box
	this.instance = new lib.boxshadowclip();
	this.instance.setTransform(50,25,1,1,0,0,0,50,25);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,3);

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,109,60);


(lib.boxgrey = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666263").s().p("AnpDwIAAnfIPSAAIAAHfg");
	this.shape.setTransform(51,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnzEEQgEgBgDgDQgCgCgBgEIAAnzQABgEACgDQADgCAEgBIPmAAQAFABACACQADADAAAEIAAHzQAAAEgDACQgCADgFABgAnpDwIPSAAIAAnfIvSAAg");
	this.shape_1.setTransform(51,26);

	// drop shadow box
	this.instance = new lib.boxshadowclip();
	this.instance.setTransform(50,25,1,1,0,0,0,50,25);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,3);

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,109,60);


(lib.Tween25 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boxteal();
	this.instance.setTransform(-50.6,-20,1.029,0.769);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.6,-22,112,48);


(lib.Tween22 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boxteal();
	this.instance.setTransform(-51.5,-20,1.029,0.769);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.5,-22,112,48);


(lib.Tween21 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boxteal();
	this.instance.setTransform(-50.6,-20,1.029,0.769);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.6,-22,112,48);


(lib.Tween19 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boxteal();
	this.instance.setTransform(-51.5,-20,1.029,0.769);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.5,-22,112,48);


(lib.Tween17 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boxpurple();
	this.instance.setTransform(-52.9,-20,1.029,0.769);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.9,-22,112,48);


(lib.Tween16 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boxpurple();
	this.instance.setTransform(-52.9,-20,1.029,0.769);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.9,-22,112,48);


(lib.Tween15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boxpurple();
	this.instance.setTransform(-52.5,-20,1.029,0.769);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.5,-22,112,48);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boxpurple();
	this.instance.setTransform(-52.5,-20,1.029,0.769);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.5,-22,112,48);


(lib.Tween13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boxgrey();
	this.instance.setTransform(-52,-20,1.029,0.769);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54,-22,112,48);


(lib.Tween12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.boxgrey();
	this.instance.setTransform(-52,-20,1.029,0.769);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54,-22,112,48);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_225 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(225).call(this.frame_225).wait(1));

	// newtxt2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(228.8,84.5,1.05,1.2,0,0,0,50.5,8.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(134).to({alpha:1},17).wait(25).to({x:475.8},38).wait(12));

	// newtxt1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(16.5,84.4,1.05,1.2,0,0,0,50.5,8.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({alpha:1},17).wait(25).to({x:263.5},38).wait(12));

	// txt3
	this.instance_2 = new lib.LAN_header();
	this.instance_2.setTransform(173.4,284.5,1.05,1.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({alpha:1},0).wait(34).to({y:76.5},42).wait(15).to({alpha:0},15).wait(107));

	// txt2
	this.instance_3 = new lib.txt01a();
	this.instance_3.setTransform(68.4,283.3,1.05,1.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({alpha:1},0).wait(34).to({y:75.3},42).wait(87).to({x:315.4},38).wait(12));

	// txt1
	this.instance_4 = new lib.LAN_trailer();
	this.instance_4.setTransform(-34.2,284.5,1.05,1.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({alpha:1},0).wait(34).to({y:76.5},42).wait(15).to({alpha:0},15).wait(107));

	// Headers
	this.instance_5 = new lib.LAN_header();
	this.instance_5.setTransform(5,284.3);
	this.instance_5.alpha = 0;

	this.instance_6 = new lib.boxpurple();
	this.instance_6.setTransform(-34.2,275.3,1.029,0.769);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween14("synched",0);
	this.instance_7.setTransform(18.3,294.7);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween15("synched",0);
	this.instance_8.setTransform(18.3,85.4);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween19("synched",0);
	this.instance_9.setTransform(18.2,85.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween22("synched",0);
	this.instance_10.setTransform(18.2,85.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},5).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},34).to({state:[{t:this.instance_8}]},42).to({state:[{t:this.instance_8}]},15).to({state:[{t:this.instance_8}]},15).to({state:[{t:this.instance_9}]},15).to({state:[{t:this.instance_9}]},17).to({state:[{t:this.instance_10}]},25).to({state:[{t:this.instance_10}]},38).to({state:[{t:this.instance_10}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).wait(6).to({alpha:1},2).to({_off:true},34).wait(179));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(47).to({_off:false},0).to({_off:true,y:85.4},42).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(47).to({_off:false},42).wait(15).to({startPosition:0},0).to({alpha:0},15).to({_off:true},15).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(134).to({_off:false},0).to({alpha:1},17).to({_off:true},25).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(176).to({_off:false},0).to({x:265.2},38).to({startPosition:0},11).wait(1));

	// Frame
	this.instance_11 = new lib.txt01a();
	this.instance_11.setTransform(80,284.3);
	this.instance_11.alpha = 0;

	this.instance_12 = new lib.boxgrey();
	this.instance_12.setTransform(69.3,275.3,1.029,0.769);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween12("synched",0);
	this.instance_13.setTransform(121.3,295.3);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween13("synched",0);
	this.instance_14.setTransform(121.3,85.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_12}]},6).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},34).to({state:[{t:this.instance_14}]},42).to({state:[{t:this.instance_14}]},87).to({state:[{t:this.instance_14}]},38).to({state:[{t:this.instance_14}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({_off:false},0).wait(6).to({alpha:1},2).to({_off:true},34).wait(179));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({_off:false},0).to({_off:true,y:85.4},42).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(47).to({_off:false},42).to({y:85.5},87).to({x:368.3},38).to({startPosition:0},11).wait(1));

	// Trailers
	this.instance_15 = new lib.LAN_trailer();
	this.instance_15.setTransform(155,284.3);
	this.instance_15.alpha = 0;

	this.instance_16 = new lib.boxpurple();
	this.instance_16.setTransform(172.6,275.3,1.029,0.769);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween16("synched",0);
	this.instance_17.setTransform(225.5,294.7);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween17("synched",0);
	this.instance_18.setTransform(224.3,85.4);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween21("synched",0);
	this.instance_19.setTransform(221.8,85.5);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween25("synched",0);
	this.instance_20.setTransform(220.6,85.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).to({state:[{t:this.instance_16}]},5).to({state:[{t:this.instance_16}]},6).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},34).to({state:[{t:this.instance_18}]},42).to({state:[{t:this.instance_18}]},15).to({state:[{t:this.instance_18}]},15).to({state:[{t:this.instance_19}]},15).to({state:[{t:this.instance_19}]},17).to({state:[{t:this.instance_20}]},25).to({state:[{t:this.instance_20}]},38).to({state:[{t:this.instance_20}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(5).to({_off:false},0).wait(6).to({alpha:1},2).to({_off:true},34).wait(179));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(47).to({_off:false},0).to({_off:true,x:224.3,y:85.4},42).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(47).to({_off:false},42).wait(15).to({x:225.5},0).to({alpha:0},15).to({_off:true},15).wait(92));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(134).to({_off:false},0).to({alpha:1},17).to({_off:true},25).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(176).to({_off:false},0).to({x:467.6},38).to({startPosition:0},11).wait(1));

	// text1
	this.instance_21 = new lib.Symbol3();
	this.instance_21.setTransform(61.5,188.5,1,1,0,0,0,50.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(63).to({alpha:0},0).wait(12).to({alpha:1},0).wait(151));

	// text
	this.instance_22 = new lib.Symbol4();
	this.instance_22.setTransform(241.5,49.2,1,1,0,0,0,75,8.5);

	this.instance_23 = new lib.Symbol5();
	this.instance_23.setTransform(386,214.1,1,1,0,0,0,101,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22}]}).wait(226));

	// Operator1
	this.instance_24 = new lib.Bitmap1();
	this.instance_24.setTransform(79,54.3);

	this.instance_25 = new lib.Bitmap1();
	this.instance_25.setTransform(319,54.3);

	this.instance_26 = new lib.Bitmap2();
	this.instance_26.setTransform(109.6,79.3);

	this.instance_27 = new lib.Bitmap4();
	this.instance_27.setTransform(81.3,258.7);

	this.instance_28 = new lib.Bitmap3();
	this.instance_28.setTransform(119.3,83.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]}).wait(226));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.5,40.7,482.5,300);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(92,34.5);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(55.5,75.2,482.5,300);


// stage content:
(lib.media_4314 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(395.5,320.2,482.5,300);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;