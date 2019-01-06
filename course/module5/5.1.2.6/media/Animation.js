(function (lib, img, cjs) {

var p; // shortcut to reference prototypes


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,51);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,582,350);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	 this.text = getCJSElement("BUBBLE",{width:"288",compId:"ID_bubble_01",size:"11" ,align:"center",tailPosition:"6",tailFlip:"1"});
	//this.text = new cjs.Text("ID_bubble_01,W:288,TP:6,flip:1", "11px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 100;
	this.text.setTransform(-4,3);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,30.4);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9A003").s().p("AGLD8QgJgcgSgZIAAAAIiTj0IgDACQgjAZghASIgBAAQhRAqhCABIgCAAQhDgBhSgrIAAAAQghgSgkgZIgCgCIiUD1IAAAAQgTAagIAbIgEAAIAAgaIAAAHQAIgUAPgUICUj0Qg+guhGhDIAAABQgZgYgKg/IAKAAQAKA6AWAVIAAAAQBHBFBAAtIAGAFQAjAZAhASIAAgBQBPAqBBABIACAAQBAgBBPgpIAAAAQAhgRAigZIAHgFQBAgtBIhGIAAAAQAWgVAJg6IALAAQgKA/gZAYIAAgBQhGBEg/AuICTDzQARAXAHAUIAAAQg");
	this.shape.setTransform(1.4,0.1);

	// outer lines
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AGLD8QgJgcgSgZIAAAAIiTj0IgDACQgjAZghASIgBAAQhRAqhCABIgCAAQhDgBhSgrIAAAAQghgSgkgZIgCgCIiUD1IAAAAQgTAagIAbIgEAAIAAgaIAAAHQAIgUAPgUICUj0Qg+guhGhDIAAABQgZgYgKg/IAKAAQAKA6AWAVIAAAAQBHBFBAAtIAGAFQAjAZAhASIAAgBQBPAqBBABIACAAQBAgBBPgpIAAAAQAhgRAigZIAHgFQBAgtBIhGIAAAAQAWgVAJg6IALAAQgKA/gZAYIAAgBQhGBEg/AuICTDzQARAXAHAUIAAAQg");
	this.shape_1.setTransform(1.4,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000002").s().p("AmUEGQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAIAAoAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAIANAAIABAAIMOAAIABAAIAMAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAIAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAgAmPD8IAEAAIMWAAIAFAAIAAgQIAAnmIgEAAIgKAAIsDAAIgKAAIgEAAg");
	this.shape_2.setTransform(1.5,0);

	// color
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-39.1,-25.6);

	this.addChild(this.instance,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.6,-26.1,82.1,52.4);


(lib.envelopebubble = function() {
	this.initialize();

	// Layer 5
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(44.7,31.6,1.2,1.2,0,0,0,1.5,0.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.7,-30.8,124.7,150.7);


(lib.bublle1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(78.7,30.4,1,1,0,0,0,144,32.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.3,-2.1,104,30.4);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_129 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(129).call(this.frame_129).wait(1));

	// bubble
	this.instance = new lib.bublle1();
	this.instance.setTransform(169.4,44.7,1,1,0,0,0,103.1,32);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:1},0).wait(126));

	// packet5
	this.instance_1 = new lib.envelopebubble();
	this.instance_1.setTransform(260.6,92.5,0.395,0.395,0,0,0,44.6,31.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(93).to({_off:false},0).to({regX:44.5,scaleX:0.2,scaleY:0.2,x:370.5,y:140.6,alpha:0.961},31).wait(6));

	// packet4
	this.instance_2 = new lib.envelopebubble();
	this.instance_2.setTransform(260.6,92.5,0.395,0.395,0,0,0,44.6,31.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(93).to({_off:false},0).to({regX:44.8,scaleX:0.2,scaleY:0.2,x:394.7,y:124.7,alpha:0.961},31).wait(6));

	// packet3
	this.instance_3 = new lib.envelopebubble();
	this.instance_3.setTransform(260.6,92.5,0.395,0.395,0,0,0,44.6,31.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(93).to({_off:false},0).to({regX:44.5,scaleX:0.2,scaleY:0.2,x:400,y:93.1,alpha:0.961},31).wait(6));

	// packet2
	this.instance_4 = new lib.envelopebubble();
	this.instance_4.setTransform(260.6,92.5,0.395,0.395,0,0,0,44.6,31.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(93).to({_off:false},0).to({regX:44.8,scaleX:0.2,scaleY:0.2,x:357.7,y:34.3,alpha:0.961},31).wait(6));

	// packet
	this.instance_5 = new lib.Bitmap2();
	this.instance_5.setTransform(-48.5,26);

	this.instance_6 = new lib.envelopebubble();
	this.instance_6.setTransform(139.6,92.5,0.395,0.395,0,0,0,44.6,31.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},39).to({state:[{t:this.instance_6}]},21).to({state:[{t:this.instance_6}]},32).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},31).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).wait(21).to({x:260.6},32).wait(1).to({regX:44.5,scaleX:0.2,scaleY:0.2,x:383.6,y:63.5},31).wait(6));

	// Layer 2
	this.instance_7 = new lib.Bitmap2();
	this.instance_7.setTransform(-48.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,10.6,582,365.4);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(99.8,28.4);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(51.3,39,582,365.4);


// stage content:
(lib.media_5126 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(391.3,284,582,365.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;