module question_scenes {

    export class ResultScene extends createjs.Container {
        private reset_button: objects.SpriteObject = new objects.SpriteObject(core.buttonAtlas,"Reset",860,50);
        private menu_button: objects.SpriteObject = new objects.SpriteObject(core.buttonAtlas,"Menu",50,50);
        private background: objects.Background = new objects.Background("background");
        private results: objects.Label;
        private result_string: string;
        private arrow: createjs.Shape;
        constructor() {
            super();
            disableScroll();
            var menu_btn = new createjs.ButtonHelper(this.menu_button);
            var reset_btn = new createjs.ButtonHelper(this.reset_button);
            menu_btn.overLabel = 5;
            menu_btn.outLabel = 4;
            reset_btn.overLabel = 3;
            reset_btn.outLabel = 2;
            if(core.wrong_ones) {
              this.result_string = "PUNTEGGIO: "+core.score+"\n";
              for(var wrong in core.wrong_ones){
                  var str = core.wrong_ones[wrong];
                  this.result_string+="Risposta Errata: "+str.answer;
                  this.result_string+=" su domanda "+str.question_num+"\n";
                  this.result_string+= str.question+"\n\n";
              }
              this.results  = new objects.Label(this.result_string ,"20px", 
                                    "Intubli_q", "BLACK", 512, 290, true);
            var self = this;
            document.getElementById('canvas').addEventListener("wheel", function(event:WheelEvent) {
            var change = self.results.y - event.deltaY;
            var check = self.results.getMeasuredHeight();
            if(change <= check+160 && change >= -check+200){
        
            self.results.y = change;
            self.results.double.y = change;
            }
            });

            //this.on("pressmove", function(evt: createjs.MouseEvent) {
            //this.results.y = evt.stageY;
            //this.results.double.y = evt.stageY;
            //this.results.x = evt.stageX;
            //this.results.double.x = evt.stageX;
            //core.stage.update();
            //});

            this.alpha = 0;
            this.addChild(this.background);
            this.addChild(this.reset_button);
            this.addChild(this.menu_button);
            this.addChild(this.results);
            this.addChild(this.results.double);
            this.menu_button.on("click", function() {
                 //createjs.Tween.get(this).to({ alpha: 0 }, 1000);
                 enableScroll();
                core.scene = "MENU";
                core.changeScene();
            }); 
                this.reset_button.on("click", function() {
                //createjs.Tween.get(this).to({ alpha: 0 }, 1000);
                enableScroll();
                core.scene = "Q_1";
                core.reset();
                core.changeScene();
            });   
                core.transition(this);
        }
        }
    }

 var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}
}
