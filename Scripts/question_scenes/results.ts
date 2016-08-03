module question_scenes {

    export class ResultScene extends createjs.Container {
        private reset_button: objects.Button = new objects.Button("reset_btn",800,50, false);
        private menu_button: objects.Button = new objects.Button("menu_btn",50,50, false);
        private background: objects.Background;
        private results: objects.Label;
        private result_string: string;
        constructor() {
            super();
        
            if(core.wrong_ones) {
              this.result_string = "This is your score: "+core.score+"\n";
              for(var wrong in core.wrong_ones){
                  var str = core.wrong_ones[wrong];
                  this.result_string+="Wrong answer: "+str.answer;
                  this.result_string+=" on question number "+str.question_num+"\n";
                  this.result_string+= str.question+"\n\n";
              }
              this.results  = new objects.Label(this.result_string ,"20px", 
                                    "Pattaya", "BLUE", 1330, 290, true);
            }
            this.alpha = 0;
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