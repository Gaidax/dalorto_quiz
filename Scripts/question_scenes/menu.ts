module question_scenes {

    export class MenuScene extends createjs.Container {
        private start_btn = new objects.Button("Start_the_Quizz", 200,200, true);
        private background = new objects.Background("menu_back");
        constructor() {
            super();
            core.reset();

            this.alpha = 0;
            this.addChild(this.background);
            this.addChild(this.start_btn);
            this.start_btn.on("click", function() {
                //createjs.Tween.get(this).to({ alpha: 0 }, 1000);
                core.scene = "Q_1";
                core.changeScene();
            });
            core.transition(this);  
        }

    }
}