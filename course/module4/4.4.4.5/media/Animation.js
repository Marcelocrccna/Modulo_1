(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 680,
	height: 490,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Bitmap1.png", id:"Bitmap1"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,444,293);


(lib.Frame5Ethernet = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:"ID_txt05",width:"100",expand:"up+down",align:"center",color:"#FFFFFF"});
	//this.text = new cjs.Text("ID_txt05", "11px 'Courier New'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 92;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96,15.7);


(lib.Frame4FrameRelay = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:"ID_txt04",width:"100",expand:"up+down",align:"center",color:"#FFFFFF"});
	//this.text = new cjs.Text("ID_txt04", "11px 'Courier New'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 92;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96,15.7);


(lib.Frame3HDLC = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:"ID_txt03",width:"100",expand:"up+down",align:"center",color:"#FFFFFF"});
	//this.text = new cjs.Text("ID_txt03", "11px 'Courier New'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 144;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,15.7);


(lib.Frame2PPP = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:"ID_txt02",width:"100",expand:"up+down",align:"center",color:"#FFFFFF"});
	//this.text = new cjs.Text("ID_txt02", "11px 'Courier New'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 92;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96,15.7);


(lib.Frame1Wireless = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:"ID_txt01",width:"100",expand:"up+down",align:"center",color:"#FFFFFF"});
	//this.text = new cjs.Text("ID_txt01", "11px 'Courier New'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 92;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96,15.7);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_456 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(456).call(this.frame_456).wait(1));

	// Frames
	this.instance = new lib.Frame5Ethernet();
	this.instance.setTransform(130,284.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(368).to({alpha:1},3).wait(26).to({x:261,y:329.5},27).to({x:382.7},22).wait(11));

	// Frames
	this.instance_1 = new lib.Frame4FrameRelay();
	this.instance_1.setTransform(260,165.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(272).to({alpha:1},4).wait(24).to({x:130,y:286.3},38).wait(25).to({alpha:0},4).wait(89).to({x:177.7},0).wait(1));

	// Frames
	this.instance_2 = new lib.Frame3HDLC();
	this.instance_2.setTransform(122,96.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(182).to({alpha:1},5).wait(29).to({x:260,y:165.3},30).wait(20).to({alpha:0},5).wait(185).to({x:326.7},0).wait(1));

	// Frames
	this.instance_3 = new lib.Frame2PPP();
	this.instance_3.setTransform(0,212.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({alpha:1},6).wait(30).to({y:193.3},0).to({x:122,y:95.3},30).wait(15).to({alpha:0},5).wait(275).to({x:190.7},0).wait(1));

	// Frames
	this.instance_4 = new lib.Frame1Wireless();
	this.instance_4.setTransform(0,80.3,1,1.082);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({scaleY:1,alpha:1},0).wait(31).to({y:212.3},29).wait(15).to({x:49.7,alpha:0},5).wait(363));

	// icons
	this.instance_5 = new lib.Bitmap1();
	this.instance_5.setTransform(16.2,39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(457));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,39.9,460.2,293);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(128,42);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(128,81.9,460.2,293);


// stage content:
(lib.media_4445A = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(468,326.9,460.2,293);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;