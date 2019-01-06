(function (lib, img, cjs) {

var p; // shortcut to reference prototypes


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,71);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,56);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,409,271);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,52);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-39.6,-26.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.6,-26.1,82,52);


(lib.Arrow4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F68026").s().p("AgPAAIgiggIBiAgIhiAhg");
	this.shape.setTransform(5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.3,10,6.7);


(lib.Arrow = function() {
	this.initialize();

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F68026").s().p("AgPAAIgiggIBiAgIhiAhg");
	this.shape.setTransform(5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.3,10,6.7);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(94));

	// Packet
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(58.8,257.7,0.45,0.45,0,0,0,1.6,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({alpha:0.988},12).to({regX:1.5,x:246.3,y:152.2},28).to({x:392.9,y:254.9},32).wait(8));

	// labels
	this.text = new cjs.Text("172.16.4.253", "11px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(397.5,273.1);

	this.text_1 = new cjs.Text("172.16.4.3", "11px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(290.5,341.9);

	this.text_2 = new cjs.Text("172.16.4.2", "11px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(174,341.9);

	this.text_3 = new cjs.Text("172.16.4.1", "11px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(56.1,293.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(92));

	// Arror4
	this.instance_1 = new lib.Arrow4();
	this.instance_1.setTransform(297.5,182.3,1.797,1.797,41.6,0,0,5,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).to({x:366.6,y:235.2},8).to({alpha:0},11).to({_off:true},15).wait(2));

	// Arrowline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F68026").ss(3,1,1).p("AhKg4ICVBx");
	this.shape.setTransform(281.3,168.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F68026").ss(3,1,1).p("Ah5hdIDzC7");
	this.shape_1.setTransform(286,172.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F68026").ss(3,1,1).p("AipiCIFTEF");
	this.shape_2.setTransform(290.8,176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F68026").ss(3,1,1).p("AjYioIGxFR");
	this.shape_3.setTransform(295.5,179.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F68026").ss(3,1,1).p("AkIjMIIRGa");
	this.shape_4.setTransform(300.3,183.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F68026").ss(3,1,1).p("Ak4jyIJxHl");
	this.shape_5.setTransform(305.1,187.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F68026").ss(3,1,1).p("AlnkXILPIv");
	this.shape_6.setTransform(309.8,190.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F68026").ss(3,1,1).p("AmXk8IMvJ5");
	this.shape_7.setTransform(314.6,194.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F68026").ss(3,1,1).p("AnGlhIONLD");
	this.shape_8.setTransform(319.3,198.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(246,128,38,0.91)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_9.setTransform(319.3,198.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(246,128,38,0.82)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_10.setTransform(319.3,198.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(246,128,38,0.725)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_11.setTransform(319.3,198.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(246,128,38,0.635)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_12.setTransform(319.3,198.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(246,128,38,0.545)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_13.setTransform(319.3,198.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(246,128,38,0.455)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_14.setTransform(319.3,198.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(246,128,38,0.365)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_15.setTransform(319.3,198.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(246,128,38,0.275)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_16.setTransform(319.3,198.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(246,128,38,0.18)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_17.setTransform(319.3,198.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(246,128,38,0.09)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_18.setTransform(319.3,198.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_19.setTransform(319.3,198.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},56).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},15).wait(2));

	// Arrow
	this.instance_2 = new lib.Arrow();
	this.instance_2.setTransform(97.8,231.2,1.8,1.8,-30,0,0,5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({x:201.3,y:176.3},14).to({alpha:0},14).wait(40));

	// Arrowline
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F68026").ss(3,1,1).p("AhBAkICChH");
	this.shape_20.setTransform(89.1,236.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F68026").ss(3,1,1).p("AhlA4IDLhu");
	this.shape_21.setTransform(92.6,234.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F68026").ss(3,1,1).p("AiKBLIEViV");
	this.shape_22.setTransform(96.2,232.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F68026").ss(3,1,1).p("AivBfIFfi9");
	this.shape_23.setTransform(99.8,230.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F68026").ss(3,1,1).p("AjUByIGojj");
	this.shape_24.setTransform(103.4,228.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F68026").ss(3,1,1).p("Aj5CGIHzkL");
	this.shape_25.setTransform(107,226.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F68026").ss(3,1,1).p("AkdCaII7kz");
	this.shape_26.setTransform(110.6,224.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F68026").ss(3,1,1).p("AlCCtIKFlZ");
	this.shape_27.setTransform(114.2,222.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F68026").ss(3,1,1).p("AlnDBILPmB");
	this.shape_28.setTransform(117.8,220.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F68026").ss(3,1,1).p("AmMDUIMZmo");
	this.shape_29.setTransform(121.4,218.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F68026").ss(3,1,1).p("AmwDoINinP");
	this.shape_30.setTransform(125,217);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F68026").ss(3,1,1).p("AnVD7IOrn1");
	this.shape_31.setTransform(128.5,215);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F68026").ss(3,1,1).p("An6EPIP1od");
	this.shape_32.setTransform(132.1,213.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F68026").ss(3,1,1).p("AofEjIQ/pF");
	this.shape_33.setTransform(135.7,211.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F68026").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_34.setTransform(139.3,209.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(246,128,38,0.929)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_35.setTransform(139.3,209.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(246,128,38,0.859)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_36.setTransform(139.3,209.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(246,128,38,0.784)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_37.setTransform(139.3,209.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(246,128,38,0.714)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_38.setTransform(139.3,209.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(246,128,38,0.643)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_39.setTransform(139.3,209.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(246,128,38,0.573)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_40.setTransform(139.3,209.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(246,128,38,0.502)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_41.setTransform(139.3,209.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(246,128,38,0.427)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_42.setTransform(139.3,209.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(246,128,38,0.357)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_43.setTransform(139.3,209.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(246,128,38,0.286)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_44.setTransform(139.3,209.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(246,128,38,0.216)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_45.setTransform(139.3,209.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(246,128,38,0.141)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_46.setTransform(139.3,209.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(246,128,38,0.071)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_47.setTransform(139.3,209.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_48.setTransform(139.3,209.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},24).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).wait(40));

	// Layer 8
	this.instance_3 = new lib.Bitmap1();
	this.instance_3.setTransform(23.3,232.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).wait(81));

	// Printer
	this.instance_4 = new lib.Bitmap2();
	this.instance_4.setTransform(355.8,227.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).wait(3));

	// Layer 2
	this.instance_5 = new lib.Bitmap3();
	this.instance_5.setTransform(31.3,66.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.1,66.4,410.2,288.8);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(96.2,41);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(126.3,107.4,410.2,288.8);


// stage content:
(lib.media_4231A = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(466.3,352.4,410.2,288.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;