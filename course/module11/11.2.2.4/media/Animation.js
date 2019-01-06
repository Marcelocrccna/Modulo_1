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
p.nominalBounds = new cjs.Rectangle(0,0,80,50);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,22);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_s2_txt03",width:"160",expand:"down",align:"left",class:"orangeCallOut"});
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,147,16.2);


(lib.zrouter_basic = function() {
	this.initialize();

	// shading
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-46.3,0,46.3,0).s().p("AlGC3QgxgUgfgWQg2gogCgwIAAkiQABAoAnAjQAiAeA+AZQCHA3C/AAQC/AACIg3QCCg1AFhKIABEjQgGBJiCA1QiIA3i/AAQi/AAiHg3g");
	this.shape.setTransform(46.3,-23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.153)","rgba(255,255,255,0.102)","rgba(0,0,0,0.102)","rgba(0,0,0,0.2)","rgba(0,0,0,0.4)"],[0,0.431,0.651,0.753,1],-8.2,-22.4,8.3,22.3).s().p("AlGCEQg+gZgigeQgmgjgCgoIAAgCIABgGQAGhJCBg0QCIg3C+AAQDAAACHA3QBZAlAfAtQAOAVACAXIAAAKQgGBKiCA1QiHA3jAAAQi+AAiIg3g");
	this.shape_1.setTransform(46.3,-48);

	// shape
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#237AA7").s().p("AlGEWQiGg2gChMIAAkmIABgGQAGhJCBg0QCHg3C/AAQC/AACIA3QCBA0AGBJIABEwQgGBJiCA1QiIA3i/AAQi/AAiHg3g");
	this.shape_2.setTransform(46.3,-33.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-66.7,92.7,66.8);


(lib.zbox_squaretalltwo = function() {
	this.initialize();

	// shading
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],-16.7,7,-16.7,-4.5).s().p("Ak8BFIAVgQIH7AAIBph5IAAAOIhpB7g");
	this.shape.setTransform(31.8,-12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],-16.7,3.2,-16.7,-8.3).s().p("Ak8AfICWg9IHjAAIhpA9g");
	this.shape_1.setTransform(31.8,-86.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-5.2,0,5.3,0).s().p("AgzEMIBnh9IAAgPIhnB8IAAnKIBnhzIAAHQIAAAwIhnCDg");
	this.shape_2.setTransform(58.3,-32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],-16.7,5.8,-16.7,-5.7).s().p("Ak8A5IAVgQIH7AAIBahhIAPAAIhpBxg");
	this.shape_3.setTransform(31.8,-58.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-5.2,1.2,5.3,1.2).s().p("AgzhtIBng/IAADmIgPAQIhYBjg");
	this.shape_4.setTransform(58.3,-72);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.012)").s().p("AkIGfIAAg3IIRAAIAAA3gAkIhyIIRAAIAAHKIn8AAIgVAQgAjziCIgVAAIAAkbIIRAAIAAEbg");
	this.shape_5.setTransform(26.5,-41.5);

	// shape
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#237AA7").s().p("Ak8G+IAAg2IAVgQIgVAAIAAnKIAVgQIgVAAIAAkcICWg/IHjAAIAADoIgPAQIAPAAIAAHBIgPAPIAPAAIAAAwIhpCDg");
	this.shape_6.setTransform(31.8,-44.7);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-89.3,63.5,89.4);


(lib.Symbol = function() {
	this.initialize();

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.502)").s().p("AjYA5IAYAKICOg7IA2AXIAAAAIgKAFIgsgSIiOA7IgYgKIg7A6IgLACgACwA9IAAgKICLA8IgMAFgAiHBkIgBAAIAAgBIABgJIAWAKIgRADIgFgDgAAmAcIgKgMICrAaIgSAHgAgmgJIg2g6IgZAKIhUgjIg3gXIgCgBIgsATIgMgFIA4gYIACABIA3AXIBUAjIAZgKIBCBFgAAAgRIAAAAICOg6IAAAJIgBABIiCA1gAjFghIAWgKIAAAKIgFADgACBhRIgLgFICugbIgMAMIiRAWIgGgCg");
	this.shape.setTransform(0.3,-0.5);

	// foreground
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEBCCIg4gXIhTgjIgZAJIhBhFICrAaIgXAJICLA8Ig4AXgAjYA1IAYAKICOg7IA2AXIAAABIiMA6IAAAAIABAAIALAFIALAFIitAbgAAAgVIAAAAICNg6IABAAIgBgBIgMgFIgLgEICugbIhHBGIgXgKIiPA4gAjFglIAWgJIiLg8IA4gYIACABIA3AXIBUAjIAZgJIBCBFg");
	this.shape_1.setTransform(0.3,-0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.3,-13.2,63.1,26.2);


(lib.questionMark_red = function() {
	this.initialize();

	// details
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("AAcgHQgLgIgRgBQgPAAgKAIQgKAHgNAZIAAAAIAAgCQABgUAOgLQAOgOATAAQAVAAAOAOQANALABAUIAAACIAAAAQgKgYgLgHg");
	this.shape.setTransform(-0.5,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.502)").s().p("AgKDZQgOgMgBgVQANAaALAGQAJAGAOAAQAOAAAMgHQAKgGANgZQgBAVgNAMQgPANgUAAQgTAAgNgNgAgIBRQgJgIgCgNQAEAKAGAFQAJAMARgBQAgABAGgjIAFgXIAGgNQACgFAIgKQAIgHAJgIQAGgGAZgQIgbAYQgLAKgHAHQgHAJgDAGQgEAGgCAIIgFAXQgGAjghAAQgSAAgJgLgAh7h0QALADALAAQAgAAALgoQAMglARgTQATgVAjAAQARABAIABQAYAFAVATQAKAIADAKQAEAHAAAOIgBAHIgCAGIAAABIAAgHQAAgcgUgSIgNgKQgGgFgXgEQgOgDgXAEQgTACgQAOQgPANgPAtQgMAoghAAQgKAAgNgIg");
	this.shape_1.setTransform(-2.8,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.251)").s().p("AgwCkQABgYAKgVQAIgVAPgQQAOgQAZgWIAfgdQAKgKAKgPQALgSgDALQgDAKgNARQgOASgXAUQgXATgMAOQgOAOgIANQgIANgHAhQgEATgCAAQgBAAAAgJgACKAsIAQgYQAKgUAAgcQAAgUgFgTQgGgPgIgNIgKgNQgUgWgbgNQgOgHgMgDIgQgEQgVgEgWAAQgWAAgYAFQgYAGgSAKQgnAWgUAgIgHAOQgNAZAAAZQAAAKAHAKQgMgMAAgLIAAgDQAAgZAMgZIAIgQQAVghAogXQAogWAzAAQAjAAAeAKIAXAJQAfAOATAYIAJAMQAGAKAGAOQAIAUAAAYIAAADQgBAdgKASQgKASgLALIgFAHIgDACIgEAEg");
	this.shape_2.setTransform(-0.1,-8.1);

	// shading
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.102)","rgba(255,255,255,0.153)","rgba(255,255,255,0.251)","rgba(255,255,255,0.2)","rgba(204,204,204,0.259)","rgba(0,0,0,0.502)"],[0,0.141,0.267,0.525,0.667,0.886,1],-20.8,18.3,28.7,-9.3).s().p("AglC5QgNgMAAgXQAAgeAJgWQAKgWAPgPQAPgRAYgWIAggcQAKgKAHgMQAHgNAAgOQAAgdgVgSQgVgUghAAQglAAgSAUQgSATgNAmQgMAnghAAQgUAAgNgNQgOgOAAgQQAAghAVgjQAWgiApgWQApgXA1AAQAzAAAnATQAnASAVAhQAVAgAAAmQAAAegLAXQgNAUgQARIg8A3QgMAKgHAIQgIAJgDAHQgEAHgCAGIgGAYQgGAlghAAQgTAAgMgMg");
	this.shape_3.setTransform(0,-6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.102)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(255,255,255,0.2)","rgba(204,204,204,0.259)","rgba(0,0,0,0.502)"],[0,0.141,0.267,0.525,0.667,0.886,1],-20.4,-9.9,29.2,-37.5).s().p("AgjAnQgQgOAAgXIAAgCIAAgBQAAgVAOgOQAQgPAVAAQAWAAAPAPQAPAOAAAVIAAABIAAACQAAAXgPANQgQAOgVAAQgTAAgQgNg");
	this.shape_4.setTransform(-0.5,22);

	// mask
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E31C23").s().p("AgoD8QgQgOAAgZQAAgWAPgPQAQgPAWgBQAVABAPAPQAPAPAAAWQAAAYgQAOQgQAOgTABQgVAAgQgOgAglB0QgNgLAAgYQAAgdAJgWQAKgWAPgOQAPgRAYgWIAggdQAKgKAHgNQAHgNAAgOQAAgcgVgTQgVgUghABQglgBgSAUQgSAUgNAlQgMAoghAAQgUAAgNgOQgOgOAAgQQAAghAVgiQAWgjApgWQApgWA1AAQAzgBAnAUQAnASAVAgQAVAgAAAmQAAAegLAXQgNAWgQARIg8A1QgMAKgHAJQgIAJgDAGQgEAHgCAHIgGAYQgGAlghAAQgTAAgMgNg");
	this.shape_5.setTransform(0,0.7);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.6,-25.9,35.2,53.2);


(lib.NotAllowed = function() {
	this.initialize();

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E31C23").s().p("AiwCwQhJhJAAhnQAAhmBJhKQBKhIBmgBQBnABBJBIQBJBKABBmQgBBnhJBJQhJBKhnAAQhmAAhKhKgAjXAAQAABZA/A/QBABABYAAQBOgBA7gxIkvkuQgxA6AABOgAiJilIEuEvQAzg7AAhPQAAhYhAhAQg3g2hJgIQgNgBgLAAQhOAAg7Ayg");

	// shadow
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai1C1QhLhLAAhqQAAhpBLhLQBMhMBpAAQBqAABKBMQBNBLAABpQAABqhNBLQhKBMhqAAQhpAAhMhMgAjSABQAAAsAQAkQAPAiAgAgQBAA/BTAAQAnABAegLQAdgKAdgYIkkklQgtA1AABLgAhFjIQggALgcAYIElElQAYgcALggQAKgfAAgmQAAgsgOgjQgPgkgfggQg4g2hEgGQgPgCgKgBQglAAggALg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.7,-25.7,51.5,51.5);


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


(lib.envelopeattackpacket = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-40,-25.2);

	// outer line
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000002").s().p("AmUEFQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAoBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAIMcAAIABAAIAMAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAIBQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAgAlwDGIAAABQgTAagIAaIMWAAQgIgagTgaIAAgBIiTjyIgDABQgkAZggASQhSAqhCACIgCAAQhEgChSgqQgggTgkgZIgCgBgADkgyICUDzQAPAWAJAWIAAnoIgEAAQgJBAgaAYIAAAAQhFBDhAAugAmPDpQAIgUAPgUICUj0Qg/guhFhCIAAAAQgagYgJhAIgEAAgAAAAiIACAAQBAgCBPgoIgBAAQAigTAigYIAHgEQBAgvBHhEQAXgXAKg6IsEAAQAJA6AXAXQBHBDBAAvIAGAEQAjAZAhASIAAAAQBPApBBACg");

	// color
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CC7F7F","#AE3333"],[0,1],29.1,-23.1,0.4,5.6).s().p("AmUEAIAAn/IMpAAIAAH/g");

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-26.2,82.1,52.4);


(lib.arrowgreen = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(101,44,138,0.902)").s().p("A17CWIAAkrMAnNAAAIAAABIErCZIAAADIkrCOg");
	this.shape.setTransform(64.2,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.3,-15,281,30);


(lib.Arrow = function() {
	this.initialize();

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAAIgiggIBiAgIhiAhg");
	this.shape.setTransform(5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.3,10,6.7);


(lib.seatedMan_at_desk = function() {
	this.initialize();

	// chair back
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AojsoQAjgaAtgRQACgBADgBIAKgEQADgBADgBQCOg2BgAAQBiABByAcQCZAoCVBVQBvA+A6BuQBrDNAgDPQAiDZABDTQABDShYBPQhYBOjTACQgDAAgCAAQhHAEhZgEQhfgFhSgIIAgoRIBaAKIgfjZIhAAkIAJCTIlngqIAOiHIgQgmIgWDEIAYgXAojsoQB0heBhgYQBigYDTATQDQATChBuQCVBmBVCjQBnDFAiEbQAjElgvCnQgNAugTAlQgzBiiTApQh3Afh7ACQidABibgZIgREcIhCATQgEACgHABQgvAGiWg2IAOjnAmgIoQgpgLgjgPQiEg4gzhsQhBiKANmXQAHjHApjOQAdiRBnhLAm+tbQC/hADbBCQBwAhBzBCQDGByA0CEQBqEKAWFpQAJFChOBlQg4BIi1AMAj5heQAZABAQAIQAHAEAEAEQARARAAAXQAAAXgRAOQgQAQgXAAQgDAAgNgBQgCAAgBAAQgCAAgCgBQgTgCgOgMQgQgQAAgXQAAgXAQgQQARgQAXAAQABAAACAAQAbAHAJAJQAQAQAAAXQAAAXgQAQQgIAGgPAEQgKADgNABAlbHYQgXAFgSAWQgSAXgDAgAk+HZQgHgCgIAAQgHAAgHABAlIKaQAdgDAUgaQAXgcAAgpQAAgogXgdQgPgUgVgGAk6HZQBAAHAPATQAXAdAAAoQAAApgXAcQgUAahJADQgDAAgCAAQgOAAgLgFQgRgHgNgRQgWgcAAgpQAAgHABgHAhtBJIA+AHAAMh/ImgggAlBAxIgaGnAlBAxIDUAYAmqAlIBpAMAg0hbIlQgeAgrA4IBWAiAhPJhIgCAZAikOpIA3tg");
	this.shape.setTransform(73.5,241.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-32.3,11.9,7.8,1.1).s().p("AgHBDQAUgcAAgnQAAgogUgdQgQgUgUgGIAAAAQA/AHAPATQAWAdAAAoQAAAngWAcQgVAahGADQAcgDAVgag");
	this.shape_1.setTransform(46.3,298.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-51.4,33.2,19.1,-7.5).s().p("AgCmvIA8AHIggIPIgCAaIgREcIhAATg");
	this.shape_2.setTransform(62.8,291.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#4B4E4D","#0C0705"],[0,1],23,39.7,-22.8,-39.6).s().p("AiCGMIAOjnQAMAFANAAIAGAAQBIgCATgaQAWgdAAgoQAAgpgWgcQgOgRhAgHIgBAAIgCgBQgIgCgIAAQgHAAgHACIAamoIDSAYIg2NfQgFACgHABIgKABQg0AAiFgyg");
	this.shape_3.setTransform(49.3,290.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#4B4E4D","#0C0705"],[0,1],-2.3,-4,0,-2.3,-4,15).s().p("AAABhQgMAAgLgFQgRgHgNgQQgXgdABgoIAAgMIAAgBQAEggASgWQASgXAXgEQAHgCAFAAQAHAAAIACIADABQAVAFAPAVQAXAcAAAnQAAAogXAdQgVAZgcADIgFAAg");
	this.shape_4.setTransform(40,298.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#4B4E4D","#0C0705"],[0,1],0,0,0,0,0,23.9).s().p("ACOAbIg+gHIjRgWIhpgMIAYgXIFlAoIBYAjg");
	this.shape_5.setTransform(54.3,246.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-19.7,0.1,4.3,0.1).s().p("AADhhIAPAlIgOCHIgVAXg");
	this.shape_6.setTransform(32.6,235.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-3.1,4.9,5.2,-26.4).s().p("AjAADIgPgjIGfAfIhCAig");
	this.shape_7.setTransform(53.8,228.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-6.5,-0.6,3.3,-0.5).s().p("AgmBLIgJiTIBAgkIAfDZg");
	this.shape_8.setTransform(73,239.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#4B4E4D","#0C0705"],[0,1],-1.8,-1.6,0,-1.8,-1.6,8.6).s().p("AgmAnQgQgQAAgXQAAgVAQgRQARgQAVAAIADAAQAaAHAKAJQAQARAAAVQAAAXgQAQQgIAIgPAEQgKADgLABQgTgCgOgOg");
	this.shape_9.setTransform(48.1,237.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-6.3,-0.3,5.7,2.9).s().p("AgfA3IgCgBIgFAAQAOgBAKgDQAOgEAGgIQAQgQAAgWQAAgWgQgRQgHgJgbgHQAaACANAIQAHADAEAFQARAQAAAVQAAAXgRAQQgQARgUAAIgRgBg");
	this.shape_10.setTransform(51.4,237.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4B4E4D","#0C0705"],[0,1],20.9,-0.9,-38.5,-0.9).s().p("AiyAvIAOiHIFOAeIAJCTgAhEgtQgQAQAAAYQAAAUAQAQQAOAPATACIAEAAIADABIAQABQAVAAAQgRQARgQAAgVQAAgXgRgRQgEgEgHgDQgOgJgZgBIgDAAQgXAAgRAQg");
	this.shape_11.setTransform(51.1,238);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-54.8,0,54.9,0).s().p("AGOKsQBOhlgIlCQgXlphpkKQg0iEjHhyQhxhChyghQjahCi/BAQCOg2BfAAQBjABBzAcQCXAoCWBVQBuA+A6BuQBsDNAgDPQAiDZABDTQABDShZBPQhXBOjUACQC1gMA4hIg");
	this.shape_12.setTransform(83.6,226.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#4B4E4D","#0C0705"],[0,1],69.4,21.8,-82.8,-19).s().p("ACyL0QhfgFhTgIIAfoRIBcAKIgfjbImggeIgWDEIBpAMIgaGnQgXAFgSAWQgSAXgDAgIgHgCQgpgLgjgPQiEg4gzhsQhBiKANmXQAHjHApjOQAdiRBnhLQAjgaAtgRIAFgCIAKgEIAGgCQC/hADZBCQByAhBzBCQDGByA0CEQBqEKAWFpQAJFChOBlQg4BIi1AMIgFAAQghACgmAAQgqAAgvgCg");
	this.shape_13.setTransform(65.5,227.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#A04E4E","#512926"],[0,1],-56,-14.6,67.5,18.5).s().p("AisMIIACgaQBUAIBdAFQBZAFBHgEIAFgBQDTgBBYhOQBYhPgBjTQgBjSgijZQggjPhrjOQg6huhvg+QiVhUiXgoQh0gdhiAAQhggBiOA2IgGACIgKAEIgFACQgtASgjAaQB0hfBhgYQBigYDTATQDQATChBvQCVBmBVCjQBnDEAiEZQAjEngvCoQgNAugTAkQgzBjiTApQh3Afh7ABIgSAAQiSAAiUgXg");
	this.shape_14.setTransform(82.6,227.2);

	// pants shading
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#BBBBBB","#4D4D4D"],[0,1],-0.1,-9.6,-0.1,1.2).s().p("Ag9AWQiPgWhoAAQCLggDBAXQCMAPCRgjQhcAshnALQgiAEgkAAQgyAAg3gIg");
	this.shape_15.setTransform(228.5,307.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#BBBBBB","#595959"],[0,1],10.7,17.1,-0.9,-3.1).s().p("ABLhFQAZgPAKgPQAMALgMAVQgSAcgyAbQhcAwhBBAQAzhbCLhOg");
	this.shape_16.setTransform(175.9,264.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#BBBBBB","#595959"],[0,1],22.9,6.5,-2.4,-0.3).s().p("AgUBQQgBhnAVhTIACgVQgEBPAPBQQASBTgVALQgDACgDAAQgOAAgKgwg");
	this.shape_17.setTransform(189.3,272.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#BBBBBB","#515151"],[0,1],-11.1,-31.6,-4.4,18.3).s().p("Ag5B7QhKgGhTADQhTADgSgZQBOAOBOgfQBQghCDghQBvgYASg4QAJggghgbQBsBCAnA7QA1BkirAOQh5AKhGAAQgeAAgWgCg");
	this.shape_18.setTransform(271.7,300);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#8C8C8C","#3C3C3C"],[0,1],111.7,-6.8,4.9,54.8).s().p("ABAFtQkQgEkSg8ICdolIFfgJIABhDIARgVIAVAJIgCBNIBAgFQA2gEBVgLIBTgNIABg9IAggLIgBBBQAogKAegMQAsAfhHAmQhIAmi+ANQAfB8gkCSQglCchaAeQACAxA1AKQCuAmDfgWIABAAQjCAji7AAIgmAAg");
	this.shape_19.setTransform(136.7,275.2);

	// shirt shading
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#A573C8","#402156"],[0,1],-36,-60.5,18.7,34.2).s().p("Ai4BzQByA6BhgJQA/gGAWhGQAuiQgQisQA/CYgdCnQgMBEguAqQgWAbg8ABQidgFg/htg");
	this.shape_20.setTransform(220.1,215);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#A573C8","#402156"],[0,1],-11.4,-27,6.2,14.8).s().p("AioBqQhAgegmgqQB9AxB9gMQB7gLBhhQQA2gtAEhDQAeBpgrBEQghAziSAdQg6AMgwAAQhKAAg2gbg");
	this.shape_21.setTransform(158.1,229.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#A573C8","#402156"],[0,1],-0.3,15.2,-0.3,-5).s().p("AA1AcQhxgPhlgrQDLAtB4gRQgQAhg3AAQgRAAgVgDg");
	this.shape_22.setTransform(149.1,221.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#A573C8","#402156"],[0,1],-9.6,0,17.9,0).s().p("AgYkBQA4AtAODNQAKCUhlB1QA8kJgnj6g");
	this.shape_23.setTransform(112.2,157.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#A573C8","#402156"],[0,1],9.6,0,-17.9,0).s().p("AgegfQgHigA9hGQgXCmAeFlQg1iGgIifg");
	this.shape_24.setTransform(93.3,153.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#A573C8","#402156"],[0,1],-4.3,22.1,5.1,-13.3).s().p("Ag5gKQhvg1iYAvQA1gyBGgGQBHgHBpAmQA0AVBVAkQBVAlB4AVQkNghhtgzg");
	this.shape_25.setTransform(135.3,86.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#A573C8","#402156"],[0,1],7.3,7.6,-2.4,2).s().p("Ag4BlQAvg3Aog+QApg/AChjQAMBCgBA1QgBA2gWAZQgVAbgyAoQgzAngLA1QgggWAvg4g");
	this.shape_26.setTransform(209.5,178.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#A573C8","#402156"],[0,1],4.6,8.8,-1.9,-2.5).s().p("AgFgDQBRglAUguQAKAegLAQQgRAYgvARQhaAlgpAxQAKg0BVgmg");
	this.shape_27.setTransform(204.5,158.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#A573C8","#402156"],[0,1],26.5,-5.8,-17.1,9.3).s().p("ABHFfQgagIgMgPQgxgqgRiWIABgBQgOhNAIhIQg4hcgIhpQgHhNAMhRQAYDNAnBCQAmBCAFBRQAGBTAxBcQAxBbgIA3QgMgPgWgEg");
	this.shape_28.setTransform(186,182);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#A573C8","#402156"],[0,1],7.7,2.5,-15.1,-3.6).s().p("AgngqQAPhKBLgUQhTB6gGCXQgXhPAWhkg");
	this.shape_29.setTransform(194.8,141.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#A573C8","#402156"],[0,1],-60.4,-47,28.8,19).s().p("AjkGaQB6gIBrggQBtghAmheQAahAgjhDQgphLAOh9QATivBbiqQgqBqgQBhQgMBSAHBMQAIBnA4BdQgIBKAOBNIgBABQgXA0gVARQhRBEhgAOQgpAHgpAAQhQAAhJgYg");
	this.shape_30.setTransform(159.7,168.1);

	// hair hilites
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#4B4E4D","#0C0705"],[0,0.588],0.3,-0.9,8.4,13.2).s().p("AAUAXIgBgFQgMgUgKgIIgWgPQAcgDAQAcQAHALAAAPg");
	this.shape_31.setTransform(137,3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#4B4E4D","#0C0705"],[0,0.588],3.7,-6.4,-5.2,26.8).s().p("AglgHQgOAAgGAbQgLhJArgmQgFASAIAbQArgyAngHQhTBpgCBmQgMgvAAhAg");
	this.shape_32.setTransform(116.4,30.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#4B4E4D","#0C0705"],[0,0.588],0.7,-3.5,0.7,25.5).s().p("AAfAAQg+ANgwA7IADgUQAYgrA2gZQgGgSglASQAagsBAgLQgRAfAlgFQAcA4grAwQgFAGgeAHQAihAgWgIg");
	this.shape_33.setTransform(124.7,9.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#4B4E4D","#0C0705"],[0,0.588],-6.7,-6,13.2,13.9).s().p("AhUgfQAPgTAxgDQgVgSgtACQAQgIASgGQBBgZBKBIQgogMgPAMQAgBDgUA8QgrhihVgYg");
	this.shape_34.setTransform(151.5,14.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#4B4E4D","#0C0705"],[0,0.588],-5.4,-8.9,9.8,17.5).s().p("AggCEQhVgzAniBQAAAYAdARQgDhGAagMQAGApAbgVQAdgVgWgpQAfAMASAYQATAXAFAUQAFATgBAlQgPgqgZgGQAUA9gSAyIgFAAIgsg3QgYApgGA+IgBARg");
	this.shape_35.setTransform(135.2,28.8);

	// hair
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#4B4E4D","#0C0705"],[0,0.588],-28.6,-31.7,19.6,16.5).s().p("AhME6QgQgEgOgLIhdAUIgTgMIgIgCQgggggPgsIgPgsIgBgCQgFAFgDAHQgYglAJgsQAFgbgFgZIgUAEIgIgCQATiaAsg2IgHgMQAIgmAegRQAZgPAOgbIAAgCIgJgJQA+gtBCgQQBCgRAiAfQAEgFAFgEQAdgVAgAQIAFAJQAlgIAmANQAmANA9AzQAKAUgUAAQA0AhAaA3QACADAAADIgNAAQAgBYgOBjIgQgFQALAvgZAmIgGgIQAAgGgHgEQgHgEgJAAIgWABQgcAggDAsIgBAGQgIA6gbAmIgDgBQgLgJgFgRQgkAngvAYQgWANgRgUIgQANQg0gZg3AGg");
	this.shape_36.setTransform(139.6,31.6);

	// man
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-3.5,0,3.5,0).s().p("AghgMIAjgPQATgIAOgOIAABOQgfAMgmAJg");
	this.shape_37.setTransform(178.4,240);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-14.3,0,14.4,0).s().p("AiNgcQAcAJAcACQBxAIBzgkIgBA7QhwAWisAKg");
	this.shape_38.setTransform(157.5,244.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#BBBBBB","#595959"],[0,1],52.4,-27.5,31,52).s().p("AG/FXQhVAKhcgOQjygliBAZQjVAnjOgEQkRgEkSg8ICcolIABAAIAggEIAFAAQCwABCLgGIABhDQAQgIAIgJIANAFIABAAIgBBNQCugKBvgXIACg9IAfgLIAABBQAogKAegMQA9ALgFBTQAAAJgGAJQAjgDgJA4ID5AtQG2BLDtCAQCYBTAwBLQgzAKiFA0QiFAzhAAEQg/ADhQABIgGAAQhLAAgQgZg");
	this.shape_39.setTransform(195.3,275.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#B991D5","#5C2F7B"],[0,1],-79.3,-53.8,75,35.2).s().p("ADBKCQjIACg8iQQgTgug9gYQhLgdgVi2QgFglgCgsQgCgfAEgmQhui3BCj5QBBj5B4gdQAhAwBPB/QBQB/gPBnQAiAsADDOQASAQAUAPQB3BYAZBcQA5DJg5CGQgvBSgtAAIgEAAg");
	this.shape_40.setTransform(207.1,173.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#B991D5","#5C2F7B"],[0,1],-49.1,1.7,32.7,1.7).s().p("AEnCNQiFgZhzg5QjmhwiHBtIgDgBQAqikBfgbQApgMA0ADQCXAHC7DCQAUAWA3BFIgbgGg");
	this.shape_41.setTransform(135.2,78.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#B991D5","#5C2F7B"],[0,1],-54.2,-9.8,100.3,31.6).s().p("AEwMwQgcgCgbgJIgBgBIgNgEQhCgchBhHQiRihiYh2IpJlHIBynsQBNjLBmgZQBngZBJgcQBJgbBUg2IADgDQCHhvDmByQBzA5CFAaIAbAFQEDA6AdBkQh4AdhCD5QhBD4BtC4QgDAmACAgQACArAEAmQgcBtAjBRQAaA9gJBCQgGAwgYAbQgOAOgSAIIgmAPIggALQhfAdhfAAIgogBg");
	this.shape_42.setTransform(118.3,160.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#976E3A","#623E26"],[0,1],-27.1,0.6,27.1,0.6).s().p("AixAKQgzgCgqAMIACgvQAcAOAlgGQArgIAsAOQAtANAvADQA+ADA5gaIACgBIBNhPIACgFQAFBJAOAxQAIAaARgCQAMgCACgjQgMgsADgtQADgyANgmQAJgWgPgHQARgcAIAsQAGgEAFgHQgYAzAMA/QAQBTgVA7QgfBkg+A3Qi5jEiZgIg");
	this.shape_43.setTransform(143.8,63.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#976E3A","#553622"],[0,1],-6.7,-0.6,1.7,-0.6).s().p("AgMBiQgPgzgEhGQABgGgCgFQACgFgEgTQgDgTAYgVQAFgXAOgBQAKgBAJADQAPAHgIAWQgNAlgEAzQgDAqAMAuQgCAkgMACIgCAAQgNAAgHgZg");
	this.shape_44.setTransform(164.7,55);

	// chair base
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("AK2C6QgFALgEANQgLApAIAhQAHAcASAIIABABQACABACAAIgBAAQgSAAgKgEIgGgDQgMgIgJgcQgIgcAPgwQAOgqARgSAMUD6QABgFACgGQACgGABgGAL4EtQgCABgBACQgRASgRABQgDABgDgBQgDAAgDAAALIFCQACABADAAAsIiXQAAgBABAAQASgFANgRQAUgZAAgjQAAgkgUgZQgTgXgdgFQAeADACAAQAcAAAUAZQAUAZAAAkQAAAjgUAZQgUAagcAAQgCAAgQgBAsYlDIgBAAAAgiiQkrAjlFCiQgKAFgKAFQg6AcgnggQgBAAgBgBQgMgMgCgMApQBCQAagYAjAAQAnAAAbAcQAcAbAAAnQAAAmgcAcQgLAMgOAG");
	this.shape_45.setTransform(101.3,485);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("Aur8gQADgBADgBAuImcQAEABADABAsinrQgBgBgCAAAo9AhQBBANBFAMQBRANBXALQiBCQhSAXQgOAEgMACQgEAAgEABQiBAnhug5Qhkg2gEjaApIgfQAEAlAHAbQARBBAjgDQAkgBAugkApJguQAAAIABAHQBxAjE2ARQE1ARDYg/IKxjQQA4gQAQgVIgKBeQgHBDiTAwIm9CNQixA+kNgcQgMgBgMgBQAYA4gKFtQhzA2hjg/QAPlpAdg/IAAAAQhTgIhOgKAtZhxQhJgfgxg2QhThzBTh9AtbhJQgBAUABATIgsgXQhQgoAEhlAoEEAQiKALADkmAAuBwQhPgFhNgHAhuBkQBCA1BagpADYoyIDLAyQC2AoDCgFQB0gKBwAsQBwAsgBBoQAAANgJAMAJsX9QgDAMgVAIQgxAWgqglQk7kSjWhVQhSgghLAZQk4BnlEDAQg6AbgngfQgCgCgCgCQgKgKgCgMQgCgRASgTQCPhkDxh6QBNgnB5gyQAsgWgxgLQmAgalXAPQg4ABgNAmQgHhIB+gOQF6gpGtAcQAAARAAATQBrBUCghHQABgQABgPQHKAkGZBVQCEAfAGApIgFAyQgBAUgVAFQAMAAAMAKIgPCpQgVAKgPgRIAFg2IALh0QAGgBAFgBAJsX9IgBAiQAAAIgFAIIAAAyQAPgGAWACQAHgBAGACQAWAGAIAhQAIAhgLAoQgLAogXAZQgRASgRACQgDAAgDAAAFCTkQCLBzCYCPQAIAKAAAIQAAACgBADAQFT6QgQABgYgEQgZgDgagDIAAAAQgSgDgSgCIgPCnQgZhMAnhbQktgikWAaAOqTxIgFA7IgLBvQgGABgFABQgMAAgMgKAOqTxIAAAAAOqTxIAAAAAQrStQgQAXg6gMQoVhwj6gHQhhgCAwAkQBOA8BTBFAQoUCQAZBNgoBcAP6VuQgwAZgqggIAFg7AKLZdQgFABgEACQgMAFgLAMQgUAVgKAgQgCAGgCAGQgBAGgCAFQgHAiAHAcQAHAdARAIIACABQACAAABABIAAAAQgSgBgKgEIgGgDQgMgIgJgcQgBgDgBgDQgBgIAAgKQABgWAJgdQANgnAOgSQAEgFADgDQAIgGAJgDAHoZDQAGADAGACQAKAEAJADQAfAIAYgLQABAAAAAAQAegOAJgPAIpbeQgvAHgSghIAAhHIAAgrIAAgPQgOgIgRgLQlDjfidgoQhKgThKAJAJkciQACAAADABQgDAAgDAAAvBRrQgRANgUAGAwVSHQAAAAABAAQAFgBAEAAQAGAAABAAQAcAAAUAcQAUAcAAAnQAAAngUAcQgBABgBABQAAAAAAABQgBAAAAABQgTAYgaAAQgCAAgcAAQAagBATgbQAVgcAAgnQAAgngUgcQgOgTgSgIQgBAAAAAAgAwWSHQgFgBgFABQgCgBgCAAQgCAAgCABQgaABgSAaQgFAGgDAHIAAg4QgIgDgJgEIAAgzAwWSHQAAAAABAAAvmR+QgSAHgUABQgFAAgFAAQgCAAgBAAQABAAACABAwZSGQgEAAgDgBQgdgCgfgMAwiVEQgBAAgBAAQgCAAgCAAQgagCgSgaQgUgcAAgnQAAgfAMgXAtqZ3QgagHgQgkIAAhgIAAgBAuiXTQAAgEAAgDIAAgvAxtRwQBRgHBbACAsdXmIAAAfIAAAXQAIgBAJAAQAmAAAcAbQAbAcAAAmQAAAVgIASQgHAPgMAMQgcAcgmAAQgnAAgbgcQgcgbAAgnQAAAAAAgBQABgmAbgbQALgLAOgHQALgGANgCAoSSbQjugsjBgEAjPPaQAEnKAxgEAA8IVQApgCgnHZ");
	this.shape_46.setTransform(121.8,337.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#4B4E4D","#0C0705"],[0,1],-3.3,-3.4,0,-3.3,-3.4,14.8).s().p("AhBBBQgbgbAAgmIAAAAQAAglAbgbQAMgMAOgHQALgFANgCQAIgCAHAAQAmAAAcAcQAbAbAAAlQAAAVgIARQgHAPgMAMQgcAcgmAAQglAAgcgcg");
	this.shape_47.setTransform(43.6,503.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-7.7,0,7.8,0).s().p("AAgAyQAAgngbgZQgZgcgnAAQgJAAgIACIAAgYQAagXAkAAQAkAAAbAbQAcAcAAAkQAAAngcAbQgLAMgOAGQAIgRAAgVg");
	this.shape_48.setTransform(49.7,498.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-5.9,0,6,0).s().p("Ag6AdIAAheIACAAQAnAfA4gbIAUgKIAAAeIAAAYQgNACgLAGQgOAGgLAKQgZAbgBAmQgagHgQgkg");
	this.shape_49.setTransform(36,495.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-8.3,9.4,5.3,9.4).s().p("AAAAAIAAAAIABAAg");
	this.shape_50.setTransform(17.1,453.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-2.9,0,3,0).s().p("AgcgaQAdAMAcACIAAABIgEAAIgEAAQgXACgTAXIgHANg");
	this.shape_51.setTransform(13,454.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#4B4E4D","#0C0705"],[0,1],-2.3,-3.3,0,-2.3,-3.3,13.2).s().p("AgCBeQgagCgSgaQgUgbAAgnQgBgdANgYIAIgNQASgZAagCIACAAIAEAAIAKAAIACABQASAHAOATQATAcABAmQAAAngVAcQgTAagaABIgCAAIAAAAIgCAAg");
	this.shape_52.setTransform(15.6,462.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-4.8,0,4.9,0).s().p("AgSBeIgdAAQAagBATgaQASgcAAgnQAAgmgSgcQgOgTgRgHIAAgBIAIAAIAHAAQAaAAAUAbQAUAcAAAmQAAAngUAbIgBACIgBABIgBABQgTAYgYAAIAAAAg");
	this.shape_53.setTransform(20.7,462.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-8.6,0,8.6,0).s().p("AAAANIgBAAIgHAAQgcgCgfgLIgRgGQBQgIBZACQgRAMgTAGIAAAAQgTAGgTABIgIAAIgDAAg");
	this.shape_54.setTransform(16.9,452);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-5,0,5,0).s().p("AgiBWIABgBIAAgCIACAAQASgFANgRQASgZAAgjQAAgigSgZQgTgXgegFIAhADQAaAAAUAZQAUAZAAAiQAAAjgUAZQgUAagaAAIgSgBg");
	this.shape_55.setTransform(26.9,461.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-5.3,0,5.3,0).s().p("AACBUQAUgcAAgnQAAglgUgcQgSgcgcAAIgHAAIgBgBQAUAAASgHIABAAQAbAFATAXQAUAZAAAiQAAAjgUAZQgNARgSAFg");
	this.shape_56.setTransform(23.4,461.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-41.1,0,41.1,0).s().p("AjuAUQhbgBhQAHIAAgxQAMgmA5gCQFUgOGAAaQAyAKgsAWQh6AxhNAnQjsgtjBgEg");
	this.shape_57.setTransform(49.4,448.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-4,0,4,0).s().p("AgBBEIgFgBIgBAAIABAAIgDgBIgCgBQgSgIgHgdQgHgeALgpQADgNAFgLIAABFQARAhAugHQgBAJACAIIgDADQgRATgQABIgEAAIgBAAgAgHBDIgCgBIADABgAgHBDg");
	this.shape_58.setTransform(173.2,510.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-2.9,0,3,0).s().p("AAABUQAKAEASABIABAAIgBABQgSgBgKgFgAAABUIgEgDQgMgIgJgcQgIgcAPgtQAOgrAOgSIAAArQgEAMgEANQgJAmAHAhQAGAdARAIIACABIADABQgSgBgKgEg");
	this.shape_59.setTransform(169.6,508.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-6.3,0,6.3,0).s().p("Ag9A9IAAhGIAAgrIAAgPIALAGIATAGQAfAJAWgLIABgBQAegOAKgPIgBAyQgJADgIAHIgHAHQgOASgNAlQgJAegBAWIgNABQgjAAgOgbg");
	this.shape_60.setTransform(177,504.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#4B4E4D","#0C0705"],[0,1],-1.6,-2.4,0,-1.6,-2.4,12.5).s().p("AgUBiIgFgBIgBAAIABAAIgDgBIgCgBQgRgIgIgcQgGgdAHgfIADgMIADgLQALghATgVQAMgMAJgEIAKgDQAGgBAHACQAWAFAHAhQAIAhgLAnQgKAogYAZQgRASgOABIgDAAIgEAAgAgaBhIgCgBIADABgAgaBhg");
	this.shape_61.setTransform(185.6,510.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-4.9,0,4.9,0).s().p("AgSBdQALAEAPAAIABABIAAAAQgQAAgLgFgAgSBdIgGgDQgMgIgIgcIgCgHQgCgIABgJQAAgWAKgcQAMgmAPgTIAHgHQAFgGAJgEQAQgFAWACIgKADQgLAFgMAMQgRAVgLAgIgDAMIgDALQgHAgAGAcQAHAdAQAIIACAAIACABQgPAAgLgEg");
	this.shape_62.setTransform(182,510.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-1.2,0,1.3,0).s().p("AAChTQAZBNgmBag");
	this.shape_63.setTransform(227.9,474.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-1.2,0,1.3,0).s().p("AALhSIABAAIgNClQgZhMAlhZg");
	this.shape_64.setTransform(210.8,472);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-5,0,5,0).s().p("AgxAyIAFg5IAFg8IAAAAIAxAHQAYAEAQgCIgLBzQgVALgSAAQgZAAgYgSg");
	this.shape_65.setTransform(219.7,470.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-2.5,0,2.6,0).s().p("AgYBOIAPilIAiAEIAAABIgFA7IgLBtIgJACIAAAAQgMAAgMgKg");
	this.shape_66.setTransform(213.1,472.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-46.1,0,46.1,0).s().p("AF/BZIg0gHIAAAAIgjgEIgBAAQksgikWAaQhThFhOg6QgvgkBgACQD6AHIUBuQA6AMAQgXIgGAyQgBATgVAGIgLACIgJAAQgNAAgRgDg");
	this.shape_67.setTransform(182.4,455.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-2.5,0,2.6,0).s().p("AgYBQIAFg2IALhyIAJgCQAMAAAMAKIgPCnQgIAEgFAAQgLAAgKgLg");
	this.shape_68.setTransform(225.7,473.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#4B4E4D","#0C0705"],[0,1],9.7,51.3,-68.7,-84.5).s().p("AIbEOQk7kRjYhUQhRgghKAYQk4BllFDAQg6AcgmggIgEgDQgLgLgBgLQgCgRASgTQCOhkDxh4QBOgnB5gzQAsgWgygKQmAgalWAOQg5ACgMAmQgHhJB+gNQF5gqGuAcIgBAkQBsBUCfhGIADggQHKAkGZBVQCDAfAHApQgQAXg6gMQoWhvj6gHQhggCAvAkQBOA7BTBFQCLByCYCOQAIAKAAAJIAAAEQgDAMgVAJQgTAIgRAAQgdAAgagXg");
	this.shape_69.setTransform(118.4,464.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-77.6,0,77.7,0).s().p("AKjDhQgKgDgKgEIgLgGQgPgHgQgLQlEjdiegoQhKgUhJAKQksAjlGCiIgUAKQg6AbgngfIgCgCQgMgLgCgMIAAgIIAAguQACAMAKAKIAEAEQAnAfA6gbQFEi+E5hnQBIgZBTAgQDXBVE8EQQApAlAygWQAVgIADgNIgBAjQAAAIgFAHQgKAPgeAOIgBABQgNAGgQAAQgMAAgNgDg");
	this.shape_70.setTransform(106.3,476.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-14.5,0,14.5,0).s().p("AiQDhIABgkQAEnIAxgDQBhA/B0g2QAqgCgnHWIgDAgQhJAgg9AAQhKAAg7gug");
	this.shape_71.setTransform(115.4,417.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-10.9,0,10.9,0).s().p("AhsDDQAOloAeg/QBAA1BcgoQAYA3gKFsQg2AZgyAAQg5AAg1gig");
	this.shape_72.setTransform(117.2,370.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-0.1,56.6,-0.1,-3).s().p("AhOgNIAAgBQBNAIBQAFQgoAQgjAAQgsAAgmgcg");
	this.shape_73.setTransform(118.5,349.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#4B4E4D","#0C0705"],[0,1],12.5,18.1,-1.6,-6.3).s().p("AAOA7QhOgoAFhkQAwA2BIAdIgDApIAAAng");
	this.shape_74.setTransform(29.8,325.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-22.6,-34.5,7.3,17.3).s().p("AhCCLQhkg2gEjaIAAgnQCWA3AtgGQAHgBAEgCQgDEmCKgLQg0AQgyAAQhGAAhBgig");
	this.shape_75.setTransform(52.9,347.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-0.9,42.4,-0.9,-4.1).s().p("AhBgeQBAAOBDALQguAighABIgEABQggAAgQg9g");
	this.shape_76.setTransform(71,344);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-68.8,18.5,68.8,-18.4).s().p("AjGC8IgYgCQhRgFhNgHQhTgIhOgKQhXgLhRgNQhFgLhBgOQgHgbgEgnQBxAlE2ARQE3ASDWhCIKxjOQA4gQAQgVIgKBeQgHBDiTAuIm9CPQh6ArijAAQhLAAhUgJg");
	this.shape_77.setTransform(148.8,330.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-14.5,57.5,5,-15.1).s().p("Ai8iEIBBgTIABAPQAEAoAIAbQAQBBAkgDQAjgCAsgkQBSAOBXALQiCCNhPAXQgOAFgNABIgHABIgKABQiBAAAEkcg");
	this.shape_78.setTransform(75.5,348);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#A04E4E","#512926"],[0,1],-8.7,0,8.8,0).s().p("AgsBNQhUhwBUh+QAiAPAnALIAHACIgBAOQAAApAXAcQANARAQAHIgLC8QhKgfgug2g");
	this.shape_79.setTransform(28.3,309.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#A04E4E","#512926"],[0,1],5.6,20.9,-5.6,-20.9).s().p("AmzEiQk2gRhxglIgBgPIARkaQCdAZCdgCQB6gBB4gfQCSgpA0hjQATgkANgvIDJAyQC2AoDCgFQB0gKBwAsQBwAsgBBoQAAANgJAMQgQATg4AQIqxDQQipA0jmAAQg9AAhBgEg");
	this.shape_80.setTransform(149.2,310.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-0.3,71.4,110,71.4).s().p("AACAAIAAAAIgDABIADgBg");
	this.shape_81.setTransform(28,154.9);

	// leg shading (rt)
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#BBBBBB","#515151"],[0,1],88.1,37.6,-5.9,12.3).s().p("AjGD+QgRg3APhoQAOhlBqhiICSiHQAvgvBfiDIAAABQhjDShzDeQh4DlguCtQgJhtgRg3g");
	this.shape_82.setTransform(267.8,385.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#BBBBBB","#515151"],[0,1],-24.1,91.6,11.6,-42.9).s().p("AjigdQBvilB2htQAvAYCRg6QCRg5BKgPQAdAtgJAqQgVBfhBCCQAihsgggYQgfgXg6AzQg7A0hMBTQhMBShiAsQhlAsgrAaQgsAbjHD9QC7mPAWgog");
	this.shape_83.setTransform(260.8,341.2);

	// leg shading (lft)
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#BBBBBB","#515151"],[0,1],51.8,35.5,-19.4,-5.6).s().p("Ag6FyQhFhMgIiAQgEg5AxhsQAwhqBNiQQArg1A6iWIAAAAQgpDlg3D1Qg3D8ABCzQgLgughglg");
	this.shape_84.setTransform(159.4,358.6);

	// man leg
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-17.1,5.2,16.8,-3.9).s().p("Ai8gMIAZhdQCJg7DXDOIgTBNQjdi/iJA8g");
	this.shape_85.setTransform(106.8,426.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-2.1,4.3,2.8,-13.9).s().p("AhmAAIAGguQBqAmBeA3IgFAAQhJAAiAgvg");
	this.shape_86.setTransform(147.5,399.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-17.5,0,17.6,0).s().p("AiuhDIAvhTQCTgWCbEAIgmBFQijjyiUAWg");
	this.shape_87.setTransform(194.8,437.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-16.6,28.2,-0.6,0.6).s().p("AiegpIAwhCQCGA4B8BQIALAHIgSAqIgNAeQiUhxiKgkg");
	this.shape_88.setTransform(217.5,409.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-2.6,3.5,6.8,-12.8).s().p("AhdgcIASgqQBdBABMBNQhIgRhzhSg");
	this.shape_89.setTransform(241.1,420.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-20.5,-16.5,41.3,45.3).s().p("AgnAjQicj/iUAWQAchSCWhZIASAEQCJAlCVBzIANAKQgQAuAQA6QCUDPAgBeQAgBbg5BKIgDADQg3iLkgjEg");
	this.shape_90.setTransform(216.4,442);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AKlEiQhygahkhHQhkhHh5ivIgxgLQiIiJAsgiQCUgXCmD0IAmhFQEhDCA4CLQgCAXgcAUQgJAGgTAAQgYAAgngJgAlKAlQhzgpijiMIgyACQinhgAigtQCJg8DfDAIAThMQFKByBYB2QAFAXgVAaQgQAShIADIgXAAQhqAAhngmg");
	this.shape_91.setTransform(167.1,454);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#BBBBBB","#595959"],[0,1],-33.1,-16.4,16.7,12.1).s().p("AjSHuIgLgIQh8hRiIg4IgPgGQBnhjA+iVQBKiuBcixQBvilB3hsQA9AWCGg3QCHg2BQgUQAdAtgJAqQgcCHh1DIIgFAIIgFAIIABAAQhkDQh1DhQh4DlgsCtQhMhPhehAg");
	this.shape_92.setTransform(254.6,363.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-8.6,31.7,-0.4,0.9).s().p("AijABIAdhJQCQATCNAuIANAEIgHAsIgEAgQiuhIiOAAg");
	this.shape_93.setTransform(121.3,394.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-25.2,-8.9,50.5,34.8).s().p("AgoA/QjZjPiJA8QAFhWB6h9IATgBQCOAACtBIIAQAHQgEAwAfA0QDEChA4BTQA3BQgkBWIgCAEQhah4lJhyg");
	this.shape_94.setTransform(129.8,424.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#BBBBBB","#626262"],[0,1],59.6,32,-10,-8).s().p("AgvJNIgNgEQiNguiSgTIgQgCQBKh6AWigQAZi9AsjBQBAi8BZiIQAmgaAqgnQDFiqBaAaQAnAkADAqQAHCKg9DgIgDAJIgDAIIABAAQgqDjg3D3Qg4D9AACzQheg5hpgmg");
	this.shape_95.setTransform(142.6,335.5);

	this.addChild(this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.6,-1.8,305,523.1);


(lib.computer_desk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AgRC2IAAlxAASivIAAFr");
	this.shape.setTransform(536.9,340.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(1,1,1).p("AClmYQgIABgKAHIgBABACVl4QgBgOgCgJIkPFvQgbAfAFA2QAAACAAABIAAFqQgTAHgSgNIAAlwQgHg4AcggIEQlwQAPgKAJADIAAAAQAQAGAQAFQAGAAAEAEIAAAAQAKAJABAfAC6AAQgXAJgOgO");
	this.shape_1.setTransform(520.1,359.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-10.7,25.6,11.3,-56.5).s().p("AiuGcIAAlwQgGg4AcggIEQlwQAOgKAJADIABAAIAgALQgIABgLAHIAAABIkQFvQgbAfAGA2IAAADIAAFqQgHACgGAAQgNAAgMgIg");
	this.shape_2.setTransform(519.1,359.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#4B4E4D","#0C0705"],[0,1],0,23.7,0,-33.2).s().p("AgQDEIAAlxQAAgOgDgJIABgBQALgHAHgBQAEAAAEAEIAAAAQAKAJACAfIAAFrQgJAEgIAAQgKAAgJgKg");
	this.shape_3.setTransform(536.8,339);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(1,1,1).p("An8oxQABAMAsAMQAdAHAxAIQB6ATCuAHQCrAIB7gJQAwgEAdgFQApgHAEgKIAAAnIAAADAnXCsIERijIiOgMIAAgKIi0BmIgBAkAXDFpIKgA5IAAYJAXBJvIIbAtIAAgnAeZd3QAAALg3ABQg3AChNgJQhOgJg3gOQg3gOAAgLQAAgKA3gCQA3gBBOAJQBNAJA3AOQA3AOAAAKgEAgzAHLIqlg5EghiAAIIAAAiA/kgZIAAgkIS5B4A9FiZIAVgMIS1B6IivBmIgBAAA9FiZIgLgBIkSCiIaLCkAsSBRIgYAOIAAgkIgBAAAsRA+IgBATAsSBiIAAgRAp7gXIAdgRIEKAbAp7grIAAAUIiWBVIEJAbAnXDPIAAgjAr7uIIAAuwIQ6AoA/kg9ICfhcAtm+nQKjgMKRAk");
	this.shape_4.setTransform(288.2,196.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(1,1,1).p("AE6qhIAA0OIA8AQIAATPIg8AvQjdAHjZgIQhvgEhugIQlTgXlPg7IAAzHAm4rrQgNgMAAgSQAAgSANgNQAMgMASAAQASAAANAMQAMANAAASQAAASgMAMQgNANgSAAQgSAAgMgNgACyoEQABABAAABQAAABAAAAQgEAUh3AIQh4AJiugIQitgHh7gTQh6gTAAgUIAAgsQB4hRC/gMAi9CXQiIAugVhGQgPg0BAgvQBFgvBKAFQCBAKgNA1QgCAJgGALIiCBOQgHACgGACQgCg2Bcg3QA5ggAEAnAlvAYIAVgNIAAggAneBaQAvALAzgdQgCgbAPgVgAnpgjIAAAaIi0BmIkJgbAh8qiQC8AaByBdAT6ZdIAAzrIA1gpIE2jtIKSAnIAAWQIkpF4IgwA9IqkhxIAAj6QExBWFzgMIAAz8IAwgpIEpj/ACq8wIAAPMIw5hEAdIJVIobguIAAAoAYSRbQAOgOATAAQAUAAANAOQAPAOAAATQAAAUgPANQgNAOgUAAQgTAAgOgOQgOgNAAgUQAAgTAOgOgAeeanIAAEhEgj2AAKIaKClICOhVAu/A/Iy6h4");
	this.shape_5.setTransform(303.1,199.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],0,10.7,0,-10.6).s().p("AjdAmICWhVIAdgRIEIAbIi0Bmg");
	this.shape_6.setTransform(231.8,198.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-54.1,0.1,15.9,0.1).s().p("AiDAEIAAgOIAAgUIEHAbIAAAig");
	this.shape_7.setTransform(222.8,205.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],9.3,14.1,0.6,-1.1).s().p("AhWAiIAAgBICthmIAAAUIiUBVIAAAUIgZAOg");
	this.shape_8.setTransform(215.8,199);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-0.6,6.4,0.7,-6.4).s().p("AqzgIICfhcIAVgMISzB4IivBoIgBABg");
	this.shape_9.setTransform(155.3,191.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-60.2,-5.8,60.3,5.9).s().p("ApcgqIABgkIS3B5IABAAIgBAkg");
	this.shape_10.setTransform(146.6,198.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-169.8,-11.6,66.7,8.1).s().p("AtEhAIAAgiIaJCiIAAAjg");
	this.shape_11.setTransform(157.2,207.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#4B4E4D","#0C0705"],[0,1],72.3,72.3,-72.2,-72.2).s().p("AgXICIAAz7IAugpIAAYIIguA9g");
	this.shape_12.setTransform(500.6,318.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-18.7,0,18.8,0).s().p("AAAAaQhMgJg3gOQg3gMAAgLQAAgLA3gBQA3gBBMAJQBNAJA3ANQA3AMAAALQAAALg3ABIgPAAQgyAAhDgHg");
	this.shape_13.setTransform(464.1,385.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-33.8,0,33.8,0).s().p("AlRBDIAAj3QExBWFygMIAAEfgAiGANQg3ABAAALQAAALA3AOQA3AOBOAJQBLAJA3gCQA3gBAAgLQAAgLg3gOQg3gNhLgJQhGgIg0AAIgLAAg");
	this.shape_14.setTransform(464.3,380.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#4B4E4D","#0C0705"],[0,1],-1.5,-1.5,0,-1.5,-1.5,7.2).s().p("AggAgQgNgNAAgTQAAgSANgOQAOgOASAAQATAAANAOQAOAOABASQgBATgOANQgNAPgTAAQgSAAgOgPg");
	this.shape_15.setTransform(461.9,314.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-66.9,-71.5,62.4,57.8).s().p("AlRJQIAAzqIKjA5IAAT7IhaABQk9AAkMhLgAg5BNQgNAOAAAUQAAATANAOQAOAOAUAAQATAAAMgOQAOgOAAgTQAAgUgOgOQgMgNgTAAQgUAAgOANgAkem9IIZAuIAAgoIoZgtg");
	this.shape_16.setTransform(464.3,303.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-26.9,0,27,0).s().p("AkMgBIAAgoIIZAsIAAAng");
	this.shape_17.setTransform(462.6,259);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#7A7AC2","#3C3C80"],[0,1],-12,-10.6,82.5,83.8).s().p("AocG2IAAuuIQ5AnIAAPKg");
	this.shape_18.setTransform(266,62.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#4B4E4D","#0C0705"],[0,1],64.3,64.3,-64.2,-64.2).s().p("AiTqEIEnj/IAAWOIknF4g");
	this.shape_19.setTransform(517.8,302.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-18.1,-18.1,18.1,18.1).s().p("AnjBaIE3jrIKQAnIkpD8g");
	this.shape_20.setTransform(484.2,223.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-21,-12.1,21,12.2).s().p("AlpgHIA1goIKeA2IgwApg");
	this.shape_21.setTransform(466.7,237.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-7.5,0,7.6,0).s().p("AAOguQA4ggAFAnQgCAJgGALIiABMIgNAFQgCg3Bag1g");
	this.shape_22.setTransform(291.6,208.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-51.3,30.8,-6.5,4.9).s().p("Ag2AfIBthAQgPAVACAZQglAVghAAQgNAAgNgDg");
	this.shape_23.setTransform(260.7,205.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-55.4,-19.8,132.8,30.6).s().p("AvMAAIERiiIALAAIieBcIgBAkIS4B5IAZgOIAAAQIEIAbIC0hoIABgYICOAMIkRCjg");
	this.shape_24.setTransform(170.9,197.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],8.4,14.8,-0.6,-0.8).s().p("AhYAiICyhnIAAAKIgBAaIiyBng");
	this.shape_25.setTransform(245,201.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],12.8,22.1,-0.9,-1.5).s().p("AiHBAIEPihIAAAiIgVAMIhvBBIiLBVg");
	this.shape_26.setTransform(254.6,207.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-10.7,-4.8,2,2.5).s().p("AiYAyQgPgyBAguQBFgyBIAFQCBALgNA2QgFgng4AhQhcA0ACA3QgzARgkAAQg3AAgNgqg");
	this.shape_27.setTransform(283.7,207.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-41.8,0,41.9,0).s().p("AAAA0QisgHh6gTQh7gTAAgSIAAgsQABAMAsAMQAdAHAxAIQB6ARCsAHQCtAIB7gJQAwgEAdgDQAogHAFgKIAAAlIAAADQgEATh2AJQhDAFhSAAQhFAAhOgEg");
	this.shape_28.setTransform(279.1,145.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-7.4,8,88.8,33.8).s().p("AAABNQisgHh6gUQgxgHgdgIQgsgMgBgLQB4hQC/gLQBtAIBuAEQC+AZBzBbQgEALgoAHQgeAFgwADQhDAFhSAAQhFAAhOgDg");
	this.shape_29.setTransform(279.1,138.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#4B4E4D","#0C0705"],[0,1],-0.8,-2.3,0,-0.8,-2.3,7).s().p("AgdAeQgMgNAAgRQAAgRAMgMQAMgMARgBQASABAMAMQAMAMAAARQAAARgMANQgMANgSAAQgRAAgMgNg");
	this.shape_30.setTransform(262,121.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-69.5,-69.5,69.5,69.5).s().p("ADjKSQhvgEhugIQlRgYlPg7IAAzFQKhgLKUAjIAAUNQhnADhnAAQh1AAh1gEgAhXIMQgNAMAAASQAAASANANQAMAMASAAQASAAANgMQAMgNAAgSQAAgSgMgMQgNgNgSAAQgSAAgMANgAouGMIQ5BEIAAvKIw5gog");
	this.shape_31.setTransform(267.8,66.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-1.3,269.8,-1.3,13.6).s().p("AgcqGIA5AQIAATNIg5Awg");
	this.shape_32.setTransform(337.5,67.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#333333").ss(1,1,1).p("AFLjnQCEANB9ATAnaj9QA9AMBJAIQDyAcFygHAgMEBIAAARAmhkQQhpgBhBAB");
	this.shape_33.setTransform(147.4,113.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#333333").ss(1,1,1).p("ADDHGIhlAlIr2g1IAAgRIL2A2IBagiQAFAIAGAFgApFGGQgVgjgFhSQADg8AGhYQAFhPDjhRQALgEALgEQARgFASgGQA/AGAriMQAihsAWjCQDfBMF1gtQAWFgggBdQggAKgbAIQi9BDgPBkQgOBaAAA+QkBAZkZgkAnfg2QjTA9gcBvQgXDlA+A4IA2ADIgnAPApFGGIgsAQAIKHZQhCgbAUj7QAYh6DEg4QBEByhYEIIiaBOIlHgTAjLi8IJpAWQgCCPggAbAjogPQAdhIAAhlAC4G5QgXgiABhUApfERQB1AYByAPIjNBO");
	this.shape_34.setTransform(136.6,91.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-18.6,7.4,7.9,-2.2).s().p("AgxAIIBYggQAFAIAGAFIhjAkg");
	this.shape_35.setTransform(151.1,138.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-8.1,0,8.2,0).s().p("AhQBCIAVgIIAkgMQA9AHAriKQAABjgeBIQhGgIg9gMg");
	this.shape_36.setTransform(108.1,81.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#EAEAEA","#C8C8C8"],[0,1],-32.4,0,32.5,0).s().p("AlDBLQAehIAAhjIJpAWQgDCNgfAdIiSABQkRAAjCgWg");
	this.shape_37.setTransform(145.7,82.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-40.1,-49,10.4,1.4).s().p("AjoDhQgGgFgFgIQgXgiABhUQAAg+AOhYQAPhkC9hDQAbgKAegJQCEANB9ATQjEA4gYB6QgVD5BDAbg");
	this.shape_38.setTransform(179.5,114.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#4B4E4D","#0C0705"],[0,1],11.3,19.3,-33.7,-58.6).s().p("Ah5gwQAYh7DCg3QBEBxhYEGIiYBOQhCgbAUj4g");
	this.shape_39.setTransform(196.5,116.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-16.8,-13.5,31.5,34.9).s().p("AEfBMIppgWQAihqAWjCQDhBMFzguQAWFfggBeQgfAJgcAKQAggdACiPg");
	this.shape_40.setTransform(149.3,67.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],0.1,-5.3,0.1,23.3).s().p("AkGCjQhxgPh2gYIAJiSQAFhPDjhTQA9AMBJAIQDwAcF0gHQi9BDgPBiQgOBaAAA/QhpAKhsAAQidAAiogWg");
	this.shape_41.setTransform(125.2,106.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-18.8,11.2,1.3,-0.4).s().p("Ahyg5QBzAZByAOIjLBMQgVgigFhRg");
	this.shape_42.setTransform(87.4,124.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-0.3,10.5,11.1,-32.2).s().p("AmoAbIAogPIAsgOIDNhOQEXAkECgYQgBBRAYAiIhbAig");
	this.shape_43.setTransform(112.6,131);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-49.3,-38.9,20.4,1.3).s().p("AihDkQg+g4AXjkQAchuDRhAICqAAIgjAMIgWAIQjhBSgFBPIgJCSQAFBTAVAiIgrARg");
	this.shape_44.setTransform(84.8,109.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-32.2,2.8,77.1,2.8).s().p("Al7gRIAAgRIL3A0IAAARg");
	this.shape_45.setTransform(108.1,137.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#333333").ss(1,1,1).p("AP/6vQgSgFgPgGQgygUgKgWAZu13IpwgcIAAg4IABjkABSpwIAAAyAXnvYQgxgCgxgCQkigLkegOQgZgBgZgBQvpg0u9hhQhCgHhDgHQj4gaj1gdQgagEgbgDQikgUijgVIAAGzIAAAmIgBeDIAAAAIF9jhAaszOIAAmBQgfgCgfgDQnIgming1AZtzOIA/ACEAg6gVrIpTFDQ1ogw0SiEQgZgDgZgCQr0hOrYhrAW6PsIAtg4IEqluIAkgsAW6PsIAAAyEAkXATCIAAgyQiRgJiIgSQhHgKhFgMQgxgJgwgKQibghiPgwQgWgIgXgHEAgaASrQgDAagYAhAcRS4IArgxEAqRAK+IAAAyAXnbmIEqlcEgiBgUBQgwgGgwgHQjZgdjXgfA86vLIAAkNA86sGIAAFD");
	this.shape_46.setTransform(272.6,288.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#333333").ss(1,1,1).p("AOr+0QAAAAAAAAIBfgvIPhAtIAAA0Ik1CYIAAg0IE1iYAOr+AIAAg0EgqHgXlIAAhQINbjLQY2A5TeBeQAQABAQABAIUvkIm4DYMgjTgDeIFHh8IIijQAMdyTIAAAsIkJCDEgh3gPDIFHAhIeMDIILzkiIAAiUAa21qIE1iYIAAgNQAtAEAsAFIAABQIkpChIkqChIAAhQAZ31qIABioIAAjdAfr+CIAAFzAa28eQrdg6guhcAXEODQAXAIAWAHIAAK4IhigRIAAhsAcbPjQibghiPgwAcbTvIAAjSIAAg6EAqbAJVIl6HSQiCgIh8gPQhxgPhsgVQgWgEgVgFAc/F+QHeAdF+CHIl6HSEAgJARLIrdNnQhNBQhwgxQh/g4ByiFIEtlHIAA6oMgyKgF9IAATfAWPx3IAAOcAXxx0IAAeNAcb0VIAAa/AyJ0oIAAA1IlbBpIf4CmEgh3gPqIIaioIB5AIA77LeIAAhXICchWQBHgZAsASQB5A0hOAtIwCJbQhUBFhbg3Qhag3BuhSIGHjaMAAAgk6Egh4AO/IhfgQIAAgeA8wpeIA1AG");
	this.shape_47.setTransform(271.6,303.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-63.6,0,63.6,0).s().p("ApSFcQhag3BuhSIGHjYIAAAcIBfARIAAAAIF7jfIAAhXICchXQBHgZAsASQB5A0hOAtIwAJZQgvAmgxAAQgnAAgogYg");
	this.shape_48.setTransform(63.6,395.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-127.4,70.3,46.4,-30).s().p("AkPiFIA1AGQDyAdD4AbIofDNg");
	this.shape_49.setTransform(114.7,177.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-86.7,37,0.5,-13.3).s().p("AiuApIIfjNICGANIAAA1IlcBnIh4gGIoZCmg");
	this.shape_50.setTransform(105,187);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-4.4,210.1,-4.4,-68.7).s().p("Ai9PCIAB+DIFFAiIAAFDIA1AGIAATgIAABXIl7Dhg");
	this.shape_51.setTransform(73.7,303.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#4B4E4D","#0C0705"],[0,1],24.8,35.9,24.8,-292.2).s().p("AgvSkIAAgdMAAAgk7IBfANIgBGzIAAAmIAAeDg");
	this.shape_52.setTransform(49.9,279.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-9.3,181,-9.3,33.9).s().p("AiijYIFFApIAAELIlFB9g");
	this.shape_53.setTransform(71.1,181.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#4B4E4D","#0C0705"],[0,1],25.5,28.3,-1.3,1.6).s().p("Ai8DPIF5nQIAAAzIl5HQg");
	this.shape_54.setTransform(524.2,384.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-50.7,0,50.8,0).s().p("Am3HpQh/g5ByiEIEtlFIAABpIBiASIEolaIAAjSIArgwQBsAVBxAOQgCAagYAhIrbNlQgwAyg9AAQgmAAgqgSg");
	this.shape_55.setTransform(429.2,455.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-63,0,63.1,0).s().p("ACwBUQhxgPhqgVIgrgJQibghiPguIgtgPIAAgzIAtAQQCPAvCbAiQAwAJAvAHQBEANBIAKQCIASCRAIIAAAzQiCgIh8gPg");
	this.shape_56.setTransform(462.3,399.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#4B4E4D","#0C0705"],[0,1],2.1,79,2.1,-88.7).s().p("AiTlaQCPAvCYAhIAAA6IAADQIknFbg");
	this.shape_57.setTransform(438.6,430.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#976E3A","#74502E"],[0,1],-17.9,31.2,18.1,-31.1).s().p("AgnEgQhHgKhFgMQgxgJgwgKQiaghiPgwIgtgPIAtg4IEplsIAlgsQHcAcF+CHIl6HRQiRgJiHgSg");
	this.shape_58.setTransform(481.2,373.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#4B4E4D","#0C0705"],[0,1],17.6,52,17.6,-319.7).s().p("AgwVQIAAhsIAA6oIAAucIBhADIAAeNIgtA3IAAAzIAtAPIAAK4g");
	this.shape_59.setTransform(418.8,327.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#4B4E4D","#0C0705"],[0,1],4.9,249,4.9,-23.3).s().p("AiTt1IEnihIAAa/IknFug");
	this.shape_60.setTransform(438.6,278.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-97.4,53.3,18.5,-13.6).s().p("AkoB5IJRlBIAABQIkpCfIkoCig");
	this.shape_61.setTransform(453.5,169.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#976E3A","#674229"],[0,1],-98,4,14.8,4).s().p("AiZhzIEziYIAAFxIAAAOIkzCYg");
	this.shape_62.setTransform(458.9,138.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-0.2,39.6,-0.2,-62.4).s().p("AgeDBIABipIAAjbIA8AFIAAF/IAAADg");
	this.shape_63.setTransform(440.3,145.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-60.1,16.4,44.5,-11.6).s().p("AiZAxIEziWIAAA0IkzCXg");
	this.shape_64.setTransform(458.9,116.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-259.8,162.3,80.1,-33.9).s().p("AyAgDIFchpIAAg0QO7BhPqA0IAAApIkJCDg");
	this.shape_65.setTransform(235.9,188);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-421.2,293.2,292.1,-118.6).s().p("A4qBdIg1gGIAAlBIeMDHILzkiIAAiUQEeAOEiALIAAOag");
	this.shape_66.setTransform(250.7,234.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-195.6,0.5,675.4,58.3).s().p("AfaDdQkigLkegOIgygDQvrgzu7hiIiFgNQj4gbj0gbIg1gGIlIgpIhggNQjZgdjWgfIAAhQQLXBqL1BOIAxAFQUSCCVoAwIAABQIhigDg");
	this.shape_67.setTransform(212.9,167.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#976E3A","#74502E"],[0,1],-133.4,-3.8,108.6,-3.8).s().p("A1FgZIIaipIB5AIIf4CmIm4DXg");
	this.shape_68.setTransform(189.8,206.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-144,0,149.3,0).s().p("Ashg+IlIgiIAAgmMAjTADbIAAAyg");
	this.shape_69.setTransform(167.8,217.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-138.5,74.3,13.9,-13.7).s().p("Al4CqIG2jWIEJiEIAAgrIAyADIAACUIrxEgg");
	this.shape_70.setTransform(318.6,208.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#976E3A","#74502E"],[0,1],-198.8,-53.7,379.3,101.2).s().p("AtnBqIgygGQr0hNrYhpINajLQY1A5TgBeIAgADIAAA4IJwAcIgBCmIA/ADIAAgDIE1iWIAAgNIBZAJIpTFBQ1ogw0SiEg");
	this.shape_71.setTransform(242.6,153.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#976E3A","#6D452C"],[0,1],-29.6,53.4,-1.3,4.4).s().p("Ak3B/IABg4IAAjhQCnA0HHAmIgBDbg");
	this.shape_72.setTransform(406,132.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-46.4,-1.5,101.7,-1.5).s().p("AFHBfQnGgming1IghgJQgygUgLgWIAAg0QAuBcLbA3IAAA0Ig+gFg");
	this.shape_73.setTransform(404.5,116.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#976E3A","#74502E"],[0,1],-31.6,-4.1,121.7,36.9).s().p("AoegyIgBAAIBfgvIPgAtIk1CWQrcg6gthag");
	this.shape_74.setTransform(419.9,111.7);

	this.addChild(this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,545.2,508);


(lib.Wanline = function() {
	this.initialize();

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C51230").s().p("Ai+BzIFCjHI6iAAIAAgeIdaAAIlLDGIYuAAIAAAfg");
	this.shape.setTransform(156.8,11.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,313.5,23);


(lib.hacker = function() {
	this.initialize();

	// outlines
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E31C23").s().p("ApsQFQgDAAgCgBIgEgFQgBgDABgCQAYiHARhQIAAgBIAFgUIAAAAIARhLQhDgOgugaQhTgxgIhTQgEgzAUg/IABAAQAuh2B/irQBhiECSigIADgDIAKgFIABAAIAMgFIAAAAQBVgmDcg8QgxgVgvAaIgFABIgEgBQgOgGgBgMQgDgKAIgOQALgWAqgkIAAgBQAzglBKggQgGgcgEgfQgdgIgPgbQgQgegCglQgCgrAXgIIgBAAIAGgCQhBgdghglQgZgcgGgQQgEgMADgHQADgJAMgDIAEAAQBLAMBQAKIAnjYQABgDACgCQABgDADAAQBngcBOgGIAAAAIAQgBIAOAAQBPAGBvAfQACABACACIADAFQAeB/AFBXICcgWIAEAAQAMADADAKQADAHgFAMQgGAQgaAeQgjAohDAeIAKAIQARARACAQQACAPgRAvQgSA0gagCIgJADQgHAlgKAhQC0A/AEBzQAAADgCADIgFAEQgDABgEgBQg9gbgpACQBNAiBgBUQADACAAAFQABAEgDADIgUAZIAAAAQgZAggVAiQjjF0BmKlQABADgCACQgBADgCACQgDABgDAAgAk7iWIgIAEQiQCghhCCQh8CngvB0IAAABQgSA6ADAvIAAABQAIBIBJArQAvAbBGAOQACAAADACIACAEQABADAAADIgUBUIAAABIgEATQgRBNgXB+ISNAAQhkqlDll1QAVgkAaggIAOgTQhshdhSgbQgDgBgCgCQgCgDAAgDQAAgDABgCQACgDADgBQAvgWBWAiQgSheigg2QgEgBgCgEQgCgEACgDQANgnAIgsQAAgDACgCIAFgDQASgGACABQANgCAMgjQAPgogBgNQgCgKgLgKQgLgLgPAAQgEABgEgCQgDgCgCgDQgBgEACgEQABgEAEgBQBUgfAogtQAXgaAFgOIACgFQhPAMhVALQgDABgCgCQgDgBgBgCQgCgDAAgCQgEhXgeiBQhpgdhMgGIgMAAIgOABIAAAAQhKAGhiAZIgnDcQgBAEgDACQgEADgDgBQhUgLhOgMIABAEQAFANAWAZQAmApBRAgQAEABACADQABADAAADQgBAEgCACQgDADgEAAQgPABgQAHQgLAGABAZQACAgAPAaQANAXAZAEQADAAACADQACACABADQAFAnAIAiQAAADgBADQgCAEgDABQhNAhgzAlQglAhgLAUQgEAGAAAFIABAAQBBggBBArQADACACAEQAAAEgCADQgCAEgEABQjsBAhYAoIgBAAIgLAEgAhksDIAAgBIAAABIAAAAg");
	this.shape.setTransform(80.3,105.1);

	// glasses
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.302)").s().p("ABcBEQgDgKABgLQAFgfgQgVQgTgQgJgdIAFgDQAGgFAGgDQAIAdARAOQAOAGgBAqQAAAWAFAOQgHACgIAAIgEAAgAhiBEQgIgQACgQQAEgggQgUQgOgNgJgTQAIgHAJgFQAHAUANAKQAOAHAAAqQgBAfALAQQgHACgHAAIgGAAgAB3AjQAFgggQgVQgUgRgJgdQAIgCAJgBIADAAQAIAXAPAMQAOAIgBApQAAAUAFAPQgIAGgIAEQgGgNABgOgAhLAXQAEgegQgWQgPgOgJgVQAJgDAKAAIABAAQAIAPAKAJQAOAHAAAqQgBAdALASQgHAFgIAEQgNgSACgVg");
	this.shape_1.setTransform(109.4,49.1);

	// shading
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#666666"],[0,1],-7.6,37,6.2,-14.3).s().p("AjWCHQABhmAbhMQAOgmAogSQBLghBJgTQBLgTBPAoIAQAJQAkAYgIAiQiDASgxBCQgvBEg5AuQgdAXgkAAQgkAAgrgXg");
	this.shape_2.setTransform(102.5,155.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#666666"],[0,1],-18.4,46.2,16.8,-1.6).s().p("Ag2G0Qg2gCgtgIIgXgEQhIgOgwgbQhOgugIhOQgEgxAUg9QAuh1B+inQBhiDCQijIAEAEIAGgJQBvASg6AOQhoAVgPA2QgRA2gaAWQgaAWgNAgQgNAggvAPQgZAtA8AsQAaAQgGA/QA+ACAiAxIgGAGIAFAHQAHgCBUgGIAhgCQAPgBAQAAIABAAQAdgBAfACQAtACAxAHIAtAIIAeAFQgQALgOARQgKAOgJASQgTAlgLA4QgZB1AoArIhWANIgyAHIgeADIgaADQhJAGg+AAIgvgBg");
	this.shape_3.setTransform(42.5,132.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#666666"],[0,1],-0.4,-4.1,60.6,-65.3).s().p("AqyLVQAZiGAQhRIAFgUIAThVIAYAEQAtAIA2ACQBTADBkgIIAbgDIAdgDIAzgHIBVgNQgngrAZh1QALg4ASglQAKgSAKgOQAOgRAPgLIgdgFIgtgIQgxgHgtgCQgfgCgeABIAAAAQgQAAgQABIggACQhUAGgJACIgFgHIAHgGQgkgxg9gBQAFhAgZgQQg8gsAZgtQAugPANggQANggAbgWQAagWARg2QARg2BogVQA6gOhwgSIAMgFQBZgnDwhBQhBgpg/AiQgigOBPhGQA0gmBQghQAeCKBHA6QBzBhCBhyQBBg7AihlQC2A9AFBvQhcgngyAVQBXAcBzBkIgVAaQgYAggWAjQjkF2BmKpgACnA7QhKAThLAhQgnASgNAmQgbBOgCBmQBVAuA5guQA6guAxhEQAxhECCgSQAJgiglgYIgQgJQg0gbg0AAQgZAAgZAGgAmPnAIAJgFIgFAJg");
	this.shape_4.setTransform(87.4,134.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#666666"],[0,1],1.6,0.5,-18,-4.7).s().p("ABIBDQhVghgmgpQgvg1AYgFQBNAvBQAaIgLA7g");
	this.shape_5.setTransform(77.5,33.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#000000","#666666"],[0,1],-33.1,11.3,8.1,-25.9).s().p("AjyCHQhQgdhPgvQBPAMBYALIAojgQBngbBMgGIAPgBIALAAQBPAGBtAfQAhCGADBXQBYgLBPgMQhTAvhRAcQh7Arh2AAQh5AAh2gqg");
	this.shape_6.setTransform(110.3,20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#000000","#666666"],[0,1],-4.4,2.6,9.6,-11.4).s().p("AhVAFQBSgbBQgvQAZAGgwA4QgqAthUAgg");
	this.shape_7.setTransform(142.7,33.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#000000","#666666"],[0,1],-4.5,-14.5,-30.4,11.3).s().p("Ah9DVQhHg6gfiKQgIgggFgnQgdgFgQgbQgQgcgCgiQgCgjASgHQARgHASgBIAAAAIALg6QDuBUDyhVIANBBIADAAQATAAAOANQAOAOACANQABAOgPArQgQAsgTAAIgRAFQgJAtgNAlQgiBlhBA7QhGA+g/AAQg4AAg1gtgAAUhrQABAaATATQAUAUAcAAQAcAAAUgUQAUgUAAgcIAAgJQgDgWgRgRIgIgHQgRgNgXAAQgWAAgRANIgJAHQgNAOgEARQgPgIgPAAQgPAAgMAFQgFgPgNgNQgUgUgcAAQgcAAgUAUQgUAUAAAcQAAAcAUAUQAUAUAcAAQAcAAAUgUQAUgUAAgbQAMgFANAAQAOAAANAHg");
	this.shape_8.setTransform(110.1,60.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AAvAvQgUgSAAgbQgOgFgOABQgNgBgLADQAAAcgVATQgTAVgdAAQgcAAgTgVQgVgTABgcQgBgbAVgTQATgVAcAAQAdAAATAVQANAMAFAQQAMgGAPAAQAPAAAPAIQAEgRAOgNIAIgHQARgOAWAAQAXAAARAOIAJAHQAQAQADAWIABAIQgBAcgTATQgVAVgcAAQgcAAgTgVg");
	this.shape_9.setTransform(109.5,49.1);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.1,2.1,154.4,206);


(lib.computerlaptop = function() {
	this.initialize();

	// keys
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("ADiApIAZgUIAkAAIgbAUgAC7ApIAZgUIAjAAIgYAUgACUApIAYgUIAkAAIgZAUgABtApIAYgUIAjAAIgYAUgABFApIAYgUIAkAAIgYAUgAAeApIAYgUIAkAAIgZAUgAgHApIAWgUIAjAAIgJAIIAAAAIgPAMgAgvApIAYgUIAiAAIgWAUgAhXApIAZgUIAjAAIgYAUgAh+ApIAYgUIAkAAIgYAUgAilApIAYgUIAjAAIgYAUgAjNApIAYgUIAkAAIgYAUgAj0ApIAYgUIAjAAIgYAUgAkbApIAYgUIAjAAIgYAUgAlCAoIAXgTIAkAAIgYAUgAlqAoIAYgTIAjAAIgXATgAD+AUIAYgTIAjAAIgXATgADXAUIAXgTIAkAAIgYATgACvAUIAYgTIAjAAIgXATgACIAUIAXgTIAkAAIgYATgABgAUIAYgTIAkAAIgYATgAA5AUIAFgFIATgOIAjAAIgYATgAASAUIAXgTIAkAAIgYATgAgUAUIAWgTIAjAAIgXATgAg7AUIAXgTIAkAAIgYATgAhjAUIAYgTIAjAAIgXATgAiKAUIAXgTIAkAAIgYATgAiyAUIAYgTIAkAAIgYATgAjZAUIAYgTIAjAAIgYATgAkBAUIAYgTIAkAAIgYATgAkoAUIAYgTIAjAAIgXATgAlPAUIAXgTIAkAAIgYATgAEZAAIAXgTIAiAAIgWATgADxAAIAXgTIAkAAIgXATgADKAAIAXgTIAkAAIgYATgACiAAIAYgTIAjAAIgXATgAB7AAIAXgTIAkAAIgYATgABTAAIAYgTIAjAAIgXATgAAsAAIAXgTIAkAAIgXATgAAFAAIAXgTIAjAAIgXATgAghAAIAXgTIAiAAIgXATgAhIAAIAXgTIAkAAIgYATgAhwAAIAYgTIAjAAIgXATgAiXAAIAXgTIAkAAIgYATgAi/AAIAYgTIAjAAIgXATgAjmAAIAXgTIAkAAIgXATgAkNAAIAXgTIAjAAIgXATgAk1AAIAXgTIAkAAIgXATgAEzgWIAXgTIAhAAIgWATgAELgWIAYgTIAkAAIgYATgADkgWIAYgTIAjAAIgYATgAC9gWIAXgTIAkAAIgYATgACVgWIAYgTIAjAAIgXATgABugWIAXgTIAkAAIgYATgABGgWIAYgTIAjAAIgXATgAAfgWIAXgTIAkAAIgYATgAgHgWIAWgTIAjAAIgXATgAgugWIAYgTIAhAAIgWATgAhWgWIAYgTIAkAAIgYATgAh9gWIAYgTIAjAAIgXATgAikgWIAXgTIAkAAIgYATgAjMgWIAYgTIAkAAIgYATgAjzgWIAXgTIAkAAIgYATgAkagWIAXgTIAkAAIgYATg");
	this.shape.setTransform(56.6,-24.6);

	// keyboard shadows
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.251)").s().p("ADiApIADgCIAdAAIAXgRIAGAAIgbATgAC7ApIADgCIAeAAIAWgRIAEAAIgWARIABAAIgDACgACTApIADgCIAfAAIAVgRIAEAAIgWARIACAAIgDACgABsApIABAAIACgCIAeAAIAWgRIAEAAIgVARIgBAAIABAAIgCACgABFApIADgCIAeAAIAVgRIAEAAIgVARIACAAIgDACgAAeApIACgCIAfAAIAVgRIAEAAIgUARIgBAAIABAAIgDACgAgIApIADgCIAcAAIAQgNIgBAAIAHgEIAEAAIgWARIACAAIgDACgAgvApIADgCIAeAAIATgRIAEAAIgSAQIgBABIABAAIgDACgAhXApIADgCIAfAAIAVgRIAEAAIgWARIACAAIgDACgAh+ApIADgCIAeAAIAVgRIAEAAIgVARIABAAIgCACgAimApIADgCIAfAAIAVgRIAEAAIgVAQIAAABIABAAIgDACgAjNApIADgCIAeAAIAWgRIADAAIgVARIACAAIgBABIgCABgAj0ApIADgCIAeAAIAVgRIAEAAIgVARIABAAIgDACgAkcApIADgCIAfAAIAVgRIAEAAIgVARIABAAIgDACgAlCAoIADgCIAdABIAVgRIAEAAIgUAQIgBABIABAAIgCACgAlqAoIADgCIAfAAIAUgQIAEAAIgUAQIAAAAIABAAIgDACgAD+ATIADgCIAfAAIATgRIAGAAIgXATgADWATIADgCIAfAAIAVgRIADAAIgVARIACAAIAAAAIgDACgACvATIADgCIAeAAIAVgRIAEAAIgVARIACAAIgBAAIgCACgACIATIAAAAIADgCIAeAAIAVgRIADAAIgUARIABAAIAAAAIgDACgABgATIADgCIAeAAIAVgRIAEAAIgVARIACAAIgDACgAA5ATIADgCIAeAAIAVgRIAEAAIgVARIABAAIAAAAIgDACgAARATIADgCIAfAAIAUgRIAEAAIgQANIgEAEIAAAAIgCACgAgUATIABAAIACgCIAcAAIAVgRIAEAAIgVARIABAAIgDACgAg8ATIABAAIACgCIAfAAIAVgRIADAAIgUARIABAAIgDACgAhjATIADgCIAeAAIAVgRIAEAAIgVARIACAAIgDACgAiKATIADgCIAeAAIAUgRIAFAAIgVARIABAAIAAAAIgDACgAiyATIADgCIAeAAIAVgRIAEAAIgVARIACAAIgBAAIgCACgAjZATIADgCIAeAAIAVgRIAEAAIgUAQIgBABIABAAIAAAAIgDACgAkBATIABAAIACgCIAfAAIAUgRIAEAAIgUARIAAAAIgCACgAkoATIADgCIAeAAIAVgRIAEAAIgVARIACAAIgEACgAlQATIADgCIAfAAIAUgRIAEAAIgVARIACAAIgBAAIgCACgAEZAAIACgDIAeAAIAUgQIAFAAIgWATgADxAAIABgBIACgCIAeAAIAUgQIAEAAIgTAQIgBAAIABAAIgCADgADKAAIACgDIAfAAIAUgQIAEAAIgUAQIABAAIgDADgACiAAIADgDIAeAAIAVgQIAEAAIgVAQIACAAIgDADgAB7AAIADgDIAeAAIAUgQIAEAAIgTAQIgBAAIABAAIgDADgABTAAIADgDIAfAAIAUgQIAEAAIgVAQIACAAIgBABIgCACgAAsAAIADgDIAeAAIAVgQIADAAIgUAQIABAAIgDADgAAEAAIADgDIAfAAIAUgQIAEAAIgVAQIACAAIgDADgAghAAIADgDIAeAAIASgQIAEAAIgTAQIgBAAIABAAIgCADgAhIAAIACgDIAfAAIAUgQIAEAAIgUAQIABAAIgDADgAhwAAIADgDIAeAAIAVgQIAEAAIgVAQIACAAIgDADgAiXAAIADgDIAeAAIAUgQIAEAAIgTAQIgBAAIABAAIgDADgAi/AAIADgDIAfAAIAUgQIAEAAIgVAQIACAAIgBABIgCACgAjmAAIADgDIAeAAIAUgQIAEAAIgUAQIABAAIgCADgAkOAAIABgBIACgCIAfAAIAUgQIAEAAIgUAQIAAAAIABAAIgDADgAk1AAIADgDIAeAAIAUgQIAFAAIgVAQIACAAIgDADgAEzgVIAAgBIADgCIAdAAIATgQIAFAAIgWATgAELgVIABgBIACgCIAeAAIAVgQIAEAAIgVAQIACAAIgDADgADkgVIADgDIAeAAIAVgQIAEAAIgVAQIABAAIgDADgAC8gVIADgDIAfAAIAUgQIAEAAIgVAQIACAAIgBABIgCACgACVgVIAAgBIADgCIAeAAIAVgQIAEAAIgVAQIABAAIAAABIgDACgABtgVIADgDIAfAAIAVgQIADAAIgVAQIACAAIgDADgABGgVIABgBIACgCIAeAAIAVgQIAEAAIgUAQIgBAAIABAAIgCADgAAfgVIADgDIAeAAIAVgQIAEAAIgVAQIABAAIgDADgAgHgVIADgDIAcAAIAVgQIAEAAIgVAQIACAAIgBABIgCACgAgugVIADgDIAeAAIATgQIAEAAIgSAQIgBAAIABAAIAAABIgDACgAhWgVIADgDIAfAAIAUgQIAEAAIgVAQIACAAIgBABIgCACgAh9gVIADgDIAeAAIAVgQIAEAAIgVAQIABAAIAAABIgDACgAilgVIAEgDIAeAAIAVgQIADAAIgUAQIABAAIgDADgAjMgVIADgDIAeAAIAVgQIAEAAIgVAQIACAAIgBABIgCACgAjzgVIADgDIAeAAIAUgQIAFAAIgVAQIABAAIAAABIgDACgAkbgVIADgDIAeAAIAVgQIAEAAIgVAQIACAAIgBABIgCACg");
	this.shape_1.setTransform(56.8,-24.3);

	// shading
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-5.5,0.4,5.6,-3).s().p("AgpAlIgNAAIAAgWIBthaIAABIIhgBPg");
	this.shape_2.setTransform(89.9,-21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-6.5,2.9,6.6,-0.3).s().p("AhBAVICDhsIAAAnIAAAbIiDBtg");
	this.shape_3.setTransform(79,-8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-0.6,0.7,3.6,1.4).s().p("Ag1DEIBSmTIAZAdIhPGCg");
	this.shape_4.setTransform(101.7,-51.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],3.1,2.1,3,-6.6).s().p("Al/AtIgCAAIBxhaIKSAAIAAABIhvBag");
	this.shape_5.setTransform(56.7,-24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],-12.3,4.1,-12.4,-7.3).s().p("AmrA2ICLhrIAsAAIEZAAQgiAAgiALIgJADIALALIABAAQAcgKAcABQAbgBAKAKIAjgLIgEgDQgNgLgeAAIFqAAIAMAAIiEBrgAhWAHIgJACQAOAPApAAQAoAAAtgPIAAAAIgDgCIgJgHQgeAIgaAAQgbAAgJgIIgBAAgAgFgaQgJADgGAEIgEADQgGAGAEADQAEAFAMAAQALAAAMgFQANgDAGgGIABgBIACgBQADgFgEgDQgDgFgMACIgFgBQgKAAgJAEg");
	this.shape_6.setTransform(42.8,-12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.2)").s().p("AhhAZIAJgDQAPAMAlAAQAkAAAogMIADADIAAAAQgsAOgpAAQgpAAgOgOgAgcAHQgEgEAGgDIAEgEQgDAEADABQAEAFANAAQAKAAAMgFQAKgBAGgEIAAABIgBABIgBACQgHADgNAEQgLAEgLAAQgNAAgEgEgAAagWQgaAAgeAJIAAAAIgMgLIAJgCQAigLAigBIAQAAQAeABAOALIADACIgjALQgKgJgbAAg");
	this.shape_7.setTransform(43,-13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.153)").s().p("AlFAFIgcgJIKmAAIAdAJg");
	this.shape_8.setTransform(63.7,-30.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.251)").s().p("AgeALIgQAAIkbAAIAAgVIKTABIAAAUg");
	this.shape_9.setTransform(51.3,-18.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.082)").s().p("AloA9IAAhBILRAAIAABBgAgUg0IAYgIIABAAQAJAJAbAAQAcAAAegJIAJAIQgpAMglAAQgjAAgPgMg");
	this.shape_10.setTransform(36.2,-6.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.4)").s().p("Aj7EIQgEgDAEgEQAFgEAJgCQANgFANABQAMgBAEAFQADACgDAFIAAgBQgFAEgLADQgMAFgMAAQgNAAgDgFgAktArIBBk3IIaAAIhBE3g");
	this.shape_11.setTransform(66,-40);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.012)").s().p("Al9DKIBUmTIKnAAIhVGTgAkyCgIIaAAIBBk3IoaAAg");
	this.shape_12.setTransform(66.5,-51.6);

	// shape
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#237AA7").s().p("AoXFnIAAhDICLhuIAsAAIAAgXIgCAAIBxhcIAZAAIAAgLIgIAAIgdgLIBVmTIKmAAIAZAdIhRGBIg1AAIAAALIARAAIAABJIhjBRIAAAbIiEBvg");
	this.shape_13.setTransform(53.6,-35.9);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-71.9,107.2,72);


(lib.computer = function() {
	this.initialize();

	// shading
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#57BDB4").s().p("AAAAAIABAAIAAAAg");
	this.shape.setTransform(81.7,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.1,0,2.1,0).s().p("AgUAaIAnhQIACABIAAA2IgnA0IgCABg");
	this.shape_1.setTransform(83.7,-5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007A68").s().p("AAAAAIAAAAIAAABg");
	this.shape_2.setTransform(85.8,-10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#80CDC6").s().p("AAAAAIAAAAIAAABg");
	this.shape_3.setTransform(85.9,-10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-3.6,0,3.7,0).s().p("AgjAiIBHhjIAAA8IhHBHg");
	this.shape_4.setTransform(67.2,-6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,4.2,0,-4.2).s().p("AhDAqIAphTIAvAAIABABIABABIABAAIAAgBIAAgBIAtAAIgCADIgpBQg");
	this.shape_5.setTransform(79,-6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-6.3,0,6.4,0).s().p("Ag+BVIAAgrIAiAAIAAghIBbhcIAAAhIgiAiIAAAIIgBABIgBABIABABIABABIAAAQIhHBJg");
	this.shape_6.setTransform(68.6,-21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.9,0,2,0).s().p("AgSgKIAlAAIgEAEIgMARg");
	this.shape_7.setTransform(65.3,-25.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.251)").s().p("AjmAVIAAgpIHNAAIAAApg");
	this.shape_8.setTransform(39.1,-15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],0,5.1,0,-5).s().p("AlgAyIBIhjIBXAAIHMAAIAUAAIBCAAIhIBjg");
	this.shape_9.setTransform(35.5,-8.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.082)").s().p("AERByIAAgdIBfAAIAAAdgAm+BwIAAggIACAAIJ4AAIAAAggAFtADIgBgBIgBgBIgHgKQgGgIAIgFQAIgFATgDIAkgPIAAAAQAMgHAGgHIACgCQADgFAAgFQgBgdhugHQgdgCglgBIgBAAIAAgBIAAgBIABgBQAmABAfACQBuAIABAfQAAAFgDAGIgCACQgGAHgNAJIgBAAIglAPQgSADgHAFQgGADAEAFIAIAMIAAAAIAAABIAAABIgBAAg");
	this.shape_10.setTransform(44.8,-11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,4.7,0,-4.7).s().p("AlAAvIA9g9IAXAUIHQAAIAMgQIAEgEIANAAIAAgFIAdgbIAjAAIhdBdg");
	this.shape_11.setTransform(42.8,-25.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.153)").s().p("AjcALIgXgVIHQAAIAXAVg");
	this.shape_12.setTransform(41.2,-25.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,1.7,0,-1.6).s().p("AlBAQICSgfIHxAAIhEAfg");
	this.shape_13.setTransform(43,-72.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-3.3,0,3.4,0).s().p("AggjFIBBgiIAAGQIgkAkIgdAbg");
	this.shape_14.setTransform(71.9,-50.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.4)").s().p("AjICwQgigBgLgXQgEgKAAgOIAAj+QAAgPAEgKQALgXAiAAIGTAAQAvgBAAAxIAAD+QAAAvgvABg");
	this.shape_15.setTransform(39.4,-48.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.012)").s().p("ADjEJInMAAIg4AAIAAghIACAAIIkAAIAAAhgAEVCpIgnAAInQAAIg8AAIAAmyIJAAAIAAGuIAAAEgAj2jDQgEAKAAAPIAAD+QAAAOAEAKQALAXAiAAIGTAAQAvgBAAguIAAj+QAAgxgvAAImTAAQgiAAgLAYg");
	this.shape_16.setTransform(39.5,-44);

	// shape
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#237AA7").s().p("AERFyIAAgcIAphUIAxAAIgHgNQgGgHAIgFQAIgFATgEIAkgPIAAABQAXgNAAgNQgCglivgCIAAASIhIBJIBBAAIAAA8IhIBJIp6AAIAAggIACAAIBIhlIBWAAIAAgqIg4AAIAAghIACAAIA9g/Ig8AAIAAmyICTghIHwAAIAAGPIgmAkIAjAAIAAAhIgiAjIAAAIQCzACABAoQAAAOgYAPIgBAAIglAOQgSAEgHAEQgGAEAEAFIAIAOIAAAAIAuAAIgBADIAAA4IgpA0IAAABg");
	this.shape_17.setTransform(44.8,-36.9);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-74,89.5,74.2);


(lib.Cloud = function() {
	this.initialize();

	// center
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlEHMQhpAAhJhJQgagagQgdQgGgKgJgGQgKgGgLgCQhOgNg8g8QhMhMAAhrQAAhqBMhNQBJhIBmgDQAQgBAMgJQANgKAFgQQAOgtAkgjQA6g7BSAAQBJAAA2AuQAMAKAPABQAOACAOgHQAOgHAHgNQAOgaAXgWQA/g/BWABQBZgBA/A/QAQAQAMASQAGAJAJAGQAJAFALACQAmAFAdAcQAQAQAJAVQAGAPAPAJQAnAWAiAiIAIAJQAKAKAPAEQAOADAOgFQAegLAjABQBNgBA3A3QA2A2AABLQAAAygWAoQgKASAFATQAFARAAASQAAA0gkAlQglAkg0AAIgPgBQgPgCgNAIQgNAGgHANQgTAhgdAeQhUBTh3AAQhzAAhThOQgMgMgRgCQgRgCgPAKQgOAJgGAQQgFAMgJAKQgSASgYgBQgTAAgPgKQgQgLgSACQgTABgNANIgCADIgBABQgEAEgGAAQgHAAgEgEIgCgDQgMgPgTgEQgTgDgQAKQg5AlhIAAIgCgBg");
	this.shape.setTransform(0,-4.2);

	// shading
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.702)","rgba(255,255,255,0)"],[0,0.471,1],-84.5,0,84.5,0).s().p("ABmGiQgIAWgSASQghAhgsgBQgkABgcgVIgDADQgTAUgbAAQgbAAgUgUIgGgGQhFArhYABQh9AAhZhZQgegegUgiQhegRhHhGQgzgzgWg/QgGgRgEgSQgIgiAAgkQAAgmAIgfQAEgSAGgRQAWg/AzgzQBXhXB5gDQARg5AtgsQBJhKBnABQBbgBBEA6QASggAbgbQBOhOBrAAQBuAABNBOQAUAUAOAVQA3AHApAoQAYAYAMAdQAsAaAnAmIAJALQAmgOAsgBQBiABBFBFQBFBFAABfQAABAgcAzQAGAWAAAZQAABJgzAzQgzAzhJAAIgUgBQgWAngiAiQhjBiiLABQiIAAhghdg");
	this.shape_1.setTransform(0,-4.2);

	// shape
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#237AA7").s().p("ABmGiQgIAWgSASQghAhgsgBQgkABgcgVIgDADQgTAUgbAAQgbAAgUgUIgGgGQhFArhYABQh9AAhZhZQgegegUgiQhegRhHhGQgzgzgWg/QgGgRgEgSQgIgiAAgkQAAgmAIgfQAEgSAGgRQAWg/AzgzQBXhXB5gDQARg5AtgsQBJhKBnABQBbgBBEA6QASggAbgbQBOhOBrAAQBuAABNBOQAUAUAOAVQA3AHApAoQAYAYAMAdQAsAaAnAmIAJALQAmgOAsgBQBiABBFBFQBFBFAABfQAABAgcAzQAGAWAAAZQAABJgzAzQgzAzhJAAIgUgBQgWAngiAiQhjBiiLABQiIAAhghdg");
	this.shape_2.setTransform(0,-4.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.5,-55.3,169.1,102.2);


(lib.arrow = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Arrow();
	this.instance.setTransform(108.9,-0.1,1.25,1.25,0,0,0,5,0);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AoaAAIQ1AA");
	this.shape.setTransform(53.9,-0.2);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-4.2,116.2,8.3);


(lib.EndUserMale = function() {
	this.initialize();

	// seatedMan_at_desk
	this.instance = new lib.seatedMan_at_desk("synched",0);
	this.instance.setTransform(85.9,61.2,1.05,1.05,-1,0,0,52.1,52);

	// computer_desk
	this.instance_1 = new lib.computer_desk("synched",0);
	this.instance_1.setTransform(271.6,274,1,1,0,0,0,271.6,253);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,3,545.2,548.4);


(lib.Serverfile = function() {
	this.initialize();

	// detail
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.502)").s().p("AhwAHIAPgNIDDAAIAPANg");
	this.shape.setTransform(13.8,-67.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhNALIAAgVICbAAIAAAVg");
	this.shape_1.setTransform(13.8,-71.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.251)").s().p("AgGgtIANAPIAAA9IgNAPg");
	this.shape_2.setTransform(3.3,-71.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.502)").s().p("AhhAHIgPgNIDhAAIgPANg");
	this.shape_3.setTransform(13.8,-75.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.251)").s().p("AgGAfIAAg9IANgPIAABbg");
	this.shape_4.setTransform(24.4,-71.6);

	// z box_square tall two
	this.instance = new lib.zbox_squaretalltwo("synched",0);

	this.addChild(this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-89.3,63.5,89.4);


(lib.Router = function() {
	this.initialize();

	// <>><
	this.instance = new lib.Symbol();
	this.instance.setTransform(46.1,-47.8);

	// z router_basic
	this.instance_1 = new lib.zrouter_basic("synched",0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-66.7,92.7,66.8);


(lib.slide_5 = function() {
	this.initialize();

	// icons
	this.instance = new lib.computer();
	this.instance.setTransform(135.5,320.7,0.458,0.459,0,0,0,46.1,-38.4);

	this.instance_1 = new lib.computer();
	this.instance_1.setTransform(122.3,313.6,0.458,0.459,0,0,0,45.1,-36.1);

	this.instance_2 = new lib.computer();
	this.instance_2.setTransform(110.4,305.5,0.458,0.459,0,0,0,43.9,-36.4);

	this.instance_3 = new lib.computer();
	this.instance_3.setTransform(97.1,298.1,0.458,0.459,0,0,0,45.4,-37.3);

	this.instance_4 = new lib.computer();
	this.instance_4.setTransform(135.5,280.5,0.458,0.459,0,0,0,46.1,-36.8);

	this.instance_5 = new lib.computer();
	this.instance_5.setTransform(122.3,273.6,0.458,0.459,0,0,0,45.1,-36.6);

	this.instance_6 = new lib.computer();
	this.instance_6.setTransform(110.4,265.8,0.458,0.459,0,0,0,43.9,-36.1);

	this.instance_7 = new lib.computer();
	this.instance_7.setTransform(97.1,258,0.458,0.459,0,0,0,45.4,-36.1);

	this.instance_8 = new lib.computer();
	this.instance_8.setTransform(135.5,240.5,0.458,0.459,0,0,0,46.1,-37.7);

	this.instance_9 = new lib.computer();
	this.instance_9.setTransform(122.3,233.4,0.458,0.459,0,0,0,45.1,-35.4);

	this.instance_10 = new lib.computer();
	this.instance_10.setTransform(110.4,225,0.458,0.459,0,0,0,43.9,-37.4);

	this.instance_11 = new lib.computer();
	this.instance_11.setTransform(97.1,217.8,0.458,0.459,0,0,0,45.4,-36.4);

	this.instance_12 = new lib.computer();
	this.instance_12.setTransform(135.5,200.1,0.458,0.459,0,0,0,46.1,-38.3);

	this.instance_13 = new lib.computer();
	this.instance_13.setTransform(122.3,192.5,0.458,0.459,0,0,0,45.1,-37.5);

	this.instance_14 = new lib.computer();
	this.instance_14.setTransform(110.4,184.7,0.458,0.459,0,0,0,43.9,-37.1);

	this.instance_15 = new lib.computer();
	this.instance_15.setTransform(97.1,177,0.458,0.459,0,0,0,45.4,-37.3);

	this.instance_16 = new lib.computer();
	this.instance_16.setTransform(135.5,160.2,0.458,0.459,0,0,0,46.1,-37.9);

	this.instance_17 = new lib.computer();
	this.instance_17.setTransform(122.3,152.8,0.458,0.459,0,0,0,45.1,-35.8);

	this.instance_18 = new lib.computer();
	this.instance_18.setTransform(110.4,144.5,0.458,0.459,0,0,0,43.9,-37.5);

	this.instance_19 = new lib.computer();
	this.instance_19.setTransform(97.1,137.8,0.458,0.459,0,0,0,45.4,-36.6);

	this.instance_20 = new lib.computer();
	this.instance_20.setTransform(135.5,119.7,0.458,0.459,0,0,0,46.1,-38);

	this.instance_21 = new lib.computer();
	this.instance_21.setTransform(122.3,111.9,0.458,0.459,0,0,0,45.1,-38.8);

	this.instance_22 = new lib.computer();
	this.instance_22.setTransform(110.4,105.1,0.458,0.459,0,0,0,43.9,-36.5);

	this.instance_23 = new lib.computer();
	this.instance_23.setTransform(97.1,96.9,0.458,0.459,0,0,0,45.4,-36.4);

	this.instance_24 = new lib.Router();
	this.instance_24.setTransform(486.7,216.8,0.611,0.612,0,0,0,46.7,-33.5);

	this.instance_25 = new lib.Router();
	this.instance_25.setTransform(250.8,382.9,0.611,0.612,0,0,0,45.6,-32.9);

	this.instance_26 = new lib.hacker();
	this.instance_26.setTransform(539.4,361.5,0.445,0.446,0,0,180,82.7,105);

	// lines
	this.instance_27 = new lib.Arrow();
	this.instance_27.setTransform(290,383.8,1.751,1.753,-178.8,0,0,5.3,0);
	this.instance_27.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_27.cache(-2,-5,14,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F68026").ss(3,1,1).p("Ay4AAMAlxAAA");
	this.shape.setTransform(411.1,384.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AYQMSMAAAgjpAztswIAAGGIAAGcIAAGNIAAGWIAALDIOpAAAzty8IAAGMAzt3RIAAEVA3hy8ID0AAA3hswID0AAA3hmqID0AAA4PMVIEiAAA3hgOID0AAA3hF/ID0AA");
	this.shape_1.setTransform(296.6,236.9);

	// staticctext
	this.text = new cjs.Text("ICMP REPLY D=209.165.200.225 S=172.18.1.7", "bold 10px 'CiscoSans'", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(174.7,305.9,1.163,1.164);

	this.text_1 = new cjs.Text("ICMP REPLY D=209.165.200.225 S=172.18.1.6", "bold 10px 'CiscoSans'", "#FFFFFF");
	this.text_1.lineHeight = 12;
	this.text_1.lineWidth = 246;
	this.text_1.setTransform(175,268.2,1.163,1.164);

	this.text_2 = new cjs.Text("ICMP REPLY D=209.165.200.225 S=172.18.1.5", "bold 10px 'CiscoSans'", "#FFFFFF");
	this.text_2.lineHeight = 12;
	this.text_2.lineWidth = 249;
	this.text_2.setTransform(175,227.3,1.163,1.164);

	this.text_3 = new cjs.Text("ICMP REPLY D=209.165.200.225 S=172.18.1.4", "bold 10px 'CiscoSans'", "#FFFFFF");
	this.text_3.lineHeight = 12;
	this.text_3.lineWidth = 252;
	this.text_3.setTransform(175,186.1,1.163,1.164);

	this.text_4 = new cjs.Text("ICMP REPLY D=209.165.200.225 S=172.18.1.3", "bold 10px 'CiscoSans'", "#FFFFFF");
	this.text_4.lineHeight = 12;
	this.text_4.lineWidth = 245;
	this.text_4.setTransform(175,145,1.163,1.164);

	this.text_5 = new cjs.Text("ICMP REPLY D=209.165.200.225 S=172.18.1.2", "bold 10px 'CiscoSans'", "#FFFFFF");
	this.text_5.lineHeight = 12;
	this.text_5.lineWidth = 243;
	this.text_5.setTransform(175,104.3,1.163,1.164);

	this.text_6 = new cjs.Text("209.165.200.225", "11px 'CiscoSans'", "#393536");
	this.text_6.lineHeight = 13;
	this.text_6.lineWidth = 89;
	this.text_6.setTransform(453.6,237.4,1.163,1.164);

	this.text_7 = new cjs.Text("ICMP REQ D=172.18.255.255 S=209.165.200.225", "bold 10px 'CiscoSans'", "#FFFFFF");
	this.text_7.lineHeight = 12;
	this.text_7.lineWidth = 269;
	this.text_7.setTransform(200.5,424.7,1.163,1.164);

	// label_arrows
	this.instance_28 = new lib.arrowgreen();
	this.instance_28.setTransform(247.5,315.8,0.973,0.891);

	this.instance_29 = new lib.arrowgreen();
	this.instance_29.setTransform(247.5,278.2,0.973,0.891);

	this.instance_30 = new lib.arrowgreen();
	this.instance_30.setTransform(247.5,237.2,0.973,0.891);

	this.instance_31 = new lib.arrowgreen();
	this.instance_31.setTransform(247.5,195.9,0.973,0.891);

	this.instance_32 = new lib.arrowgreen();
	this.instance_32.setTransform(247.5,155.1,0.973,0.891);

	this.instance_33 = new lib.arrowgreen();
	this.instance_33.setTransform(247.5,113.8,0.973,0.891);

	this.instance_34 = new lib.arrowgreen();
	this.instance_34.setTransform(399.1,435.1,1.085,0.891,0,0,180);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(127,175,174,0.42)").s().p("AgkAMIAAgXIBIAAIAAAXg");
	this.shape_2.setTransform(422.7,231.8);

	this.instance_35 = new lib.Cloud();
	this.instance_35.setTransform(302.1,213.8,1.456,1.32,0,0,0,0,-4.3);
	this.instance_35.alpha = 0.898;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(193,171,209,0.6)").s().p("AlECLIAAgTIhKAAIAAkCIMdAAIAAEVg");
	this.shape_3.setTransform(458.8,217.6);

	this.addChild(this.shape_3,this.instance_35,this.shape_2,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.text_7,this.text_6,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.shape_1,this.shape,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(76.3,79.6,498.5,368.9);


(lib.slide_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* import flash.display.MovieClip;
		import flash.events.MouseEvent;
		import classes.media.TextBox.TextBox;
		import flash.events.Event;
		
		var btn01:MovieClip;
		var btn02:MovieClip;
		var popup01:MovieClip;
		var popup02:MovieClip;
		
		var totalBtns:uint = 2;
		var currSelected:String;
		
		//create the listeners for click event for each button
		function init():void{
			for(var i:uint=1; i<=totalBtns; i++){
				if(i < 10){
					this["btn0"+i].addEventListener(MouseEvent.CLICK,onClick);
					this["btn0"+i].addEventListener(MouseEvent.MOUSE_OVER, btnRollOver);
					this["btn0"+i].addEventListener(MouseEvent.MOUSE_OUT, btnRollOut);
					this["btn0"+i].buttonMode=true;
				} else {
					this["btn"+i].addEventListener(MouseEvent.MOUSE_DOWN,onClick);
				}
			}
			
			hidePopUps()
		}
		
		function onClick(e:MouseEvent):void{
			//trace("clicked " + e.currentTarget.name)
			currSelected = e.currentTarget.name;
			var btnNum:String = e.currentTarget.name.substr(-2);
		
			hidePopUps();
			showPopUp(btnNum);
			btnHighlight(btnNum);
			
		}
		
		function btnRollOver(e:MouseEvent):void{
			if(e.currentTarget.name != currSelected)
			  e.currentTarget.gotoAndStop("over");
			
		}
		
		function btnRollOut(e:MouseEvent):void{
			if(e.currentTarget.name != currSelected)
			  e.currentTarget.gotoAndStop("up");
			
		}
		
		//shows router output popup for the currently selected button
		function showPopUp(btnNum:String):void {
				var num:String = btnNum;
						this["popup"+num].visible=true;
		}
		
		function hidePopUps():void{
			for(var j:uint=1; j<=totalBtns; j++){
				if(j <10){
					this["popup0"+j].visible=false;
				} else {
					this["popup"+j].visible=false;
				}
			}
		}
		
		function btnHighlight(btnNum:String):void {
		//trace("btnHigh"+btnNum);
			clearHighlights();	
			
			this["btn"+btnNum].gotoAndStop("selected");
			
		}
			
		function clearHighlights():void{
			for(var j:uint=1; j<=totalBtns; j++){
				if(j <10){
					this["btn0"+j].gotoAndStop("up");
				} else {
					this["btn"+j].gotoAndStop("up");
				}
			}
		}
		
			
		init();	
		
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Arrow
	this.instance = new lib.Arrow();
	this.instance.setTransform(308.7,414.9,1.9,1.9,23,0,0,5,0);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance.cache(-2,-5,14,11);

	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(308.3,398.3,1.9,1.9,31,0,0,5,0);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_1.cache(-2,-5,14,11);

	this.instance_2 = new lib.Arrow();
	this.instance_2.setTransform(311.2,375.8,1.9,1.9,35,0,0,5,0);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_2.cache(-2,-5,14,11);

	this.instance_3 = new lib.Arrow();
	this.instance_3.setTransform(370.2,415.5,1.9,1.9,158,0,0,5,0);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_3.cache(-2,-5,14,11);

	this.instance_4 = new lib.Arrow();
	this.instance_4.setTransform(372.3,395.8,1.9,1.9,150,0,0,5,0);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_4.cache(-2,-5,14,11);

	this.instance_5 = new lib.Arrow();
	this.instance_5.setTransform(371,375.7,1.9,1.9,142,0,0,5,0);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_5.cache(-2,-5,14,11);

	this.instance_6 = new lib.Arrow();
	this.instance_6.setTransform(348,354.7,1.9,1.9,126,0,0,5,0);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_6.cache(-2,-5,14,11);

	this.instance_7 = new lib.Arrow();
	this.instance_7.setTransform(329.2,354.7,1.9,1.9,53,0,0,5,0);
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_7.cache(-2,-5,14,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Components
	this.instance_8 = new lib.Serverfile();
	this.instance_8.setTransform(143.3,182.7,0.64,0.64,0,0,0,31.7,-44.7);

	this.instance_9 = new lib.Serverfile();
	this.instance_9.setTransform(275,182.7,0.64,0.64,0,0,0,31.7,-44.7);

	this.instance_10 = new lib.Serverfile();
	this.instance_10.setTransform(538.3,182.7,0.64,0.64,0,0,0,31.8,-44.7);

	this.instance_11 = new lib.Serverfile();
	this.instance_11.setTransform(406.6,182.7,0.64,0.64,0,0,0,31.7,-44.7);

	this.instance_12 = new lib.Serverfile();
	this.instance_12.setTransform(102,293.6,0.64,0.64,0,0,0,31.7,-44.7);

	this.instance_13 = new lib.Serverfile();
	this.instance_13.setTransform(169.8,293.6,0.64,0.64,0,0,0,31.7,-44.7);

	this.instance_14 = new lib.Serverfile();
	this.instance_14.setTransform(237.7,293.6,0.64,0.64,0,0,0,31.7,-44.7);

	this.instance_15 = new lib.Serverfile();
	this.instance_15.setTransform(305.5,293.6,0.64,0.64,0,0,0,31.7,-44.7);

	this.instance_16 = new lib.Serverfile();
	this.instance_16.setTransform(373.4,293.6,0.64,0.64,0,0,0,31.7,-44.7);

	this.instance_17 = new lib.Serverfile();
	this.instance_17.setTransform(441.3,293.6,0.64,0.64,0,0,0,31.8,-44.7);

	this.instance_18 = new lib.Serverfile();
	this.instance_18.setTransform(509.1,293.6,0.64,0.64,0,0,0,31.8,-44.7);

	this.instance_19 = new lib.Serverfile();
	this.instance_19.setTransform(577,293.6,0.64,0.64,0,0,0,31.8,-44.7);

	this.instance_20 = new lib.Serverfile();
	this.instance_20.setTransform(340.4,393.6,0.64,0.64,0,0,0,31.7,-44.7);

	this.instance_21 = new lib.computer();
	this.instance_21.setTransform(338.8,74.7,0.64,0.64,0,0,0,44.7,-36.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F68026").ss(3,1,1).p("AEroSIj7HJAQrn7IspKOAxGnyIMpJ5EgnPgHRMAimAPkA8bnlIXyNXEAnQgHiMgjaAP1AcAoPI3+NoAmTnnIEwG0");
	this.shape.setTransform(342,363.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AOimsIgoBAIAwgaAMWk8I6/Lp");
	this.shape_1.setTransform(237.5,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).wait(1));

	// Lines
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("Ae9jnIAAHPAKTjnIAAHPAqTivIAAGXA+8i5IAAGh");
	this.shape_2.setTransform(340.8,211.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AgmvsIIkJ2APeGeIAAIeAE2OJIAAnrIKoAAEAkwAGeIGWAAEAkwAPtIAApPIqqAAIqoAAAaGPtIAApPAB9vZIbYMNEglrAN7IAAndIlaAAAlxGeIAAHrAwaGeIqoAAIqpAAAwaNvIAAnRIKpAAA7COJIAAnrAgwvsIomJ2AE2GeIqnAA");
	this.shape_3.setTransform(341.9,193.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65,50.9,553.7,374);


(lib.slide_3 = function() {
	this.initialize();

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4E4C4D").ss(2,1,1).p("ALo/YMAAAA/LArn/xMAAAA/k");
	this.shape.setTransform(337.9,261.9);

	// lines
	this.instance = new lib.arrow();
	this.instance.setTransform(264.7,369.8,1.307,1.307,0,-167.8,12.2);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 101, 44, 138, 0)];
	this.instance.cache(-3,-6,120,12);

	this.instance_1 = new lib.arrow();
	this.instance_1.setTransform(411.8,282.5,1.307,1.307,167.8);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 70, 160, 64, 0)];
	this.instance_1.cache(-3,-6,120,12);

	this.instance_2 = new lib.arrow();
	this.instance_2.setTransform(411.8,261.4,1.307,1.307,167.8);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 70, 160, 64, 0)];
	this.instance_2.cache(-3,-6,120,12);

	this.instance_3 = new lib.arrow();
	this.instance_3.setTransform(411.8,240.2,1.307,1.307,167.8);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 70, 160, 64, 0)];
	this.instance_3.cache(-3,-6,120,12);

	this.instance_4 = new lib.arrow();
	this.instance_4.setTransform(411.8,219,1.307,1.307,167.8);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 70, 160, 64, 0)];
	this.instance_4.cache(-3,-6,120,12);

	this.instance_5 = new lib.arrow();
	this.instance_5.setTransform(264.7,138.8,1.307,1.307,0,-167.8,12.2);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 101, 44, 138, 0)];
	this.instance_5.cache(-3,-6,120,12);

	this.instance_6 = new lib.arrow();
	this.instance_6.setTransform(264.7,117.6,1.307,1.307,0,-167.8,12.2);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 101, 44, 138, 0)];
	this.instance_6.cache(-3,-6,120,12);

	this.instance_7 = new lib.arrow();
	this.instance_7.setTransform(264.7,96.5,1.307,1.307,0,-167.8,12.2);
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 101, 44, 138, 0)];
	this.instance_7.cache(-3,-6,120,12);

	this.instance_8 = new lib.arrow();
	this.instance_8.setTransform(264.7,75.3,1.307,1.307,0,-167.8,12.2);
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 101, 44, 138, 0)];
	this.instance_8.cache(-3,-6,120,12);

	// circle
	this.instance_9 = new lib.questionMark_red();
	this.instance_9.setTransform(445,246.4,0.63,0.582,0,0,0,0.1,0.6);
	this.instance_9.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,2);

	this.instance_10 = new lib.NotAllowed();
	this.instance_10.setTransform(445.1,404.4,0.55,0.55,-90);
	this.instance_10.shadow = new cjs.Shadow("#FFFFFF",0,0,2);

	// icons
	this.instance_11 = new lib.Serverfile();
	this.instance_11.setTransform(445,402.8,0.6,0.6,0,0,0,31.7,-44.8);

	this.instance_12 = new lib.Serverfile();
	this.instance_12.setTransform(445,244.9,0.6,0.6,0,0,0,31.7,-44.6);

	this.instance_13 = new lib.Serverfile();
	this.instance_13.setTransform(445.1,140.4,0.6,0.6,0,0,0,31.8,-44.6);

	this.instance_14 = new lib.computer();
	this.instance_14.setTransform(226.8,123.3,0.6,0.6,0,0,0,44.6,-36.9);

	this.instance_15 = new lib.EndUserMale();
	this.instance_15.setTransform(208.9,371,0.17,0.17,0,0,0,271.9,277.3);

	this.instance_16 = new lib.hacker();
	this.instance_16.setTransform(188.4,95.6,0.4,0.365,0,0,0,80.5,105.1);

	this.addChild(this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(157.5,57.4,308.5,409);


(lib.slide_1 = function() {
	this.initialize();

	// arrows
	this.instance = new lib.Arrow();
	this.instance.setTransform(522.2,367.5,1.682,1.68,0,0,0,5.2,0.4);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance.cache(-2,-5,14,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F68026").ss(3,0,1).p("ABMAAIiXAA");
	this.shape.setTransform(512.1,366.7);

	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(240.5,338.1,1.682,1.68,0,30,30,4.9,0.2);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_1.cache(-2,-5,14,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F68026").ss(3,0,1).p("ABGAoIiLhP");
	this.shape_1.setTransform(231.6,332.6);

	this.instance_2 = new lib.Arrow();
	this.instance_2.setTransform(206.1,321.5,1.682,1.68,0,30,30,4.7,0.4);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_2.cache(-2,-5,14,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F68026").ss(3,0,1).p("ABGAoIiLhP");
	this.shape_2.setTransform(197.9,316);

	this.instance_3 = new lib.Arrow();
	this.instance_3.setTransform(301.4,340.7,1.682,1.68,0,0,0,4.9,0.3);
	this.instance_3.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_3.cache(-2,-5,14,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F68026").ss(3,0,1).p("ABRAAIihAA");
	this.shape_3.setTransform(290.9,340.1);

	this.instance_4 = new lib.Arrow();
	this.instance_4.setTransform(357.5,340.7,1.682,1.68,0,0,0,5.2,0.3);
	this.instance_4.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_4.cache(-2,-5,14,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F68026").ss(3,0,1).p("ABRAAIihAA");
	this.shape_4.setTransform(346.7,340.1);

	this.instance_5 = new lib.Arrow();
	this.instance_5.setTransform(473.1,346.5,1.68,1.679,0,30,30,5.2,0.1);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_5.cache(-2,-5,14,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F68026").ss(3,0,1).p("ABBAlIiBhJ");
	this.shape_5.setTransform(464.6,341.3);

	this.instance_6 = new lib.Arrow();
	this.instance_6.setTransform(416.1,340.7,1.682,1.68,0,0,0,5,0.3);
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_6.cache(-2,-5,14,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F68026").ss(3,0,1).p("ABMAAIiXAA");
	this.shape_6.setTransform(406,340.1);

	this.instance_7 = new lib.Arrow();
	this.instance_7.setTransform(474.3,324.5,1.682,1.68,0,-30,-30,5.1,0.2);
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 246, 128, 38, 0)];
	this.instance_7.cache(-2,-5,14,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F68026").ss(3,0,1).p("ABBglIiBBL");
	this.shape_7.setTransform(465.3,329.2);

	// icons
	this.instance_8 = new lib.envelopeattackpacket();
	this.instance_8.setTransform(547.6,367,0.333,0.333);

	this.instance_9 = new lib.envelopeattackpacket();
	this.instance_9.setTransform(485.8,367,0.333,0.333);

	this.instance_10 = new lib.envelopeattackpacket();
	this.instance_10.setTransform(441,336.3,0.333,0.333);

	this.instance_11 = new lib.envelopeattackpacket();
	this.instance_11.setTransform(381.4,336.3,0.333,0.333);

	this.instance_12 = new lib.envelopeattackpacket();
	this.instance_12.setTransform(272.6,326.7,0.333,0.333);

	this.instance_13 = new lib.envelopeattackpacket();
	this.instance_13.setTransform(239.6,309.4,0.333,0.333);

	this.instance_14 = new lib.Router();
	this.instance_14.setTransform(322.6,302.4,0.6,0.599,0,0,0,46.1,-33.9);
	this.instance_14.shadow = new cjs.Shadow("rgba(197,18,48,1)",0,0,5);

	this.instance_15 = new lib.computerlaptop();
	this.instance_15.setTransform(161.9,263,0.6,0.599,0,0,0,53.8,-35.7);

	this.instance_16 = new lib.computerlaptop();
	this.instance_16.setTransform(504.9,322,0.601,0.6,0,0,0,53.5,-35.8);

	this.instance_17 = new lib.envelopeattackpacket();
	this.instance_17.setTransform(204.4,296.4,0.333,0.333);

	this.instance_18 = new lib.Cloud();
	this.instance_18.setTransform(226.3,311.9,0.769,0.768,0,0,0,0,-4.1);

	this.instance_19 = new lib.Serverfile();
	this.instance_19.setTransform(558.8,315.2,0.6,0.599,0,0,0,31.9,-44.8);
	this.instance_19.shadow = new cjs.Shadow("rgba(197,18,48,1)",0,0,5);

	this.instance_20 = new lib.Router();
	this.instance_20.setTransform(439.7,295.1,0.601,0.6,0,0,0,46.2,-33.6);
	this.instance_20.shadow = new cjs.Shadow("rgba(197,18,48,1)",0,0,5);

	this.instance_21 = new lib.hacker();
	this.instance_21.setTransform(131.3,240.6,0.386,0.386,0,0,0,80.3,105.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#393536").ss(2,1,1).p("ADJAAImRAA");
	this.shape_8.setTransform(499.3,313.5);

	// Layer 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#393536").ss(2,2,1).p("AiNAAIEbAA");
	this.shape_9.setTransform(52,8.5,1,1,0,0,0,-483.4,-313.9);

	// lines
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#393536").ss(2,1,1).p("Ah8CcICsAAAh8GTIAAj3AXnGTICnAAAXnDfIAAC0Ah8GTIZjAAA6NmSIExESAkYGTICcAAAriCcIJmAA");
	this.shape_10.setTransform(347,312.3);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.shape_7,this.instance_7,this.shape_6,this.instance_6,this.shape_5,this.instance_5,this.shape_4,this.instance_4,this.shape_3,this.instance_3,this.shape_2,this.instance_2,this.shape_1,this.instance_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(101.5,200.6,483.1,175);


(lib.animation01 = function(mode,startPosition,loop) {
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

	// black_shape
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(380.4,149.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(161).to({_off:false},0).wait(4));

	// s2_txt03
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(92.5,143.7,1,1,0,0,0,88.5,8.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(164));

	// icons
	this.instance_2 = new lib.computer();
	this.instance_2.setTransform(232.4,309.9,0.638,0.638,0,0,0,44.3,-36.6);

	this.instance_3 = new lib.computer();
	this.instance_3.setTransform(399.5,168,0.638,0.638,0,0,0,44.4,-36.6);

	this.instance_4 = new lib.Cloud();
	this.instance_4.setTransform(231.1,80.3,0.511,0.511,0,0,0,0,-4.2);

	this.instance_5 = new lib.hacker();
	this.instance_5.setTransform(41.2,61.4,0.3,0.3,0,0,0,80.3,105.1);

	this.instance_6 = new lib.computer();
	this.instance_6.setTransform(72.4,73.4,0.638,0.638,0,0,0,44.4,-36.6);

	this.instance_7 = new lib.Router();
	this.instance_7.setTransform(231.1,173.7,0.612,0.612,0,0,0,46.3,-33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(165));

	// packet2
	this.instance_8 = new lib.envelopeattackpacket();
	this.instance_8.setTransform(72.2,68.9,0.563,0.563);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({x:142.2},26).to({x:132.2,y:82.1},19).to({x:240.2},25).to({y:133.1},14).to({x:221.7,y:122.1},14).to({y:170.1},15).to({x:374.3},42).to({x:401.7,alpha:0},4).to({_off:true},1).wait(4));

	// packet_1
	this.instance_9 = new lib.envelopeclosedstatic();
	this.instance_9.setTransform(234.6,307.5,0.55,0.55,0,0,0,1.6,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({x:234.8,y:173.7},20).to({x:401.3},18).to({_off:true},1).wait(2).to({_off:false,x:234.6,y:307.5},0).to({x:234.8,y:173.7},20).to({x:401.3},18).to({_off:true},1).wait(4).to({_off:false,x:234.6,y:307.5},0).to({x:234.8,y:173.7},20).to({x:401.3},18).to({_off:true},1).wait(41));

	// lines
	this.instance_10 = new lib.Wanline();
	this.instance_10.setTransform(142.2,77.5,0.638,0.705,0,0,0,156.8,11.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,1).p("AsJmIIAAO8AMKozI0gAA");
	this.shape.setTransform(309,230.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C51230").s().p("Ag9JTIAArbIBqCyIAAp7IARAAIAALYIhrisIAAJ4g");
	this.shape_1.setTransform(228.1,133.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_10}]}).wait(165));

	// wanmask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AitFcIAAq3IFcAAIAAK3g");
	mask.setTransform(228.6,126.2);

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18,30.5,410.3,302.9);


(lib.slide_2 = function() {
	this.initialize();

	// anim01
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(115.3,48,1,1,0,0,0,0.5,0);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(132.8,78.5,410.2,302.9);


(lib.Main = function() {
	this.initialize();

	// slide2
	this.slide02 = new lib.slide_2();
	this.slide02.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(132.8,78.5,410.2,302.9);


// stage content:
(lib.media_11224 = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(472.8,323.5,410.2,302.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;