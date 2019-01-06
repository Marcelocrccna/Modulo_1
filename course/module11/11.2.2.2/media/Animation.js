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
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/Bitmap6.png", id:"Bitmap6"}
	]
};



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,150);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,46);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,91);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,107);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,151);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,151);

(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt06",width:"220",expand:"up+down",align:"center",color:"#FFFFFF"});
	//this.text = new cjs.Text("ID_txt06,w:220.95,a:c,e:u+d", "11px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 144;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,16.2);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt07",width:"220",expand:"up+down",align:"center",color:"#FFFFFF"});
	//this.text = new cjs.Text("ID_txt07,w:220,a:c,e:u+d", "11px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 144;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,16.2);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	 this.text = getCJSElement("BUBBLE",{width:"296.75",compId:"ID_txt08",size:"10" ,align:"left",tailPosition:"6",tailFlip:"1"});
	//this.text = new cjs.Text("ID_txt08,w:296.75,a:l,t_p:6", "11px 'Arial'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 144;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,16.2);



(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_163 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(163).call(this.frame_163).wait(1));

	// image3
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(17.4,64.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110).to({_off:false},0).wait(54));

	// text2
	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(-11.9,72.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({_off:true},51).wait(54));

	// image1
	this.instance_2 = new lib.Bitmap2();
	this.instance_2.setTransform(-8.9,89.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({_off:true},47).wait(105));

	// caption
	this.instance_3 = new lib.Bitmap1();
	this.instance_3.setTransform(-24.3,53.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).wait(152));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.MagnifyingGlass = function() {
	this.initialize();

	// shading
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.302)").s().p("Aj6D3QgKgKAAgOQAAgNAJgKIgDgBICbibQghgtAAg9QAAhQA4g3IABgBQAvgvA9gHQARgDAUgBQBPABA4A4QA4A3AABQQAABNg4A5QgqApg3ALIAVgIQgiANgmAAQg7ABgvgiIiaCbIgBgBQgKAJgNgBQgOAAgJgJgAgHjdQgTALgQARQgyAyAABHQgBA2AeAoQAJANAMAMQAMAMANAJQAoAdA2AAQAjAAAfgNQASgLARgQQAygzAAhEQAAhHgygyQgygyhHAAIAAAAQgkAAgcAMg");
	this.shape.setTransform(26.1,-25.4);

	// shading
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.251)","rgba(0,0,0,0.502)"],[0,0.604,1],-1.2,-0.9,0,-1.2,-0.9,4.9).s().p("AgQASQgLgKAAgMQABgNAIgKIAuAuQgKAJgNgBQgMAAgJgJg");
	this.shape_1.setTransform(2.8,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0.502)","rgba(255,255,255,0.251)","rgba(0,0,0,0.502)"],[0,0.424,1],-1.4,-1.4,0.4,0.4).s().p("AgzBlIgwgwIgCgBICYiZQALAOANAOQAMANAPAJIiYCZg");
	this.shape_2.setTransform(10.9,-10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0.251)","rgba(0,0,0,0.753)"],[0,0.408,1],-22.5,15,-5.5,5.2).s().p("Ag0CHQgNgJgMgLQgLgMgJgNQgegrAAg0QAAhHAygxQAZgaAfgMQgTAKgRASQgyAxAABHQAAA0AeArQAJANALAMQAMALANAKQAoAcA2AAQAkAAAegMQgmAXgwgBQg0AAgqgdg");
	this.shape_3.setTransform(27.6,-31.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0.251)","rgba(0,0,0,0.753)"],[0,0.408,1],-13.5,-13.5,13.6,13.6).s().p("AhqCeQgPgKgNgNQgNgOgKgOQghgvAAg8QAAhOA4g4QAvgvBAgIQAMgBALAAQBOAAA5A4QA4A4AABOQAABPg4A4QgdAdgjANQghAOgmAAQg7AAgvghgAhAidQgfAMgZAaQgyAxAABGQAAA1AeArQAJANALAMQAMALANAJQAqAdA1AAQAvABAmgXQATgLARgQQAygzAAhGQAAhGgygxQgzgzhGAAIAAAAQgiAAgeANg");
	this.shape_4.setTransform(31.9,-31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.502)","rgba(0,0,0,0.251)","rgba(0,0,0,0.753)"],[0,0.408,1],10.5,4,4.6,-18).s().p("AgRC1QAhgOAdgcQA4g5AAhPQAAhNg4g4Qg3g4hPAAQgMAAgMABQASgDATAAQBNAAA5A4QA4A4AABNQAABPg4A5QgrApg0ALIAUgIg");
	this.shape_5.setTransform(40.9,-32.1);

	// shape
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Aj6D3QgKgKAAgOQAAgNAJgKIgDgBICbibQghgtAAg9QAAhQA4g3IABgBQAvgvA9gHQARgDAUgBQBPABA4A4QA4A3AABQQAABNg4A5QgqApg3ALIAVgIQgiANgmAAQg7ABgvgiIiaCbIgBgBQgKAJgNgBQgOAAgJgJgAgHjdQgTALgQARQgyAyAABHQgBA2AeAoQAJANAMAMQAMAMANAJQAoAdA2AAQAjAAAfgNQASgLARgQQAygzAAhEQAAhHgygyQgygyhHAAIAAAAQgkAAgcAMg");
	this.shape_6.setTransform(26.1,-25.4);

	// shadow
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(52,49,37,0.4)").s().p("Aj6D3QgKgKAAgOQAAgNAJgKIgDgCICbiaQghguAAg8QAAhPA4g4IABgBQAvgvA9gHQARgDAUAAQBPAAA4A4QA4A3AABQQAABNg4A5QgqApg3ALIAVgIQgiANgmAAQg7AAgvggIiaCaIgBgBQgKAJgNAAQgOAAgJgKgAgHjdQgTALgQARQgyAyAABHQgBA2AeApQAJANAMALQAMAMANAJQAoAdA2AAQAjAAAfgMQASgMARgQQAygzAAhEQAAhHgygyQgygzhHAAIAAAAQgkAAgcANg");
	this.shape_7.setTransform(29.1,-22.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-51.1,55.3,54);


(lib.ball_g = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5152E").s().p("AgXAXQgJgKgBgNQABgMAJgLQALgJAMgBQANABAKAJQALALAAAMQAAANgLAKQgKALgNAAQgMAAgLgLg");

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF767B").s().p("AgrArQgRgRgBgaQABgZARgSQASgRAZgBQAaABARARQATASAAAZQAAAagTARQgRATgaAAQgZAAgSgTg");

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A5152E").s().p("Ag+A/QgbgaAAglQAAgkAbgaQAagbAkAAQAlAAAaAbQAbAaAAAkQAAAlgbAaQgaAbglAAQgkAAgagbg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-9,18,18);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ball_g();
	this.instance.setTransform(21.6,13.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.6,4.4,18,18);


(lib.slide_1 = function() {
	this.initialize();

	// animation 1
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(76,0,1.26,1.26);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.animation03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_281 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(281).call(this.frame_281).wait(1));

	// text1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(105.7,76.6,1,1,0,0,0,110.5,8.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(275).to({alpha:1},0).wait(6));

	// image
	this.instance_1 = new lib.Bitmap5();
	this.instance_1.setTransform(-23.4,52.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(276).to({_off:false},0).wait(6));

	// ball4
	this.instance_2 = new lib.ball_g();
	this.instance_2.setTransform(293.4,238.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({_off:false},0).to({y:269.4},19).to({x:327.9},15,cjs.Ease.get(1)).to({_off:true},18).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).wait(30).to({x:293.4},16,cjs.Ease.get(1)).to({y:238.6},31,cjs.Ease.get(1)).to({x:110.7},29,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// ball3
	this.instance_3 = new lib.ball_g();
	this.instance_3.setTransform(293.4,238.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(91).to({_off:false},0).to({y:215.4},19).to({x:327.9},15,cjs.Ease.get(1)).to({_off:true},18).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).wait(30).to({x:293.4},16,cjs.Ease.get(1)).to({y:238.6},31,cjs.Ease.get(1)).to({x:110.7},29,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// ball2
	this.instance_4 = new lib.ball_g();
	this.instance_4.setTransform(293.4,238.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(91).to({_off:false},0).to({y:167.4},19).to({x:327.9},15,cjs.Ease.get(1)).to({_off:true},18).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).wait(30).to({x:293.4},16,cjs.Ease.get(1)).to({y:238.6},31,cjs.Ease.get(1)).to({x:110.7},29,cjs.Ease.get(1)).to({_off:true},1).wait(12));

	// ball1
	this.instance_5 = new lib.ball_g();
	this.instance_5.setTransform(110.7,238.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},6).wait(6).to({_off:false},0).wait(21).to({x:293.4},36).to({y:117.4},19).to({x:327.9},15,cjs.Ease.get(1)).to({_off:true},18).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).wait(30).to({x:293.4},16,cjs.Ease.get(1)).to({y:238.6},31,cjs.Ease.get(1)).to({x:110.7},29,cjs.Ease.get(1)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.animation02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_387 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(387).call(this.frame_387).wait(1));

	// caption
	this.instance = new lib.Symbol1();
	this.instance.setTransform(116.8,152.7,1,1,0,0,0,148.3,40);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(373).to({alpha:1},0).wait(15));

	// ball4
	this.instance_1 = new lib.ball_g();
	this.instance_1.setTransform(110.3,238.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(183).to({_off:false},0).to({x:293.6,y:239.2},20).to({y:263.3},5).to({x:327.1},5,cjs.Ease.get(1)).wait(119).to({x:293.6},5,cjs.Ease.get(1)).to({y:239.2},10,cjs.Ease.get(1)).to({x:110.3,y:238.8},11,cjs.Ease.get(1)).to({_off:true},1).wait(29));

	// ball3
	this.instance_2 = new lib.ball_g();
	this.instance_2.setTransform(110.3,238.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(148).to({_off:false},0).to({x:293.6,y:239.2},21).to({y:214.8},5).to({x:327.1},9,cjs.Ease.get(1)).wait(125).to({x:293.6},5,cjs.Ease.get(1)).to({y:239.2},10,cjs.Ease.get(1)).to({x:110.3,y:238.8},9,cjs.Ease.get(1)).to({_off:true},1).wait(55));

	// ball2
	this.instance_3 = new lib.ball_g();
	this.instance_3.setTransform(110.3,238.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(105).to({_off:false},0).to({x:293.6,y:239.2},20).to({y:166.1},14).to({x:327.1},9,cjs.Ease.get(1)).wait(127).to({x:293.6},5,cjs.Ease.get(1)).to({y:239.2},16,cjs.Ease.get(1)).to({x:110.3,y:238.8},12,cjs.Ease.get(1)).to({_off:true},1).wait(79));

	// ball1
	this.instance_4 = new lib.ball_g();
	this.instance_4.setTransform(110.3,238.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).wait(18).to({x:293.6,y:239.2},25).to({y:117.4},21).to({x:327.1},13,cjs.Ease.get(1)).wait(129).to({x:293.6},5,cjs.Ease.get(1)).to({y:239.2},18,cjs.Ease.get(1)).to({x:110.3,y:238.8},17,cjs.Ease.get(1)).to({_off:true},1).wait(113));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.5,112.7,148,16.2);


(lib.Tween11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween8("synched",0);
	this.instance.setTransform(-21.5,-13.4);

	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.setTransform(-21.5,-13.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-9,18,18);


(lib.slide_3 = function() {
	this.initialize();

	// animation 3
	this.anim03 = new lib.animation03();
	this.anim03.setTransform(76,0,1.26,1.26);

	this.addChild(this.anim03);
}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.slide_2 = function() {
	this.initialize();

	// animation 2
	this.anim02 = new lib.animation02();
	this.anim02.setTransform(76,0,1.26,1.26);

	this.addChild(this.anim02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(36.3,142,186.5,20.4);


(lib.animation04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_164 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(164).call(this.frame_164).wait(1));

	// txt
	this.instance = new lib.Symbol3();
	this.instance.setTransform(105.7,70.6,1,1,0,0,0,110.5,8.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({alpha:1},0).wait(6));

	// image
	this.instance_1 = new lib.Bitmap6();
	this.instance_1.setTransform(-23.4,52.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(159).to({_off:false},0).wait(6));

	// ball4
	this.instance_2 = new lib.ball_g();
	this.instance_2.setTransform(337.9,267.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},0).to({x:293.4},10).to({y:237.5},14).to({y:267.5},10).to({x:328.9},15).wait(1).to({x:336.9,y:277.5},0).to({x:293.4,y:267.5},6).to({y:227.5},6).to({y:267.5},7).to({x:328.9},12).wait(13));

	// ball3
	this.instance_3 = new lib.ball_g();
	this.instance_3.setTransform(337.9,213.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween11("synched",0);
	this.instance_4.setTransform(328.9,213.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},71).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},11).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_4}]},9).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).to({x:293.4},10).to({y:238},7).to({y:213.5},7).to({x:328.9},10).wait(9).to({x:293.4},11).to({y:228},9).to({y:212.5},9).to({_off:true,x:328.9,y:213.5,mode:"synched",startPosition:0},9).wait(13));

	// ball2
	this.instance_5 = new lib.ball_g();
	this.instance_5.setTransform(337.9,165.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(71).to({_off:false},0).to({x:293.4},10).to({y:228.5},14).to({y:185.5},10).to({y:165.5},9).to({x:336.9},5).wait(1).to({x:328.9},0).to({x:293.4},9).to({y:228.5},7).to({y:165.5},5).to({x:328.9},11).wait(13));

	// ball1
	this.instance_6 = new lib.ball_g();
	this.instance_6.setTransform(336.9,115.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(58).to({_off:false},0).to({x:293.4},13).to({y:227.5},10).to({y:237.5},1).to({y:115.5},13).to({x:328.9},10).to({x:336.9},1).to({x:293.4},13).to({y:227.5},10).wait(1).to({y:115.5},13).to({x:328.9},9).wait(13));

	// search
	this.instance_7 = new lib.MagnifyingGlass();
	this.instance_7.setTransform(108.6,240.4,0.398,0.398,0,0,0,27.5,-24);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({x:291.1},27).to({y:227.4},7).to({y:241},8).wait(113));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,62.1,148,16.2);


(lib.slide_4 = function() {
	this.initialize();

	// animation 4
	this.anim04 = new lib.animation04();
	this.anim04.setTransform(76,0,1.26,1.26);

	this.addChild(this.anim04);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(69.9,78.2,186.5,20.4);


(lib.Main = function() {
	this.initialize();

	// slide4
	this.slide04 = new lib.slide_4();

	// slide3
	this.slide03 = new lib.slide_3();

	// slide2
	this.slide02 = new lib.slide_2();

	// slide1
	this.slide01 = new lib.slide_1();
	this.slide01.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide01,this.slide02,this.slide03,this.slide04);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(36.3,78.2,220.1,84.1);


// stage content:
(lib.media_11222_A = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();
	this.instance.setTransform(0,-7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(376.3,238,220.1,162.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;