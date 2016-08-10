module question_scenes {

    export class ResultScene extends createjs.Container {
        private reset_button: objects.SpriteObject = new objects.SpriteObject(core.buttonAtlas,"Reset",860,50);
        private menu_button: objects.SpriteObject = new objects.SpriteObject(core.buttonAtlas,"Menu",50,50);
        private background: objects.Background = new objects.Background("background");
        private results: objects.Label;
        private result_string: string;
        constructor() {
            super();
            var menu_btn = new createjs.ButtonHelper(this.menu_button);
            var reset_btn = new createjs.ButtonHelper(this.reset_button);
            menu_btn.overLabel = 5;
            menu_btn.outLabel = 4;
            reset_btn.overLabel = 3;
            reset_btn.outLabel = 2;
            if(core.wrong_ones) {
              this.result_string = "This is your score: "+core.score+"\n";
              for(var wrong in core.wrong_ones){
                  var str = core.wrong_ones[wrong];
                  this.result_string+="Wrong answer: "+str.answer;
                  this.result_string+=" on question number "+str.question_num+"\n";
                  this.result_string+= str.question+"\n\n";
              }
              this.results  = new objects.Label(this.result_string ,"20px", 
                                    "Intubli_q", "BLACK", 512, 290, true);
            var self = this;
            document.getElementById('canvas').addEventListener("wheel", function(event:WheelEvent) {
            self.results.y -= event.deltaY;
            self.results.double.y -= event.deltaY;
            });
            }
            this.alpha = 0;
            this.addChild(this.background);
            this.addChild(this.reset_button);
            this.addChild(this.menu_button);
            this.addChild(this.results);
            this.addChild(this.results.double);
            this.menu_button.on("click", function() {
                 //createjs.Tween.get(this).to({ alpha: 0 }, 1000);
                core.scene = "MENU";
                core.changeScene();
            }); 
                this.reset_button.on("click", function() {
                //createjs.Tween.get(this).to({ alpha: 0 }, 1000);
                core.scene = "Q_1";
                core.reset();
                core.changeScene();
            });   
                core.transition(this);
        }

        private getAnswer(ans :objects.WrongAns): string {
            return ans.answer;
        }

        private getQuestionNum(ques: objects.WrongAns): string {
            return ques.question_num;
        }

    }
}