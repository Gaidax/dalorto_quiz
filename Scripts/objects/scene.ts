/// <reference path="../core/game.ts"/>

module objects {
    /**
     * This abstract scene class is used to create individual scenes
     * 
     * @export
     * @abstract
     * @class Scene
     * @extends {createjs.Container}
     */
    export abstract class Scene extends createjs.Container {

        private key: number;
        private right_ans: string;
        protected choice_1: objects.Button;
        protected choice_2: objects.Button;
        protected choice_3: objects.Button;
        protected choice_4: objects.Button;
        private btn_cont: objects.Button[];
        private reset_button: objects.Button = new objects.Button("reset_btn",400,550, false);
        private menu_button: objects.Button = new objects.Button("menu_btn",100,550, false);
        protected background: objects.Background;
        protected vegie_sprite: objects.Vegetable;
        protected question_text: objects.Label;

        constructor(button_add1: string,
            button_add2: string, button_add3: string, button_add4: string,
             set_background: string,  right:string, curent: number,
            q_text: string, sprite?: string) {
            super();
            this.choice_1 = new objects.Button(button_add1,100,350, false);
            this.choice_2 = new objects.Button(button_add2,200,350, false);
            this.choice_3 = new objects.Button(button_add3,300,350, false);
            this.choice_4 = new objects.Button(button_add4,400,350, false);
            this.btn_cont = new Array<objects.Button>();
            this.btn_cont =[this.choice_1, this.choice_2, this.choice_3,
            this.choice_4];
            this.background = new objects.Background(set_background);
            this.question_text = new objects.Label(q_text,"50px", 
                                    "Pattaya", "BLUE", 800, 440, false);
            if(sprite) {
            this.vegie_sprite = new objects.Vegetable(sprite, 560, 200);
            }
            this.key = curent;
            this.right_ans = right;
            this.Start();
        }
        /**
         * Add game objects to the scene in this method
         * 
         * @method Start
         * @returns {void}
         */
        public Start():void {
            core.stage.removeAllChildren();

            this.alpha = 0;

            this.addChild(this.background);
            this.addChild(this.choice_1);
            this.addChild(this.choice_2);
            this.addChild(this.choice_3);
            this.addChild(this.choice_4);
            this.addChild(this.menu_button);
            this.addChild(this.reset_button);
            this.addChild(this.question_text);
            this.addChild(this.question_text.double);

            if(this.vegie_sprite) {
                
            this.addChild(this.vegie_sprite); 
            
            }

            this.onClick();

            createjs.Tween.get(this).to({ alpha: 1 }, 2000); 
            core.stage.addChild(this);
        }

        protected onClick(): void {
            var key = this.key+1;
            var right_key = this.right_ans;
            createjs.Tween.get(this).to({ alpha: 0 }, 1000);
            this.menu_button.on("click", function(){
                core.scene = "MENU";
                core.changeScene();
            });
            this.reset_button.on("click", function(){
                core.scene = "Q_1";
                core.score = 0;
                core.changeScene();
            });
            this.btn_cont.forEach(button =>{
                button.on("click", function(){
                    console.log(right_key);
                    console.log(this.name);
                    
                    if(this.name == right_key){
                        core.score++;
                        console.log(core.score);
                        
                    }
                if(key <= 3) {
                core.scene = config.Scene_questions[key];
                } else {
                    core.scene = "MENU";
                }
                core.changeScene();
            });
                });
    }
}
}