(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,0.3,470,400);


// symbols:
(lib._3_1_1_6 = function() {
	this.initialize(img._3_1_1_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

/*
(lib.s3_bubble3 = function() {
	this.initialize();

	// Layer 2
	this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s3_txt02", width:"137.95", height:"80", align:"left", tailPosition:"6"}); 
		
	this.text.setTransform(-60.9,15);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.9,46.1,136.4,21.1);


(lib.s3_bubble1 = function() {
	this.initialize();

	// Layer 2
	this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s3_txt01", width:"137.95", height:"80", align:"left", tailPosition:"6"}); 
		
	this.text.setTransform(-60.9,15);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.9,46.8,120.8,21.1);


(lib.s2_bubble2 = function() {
	this.initialize();

	// Layer 2
	this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s2_txt02", width:"137.95", height:"80", align:"left", tailPosition:"6",tailFlip:"1"}); 
		
	this.text.setTransform(2,4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.8,37.6,101.9,21.1);


(lib.s2_bubble1 = function() {
	this.initialize();

	// Layer 2
	this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s2_txt01", width:"137.95", height:"80", align:"left", tailPosition:"6"}); 
		
	this.text.setTransform(-60.9,15);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.4,47.4,125.8,21.1);

*/
(lib.bubble4 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s1_txt04", width:"137.95",height:"80", align:"left", tailPosition:"6",tailFlip:"1"}); 
		
	this.text.setTransform(2,2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.8,35.4,115.1,21.1);


(lib.bubble3 = function() {
	this.initialize();

	// Layer 2
	this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s1_txt03", width:"137.95",height:"80", align:"left", tailPosition:"6"}); 
		
	this.text.setTransform(-60.9,9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.7,45.3,115.1,21.1);


(lib.bubble2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s1_txt02", width:"137.95",height:"80", align:"left", tailPosition:"6",tailFlip:"1"}); 
		
	this.text.setTransform(2,2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,36.9,153.7,21.1);


(lib.bubble1 = function() {
	this.initialize();

	// Layer 2
	this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s1_txt01", width:"137.95",height:"80", align:"left", tailPosition:"6"}); 
		
	this.text.setTransform(-60.9,15);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.7,48.3,115.1,21.1);


(lib.animation03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubbletext1
	this.instance = new lib.s3_bubble3();
	this.instance.setTransform(44.4,111.4,1,1,0,0,0,40,40);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82).to({alpha:1},0).wait(30));

	// bubbletext1
	this.instance_1 = new lib.s3_bubble1();
	this.instance_1.setTransform(44.4,111.4,1,1,0,0,0,40,40);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({alpha:1},0).wait(31).to({alpha:0},0).wait(66));

	// bg
	this.instance_2 = new lib._3_1_1_6();
	this.instance_2.setTransform(-83.3,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},111).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.3,37.1,470,400);


(lib.animation02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubbletext2
	this.instance = new lib.s2_bubble2();
	this.instance.setTransform(234,122,1,1,0,0,0,40,40);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(143).to({alpha:1},0).wait(44).to({alpha:0},0).wait(9));

	// bubbletext1
	this.instance_1 = new lib.s2_bubble1();
	this.instance_1.setTransform(42,111,1,1,0,0,0,40,40);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({alpha:1},0).wait(23).to({alpha:0},0).wait(14).to({alpha:1},0).wait(34).to({alpha:0},0).wait(14).to({alpha:1},0).wait(27).to({alpha:0},0).wait(69));

	// bg
	this.instance_2 = new lib._3_1_1_6();
	this.instance_2.setTransform(-83.3,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},195).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.3,37.1,470,400);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubbletext4
	this.instance = new lib.bubble4();
	this.instance.setTransform(239.4,123.4,1,1,0,0,0,40,40);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({alpha:1},0).wait(65));

	// bubbletext2
	this.instance_1 = new lib.bubble2();
	this.instance_1.setTransform(239.4,123.4,1,1,0,0,0,40,40);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({alpha:1},0).wait(48).to({alpha:0},0).wait(87));

	// bubbletext3
	this.instance_2 = new lib.bubble3();
	this.instance_2.setTransform(39.4,112.4,1,1,0,0,0,40,40);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({alpha:1},0).wait(65));

	// bubbletext1
	this.instance_3 = new lib.bubble1();
	this.instance_3.setTransform(39.4,112.4,1,1,0,0,0,40,40);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({alpha:1},0).wait(48).to({alpha:0},0).wait(87));

	// bg
	this.instance_4 = new lib._3_1_1_6();
	this.instance_4.setTransform(-83.3,37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.3,37.1,470,400);



(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation();
	this.anim01.setTransform(193.4,34.4,1,1,0,0,0,19.3,12.3);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,0.3,470,400);


})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;