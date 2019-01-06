(function (lib, img, cjs) {

var p; // shortcut to reference prototypes





// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,50);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,28);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,28);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,431,288);


(lib.tableHilight = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-1,-2.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-2.6,213,28);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt02",width:"90",expand:"up",align:"center"});
	//this.text = new cjs.Text("ID_txt02,w:90,a:c,e:u..pur", "11px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(-10,-15);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,129.3,16.2);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt01",width:"90",expand:"up",align:"center",class:"orangeCallOut"});
	//this.text = new cjs.Text("ID_txt01,w:90,a:c,e:u..ora", "11px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(-10,-15);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,129.3,16.2);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-38.6,-25.1);

	// outer lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AGLD8QgJgcgSgZIAAAAIiTj0IgDACQgjAZghASIgBAAQhRAqhCABIgCAAQhDgBhSgrIAAAAQghgSgkgZIgCgCIiUD1IAAAAQgTAagIAbIgEAAIAAgaIAAAHQAIgUAPgUICUj0Qg+guhGhDIAAABQgZgYgKg/IAKAAQAKA6AWAVIAAAAQBHBFBAAtIAGAFQAjAZAhASIAAgBQBPAqBBABIACAAQBAgBBPgpIAAAAQAhgRAigZIAHgFQBAgtBIhGIAAAAQAWgVAJg6IALAAQgKA/gZAYIAAgBQhGBEg/AuICTDzQARAXAHAUIAAAQg");
	this.shape.setTransform(1.4,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000002").s().p("AmUEGQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAoAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAIANAAIABAAIMOAAIABAAIAMAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAIAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAgAmPD8IAEAAIMWAAIAFAAIAAgQIAAnmIgEAAIgKAAIsDAAIgKAAIgEAAg");
	this.shape_1.setTransform(1.5,0);

	// color
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFF4CC","#FFD200"],[0,1],29.2,-23.1,0.4,5.6).s().p("AmUEAIAAn/IMpAAIAAH/g");
	this.shape_2.setTransform(1.5,0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.6,-26.1,82.1,52.4);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_682 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(682).call(this.frame_682).wait(1));

	// packet
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(60.2,281.2,0.037,0.036,0,0,0,1.4,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:1.5,scaleX:0.37,scaleY:0.36,x:60.6,y:272,alpha:1},8).to({x:129.6,y:220},15).to({alpha:0},15).to({alpha:1},15).to({x:241.6,y:139},25).to({alpha:0},15).to({alpha:1},15).wait(85).to({x:360.6,y:220},25).to({x:360.7,alpha:0},15).to({alpha:1},15).to({x:292.2,y:272},20).to({alpha:0},15).to({alpha:1},15).to({alpha:0},15).wait(46).to({regX:1.4,scaleX:0.04,scaleY:0.04},0).to({regX:1.5,scaleX:0.37,scaleY:0.36,alpha:1},15).wait(1).to({x:360.6,y:220},15).to({alpha:0},15).to({alpha:1},15).to({x:241.6,y:139},25).to({alpha:0},15).to({alpha:1},15).wait(85).to({x:129.6,y:220},25).to({alpha:0},15).to({alpha:1},15).to({x:60.6,y:272},20).to({alpha:0},15).to({alpha:1},15).to({alpha:0},15).wait(2));

	// table highlight
	this.instance_1 = new lib.tableHilight();
	this.instance_1.setTransform(241.5,58.9,1,1.061,0,0,0,105.5,12.3);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(242,98,0,1)",0,0,5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:false},0).to({scaleY:1,y:60.9,alpha:1},15).to({alpha:0},16).to({alpha:1},14).to({alpha:0},15).to({alpha:1},15).wait(20).to({alpha:0},5).wait(267).to({y:85.4},0).to({alpha:1},15).to({alpha:0},16).to({alpha:1},14).to({alpha:0},15).to({alpha:1},15).wait(20).to({y:85.8,alpha:0},5).wait(122));

	// lazytext
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(281.4,236.9,1,1,0,0,0,45,7.5);

	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(49.4,236.9,1,1,0,0,0,45,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(683));

	// text
	this.text = new cjs.Text("10.0.1.0", "11px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(282.6,51.6);

	this.text_1 = new cjs.Text("10.0.0.0", "11px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(282.6,77.6);

	this.text_2 = new cjs.Text("F0", "11px 'Arial'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(175.8,51.6);

	this.text_3 = new cjs.Text("F1", "11px 'Arial'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(175.8,77.6);

	this.text_4 = new cjs.Text("F0", "11px 'Arial'", "#000100");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 13;
	this.text_4.setTransform(271.1,141.2);

	this.text_5 = new cjs.Text("F1", "11px 'Arial'", "#000100");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 13;
	this.text_5.setTransform(205.8,139.2);

	this.text_6 = new cjs.Text("10.0.1.254\n255.255.255.0", "11px 'Arial'", "#000100");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 13;
	this.text_6.setTransform(307.8,104.7);

	this.text_7 = new cjs.Text("10.0.0.254\n255.255.255.0", "11px 'Arial'", "#000100");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 13;
	this.text_7.setTransform(171.2,104.7);

	this.text_8 = new cjs.Text("10.0.1.253\n255.255.255.0", "11px 'Arial'", "#000100");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 13;
	this.text_8.lineWidth = 77;
	this.text_8.setTransform(420.2,295.7);

	this.text_9 = new cjs.Text("10.0.1.2\n255.255.255.0", "11px 'Arial'", "#000100");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 13;
	this.text_9.lineWidth = 77;
	this.text_9.setTransform(352.8,321.5);

	this.text_10 = new cjs.Text("10.0.1.1\n255.255.255.0", "11px 'Arial'", "#000100");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 13;
	this.text_10.setTransform(289.1,295.7);

	this.text_11 = new cjs.Text("10.0.0.253\n255.255.255.0", "11px 'Arial'", "#000100");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 13;
	this.text_11.lineWidth = 77;
	this.text_11.setTransform(185,295.7);

	this.text_12 = new cjs.Text("10.0.0.2\n255.255.255.0", "11px 'Arial'", "#000100");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 13;
	this.text_12.setTransform(120.6,321.5);

	this.text_13 = new cjs.Text("10.0.0.1\n255.255.255.0", "11px 'Arial'", "#000100");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 13;
	this.text_13.lineWidth = 83;
	this.text_13.setTransform(54.8,295.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(683));

	// Layer 4
	this.instance_4 = new lib.Bitmap4();
	this.instance_4.setTransform(33,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(683));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.4,40.2,459.7,311.7);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation();
	this.anim01.setTransform(89,26,1.068,1.068);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(93.6,68.9,491.1,333);


// stage content:
(lib.media_7323 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(433.6,313.9,491.1,333);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;