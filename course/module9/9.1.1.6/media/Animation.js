(function (lib, img, cjs) {

var p; // shortcut to reference prototypes



// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,74);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,50);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,633,376);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:"ID_s1_txt07",width:"121",class:"orangeCallOut",expand:"up",align:"left"});
	//this.text = new cjs.Text("ID_s1_txt07,A:left,W:131,E:u+d,ORANGE", "11px 'Times New Roman'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 100;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,45.1);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("TEXT",{compId:"ID_s1_txt06",width:"108",class:"orangeCallOut",expand:"up+down",align:"left"});
	//this.text = new cjs.Text("ID_s1_txt06,E:u+d,w:131,a:left,ORANGE", "11px 'Times New Roman'");
	this.text.lineHeight = 13;
	this.text.lineWidth = 107;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110.9,30.7);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.Bitmap2();
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


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_459 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(459).call(this.frame_459).wait(1));

	// doc
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(124,227.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({_off:true},95).wait(354));

	// speech bubble
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(70,140,1,1,0,0,0,60,8.5);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(599.5,157.3,1,1,0,0,0,65.5,8.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{alpha:0}}]}).to({state:[{t:this.instance_1,p:{alpha:1}}]},30).to({state:[{t:this.instance_2,p:{alpha:0}}]},258).to({state:[{t:this.instance_2,p:{alpha:1}}]},22).wait(150));

	// envelope6
	this.instance_3 = new lib.envelopeclosedstatic();
	this.instance_3.setTransform(101.9,267.8,0.35,0.35,0,0,0,1.6,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(185).to({_off:false},0).to({x:338.5,y:69.3},52).to({x:482.2,y:127.2},20).to({y:181.7},10).to({x:565.6,y:226.2},12).to({x:565.7,y:248.4},7).to({_off:true},1).wait(173));

	// envelope5
	this.instance_4 = new lib.envelopeclosedstatic();
	this.instance_4.setTransform(101.9,267.8,0.35,0.35,0,0,0,1.6,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(175).to({_off:false},0).to({x:338.5,y:69.3},52).to({x:482.2,y:127.2},20).to({y:181.7},10).to({x:565.6,y:226.2},12).to({x:565.7,y:248.4},7).to({_off:true},1).wait(183));

	// envelope4
	this.instance_5 = new lib.envelopeclosedstatic();
	this.instance_5.setTransform(101.9,267.8,0.35,0.35,0,0,0,1.6,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(165).to({_off:false},0).to({x:338.5,y:69.3},52).to({x:482.2,y:127.2},20).to({y:181.7},10).to({x:565.6,y:226.2},12).to({x:565.7,y:248.4},7).to({_off:true},1).wait(193));

	// envelope3
	this.instance_6 = new lib.envelopeclosedstatic();
	this.instance_6.setTransform(101.9,267.8,0.35,0.35,0,0,0,1.6,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(155).to({_off:false},0).to({x:338.5,y:69.3},52).to({x:482.2,y:127.2},20).to({y:181.7},10).to({x:565.6,y:226.2},12).to({x:565.7,y:248.4},7).to({_off:true},1).wait(203));

	// envelope2
	this.instance_7 = new lib.envelopeclosedstatic();
	this.instance_7.setTransform(101.9,267.8,0.35,0.35,0,0,0,1.6,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(145).to({_off:false},0).to({x:338.5,y:69.3},52).to({x:482.2,y:127.2},20).to({y:181.7},10).to({x:565.6,y:226.2},11).to({x:565.7,y:248.4},6).to({_off:true},1).wait(215));

	// envelope
	this.instance_8 = new lib.envelopeclosedstatic();
	this.instance_8.setTransform(101.9,267.8,0.35,0.35,0,0,0,1.6,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(135).to({_off:false},0).to({x:338.5,y:69.3},52).to({x:482.2,y:127.2},20).to({y:181.7},10).to({x:565.6,y:226.2},13).to({x:565.7,y:248.4},7).to({_off:true},1).wait(222));

	// Cloud
	this.instance_9 = new lib.Bitmap3();
	this.instance_9.setTransform(20.8,34.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(460));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,34.8,643.8,376);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim02 = new lib.animation01();

	this.addChild(this.anim02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10,34.8,643.8,376);


// stage content:
(lib.media_9116 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(350,279.8,643.8,376);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;