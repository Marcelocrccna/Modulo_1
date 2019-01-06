(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,52);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,523,351);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,523,351);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,52);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("ID_s1_txt01,w:300,h:70", "12px 'CiscoSans'");
	this.text=getCJSElement("TEXTBOX",{width:"300",height:"70",bodyId:"ID_s1_txt01",animated:"0",visible:"1"});
	//this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 144;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,20.4);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text=getCJSElement("TEXTBOX",{width:"300",height:"70",bodyId:"ID_s1_txt03",animated:"0",visible:"1"});
	//this.text = new cjs.Text("ID_s1_txt03,w:300,h:70", "12px 'CiscoSans'");
	//this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 144;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,20.4);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text=getCJSElement("TEXTBOX",{width:"300",height:"70",bodyId:"ID_s1_txt02",animated:"0",visible:"1"});
	//this.text = new cjs.Text("ID_s1_txt02,w:300,h:70", "12px 'CiscoSans'");
	//this.text.textAlign = "center";
	this.text.lineHeight = 14;
	this.text.lineWidth = 144;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,20.4);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-39.6,-26.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.6,-26.1,82,52);


(lib.envelopeattackpacketalternatelocalonly = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-39.6,-26.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.6,-26.1,82,52);


(lib.envelopebubble = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(44.7,31.6,1.2,1.2,0,0,0,1.5,0.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.7,-30.8,124.7,150.7);


(lib.movie_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(323));

	// spot
	this.instance = new lib.Symbol3();
	this.instance.setTransform(360.5,275,1,1,0,0,0,150,35);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(360.5,55,1,1,0,0,0,150,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(324));

	// Layer 7
	this.instance_2 = new lib.envelopebubble();
	this.instance_2.setTransform(99.4,62.7,0.4,0.4,0,0,0,44.8,31.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({alpha:1},5).to({x:98.4,y:179.6},20).to({x:494.3,y:181},42).to({alpha:0},5).wait(23).to({x:99.4,y:62.7},0).to({alpha:1},5).to({x:98.4,y:179.6},20).to({x:494.3,y:181},42).to({alpha:0},5).wait(12).to({x:99.4,y:62.7},0).to({alpha:1},5).to({x:98.4,y:179.6},25).to({x:494.3,y:181},38).to({alpha:0},5).wait(65));

	// Layer 8
	this.instance_3 = new lib.envelopeattackpacketalternatelocalonly();
	this.instance_3.setTransform(98.4,292.2,0.48,0.481,0,0,0,1.5,0);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({alpha:1},5).to({x:100.2,y:181},20).to({x:493.5,y:180},40).to({alpha:0},5).to({_off:true},10).wait(15).to({_off:false,x:98.4,y:292.2},0).to({alpha:1},5).to({x:100.2,y:181},20).to({x:493.5,y:180},34).to({alpha:0},5).to({_off:true},1).wait(24).to({_off:false,x:98.4,y:292.2},0).to({alpha:1},5).to({x:100.2,y:181},20).to({x:493.5,y:180},40).to({alpha:0},5).wait(38));

	// component
	this.instance_4 = new lib.Bitmap3();
	this.instance_4.setTransform(-1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(324));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0.6,523,351);


(lib.movie_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(206));
	// Layer 3
	this.instance = new lib.Symbol1();
	this.instance.setTransform(360.5,55,1,1,0,0,0,150,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(206));

	// big packet2
	this.instance_1 = new lib.envelopebubble();
	this.instance_1.setTransform(155.9,61.5,0.8,0.8,0,0,0,44.7,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({regX:44.6,scaleX:0.7,scaleY:0.7,x:155.8},15).wait(20).to({scaleX:0.6,scaleY:0.6},25).wait(20).to({scaleX:0.4,scaleY:0.4,x:155.9},15).to({_off:true},15).wait(82));

	// Layer 6
	this.instance_2 = new lib.envelopebubble();
	this.instance_2.setTransform(155.9,61.5,0.4,0.4,0,0,0,44.6,31.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(124).to({_off:false},0).to({regX:44.8,x:99.4,y:62.7},15).to({x:100.5,y:181},10).to({x:494.3},30).to({alpha:0},5).wait(22));

	// Layer 7
	this.instance_3 = new lib.envelopebubble();
	this.instance_3.setTransform(155.9,61.5,0.4,0.4,0,0,0,44.6,31.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).to({regX:44.8,x:99.4,y:62.7},15).to({x:100.5,y:181},10).to({x:494.3},30).to({alpha:0},5).wait(52));

	// Layer 8
	this.instance_4 = new lib.envelopebubble();
	this.instance_4.setTransform(155.9,61.5,0.4,0.4,0,0,0,44.6,31.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({regX:44.8,x:99.4,y:62.7},25).to({x:100.5,y:181},15).to({x:494.3},30).to({alpha:0},5).wait(82));

	// Layer 9
	this.instance_5 = new lib.envelopebubble();
	this.instance_5.setTransform(155.9,61.5,0.4,0.4,0,0,0,44.6,31.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({regX:44.8,x:99.4,y:62.7},15).to({x:100.5,y:181},15).to({x:494.3},30).to({alpha:0},5).wait(127));

	// component
	this.instance_6 = new lib.Bitmap2();
	this.instance_6.setTransform(-1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(207));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0.6,523,351);



(lib.slide_1 = function() {
	this.initialize();

	// anim2
	this.anim02 = new lib.movie_2();
	this.anim02.setTransform(80,35,1,1,0,0,0,0,-12);

	// anim1
	this.anim01 = new lib.movie_1();
	this.anim01.setTransform(80,35,1,1,0,0,0,0,-11.9);

	this.addChild(this.anim01,this.anim02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(79,50.6,523.2,351);
 

(lib.Main = function() {
	this.initialize();

	// slide1
	this.slide01 = new lib.slide_1();
	this.slide01.setTransform(202.3,126.5,1,1,0,0,0,202.3,126.5);

	this.addChild(this.slide01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(79,50.6,523.2,351);


// stage content:
(lib.media_3311 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(419,295.6,523.2,351);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;