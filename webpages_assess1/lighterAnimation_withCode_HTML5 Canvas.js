(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AnOirIOdAAQBHAAAyAyQAzAzAABGIAACsIzCAAQgyAAAAgyIAAh6QAAhGAygzQAygyBHAAg");
	this.shape.setTransform(0,0.0003,1,1.7296);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApHCsQgzAAAAgyIAAh6QAAhGAzgzQAygyBHAAIOdAAQBHAAAyAyQAyAzAABGIAACsg");
	this.shape_1.setTransform(0,0.0003,1,1.7296);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.4,-30.7,128.9,61.4);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AlqrpIMHAAIAAULQAADIjIAAImpAAQjIAAAAjIIAAzZQAAgyAyAAg");
	this.shape.setTransform(-0.0079,-0.0054,1.529,1.0927);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjULqQjIAAAAjIIAAzZQAAgyAyAAIMHAAIAAULQAADIjIAAg");
	this.shape_1.setTransform(-0.0079,-0.0054,1.529,1.0927);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.2,-82.5,128.4,165.1);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AlqrpIMHAAIAAULQAADIjIAAImpAAQjIAAAAjIIAAzZQAAgyAyAAg");
	this.shape.setTransform(-0.0079,-0.0054,1.529,1.0927);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjULqQjIAAAAjIIAAzZQAAgyAyAAIMHAAIAAULQAADIjIAAg");
	this.shape_1.setTransform(-0.0079,-0.0054,1.529,1.0927);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.2,-82.5,128.4,165.1);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiInUIERAAIAAOpIkRAAg");
	this.shape.setTransform(-22.475,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABYHVIAAupIESAAIAAOpgAlpHVIAAupIESAAIAAOpg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-37.1,-47.9,73.30000000000001,95.9), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALAVIgRgEIgHgFIgHgFIgFgFIgDgGIgDgHIAPgFIAAgFQADACAJABQAHABAEACIAIAGQAIAJAJAMIgIAGQgEADgEABg");
	this.shape.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-3.2,-2.1,6.4,4.300000000000001), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwQyxMAghASxMgghASyg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-104.1,-120.2,208.3,240.5), null);


(lib.fire = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiCJFQgngUgTgnQgJgSADgSQACgUAQgEQALgBAEgDQAGgDABgIQABgGgCgHIgGgMIgGgLQgIgVAMgfQARgkAFgSQADgMABgWQABgYABgKIAIgcQAEgRgBgMQgBgcgagVQgYgSgggFIgzgIQgcgHgJgTQgHgNABgaQABgvAFgYQAHgbAag3IAzhlQAQggAKgOQASgaAogfQA3grAKgJQASgRAAgPQgCgagqgIQgUgFgJgEQgPgIgFgMQgHgWAcgaQAugrBGgTQA9gRBKADQAgABASAIQARAIARAQQAKAKARAWQAYAfAKAVQARAhADAuQADAcgDA2QgBAegCAOQgEAYgIASQgHAOgOARIgXAdQgRAWgQAfQgJARgRAnQgIATAFAJQAEAHAPAGQAQAFAFAGQAGAIgHALQgHALgKgDQAUBdgWBeQgVBfg6BKIgVAZQgMAPgHAKQgMARgPAeIgaAvQggA4gtAPQgOAEgPAAQgZAAgagNg");
	this.shape.setTransform(30.1558,59.4249);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.3,118.9);


(lib.pause_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.pause_button = new lib.Symbol3();
	this.pause_button.name = "pause_button";
	this.pause_button.setTransform(35.95,46.9,1,1,0,0,0,-0.2,0);
	this.pause_button.alpha = 0.5;
	this.pause_button.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);
	new cjs.ButtonHelper(this.pause_button, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkclwII5AAIAALhIo5AAg");
	this.shape.setTransform(35.6,46.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkcFxIAArhII5AAIAALhg");
	this.shape_1.setTransform(35.6,46.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pause_button,p:{alpha:0.5,regX:-0.2,regY:0,scaleX:1,scaleY:1,x:35.95,y:46.9}}]}).to({state:[{t:this.pause_button,p:{alpha:1,regX:-0.2,regY:0,scaleX:1,scaleY:1,x:35.95,y:46.9}}]},1).to({state:[{t:this.pause_button,p:{alpha:1,regX:0.3,regY:0.8,scaleX:0.7878,scaleY:0.7872,x:35.85,y:46.85}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.pause_button,p:{alpha:1,regX:0.3,regY:0.8,scaleX:0.7878,scaleY:0.7872,x:35.85,y:46.85}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.2,-22.1,124,141);


// stage content:
(lib.lighterAnimation_withCode_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,4,113];
	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(2);
		}
		
		
		/* Click to Hide an Object
		Clicking on the specified symbol instance hides it.
		
		Instructions:
		1. Use this code for objects that are currently visible.
		*/
		this.movieClip_1.addEventListener("click", fl_ClickToHide.bind(this));
		
		function fl_ClickToHide()
		{
			this.movieClip_1.visible = false;
		}
	}
	this.frame_4 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.button_4.addEventListener("click", fl_MouseClickHandler.bind(this));
		var paused = false;
		
		function fl_MouseClickHandler()
		{
			if (paused == false) {
				this.stop();
				paused = true;
			}
			else
			{
				paused = false;
				this.play();
			}
		}
	}
	this.frame_113 = function() {
		/* Show an Object
		Shows the specified symbol instance.
		
		Instructions:
		1. Use this code to show objects that are currently hidden.
		*/
		
		this.movieClip_1.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(109).call(this.frame_113).wait(1));

	// pause_button
	this.button_4 = new lib.pause_button();
	this.button_4.name = "button_4";
	this.button_4.setTransform(69.2,86.05,1,1,0,0,0,35.9,46.9);
	new cjs.ButtonHelper(this.button_4, 0, 1, 2, false, new lib.pause_button(), 3);

	this.pause_button = new lib.Symbol3();
	this.pause_button.name = "pause_button";
	this.pause_button.setTransform(69.25,86.05,1,1,0,0,0,-0.2,0);
	new cjs.ButtonHelper(this.pause_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_4}]},1).to({state:[{t:this.pause_button}]},112).wait(1));

	// button
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(656.4,357.75);

	this.movieClip_2 = new lib.Symbol2();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(-4.1,708.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_1}]}).to({state:[]},1).to({state:[{t:this.movieClip_2}]},112).wait(1));

	// fire
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACXFIQgqgFgXgHQgjgKgWgTQgPgOgOgaQgohGgLhpIgLhrQgLg9gdgkQgmgthKgUIgegIQgRgFgKgGQgJgGgXgWIgSgTQgPgPgGgKQgKgPAHgKQAGgHAKABQALAAANAIIAWAOQAiARAxgLIAogNQAdgKAMgDQA4gQA8AJQA6AJAyAgQASANgBAMQAAAJgLAIQgNAIgGAGQgLAKgHAfQgEATADAJQADAIAOALQA/AuBKAOIAcAGQAQAFAKAHQAOAKANAZQAUAmgMAXQAJgBAHAHQAGAHADALQAJAcgCAkQAAAXgGAqQgGAigIATQgMAcgWAKQgKAFgcACQgZADgMAIQgFADgMANQgLAKgHADQgGACgNAAIgOAAg");
	this.shape.setTransform(744.8241,380.9814);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABhFdQgpgKgWgJQghgOgTgVQgNgRgMgbQgfhKAChqIAChsQgEg+gYgnQgggxhHgdIgcgLQgRgHgKgIQgIgHgTgZIgQgVQgNgRgFgKQgIgQAIgJQAHgGAKACQALABAMAKIAUAQQAgAWAxgGQAQgCAagFQAegHAMgCQA6gJA5ARQA5AQAuAmQAQAOgCAMQgCAKgMAGQgNAHgGAFQgMAIgLAfQgHASACAJQACAJANAMQA5A1BHAXIAbAKQAQAGAJAIQANAMAJAZQAPApgOAWQAIAAAHAIQAFAIACALQAFAdgGAjQgDAXgLApQgKAhgKASQgQAbgXAGQgLAEgcgBQgZAAgNAHQgFACgNALQgMAIgIACIgJACQgJAAgPgEg");
	this.shape_1.setTransform(746.051,356.8577);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZIIQgggMgPgNQgRgRgTg7QgRg0gagOQgRgJgXACQgRABgaAHQgYAHgMgHQgIgFgHgRQgQgigEgVQgJgfAJgZQAEgOAQgVQAegrAsgkIA3grQAcgbAGgdQACgIABgQIADgYQAEgQALgOQALgNAPgIIANgHIANgHQALgMACgZQABgkgLghQgFgOgRgiQgPgfgFgTQgKgsASgoQAOgkAoghQAogmAygZQAcgOAIAPQAHANgSATQADAcARAYQAPAZAZAOIAQAJQAJAGAFAFQANAQgHAXQgGAVgQARQgHAHgYAXQgUASgKANQgOATgDAWQgDAXALARQAIAMASAJIAfAQQAfAQAsAvQAyA2ASAkQAdA7gTAyQgIAYgkAqQgjAogHAbQgGAWAEArQAEAugFAUQgFAcgdArQgTAegSAIQgJAEgRACIgbACQgIABgRAFQgQAGgJACIgJABQgWAAgigNg");
	this.shape_2.setTransform(762.0788,309.2625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGILQghgJgQgNQgSgQgWg6QgUgzgagNQgRgIgYADQgQACgaAIQgYAJgMgHQgIgEgJgRQgRghgFgUQgLgfAIgZQADgPAPgVQAcgtAqgmIA0guQAbgcAFgeQACgIAAgQIABgYQAEgRAJgNQALgOAOgJIANgHIANgIQAKgNABgZQgBgkgNghQgFgNgUghQgQgegGgTQgMgsAPgpQANgkAmgjQAngoAwgcQAagPAJAPQAIAMgRAUQAEAcATAXQAQAYAaANIAQAHQAJAGAGAFQANAPgFAYQgFAVgPARIgeAgQgTATgJAOQgNAUgCAWQgCAXANAQQAIAMATAIIAfAOQAgAPAvAsQA0A0AUAiQAgA6gQAzQgHAYgiAsQggAqgGAbQgFAWAGArQAGAugDAUQgEAdgaAsQgSAfgRAJQgKAFgQACIgbADQgIACgQAGQgQAHgJACQgGABgIAAQgUAAgfgKg");
	this.shape_3.setTransform(781.6437,287.4612);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhsIgQgbgGgUgQQgwgmgDhcIgBhJQgBgrgJgdIgLgeQgHgTgCgMQgEgdgFgOQgFgQgXgdQgVgbgFgSQgEgTAGgXQADgOALgZQAOggAJgOQAPgZATgNQAJgGAPgHIAagKQA2gVArgoQAqgoAZg0QAXgxALhIQAHg0AAgwQAAgTAFgHQAIgMASACQAQABAPAKQBmBDA3CkQARAzgDAeQgCAWgLARQgMATgTAIIgZAIQgPAFgEAKQgJATAfAdQA4A1AdBEQAaA+gEA2QgDAsgXAwQgRAjghAwQgvBDgnAcQgKAIgWANIggAUQgOALgZAXQguAmguAJQgNACgNAAQgOAAgNgCg");
	this.shape_4.setTransform(784.3052,289.1607);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiTIVQgbgIgSgRQgtgrAFhcIAGhIQACgrgGgeIgIgfQgGgTgBgMQgBgegEgOQgEgQgUgfQgSgdgDgSQgDgTAIgWQAFgPANgXQAQgfAKgOQARgXAUgMQAKgFAQgFIAbgIQA2gQAvgkQAugkAcgyQAcguARhIQALgyAFgxQABgSAGgHQAJgMASAEQAQADAOALQBgBMApCnQALA1gFAeQgEAVgMAQQgOASgTAGIgaAGQgPAEgGAKQgKASAdAgQAzA5AWBHQAVA/gJA2QgGArgcAuQgUAiglAtQg1A+gpAZQgLAHgWALIgiARQgPAJgbAVQgxAigvAFIgPABQgTAAgSgGg");
	this.shape_5.setTransform(777.9464,290.7162);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoJUQgpgQgYgkQgKgQAAgSQAAgVAPgGQAKgDAEgDQAGgDAAgIQAAgHgDgGIgHgLIgHgLQgLgTAIghQANglACgSQACgNgCgWQgCgYABgKIAEgdQACgSgCgLQgFgcgdgRQgagPgggBIgzgCQgdgEgMgSQgHgLgDgaQgFgwACgYQADgcAUg5IAmhqQAMgiAIgQQAQgbAjgkQAygxAIgLQAQgSgCgQQgFgZgrgDQgUgCgKgDQgQgGgGgMQgJgVAYgcQApgxBDgcQA6gYBKgGQAggDATAGQASAGASAOQAMAJATATQAbAcAOAUQAUAeAJAtQAGAcAEA2QACAeAAAOQgBAYgGATQgFAPgMASIgUAgQgNAYgMAgQgHATgMApQgGAUAGAIQAEAGARAEQAQAEAGAFQAHAIgGALQgFAMgLgBQAgBYgLBgQgKBigwBQIgRAbIgRAbQgJASgMAgIgTAyQgbA8gqAUQgTAJgVAAQgSAAgWgIg");
	this.shape_6.setTransform(770.8514,289.4629);

	this.instance = new lib.fire("synched",0);
	this.instance.setTransform(768.85,289.4,1,1,-9.9999,0,0,30.2,59.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8LAQgagBgXgPQgYgPgKgYQgJgWACgoQADgxgCgOQgCgOgHgVQgIgZgCgLQgEgTAEgRQAEgUAMgLQAPgMAUAEQAVAFACASQAfgdALgoQAKgegDgoQgBgYgJgwQgFgggJgRQgLgagWgKIgPgGQgJgEgEgFQgIgMAKgQIAWgcQAQgTAEgfQAEgVAAgkQgBgXgCgKQgDgSgJgMQgLgNgfgOIh2g2QgSgIgFgHQgJgJgEgVQgJgjgBgUQgCgfALgWQAOgfAsgZQBQguBagHQgfgVgjgBIgXgCQgNgCgGgHQgGgIAAgLQABgLAGgIQAJgMAYgMQgEgNANgNQAJgKARgHICihIQAggNASgBQAagBAYASQAWAQANAaQAKAUAIAfIANA2QAGAZAqBzQAeBVADA5QAGBfgzBmQgJASgKADQgGAEgHgEQgIgEABgIQgvADgQARQgMANgJAjQgMA1gjBpQgaBdAOBBIAgBfQATA4gJAmQgFAWgUAlQgRAegKAPQgPAXgSAQQgoAngxAAIgFAAg");
	this.shape_7.setTransform(772.6412,284.6521);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjHMmQgqgFgVgbQgMgRgDgaQgDgQABgfQABgsACgSQADgjAIgaQAIgYARghQAZgvAZgRQANgJAagKQAcgKAMgHQApgZASg2QAPgtgCg7QgBg8gMg2IgKgwQgGgcgCgVIgCg+QgEglgOgWQgHgKgOgOIgJgEIgSgKIgfgMQgSgIgIgKQgRgWALgrIAKgqIADgXQADgNAHgHIAJgHQACgoAEgbQAKhHAigvQAWggA/gyQA9gyAXghIAMgUQAHgKAGgGIABgFQALgmAMgSQAKgPAKgEQAIgEAUAAQAbAAANABQAlADAPATQAGAHAJASIAKANIAJAOQAKARgEATIAAA7QAAAagEAMQgCAHgHAMIgKAWQgHANgMAAIgFAAQgFADgGgBQgJgCgEgMIgGgXQgJgZgfgHQgdgHgZAPQgVAMgTAZIgfAvIgOAVQgGANAAALQAAAUAaAdQA0A7AVAeQAmA0AQAwQATA5gMA5QgNA+gsAgQgSAMgCAJQgFAPAcAXQA6AvAIA7QAHAwgfA/QgSAkgnBHQgYA1AFAqQADAZAbA7QAXA0gCAgQgGBIhoA1QhHAkhQAVQggAHgaAAIgUgBgABgq0IgEACIgKANIAHgHIAIgJIgBABg");
	this.shape_8.setTransform(780.8551,273.0302);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgxNhIhLgGQgagCgMgFQgYgKgaglQgXgggGgVQgIgbAIguQAIg4AYgZQAJgKAQgKIAcgQQA5ghAqg1QABgOgSgUQgUgWgCgNQgEgcAtgbIA4giQAagPAOgMQAUgQAJgTQAJgRABgWQAHg/gkgzQgNgSgmglQgigigNgXQgFgKACgHQAEgKAWABIA8AFQAkAEAWAFQAfAHAWAOQAqAZAPAyQAQAzgVAsIgGAOQgDAJABAGQACAIAHAHIAOAMQAXAUAHAhQAGAfgJAfQgHAbgRAeQgLASgZAhIgvBAQgHAKgDAIQgDAKAHAYQAHAcACAkQABAXgCAqQgCA1gaAKIgTAFQgQAFgMASIgTAiQgTAhgYAKQgKADgVAAIgRAAgAhllaQgOgGACgYIACgSIgBgKIgFgEQgCgDgBgIIgGgGQgJgJgDgFQgFgJABgTQABgZAMgIQAHgEARgCQAIgCAQgIQAHgCAHACQAHADABAGQACAJgJAHIgNANQgCAEgBAHQAAAHgCAHIAAAAQAAAUAFAJQADAFAIAIQAIAHADAFQAJAOgJASQgIAOgRAGQgGACgFAAIgIgBgAgmp1QgGAAgEgEQgFgEABgFQAAgIAOgIQAngXAQgqQAFgNAHghQAHgdAIgQQALgTARgNQASgNAVgEQAVgEAVAFQAWAFAQAOQAYATAQAlQAJAXABAPQABAQgJAIQgJAKgPgGQgOgFgJgNIgPgYQgKgOgKgFQgNgGgPAEQgNAEgLALQgJAIgJAPIgPAYQggA1gzAhQgMAHgIAAIgBAAg");
	this.shape_9.setTransform(777.8427,265.9147);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhWOrIgygHQgcgEgNgGQgSgJgTgXIgPgSIgRgTQgJgMAAgLQgLACgLgHQgKgGgFgLQgHgRADgdQAEggAKgUQAIgQAWgYQALgPALgHQANgJAcgJQAdgJAMgIQAMgJAEgHQAEgJAAgQIAAg3QAAgxgXgMQgGgCgNgDQgMgDgFgDQgLgIgDgRQgBgEAAgbQgBgXAHgGQAHgGAPABIAtADIAAgFQgBgOACgHQACgIAGgLIACgDQgEgQgBgSQAAgPAGgEQAFgEAOACQAaAEANAEQAVAFAPAJIAQALQAIAHAGADIAUAKQAIAEALALQALALAIAOQAaApgBAyIABAOQAAAIAEAFQAFAHAPADQARADAFADQAKAFAIASQAUAugSAuIgLAbQgGAQAAAMIABASQABAKgDAHQgFAMgRAHIgfALQgWALgPAbQgLATgJAhIgVBIQgGAUgEAKQgIAQgMAIQgMAIgTABIgDAAQgLAAgTgDgAhkFnIABAAIgBgBIAAABgAEQr4QgSgEgNgMQgOgNgCgQQAAgJAEgTQAFgSgCgKQgCgIgFgJQgTgcgrgHQgOgBgDgGQgDgFACgFQADgEAEgDQAGgEAOAAQAfAAAPAGQAKAFAQALQAOALAEAGQAEAFAGAOIAPAgQAOAigEAlQgCANgGAEQgEADgHAAIgGAAg");
	this.shape_10.setTransform(778.4244,259.3786);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhdGEQgVgCgIgHQgFgFgEgJIgFgQQgHgXgZghQgcglgHgRQgLgXgEgfQgDgVAAglQAAgjADgVQADgeAKgXQAOggAggcQAYgWAngYQAZgPAAgOQAAgJgJgLQgLgNgCgGQgDgLAHgNQAFgKAMgJIAVgNQAOgHAHgHQAKgLAEgOQACgJAAgVQgBgUADgKQAFgPAUgaQATgVANgDQAFgBAJAAIANgBIAZgHQAQgGAKABQAQACAVAVQAMALAIAJQAUAYALAdQALAdgCAeQgBARgJAEQgGACgMgGIhVgtQgCAJgLALQgNAMgDAGQgGAKAAAXIAABKQAAAMAFAFQADAEAOAEQArAIAjAWQAcARALATQAMAVgBAlQgCAjgMA7QgLAvgJASIgNAYQgHAOgDAKIgFASQgDAKgFAFQgJAJgTABIghADQgdAGgOAiQgFAKgHAXQgHASgMAIQgLAHgZAAIgTABQgdAAgagDgAC9kHIgBADIACAAIgBgFIAAACgAChk3IAFAEIAHAGIgFgGIgHgLIAAAHg");
	this.shape_11.setTransform(771.4788,311.7548);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiHJSQgkgGgdgZQgegYgNgiQgJgYgCgfQgBgTACgmQACg+AFghQAIg1AUglQANgUAEgLQAUgsgUgyQgHgRgYglQgWgggHgVQgJgbACgjQABgWAJgoQAEgWAEgKQAGgRALgKQAJgJAegMQAfgMAZgNQAfgRAKgRQAKgSgEgeQgEgmgRgfIgOgaQgHgPABgMQACgRAPgSQASgVAagUIAyghQBBgrAkAWQAOAJAMAWQATAiAGAnQAFAogIAmQgDAPgHAEQgJAGgMgIQgHgFgMgNQgZgbgmgEQAGBDAsA4QAtA3BAATIAXAGQANAEAIAGQAOAKALAVQAQAeAGAqQAEAcAAAwQABBYgLA6QgQBPgpA0QgkAsgwAWIghAOQgWAIgMAHQgmAUgXAnQgZAmgDAsQgBARABAlQgCAfgOARQgNAQgYAGQgMADgNAAQgJAAgKgBg");
	this.shape_12.setTransform(777.6268,294.7728);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiTMKQgugMgUgfQgLgSgEgbQgCgRABgfQABhMAFgsIAOhVQAJg0AAgiQAAhOglhGIgagsQgPgagFgVQgHghAKgsIAVhMQAVhKgDhOQgBgvACgSQAEgkAUgTQAFgFAQgLQAOgJAGgHQASgUACguQACg2AHgRQAIgRAUgVQAbgcAFgGQAagiAGg4IADhkQABgZALgJQALgIATAEQAhAGAcAcQAaAZANAkQALAfAEAoQACAZAAAwQAAASgHAHQgKAIgNgKQgMgJgGgQQgGgQgLgKQgNgLgLAHQgBARgMAXIgTAmQgMAagBAgQgBAmAUAPQAQANAfgEQAugFAjgcIAPgLQAIgFAIgBQAVgBAVAfQA5BYAXBoQAWBogPBnQgDAPgFAFQgHAHgMgDQgLgDgIgJIgNgQQgHgLgHgFQgOgJgSAEQgRAEgMAOQgRATgFArQgGA8AUB0QAUB3gEA5QgCAigOAPQgHAIgPAIQgUALgEADQgbAUgHApQgFAdAFAvQAFAvgFAdQgGApgaAVQgQANgaAFQgRADgeAAIgNAAQgtAAgbgGg");
	this.shape_13.setTransform(776.3393,274.3276);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiuMMQgjgEgngdQhHg1gNhIQgDgUAEgRQAEgUAOgKQANgJAZgBIAqgBQAXgDAVgQQAUgPANgWQAMgTAJgaIAMgxQAFgUAJgHQAHgFAPgBQAQgCAGgDQAMgFAHgRIAKgdQAEgNAPgaQAPgZADgPQAGgXgEgsQgDglgCgTQgHgfgMgWIgLgSQgFgKgBgJQAAgLAHgLIAPgVQAhgsACg2QADg6gigkIh2gLQgTgCgHgIQgIgLAJgXQANghARgkQAZg5AWgdQAggsAqgMQARgGAsgBQApAAAVACQAjAEAZALQA1AZAfA/QANAZAJAhQAGAUAKApQAFAYgGAMQgKASgogCQAZA9AbBLQAaBKAFAyQAHBGgaAyQgPAbgWAUQgSARgrAXQgqAYgTAQIgmAlQgYAUgWgBQABAcgbAxQgbAyAAAbQAAALAGAeQAFAagDAPQgFAXgYAaQgkAmgEAGQgHAKgNAbQgMAYgJAMQgQATgZAJQgSAHgTAAIgMgBgAAXphQgFgDgCgGQgEgIAAgPIgBhEQAAgVAGgIQADgEAGgFIALgHIAMgLQAHgGAGgDQAMgHAYABIA0ABQAOABAEAFQAEAEACALQAEAGAKAIQAHAIAAALQAAAMgIAHQgHAFgQACIgoAGQgQACgHADQgMAEgHAHQgFAGgGAOQgHARgOAVQgIAMgIABIgBAAQgFAAgFgDg");
	this.shape_14.setTransform(783.8761,277.9308);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Aj4NAQgPAAgGgGQgFgEgCgIIgDgNQgFgQgSgSQgZgZgEgGQgNgSgEgbQgDgSAAgfQAAgUABgKQACgQAHgLQALgTAfgMIAzgTQARgJAegYQAbgZAKgMQARgUANgjIAXg8QAKgYAKgQQAYgqAfgRQASgLATgDQAVgCASAIQAJAEATAOQARAMAMAEQAUAGAXgKQAVgIARgTQAigmAGgxQABgUACgKQADgRAIgKQANgQAYgDQAhgDAaAZQAaAagCAgQgBAOgGAQIgNAcIgYAxQgMAYgKAMQgbAghFAKQg5AKg2AAQgSAAgHAHQgIAHAAAVIgCAjQAAAUAEAOQAEANAPAYQAKAWAEAkQADAegIAOQgOAagqAHIgeADQgUACgMADQgmAJgNAZQgIAOAAAcQAAAhgDALQgGAUgQAQQgQAPgVAIQgbALgsAAIgOAAgACagEQgWgQgRgXIgTgdQgMgVgEgJIgJgfIgJgZQgEgPgBgLQAAgfAbgcIAMgNQAHgIACgIQAEgOgPgbIgSggQgZACgOAnQgOAmgHAuQgCAUgEAJQgHARgNADIgLAAIgKgBIgPAAQgIAAgFgDQgHgDgHgMIgXgnQgMgSgEgMQgFgQABgZQAAgaAEgZQAIg1AegQQALgGAbgDQAbgEALgGQANgHANgRIAUgfQASgZAcgRQAbgRAfgGQAfgFAgAHQAfAHAaATQARALAMARIAPAbIAOAhQALAdADAnQACAWAAAwQAAAggFARQgFAQgMARQgYAlgbAXQgXASg6AeQgHAEgEAEQgEAFgBAPIgBAqQgBANAEAIIAFAJQACAFAAAEQgCAIgMAAQgHAAgKgGgAB0raQgIgBgDgGQgBgIgCgEQgCgFgJgFQgJgGgCgEIgEgHIgEgHQgDgEgNgFQgLgFgDgGQgDgFACgHQACgGAFgEQAKgHAOABIAZACIAQgBQAJABAFAEQADADAEAJIAKAcQAEALgDAGQgCAEgHAHQgCADgCAJQgCAIgDADQgDAEgGAAIgCAAg");
	this.shape_15.setTransform(788.9071,272.2325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjMMaQgTgEgWgJIgngUQgNgHgGgFQgKgIgCgKQgHgDgRABQgQAAgGgEQgKgHgCgTQgDggAIgrQAMgxAEgYQAKhHAHgiQANg8AcgiQATgYAhgTQAWgMApgSICYhBQAbgNANgIQAWgOALgRQALgSADgbQACgSgCgfIgJiHQgBgWAJgGQALgGAQAKQAhATASAjQAWApgEBoQgFBkAaAsQAHAMARAWQAOAUACARQACAVgMAcQgLAcgRAdQgXApgYAgQgJANgHAEQgGAEgNADIgUAEQglALgSA1QgEAKgIAgQgHAbgGAPQgGANgMARIgVAdIgSAZQgLAOgMAHQgNAIgUADQgNACgXAAIgOAAQgWAAgPgCgAEPlhQgLgJAFgPQAFgMAMgHQAJgFAQgEIAagHQAMAAADABQAJADABAJQAAADgDAGQgLAVgLAHQgJAGgVAFQgJADgHAAQgKAAgGgFgAEwn3QgCgDAAgFIAAgIQgBgFgGgGIgJgLQgNgQgCghQgCgtAJgoQgHgEgMgDIgVgEQgagHgFgRIAAgBQgIgEgFgIQgFgIACgJQACgLANgGQAAgHACgFQAEgGANgFQAngQAeABQApACAVAbQAQAUACAjQACAkgPATIgOAOQgJAJgDAGQgFAJAAAZIACA/QAAASgFAHQgEAGgIABIgCAAQgGAAgDgFgAEsp9IACgCIAAgBIgCADg");
	this.shape_16.setTransform(791.3209,271.8332);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AijGNQgegEgPgTQgHgJgKgaQgJgYgLgJQgEgEgPgIQgNgIgFgGQgGgIgEgYQgGgqAAgXQABglANgaQAJgSAWgVQA5g5BiglIBlgnQA4gaAbgmQAigvAAhNIAAgfQAAgRAEgMQADgLAQgbIANgWQALgTAIgIQAMgOALAEQAIAEADAKQACALgEAPIgIAZQgIAlAYAsQAHANAPAXQASAZAGAKQAeAyAGA9QAHA8gSA2QgIAVgMADQgJACgKgJQgMgKgGgEQgNgIggABQgTABgIAGQgHAEgHARQgcBIAFBLIACAdQAAARgFALQgGAQgVATQggAdgagFQAEAIgGAJQgFAIgJAGQgYAPgjAIQgWAFgrAFQgTADgPAAIgVgCg");
	this.shape_17.setTransform(781.7843,313.1686);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNHzIgbgGQgIgCgRAAQgRABgJgCQgXgEgkgdQgagWgKgRQgLgWABg9QABg3gUgWQgNgOgWgGQgQgEgbgCQgagBgJgLQgFgHgCgSQgEglADgWQADggAQgVQAIgMAWgOQAqgfA2gTIBBgXQAkgQAPgaQAFgHAGgPIALgWQAJgOAOgJQAPgKAQgCIAPgCQAIgBAGgCQAPgHAJgYQANghAAgjQAAgOgFgnQgEgiACgTQAEgtAeggQAagdAwgTQAzgWA4gIQAegDADAQQADAPgXALQgHAcAIAdQAHAcATAWIAMANQAGAIADAHQAHATgOAUQgMARgVALIgnATQgZAKgNAKQgUANgJATQgLAVAFAUQAEAOAOAPIAYAYQAYAZAaA8QAdBCAGAoQAIBCgiApQgQAUgwAcQgtAbgQAXQgNATgKAqQgLAsgLASQgOAZgpAfQgdAWgTACIgEAAQgIAAgNgEg");
	this.shape_18.setTransform(770.7396,306.3535);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiCJFQgngUgTgnQgJgSADgSQACgUAQgEQALgBAEgDQAGgDABgIQABgGgCgHIgGgMIgGgLQgIgVAMgfQARgkAFgSQADgMABgWQABgYABgKIAIgcQAEgRgBgMQgBgcgagVQgYgSgggFIgzgIQgcgHgJgTQgHgNABgaQABgvAFgYQAHgbAag3IAzhlQAQggAKgOQASgaAogfQA3grAKgJQASgRAAgPQgCgagqgIQgUgFgJgEQgPgIgFgMQgHgWAcgaQAugrBGgTQA9gRBKADQAgABASAIQARAIARAQQAKAKARAWQAYAfAKAVQARAhADAuQADAcgDA2QgBAegCAOQgEAYgIASQgHAOgOARIgXAdQgRAWgQAfQgJARgRAnQgIATAFAJQAEAHAPAGQAQAFAFAGQAGAIgHALQgHALgKgDQAUBdgWBeQgVBfg6BKIgVAZQgMAPgHAKQgMARgPAeIgaAvQggA4gtAPQgOAEgPAAQgZAAgagNg");
	this.shape_19.setTransform(779.7558,295.7249);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AjiKmQgagGgUgSQgVgTgGgZQgFgYAJgnQAMgwAAgOQABgOgDgWQgEgaAAgLQAAgUAGgQQAHgSAPgJQAQgKATAIQATAJAAASQAjgXASgmQAPgcAEgoQADgXAAgxQAAgggFgTQgHgcgTgNIgOgJQgJgFgDgGQgGgNANgOIAagYQATgPALgeQAHgUAGglQADgWAAgKQAAgTgHgNQgIgPgcgTIhrhJQgQgLgFgIQgGgKgBgWQgDgkADgUQADgfAOgUQAUgbAwgSQBWgfBbAIQgbgZgjgIIgWgFQgMgFgFgIQgFgIADgLQACgLAIgHQAKgKAagIQgCgNAPgLQALgIASgEICsgqQAigIASACQAZAEAVAWQASATAJAcQAHAWACAgIADA3QACAaAVB4QAPBZgGA5QgLBehEBcQgNAQgJACQgIABgGgEQgHgFACgHQgugFgTANQgOAKgPAiQgVAyg1BhQgoBXACBDIAPBiQAJA7gPAkQgJAVgbAgQgWAbgMANQgTAVgUAMQglAYglAAQgNAAgNgCg");
	this.shape_20.setTransform(787.5317,284.3843);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhQMOQgugHgXgdQgNgRgFgbQgEgRgCgfQgGhLACgtIAGhWQAFg0gDghQgHhOgrhDIgegqQgRgZgHgUQgKggAGgtIAPhNQAOhMgKhNQgFgvAAgSQACgkASgVQAFgGAPgLQAMgLAGgIQAQgVgCguQgDg2AGgSQAGgRASgXIAegkQAWgkABg5IgFhkQgCgZAKgKQAKgIAUABQAjADAeAaQAaAXAQAjQAPAdAHAoQAEAZAEAvQACATgGAHQgKAJgOgJQgMgIgIgPQgHgPgLgJQgNgKgLAIQAAARgKAXIgQAoQgKAbACAgQACAlAWAOQASALAdgGQAtgKAhgeIAOgMQAIgGAIgBQAVgEAXAeQBABTAgBlQAgBmgGBoQgDAQgEAFQgHAGgMgBQgLgCgIgIIgPgQQgIgKgIgEQgNgHgSAFQgRAFgLAPQgPAVgBArQgBA8AeByQAeB1ABA4QABAjgNAQQgGAJgOAJIgXAQQgZAWgDAqQgDAdAJAuQAKAvgCAdQgDAqgYAXQgPAOgbAHQgQAEgeADQgdAEgWAAQgTAAgPgDg");
	this.shape_21.setTransform(765.4383,273.2524);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiHMXQgkgBgpgaQhLgugThGQgFgUACgRQADgVAMgLQANgKAZgDIApgFQAXgFAUgSQASgQAMgYQAJgTAHgbIAIgyQADgVAJgHQAGgGAOgCQARgDAGgDQALgHAFgRIAIgeQADgOANgbQAMgaACgPQAFgXgIgsQgGglgFgSQgKgfgOgUIgMgRQgGgKgBgJQgCgLAHgMIANgWQAdgugCg3QgDg6glghIh3AAQgTgBgHgHQgKgKAIgYQAJghAOgmQAUg7ATgfQAdguAogQQARgHAsgFQAogEAWAAQAiABAaAJQA3AUAlA8QAPAYAMAgIAVA7QAHAYgFAMQgIATgoACQAeA6AhBJQAhBHAJAxQAOBFgWA1QgNAcgUAWQgQASgpAbQgoAcgRARIgjApQgWAVgWACQADAbgWAzQgXA0ACAbQABALAJAeQAHAZgCAQQgCAWgXAdQggApgDAGQgGALgLAbQgJAagJANQgOAUgYALQgWAKgYAAIgCAAgAg7piQgFgDgDgFQgFgIgBgPIgHhDQgCgVAFgJQADgEAGgFIAKgJIALgLQAHgIAFgDQALgIAYgBIA0gDQANAAAFAEQAEAEADALQAEAFALAHQAIAHABAMQABAMgHAHQgHAGgQAEIgnAJQgPADgHADQgLAGgGAHQgEAHgFAOQgGARgMAXQgHAMgIACIgDAAQgEAAgEgCg");
	this.shape_22.setTransform(788.565,291.5761);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ai2NRQgEgDgEgIIgGgMQgHgPgWgOQgdgUgFgFQgQgPgKgaQgGgQgGgfQgEgUAAgKQgBgQAEgMQAIgVAbgRIAvgdQAPgMAZgeQAWgdAHgOQANgXAGglIALg/QAFgaAHgRQAQguAbgXQAPgOATgGQAVgGASAEQAKACAVAKQATAJAMABQAVADAVgOQATgMANgWQAagsgEgxQgCgVAAgJQgBgSAGgLQAKgSAYgIQAfgJAeAUQAeAUAEAgQADAOgDARIgIAeIgOA1QgHAZgHAOQgVAkhCAYQg1AUg1ALQgTADgGAIQgFAJAEAUIAEAjQAEAUAHANQAGAMATAUQAPAUAKAjQAIAcgFAQQgIAcgoAOQgIAEgWAGIgeAKQgjARgIAbQgFAPAFAcQAGAggBALQgBAVgNATQgNASgTAMQgdASg1AIIgKABQgIAAgEgCgABMgvQgZgLgVgUIgYgZQgQgSgFgJIgPgcIgNgXQgHgNgDgLQgGgfAVghIAKgPQAFgJAAgIQABgOgTgYIgYgcQgYAHgHApQgGAoACAuQACAUgCAKQgFASgNAFIgKACIgKABIgPAEQgIABgFgCQgIgBgJgMIgeghQgPgQgGgKQgIgPgEgZQgFgZAAgaQgDg1AagVQAKgJAagIQAagJAKgIQAMgJAJgUIAOghQANgdAYgWQAXgWAdgLQAegLAgABQAgABAcANQATAIAPAOIAUAYIAUAdQARAbAKAlQAHAVAJAwQAGAfgCASQgCAQgIAUQgRApgXAbQgTAXgyAoQgGAEgDAGQgDAFACAQIAGAoQACAOAFAGIAHAIQADAFAAAEQABAJgNADIgBAAQgGAAgKgEgAhvr1IgGgMQgDgEgJgEIgOgGIgEgHIgFgGQgFgEgNgCQgMgCgEgGQgEgFABgHQABgFAEgFQAIgJAPgCIAYgDIAQgEQAJgBAGAEQADACAFAIIAQAZQAGAKgCAHQgBAEgGAIIgCANQAAAHgCAFQgDAFgIABIgBAAQgHAAgDgFg");
	this.shape_23.setTransform(778.1275,357.4895);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhHNBQgOgCgdgGQgOgDgHgDQgMgGgFgIQgIgCgPAGQgPAEgIgCQgLgEgHgSQgMgdgEgsQgCgygDgZQgKhGgCgjQgFg9ASgpQAMgcAagbQARgSAkgdIB/hoQAXgUAKgLQASgUAFgUQAGgUgEgbQgEgRgKgeIgth/QgHgUAHgJQAIgIASAFQAlAJAbAcQAhAjAYBjQAYBiAlAjQAJAJAWARQAUAQAGAPQAIAUgEAfQgDAegIAgQgLAtgOAmQgFAPgGAGQgFAFgLAHIgSAJQghAWgDA3QgBALABAgQABAcgDAQQgCAPgHAUIgMAhIgKAeQgHAQgJAKQgLALgSAIQgMAGgWAGQgeAKgTACIgQABQgNAAgOgCgABwmQQgNgEABgRQABgNAKgKQAIgHANgIIAXgOQAMgEAEABQAJAAADAIQABADgBAHQgFAXgIAKQgHAIgTALQgOAIgKAAQgFAAgDgCgABnopQgDgCgBgFIgDgHQgCgGgHgDIgMgIQgRgMgLgfQgPgrgBgpQgJgCgMACIgUAAQgbABgKgPIAAgBQgJgCgGgGQgIgGgBgJQAAgMAKgJQgCgHABgFQADgHAKgJQAigaAbgHQAogJAdAUQAUAPAMAhQAMAigJAXIgKARQgGALgCAHQgCAKAHAYIATA7QAFASgDAIQgCAHgHACIgGACQgDAAgDgDgAA+qoIACgDIgBgBIgBAEg");
	this.shape_24.setTransform(776.3822,368.3003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{x:784.3052,y:289.1607}}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_7,p:{y:284.6521}}]},1).to({state:[{t:this.shape_7,p:{y:282.3521}}]},1).to({state:[{t:this.shape_8,p:{x:780.8551,y:273.0302}}]},1).to({state:[{t:this.shape_9,p:{x:777.8427,y:265.9147}}]},2).to({state:[{t:this.shape_10,p:{y:259.3786}}]},2).to({state:[{t:this.shape_11,p:{x:771.4788,y:311.7548}}]},2).to({state:[{t:this.shape_12,p:{x:777.6268,y:294.7728}}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_4,p:{x:774.2552,y:300.0607}}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_8,p:{x:783.1051,y:270.7302}}]},2).to({state:[{t:this.shape_9,p:{x:773.1927,y:267.0647}}]},2).to({state:[{t:this.shape_10,p:{y:259.3286}}]},2).to({state:[{t:this.shape_11,p:{x:770.3288,y:312.9048}}]},2).to({state:[{t:this.shape_12,p:{x:782.1768,y:293.5728}}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},2).to({state:[]},2).wait(34));

	// lightertop
	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.setTransform(837.15,-197.4,1,1,0,0,0,63.5,29.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({scaleX:0.9999,scaleY:0.9999,rotation:-52.9946,x:810.45,y:377.65},22,cjs.Ease.quartInOut).to({scaleX:0.9998,scaleY:0.9998,rotation:-2.999,x:817.95,y:368.7},1).wait(1).to({regX:0,regY:0,rotation:79.2353,x:845.5118,y:287.4491},0).wait(1).to({regX:63.5,regY:29.7,rotation:127.3274,x:834.2,y:347.6},0).to({rotation:166.0002,x:842.5,y:345},1).wait(1).to({regX:0,regY:0,scaleX:0.9999,scaleY:0.9999,rotation:143.4432,x:907.7967,y:329.0629},0).wait(1).to({rotation:127.4192,x:898.8634,y:309.2458},0).wait(1).to({rotation:116.8746,x:890.3047,y:297.4953},0).wait(1).to({regX:63.6,regY:29.6,rotation:111.0006,x:834.25,y:340.2},0).wait(1).to({regX:0,regY:0,rotation:132.2593,x:898.9375,y:313.0398},0).wait(1).to({rotation:147.189,x:903.7461,y:330.6083},0).wait(1).to({regX:63.5,regY:29.6,rotation:156.0009,x:834.25,y:340.15},0).wait(1).to({regX:0,regY:0,x:904.3004,y:341.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:63.5,regY:29.6,x:834.25,y:340.15},0).to({rotation:143.9996,x:823.6,y:418.6},8,cjs.Ease.quartInOut).to({rotation:11.9986,x:840.35,y:379.3},4).to({rotation:4.0001,x:834.75,y:370.85},3).to({scaleX:0.9998,scaleY:0.9998,rotation:-7.9996,x:834.7,y:370.8},8).to({rotation:-7.9996,x:834.05,y:-247.4},16,cjs.Ease.quartInOut).wait(4));

	// lighterbase
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(821.7,-177.45,1,1,0,0,0,47.8,-61.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(817.9,404,1,1,-59.9992,0,0,44,-61.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true,regX:44,rotation:-59.9992,x:817.9,y:404},22,cjs.Ease.quartInOut).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},22,cjs.Ease.quartInOut).to({regX:44.1,rotation:7.9993,y:362.8},4).to({scaleX:0.9999,scaleY:0.9999,rotation:-7.9995,y:362.75},4).to({rotation:-7.9995},40).to({regY:-61.5,rotation:-32.0006,x:817.85,y:445.9},8,cjs.Ease.quartInOut).to({rotation:9.9988,x:817.95,y:393.5},4).to({regX:44.2,rotation:-7.9988},3).to({rotation:-7.9988},8).to({y:-224.6},16,cjs.Ease.quartInOut).wait(4));

	// background
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#333333").ss(0.1,1,1,3,true).p("EhwlhPFMDgvAAAQDIAAAADIMAAACbDMjmjAAAMAAAibgQAAirCsAAg");
	this.shape_25.setTransform(631.825,427.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("EhzRBPGMAAAibgQAAirCsAAMDgvAAAQDIAAAADIMAAACbDg");
	this.shape_26.setTransform(631.825,427.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25}]}).to({state:[{t:this.shape_26},{t:this.shape_25}]},26).wait(88));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(533.1,55.3,837.4999999999999,879.7);
// library properties:
lib.properties = {
	id: '0F644BB1C1E9AB42A341A8159D9A023F',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0F644BB1C1E9AB42A341A8159D9A023F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;