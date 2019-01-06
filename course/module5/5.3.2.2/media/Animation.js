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
p.nominalBounds = new cjs.Rectangle(0,0,397,213);


(lib.Symbol1copy4 = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("TextBox, W:250, h:40, A:L, ID:ID_txt09, TF:0, TP:7", "17px 'Arial'", "#393536");
	this.text = new BubbleComp({x:"0",y:"0",width:"250",compId:"ID_txt09",align:"left",tailPosition:"7",tailFlip:"2",extend:"right"});
	this.text.lineHeight = 19;
	this.text.lineWidth = 284;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,288,44);


(lib.Symbol1copy3 = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("TextBox, W:150, h:40, A:L, ID:ID_txt08, TF:0, TP:6", "17px 'Arial'", "#393536");
	this.text = new BubbleComp({x:"0",y:"0",width:"150",size:"10",compId:"ID_txt08",align:"center",tailPosition:"6",tailFlip:"2",extend:"right"});
	this.text.lineHeight = 19;
	this.text.lineWidth = 234;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,238,44);


(lib.Symbol1copy2 = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("TextBox, W:127, h:40, A:L, ID:ID_txt06, TF:0, TP:6", "17px 'Arial'", "#393536");
	this.text = new BubbleComp({x:"0",y:"0",width:"127",size:"10",compId:"ID_txt06",align:"center",tailPosition:"6",tailFlip:"2",extend:"right"});
	this.text.lineHeight = 19;
	this.text.lineWidth = 234;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,238,44);


(lib.Symbol1copy = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("TextBox, W:150, h:40, A:L, ID:ID_txt10, TF:0, TP:6", "17px 'Arial'", "#393536");
	this.text = new BubbleComp({x:"0",y:"0",width:"150",size:"10",compId:"ID_txt10",align:"center",tailPosition:"6",tailFlip:"1",extend:"right"});
	this.text.lineHeight = 19;
	this.text.lineWidth = 234;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,238,44);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("TextBox, W:275, h:40, A:L, ID:ID_txt05, TF:0, TP:7", "17px 'Arial'", "#393536");
	this.text = new BubbleComp({x:"0",y:"0",width:"275",compId:"ID_txt05",align:"left",tailPosition:"7",tailFlip:"2",extend:"right"});
	this.text.lineHeight = 19;
	this.text.lineWidth = 284;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,288,44);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-39.6,-26.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.6,-26.1,82,52);


(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_370 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(370).call(this.frame_370).wait(1));

	// bubbles
	this.instance = new lib.Symbol1copy3();
	this.instance.setTransform(455,247,1,1,0,0,0,144,22);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Symbol1copy2();
	this.instance_1.setTransform(153,247,1,1,0,0,0,144,22);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Symbol1copy();
	this.instance_2.setTransform(481,100,1,1,0,0,0,144,22);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{alpha:0}},{t:this.instance_1,p:{alpha:0}},{t:this.instance,p:{alpha:0}}]}).to({state:[{t:this.instance_2,p:{alpha:1}},{t:this.instance_1,p:{alpha:1}},{t:this.instance,p:{alpha:1}}]},135).to({state:[{t:this.instance_2,p:{alpha:0}},{t:this.instance_1,p:{alpha:0}},{t:this.instance,p:{alpha:0}}]},62).wait(174));

	// bubbles3
	this.instance_3 = new lib.Symbol1copy4();
	this.instance_3.setTransform(189,100,1,1,0,0,0,144,22);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(306).to({alpha:1},0).wait(54).to({alpha:0},0).wait(11));

	// bubbles3
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(191.5,100,1,1,0,0,0,144,22);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({alpha:1},0).wait(292).to({alpha:0},0).wait(65));

	// bubble4
	this.instance_5 = new lib.Symbol1copy();
	this.instance_5.setTransform(461,247,1,1,0,0,0,144,22);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(368).to({alpha:1},0).wait(3));

	// text
	this.instance_6 = new lib.Bitmap2();
	this.instance_6.setTransform(36.9,120.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(371));

	// packets H2
	this.instance_7 = new lib.envelopeclosedstatic();
	this.instance_7.setTransform(70,144.9,0.3,0.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(74).to({_off:false},0).to({x:234.9},30).to({x:74.8,y:285.3},30).to({_off:true},1).wait(236));

	// packets H3
	this.instance_8 = new lib.envelopeclosedstatic();
	this.instance_8.setTransform(234.9,144.9,0.3,0.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(104).to({_off:false},0).to({x:397.5,y:285.3},30).wait(58).to({x:235.1,y:146.5},31).to({x:75.4},29).wait(55).to({regX:44.5,regY:40.9,x:88.8,y:158.7},0).to({x:249.9},30).to({x:410.4,y:300},30).wait(4));

	// packets H4
	this.instance_9 = new lib.envelopeclosedstatic();
	this.instance_9.setTransform(234.9,144.9,0.3,0.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(104).to({_off:false},0).to({x:397.5},30).to({_off:true},1).wait(236));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,87,566,246.5);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.Animation();
	this.anim01.setTransform(92.3,17.1);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(101.3,104.1,566,246.5);


// stage content:
(lib.media_5322 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(441.3,349.1,566,246.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;