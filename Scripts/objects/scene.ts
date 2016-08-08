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
        private question_text: string;
        protected choice_1: objects.Flag;
        protected choice_2: objects.Flag;
        protected choice_3: objects.Flag;
        protected choice_4: objects.Flag;
        private btn_cont: objects.Flag[];
        private reset_button: objects.SpriteObject = new objects.SpriteObject(core.buttonAtlas,"Reset",800,50);
        private menu_button: objects.SpriteObject = new objects.SpriteObject(core.buttonAtlas,"Menu",50,50);
        protected background: objects.Background = new objects.Background("background");
        protected vegie_sprite: objects.SpriteObject;
        protected question_text_label: objects.Label;
        private 

        constructor(button_add1: string,
            button_add2: string, button_add3: string, button_add4: string,
               right:string, curent: number,
            q_text: string, sprite?: string) {
            super();
            var menu_btn = new createjs.ButtonHelper(this.menu_button);
            var reset_btn = new createjs.ButtonHelper(this.reset_button);
            menu_btn.overLabel = 4;
            menu_btn.outLabel = 3;
            reset_btn.overLabel = 2;
            reset_btn.outLabel = 1;
            this.choice_1 = new objects.Flag(button_add1,200,550, false);
            this.choice_2 = new objects.Flag(button_add2,400,550, false);
            this.choice_3 = new objects.Flag(button_add3,500,550, false);
            this.choice_4 = new objects.Flag(button_add4,600,550, false);
            this.btn_cont = new Array<objects.Flag>();
            this.btn_cont =[this.choice_1, this.choice_2, this.choice_3,
            this.choice_4];
            this.question_text_label = new objects.Label(q_text,"50px", 
                                    "Intubli_q", "BLACK", 1030, 290, true);
            if(sprite) {
            this.vegie_sprite = new objects.SpriteObject(core.veggiesAtlas, sprite, 520, 320);
            }
            this.key = curent;
            this.right_ans = right;
            this.question_text = q_text;           
            this.Start();
        }
        /**
         * Add game objects to the scene in this method
         * 
         * @method Start
         * @returns {void}
         */
        public Start():void {        

            this.alpha = 0;
            this.addChild(this.background);
            this.addChild(this.choice_1);
            this.addChild(this.choice_2);
            this.addChild(this.choice_3);
            this.addChild(this.choice_4);
            this.addChild(this.menu_button);
            this.addChild(this.reset_button);
            if(this.vegie_sprite) {
                
            this.addChild(this.vegie_sprite); 
            
            }
            this.addChild(this.question_text_label);
            this.addChild(this.question_text_label.double);


            this.onClick();
             core.transition(this);
        }

        protected onClick(): void {
            var key = this.key;
            var right_key = this.right_ans;
            var q_text = this.question_text;
            this.menu_button.on("click", function(){
                core.scene = "MENU";
                core.changeScene();
            });
            this.reset_button.on("click", function(){
                core.scene = "Q_1";
                core.reset();
                core.changeScene();
            });
            this.btn_cont.forEach(button =>{
                button.on("click", function(){
                    
                    if(this.name == right_key){
                        core.score++;
                        console.log(core.score);           
                    } else {
                        let wrong = {question_num: key.toString(), answer: this.name,
                            question: q_text};
                        core.wrong_ones.push(wrong);
                        console.log(core.wrong_ones[0]);
                        
                    }
                if(key+1 <= 2) {

                core.scene = config.Scene_questions[key+1];

                } else {
                    core.scene = "RESULTS";
                }
                core.changeScene();
            });
                });
    }
}
}