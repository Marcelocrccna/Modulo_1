(function (lib, img, cjs) {

var p; // shortcut to reference prototypes



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,409,271);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,71);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,82,52);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,56);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,70);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,71);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt01", size:"11", width:"298.1", expand:"up"}); 
	//this.text = new cjs.Text("ID_txt01,w:298,a:c,e:u", "11px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 144;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,16.4);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.Bitmap3();
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
	this.frame_101 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(101).call(this.frame_101).wait(1));

	// Packet4
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(246.3,152.2,0.45,0.45,0,0,0,1.5,0.1);
	this.instance.alpha = 0.988;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({x:247.5,y:85.1},32).wait(18));

	// Packet3
	this.instance_1 = new lib.envelopeclosedstatic();
	this.instance_1.setTransform(246.3,152.2,0.45,0.45,0,0,0,1.5,0.1);
	this.instance_1.alpha = 0.988;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},0).to({x:177.7,y:306.3},32).wait(18));

	// Packet2
	this.instance_2 = new lib.envelopeclosedstatic();
	this.instance_2.setTransform(246.3,152.2,0.45,0.45,0,0,0,1.5,0.1);
	this.instance_2.alpha = 0.988;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({_off:false},0).to({x:309,y:305.6},32).wait(18));

	// Packet
	this.instance_3 = new lib.envelopeclosedstatic();
	this.instance_3.setTransform(58.8,257.7,0.45,0.45,0,0,0,1.6,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({alpha:0.988},12).to({regX:1.5,x:246.3,y:152.2},28).to({x:392.9,y:254.9},32).wait(18));

	// Arrow5
	this.instance_4 = new lib.Arrow4();
	this.instance_4.setTransform(245.7,119.3,1.797,1.797,-90.9,0,0,5,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(56).to({_off:false},0).to({y:111.9},8).to({alpha:0},11).to({_off:true},1).wait(26));

	// Arrowline5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F68026").ss(3,1,1).p("AAAhDIAACH");
	this.shape.setTransform(245.6,124);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F68026").ss(3,1,1).p("AAABJIAAiR");
	this.shape_1.setTransform(245.6,123.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F68026").ss(3,1,1).p("AAABOIAAib");
	this.shape_2.setTransform(245.6,122.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F68026").ss(3,1,1).p("AAABTIAAil");
	this.shape_3.setTransform(245.6,122.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F68026").ss(3,1,1).p("AAABYIAAiu");
	this.shape_4.setTransform(245.6,121.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F68026").ss(3,1,1).p("AAABcIAAi3");
	this.shape_5.setTransform(245.6,121.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F68026").ss(3,1,1).p("AAABhIAAjB");
	this.shape_6.setTransform(245.6,120.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F68026").ss(3,1,1).p("AAABmIAAjL");
	this.shape_7.setTransform(245.6,120.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F68026").ss(3,1,1).p("AAAhqIAADV");
	this.shape_8.setTransform(245.6,119.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(246,128,38,0.91)").ss(3,1,1).p("AAABrIAAjV");
	this.shape_9.setTransform(245.6,119.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(246,128,38,0.82)").ss(3,1,1).p("AAABrIAAjV");
	this.shape_10.setTransform(245.6,119.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(246,128,38,0.725)").ss(3,1,1).p("AAABrIAAjV");
	this.shape_11.setTransform(245.6,119.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(246,128,38,0.635)").ss(3,1,1).p("AAABrIAAjV");
	this.shape_12.setTransform(245.6,119.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(246,128,38,0.545)").ss(3,1,1).p("AAABrIAAjV");
	this.shape_13.setTransform(245.6,119.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(246,128,38,0.455)").ss(3,1,1).p("AAABrIAAjV");
	this.shape_14.setTransform(245.6,119.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(246,128,38,0.365)").ss(3,1,1).p("AAABrIAAjV");
	this.shape_15.setTransform(245.6,119.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(246,128,38,0.275)").ss(3,1,1).p("AAABrIAAjV");
	this.shape_16.setTransform(245.6,119.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(246,128,38,0.18)").ss(3,1,1).p("AAABrIAAjV");
	this.shape_17.setTransform(245.6,119.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(246,128,38,0.09)").ss(3,1,1).p("AAABrIAAjV");
	this.shape_18.setTransform(245.6,119.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("AAAhqIAADV");
	this.shape_19.setTransform(245.6,119.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},56).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},1).wait(26));

	// Arrow4
	this.instance_5 = new lib.Arrow4();
	this.instance_5.setTransform(227.5,193.1,1.797,1.797,111.8,0,0,5,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(56).to({_off:false},0).to({x:191.8,y:281.4},8).to({alpha:0},11).to({_off:true},1).wait(26));

	// Arrowline4
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F68026").ss(3,1,1).p("AArhqIhWDV");
	this.shape_20.setTransform(231.6,183.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F68026").ss(3,1,1).p("AhACiICBlD");
	this.shape_21.setTransform(229.4,188.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F68026").ss(3,1,1).p("AhXDZICvmy");
	this.shape_22.setTransform(227.1,194.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F68026").ss(3,1,1).p("AhtERIDboh");
	this.shape_23.setTransform(224.9,199.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F68026").ss(3,1,1).p("AiDFJIEHqQ");
	this.shape_24.setTransform(222.7,205.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F68026").ss(3,1,1).p("AiZGAIEzr/");
	this.shape_25.setTransform(220.5,211);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F68026").ss(3,1,1).p("AivG3IFftt");
	this.shape_26.setTransform(218.3,216.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F68026").ss(3,1,1).p("AjFHvIGLvd");
	this.shape_27.setTransform(216.1,222.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F68026").ss(3,1,1).p("ADcolIm3RL");
	this.shape_28.setTransform(213.9,227.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(246,128,38,0.91)").ss(3,1,1).p("AjbImIG3xL");
	this.shape_29.setTransform(213.9,227.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(246,128,38,0.82)").ss(3,1,1).p("AjbImIG3xL");
	this.shape_30.setTransform(213.9,227.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(246,128,38,0.725)").ss(3,1,1).p("AjbImIG3xL");
	this.shape_31.setTransform(213.9,227.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(246,128,38,0.635)").ss(3,1,1).p("AjbImIG3xL");
	this.shape_32.setTransform(213.9,227.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(246,128,38,0.545)").ss(3,1,1).p("AjbImIG3xL");
	this.shape_33.setTransform(213.9,227.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(246,128,38,0.455)").ss(3,1,1).p("AjbImIG3xL");
	this.shape_34.setTransform(213.9,227.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(246,128,38,0.365)").ss(3,1,1).p("AjbImIG3xL");
	this.shape_35.setTransform(213.9,227.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(246,128,38,0.275)").ss(3,1,1).p("AjbImIG3xL");
	this.shape_36.setTransform(213.9,227.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(246,128,38,0.18)").ss(3,1,1).p("AjbImIG3xL");
	this.shape_37.setTransform(213.9,227.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(246,128,38,0.09)").ss(3,1,1).p("AjbImIG3xL");
	this.shape_38.setTransform(213.9,227.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("ADcolIm3RL");
	this.shape_39.setTransform(213.9,227.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},56).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[]},1).wait(26));

	// Arrow3
	this.instance_6 = new lib.Arrow4();
	this.instance_6.setTransform(262.4,194.4,1.797,1.797,74,0,0,5,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(56).to({_off:false},0).to({x:286.4,y:281},8).to({alpha:0},11).to({_off:true},1).wait(26));

	// Arrowline3
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F68026").ss(3,1,1).p("AgZheIA0C9");
	this.shape_40.setTransform(258.9,181.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F68026").ss(3,1,1).p("AgpiWIBTEt");
	this.shape_41.setTransform(260.5,187.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F68026").ss(3,1,1).p("Ag5jPIBzGe");
	this.shape_42.setTransform(262,193.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F68026").ss(3,1,1).p("AhIkHICRIP");
	this.shape_43.setTransform(263.6,198.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F68026").ss(3,1,1).p("AhYk/ICxJ/");
	this.shape_44.setTransform(265.2,204.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F68026").ss(3,1,1).p("Ahol4IDRLx");
	this.shape_45.setTransform(266.7,210);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F68026").ss(3,1,1).p("Ah3mwIDvNh");
	this.shape_46.setTransform(268.3,215.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F68026").ss(3,1,1).p("AiHnpIEPPT");
	this.shape_47.setTransform(269.8,221.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#F68026").ss(3,1,1).p("AiWohIEtRD");
	this.shape_48.setTransform(271.4,226.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(246,128,38,0.91)").ss(3,1,1).p("AiWohIEtRD");
	this.shape_49.setTransform(271.4,226.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(246,128,38,0.82)").ss(3,1,1).p("AiWohIEtRD");
	this.shape_50.setTransform(271.4,226.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(246,128,38,0.725)").ss(3,1,1).p("AiWohIEtRD");
	this.shape_51.setTransform(271.4,226.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(246,128,38,0.635)").ss(3,1,1).p("AiWohIEtRD");
	this.shape_52.setTransform(271.4,226.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(246,128,38,0.545)").ss(3,1,1).p("AiWohIEtRD");
	this.shape_53.setTransform(271.4,226.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(246,128,38,0.455)").ss(3,1,1).p("AiWohIEtRD");
	this.shape_54.setTransform(271.4,226.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(246,128,38,0.365)").ss(3,1,1).p("AiWohIEtRD");
	this.shape_55.setTransform(271.4,226.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(246,128,38,0.275)").ss(3,1,1).p("AiWohIEtRD");
	this.shape_56.setTransform(271.4,226.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(246,128,38,0.18)").ss(3,1,1).p("AiWohIEtRD");
	this.shape_57.setTransform(271.4,226.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(246,128,38,0.09)").ss(3,1,1).p("AiWohIEtRD");
	this.shape_58.setTransform(271.4,226.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("AiWohIEtRD");
	this.shape_59.setTransform(271.4,226.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_40}]},56).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[]},1).wait(26));

	// Arrow2
	this.instance_7 = new lib.Arrow4();
	this.instance_7.setTransform(291.5,177.1,1.797,1.797,41.6,0,0,5,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(56).to({_off:false},0).to({x:366.6,y:235.2},8).to({alpha:0},11).to({_off:true},1).wait(26));

	// Arrowline2
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#F68026").ss(3,1,1).p("AhKg4ICVBx");
	this.shape_60.setTransform(281.3,168.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#F68026").ss(3,1,1).p("Ah5hdIDzC7");
	this.shape_61.setTransform(286,172.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#F68026").ss(3,1,1).p("AipiCIFTEF");
	this.shape_62.setTransform(290.8,176);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#F68026").ss(3,1,1).p("AjYioIGxFR");
	this.shape_63.setTransform(295.5,179.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#F68026").ss(3,1,1).p("AkIjMIIRGa");
	this.shape_64.setTransform(300.3,183.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#F68026").ss(3,1,1).p("Ak4jyIJxHl");
	this.shape_65.setTransform(305.1,187.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#F68026").ss(3,1,1).p("AlnkXILPIv");
	this.shape_66.setTransform(309.8,190.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#F68026").ss(3,1,1).p("AmXk8IMvJ5");
	this.shape_67.setTransform(314.6,194.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#F68026").ss(3,1,1).p("AnGlhIONLD");
	this.shape_68.setTransform(319.3,198.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(246,128,38,0.91)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_69.setTransform(319.3,198.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(246,128,38,0.82)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_70.setTransform(319.3,198.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(246,128,38,0.725)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_71.setTransform(319.3,198.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(246,128,38,0.635)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_72.setTransform(319.3,198.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(246,128,38,0.545)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_73.setTransform(319.3,198.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(246,128,38,0.455)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_74.setTransform(319.3,198.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(246,128,38,0.365)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_75.setTransform(319.3,198.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(246,128,38,0.275)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_76.setTransform(319.3,198.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(246,128,38,0.18)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_77.setTransform(319.3,198.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(246,128,38,0.09)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_78.setTransform(319.3,198.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_79.setTransform(319.3,198.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60}]},56).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[]},1).wait(26));

	// Arrow
	this.instance_8 = new lib.Arrow();
	this.instance_8.setTransform(97.8,231.2,1.8,1.8,-30,0,0,5,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({x:201.3,y:176.3},14).to({alpha:0},14).wait(50));

	// Arrowline
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#F68026").ss(3,1,1).p("AhBAkICChH");
	this.shape_80.setTransform(89.1,236.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#F68026").ss(3,1,1).p("AhlA4IDLhu");
	this.shape_81.setTransform(92.6,234.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#F68026").ss(3,1,1).p("AiKBLIEViV");
	this.shape_82.setTransform(96.2,232.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#F68026").ss(3,1,1).p("AivBfIFfi9");
	this.shape_83.setTransform(99.8,230.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#F68026").ss(3,1,1).p("AjUByIGojj");
	this.shape_84.setTransform(103.4,228.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#F68026").ss(3,1,1).p("Aj5CGIHzkL");
	this.shape_85.setTransform(107,226.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#F68026").ss(3,1,1).p("AkdCaII7kz");
	this.shape_86.setTransform(110.6,224.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#F68026").ss(3,1,1).p("AlCCtIKFlZ");
	this.shape_87.setTransform(114.2,222.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#F68026").ss(3,1,1).p("AlnDBILPmB");
	this.shape_88.setTransform(117.8,220.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#F68026").ss(3,1,1).p("AmMDUIMZmo");
	this.shape_89.setTransform(121.4,218.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#F68026").ss(3,1,1).p("AmwDoINinP");
	this.shape_90.setTransform(125,217);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#F68026").ss(3,1,1).p("AnVD7IOrn1");
	this.shape_91.setTransform(128.5,215);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#F68026").ss(3,1,1).p("An6EPIP1od");
	this.shape_92.setTransform(132.1,213.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#F68026").ss(3,1,1).p("AofEjIQ/pF");
	this.shape_93.setTransform(135.7,211.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#F68026").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_94.setTransform(139.3,209.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("rgba(246,128,38,0.929)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_95.setTransform(139.3,209.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(246,128,38,0.859)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_96.setTransform(139.3,209.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("rgba(246,128,38,0.784)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_97.setTransform(139.3,209.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(246,128,38,0.714)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_98.setTransform(139.3,209.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("rgba(246,128,38,0.643)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_99.setTransform(139.3,209.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(246,128,38,0.573)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_100.setTransform(139.3,209.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("rgba(246,128,38,0.502)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_101.setTransform(139.3,209.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(246,128,38,0.427)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_102.setTransform(139.3,209.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(246,128,38,0.357)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_103.setTransform(139.3,209.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(246,128,38,0.286)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_104.setTransform(139.3,209.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("rgba(246,128,38,0.216)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_105.setTransform(139.3,209.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(246,128,38,0.141)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_106.setTransform(139.3,209.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("rgba(246,128,38,0.071)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_107.setTransform(139.3,209.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_108.setTransform(139.3,209.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_80}]},24).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).wait(50));

	// Computer glow
	this.instance_9 = new lib.Bitmap2();
	this.instance_9.setTransform(23.3,232.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({_off:false},0).wait(91));

	// Computer
	this.instance_10 = new lib.Bitmap6();
	this.instance_10.setTransform(141.7,280.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(91).to({_off:false},0).wait(11));

	// Laptop
	this.instance_11 = new lib.Bitmap5();
	this.instance_11.setTransform(255.9,281.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(91).to({_off:false},0).wait(11));

	// Printer
	this.instance_12 = new lib.Bitmap4();
	this.instance_12.setTransform(355.8,227.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(91).to({_off:false},0).wait(11));

	// txt
	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(248.1,52.4,1,1,0,0,0,149.1,8.5);

	this.text = new cjs.Text("172.16.4.3", "11px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(290.5,343.5);

	this.text_1 = new cjs.Text("172.16.4.253", "11px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(397.5,274.7);

	this.text_2 = new cjs.Text("172.16.4.2", "11px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(174,343.5);

	this.text_3 = new cjs.Text("172.16.4.1", "11px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(56.1,294.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_13}]}).wait(102));

	// Lines
	this.instance_14 = new lib.Bitmap1();
	this.instance_14.setTransform(31.3,66.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.1,43.9,410.2,310.8);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(96,41);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(126.1,84.9,410.2,310.9);


// stage content:
(lib.media_4232 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(466.1,329.9,410.2,310.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;