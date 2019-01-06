(function (lib, img, cjs) {

var p; // shortcut to reference prototypes



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,570,146);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,582,54);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,305,132);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,23);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,52);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,62);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,25);


(lib.envelopebubble = function() {
	this.initialize();

	// Layer 5
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-4.6,0.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.7,-30.8,124.7,150.7);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	 this.text = getCJSElement("BUBBLE",{width:"275",compId:"ID_bubble_01",size:"11" ,align:"left",tailPosition:"6",tailFlip:"1"});
	//this.text = new cjs.Text("ID_bubble_01,w:275,a:l, t_p:6", "bold 11px 'CiscoSans'");
	this.text.lineHeight = 11;
	this.text.setTransform(-5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,161,19);


(lib.Arrow = function() {
	this.initialize();

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAAIgiggIBiAgIhiAhg");
	this.shape.setTransform(5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.3,10,6.7);


(lib.bublle1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(80.4,18.4,1,1,0,0,0,137.5,32.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.1,-14.1,161,19);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_122 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(122).call(this.frame_122).wait(1));

	// marks
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(336.7,125.6);

	this.instance_1 = new lib.Bitmap5();
	this.instance_1.setTransform(362.7,110.6);

	this.instance_2 = new lib.Bitmap4();
	this.instance_2.setTransform(363.3,79);

	this.instance_3 = new lib.Bitmap4();
	this.instance_3.setTransform(349.3,47);

	this.instance_4 = new lib.Bitmap4();
	this.instance_4.setTransform(323.3,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},115).wait(8));

	// bubble
	this.instance_5 = new lib.bublle1();
	this.instance_5.setTransform(145.4,49.7,1,1,0,0,0,103.1,32);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({alpha:1},0).wait(120));

	// packet
	this.instance_6 = new lib.envelopebubble();
	this.instance_6.setTransform(236,87.5,0.395,0.395,0,0,0,44.6,31.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(82).to({_off:false},0).to({regX:44.8,scaleX:0.2,scaleY:0.2,x:360,y:59.5},33).wait(8));

	// Layer 5
	this.instance_7 = new lib.envelopebubble();
	this.instance_7.setTransform(236,87.5,0.395,0.395,0,0,0,44.6,31.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(82).to({_off:false},0).to({regX:44.8,regY:31.6,scaleX:0.2,scaleY:0.2,x:346.2,y:135.3},33).to({_off:true},1).wait(7));

	// packet4
	this.instance_8 = new lib.envelopebubble();
	this.instance_8.setTransform(236,87.5,0.395,0.395,0,0,0,44.6,31.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(82).to({_off:false},0).to({regX:44.8,regY:31.3,scaleX:0.2,scaleY:0.2,x:371.2,y:120.3},33).to({_off:true},1).wait(7));

	// packet3
	this.instance_9 = new lib.envelopebubble();
	this.instance_9.setTransform(236,87.5,0.395,0.395,0,0,0,44.6,31.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(82).to({_off:false},0).to({regX:44.5,scaleX:0.2,scaleY:0.2,x:375.6,y:90.1,alpha:0.961},33).wait(8));

	// packet2
	this.instance_10 = new lib.envelopebubble();
	this.instance_10.setTransform(236,87.5,0.395,0.395,0,0,0,44.6,31.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(82).to({_off:false},0).to({regX:44.8,scaleX:0.2,scaleY:0.2,x:333.1,y:28.3,alpha:0.961},33).wait(8));

	// packet
	this.instance_11 = new lib.Bitmap8();
	this.instance_11.setTransform(95.6,75);

	this.instance_12 = new lib.envelopebubble();
	this.instance_12.setTransform(115,87.5,0.395,0.395,0,0,0,44.6,31.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},39).to({state:[{t:this.instance_12}]},13).to({state:[{t:this.instance_12}]},29).to({state:[]},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(52).to({_off:false},0).to({x:236},29).to({_off:true},1).wait(41));

	// Layer 4
	this.instance_13 = new lib.Bitmap3();
	this.instance_13.setTransform(87.8,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(123));

	// texts
	this.instance_14 = new lib.Bitmap2();
	this.instance_14.setTransform(-72.5,245.5);

	this.instance_15 = new lib.Bitmap1();
	this.instance_15.setTransform(-68.6,108.2);

	this.instance_16 = new lib.Arrow();
	this.instance_16.setTransform(233.5,361.3,1.5,1.503,90,0,0,4.5,-0.3);

	this.instance_17 = new lib.Arrow();
	this.instance_17.setTransform(289.8,324.2,1.5,1.504,90,0,0,4.5,-0.4);

	this.instance_18 = new lib.Arrow();
	this.instance_18.setTransform(419.3,302.5,1.5,1.503,-90,0,0,4.5,-0.2);

	this.instance_19 = new lib.Arrow();
	this.instance_19.setTransform(134.1,302.5,1.5,1.503,-90,0,0,4.5,-0.2);

	this.instance_20 = new lib.Arrow();
	this.instance_20.setTransform(499,305.1,1.5,1.504,-90,0,0,4.5,-0.3);

	this.instance_21 = new lib.Arrow();
	this.instance_21.setTransform(-64.7,307,1.5,1.5,-90,0,0,4.5,-0.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#393536").ss(2,1,1).p("AtAk9IAAB4MAsiAAAIAAhyEAsDgE7IAAHdMhYFAAAIAAmrACXCpIAACWALJi/IAABL");
	this.shape.setTransform(217.8,334.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,3.6,582,366);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(104,42);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(31.5,45.6,582,366);


// stage content:
(lib.media_5127A = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(371.5,290.6,582,366);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;