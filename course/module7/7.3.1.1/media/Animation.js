(function (lib, img, cjs) {

var p; // shortcut to reference prototypes


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,45);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,457,243);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt05",width:"80",expand:"up+down",align:"center"});
	//this.text = new cjs.Text("ID_txt05,w:80,a:c,e:u+d", "11px 'CiscoSans'");
	this.text.lineHeight = 13;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,127.3,19);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	 this.text = getCJSElement("BUBBLE",{width:"105",compId:"ID_txt04",size:"11" ,align:"left",tailPosition:"5",tailFlip:"0"});
	//this.text = new cjs.Text("ID_txt04,w:105,a:l,t_p:5", "12px 'CiscoSans'");
	this.text.lineHeight = 14;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,20.4);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"80",expand:"up+down",align:"center"});
	//this.text = new cjs.Text("ID_txt03,w:80,a:c,e:u+d", "12px 'CiscoSans'");
	this.text.lineHeight = 14;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,138.5,20.4);




(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	 this.text = getCJSElement("BUBBLE",{width:"105",compId:"ID_txt01",size:"11" ,align:"left",tailPosition:"7",tailFlip:"1"});
	//this.text = new cjs.Text("ID_txt01,w:105,a:l,t_p:7", "12px 'CiscoSans'");
	this.text.lineHeight = 14;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,20.4);

(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt02",width:"110",expand:"right",align:"center",class:"orangeCallOut"});
	//this.text = new cjs.Text("ID_txt02,w:110,a:c,e:r", "12px 'CiscoSans'");
	this.text.lineHeight = 14;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,128.7,20.4);


(lib.Ping = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Bubble_2 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Bubble_1 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


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
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFF4CC","#FFD200"],[0,1],29.2,-23.1,0.4,5.6).s().p("AmUEAIAAn/IMpAAIAAH/g");
	this.shape_3.setTransform(1.5,0.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.6,-26.1,82.1,52.4);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(52.5,35,1,1,0,0,0,52.5,35);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,139.2,20.4);


(lib.packet_2 = function() {
	this.initialize();

	// lazytext
	this.instance = new lib.Symbol6();
	this.instance.setTransform(-0.6,0,1,1,0,0,0,40,8.5);

	// envelope
	this.instance_1 = new lib.envelopeclosedstatic();
	this.instance_1.setTransform(-0.1,0,0.853,0.852,0,0,0,1.5,0.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.6,-22.4,127.3,44.7);


(lib.packet_1 = function() {
	this.initialize();

	// lazytext
	this.instance = new lib.Symbol3();
	this.instance.setTransform(-0.6,0,1,1,0,0,0,40,8.5);

	// envelope
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(-35.2,-22.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.6,-22.4,138.5,45);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_466 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(466).call(this.frame_466).wait(1));

	// Layer 11
	this.instance = new lib.packet_2();
	this.instance.setTransform(423,120,0.5,0.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(306).to({scaleX:1,scaleY:1,x:427,y:126,alpha:1},15).to({x:307},20).to({y:319},30).to({x:134},30).to({y:126},30).to({x:43},20).to({scaleX:0.5,scaleY:0.5,x:39,y:120,alpha:0},15).wait(1));

	// bubble_2
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(382.7,70.9,1,1,0,0,0,52.5,35);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(277).to({alpha:1},0).wait(190));

	// packet 1
	this.instance_2 = new lib.packet_1();
	this.instance_2.setTransform(40,120,0.5,0.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({scaleX:1,scaleY:1,x:44,y:126,alpha:1},15).to({x:141},20).to({y:319},30).to({x:314},30).to({x:314.4,y:126},30).to({x:426},20).to({scaleX:0.5,scaleY:0.5,x:424,y:120,alpha:0},15).wait(216));

	// ping
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(149.3,116.4,1,1,0,0,0,55,8.5);
	this.instance_3.alpha = 0;

	this.instance_4 = new lib.Ping();
	this.instance_4.setTransform(154.3,116.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{alpha:0}}]}).to({state:[{t:this.instance_3,p:{alpha:1}}]},49).to({state:[{t:this.instance_4}]},77).to({state:[{t:this.instance_4}]},5).wait(336));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(126).to({_off:false},0).to({alpha:0},5).wait(336));

	// bubble_1
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(89.9,70,1,1,0,0,0,52.5,35);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({alpha:1},0).wait(453));

	// icons
	this.instance_6 = new lib.Bitmap2();
	this.instance_6.setTransform(6.1,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(467));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.1,35,463.3,309.6);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(100.2,28.4);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(106.3,63.4,463.2,309.5);


// stage content:
(lib.media_7311 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(446.3,308.4,463.2,309.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;