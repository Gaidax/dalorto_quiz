module question_scenes {

    export class MenuScene extends createjs.Container {
        private start_btn = new objects.Button("Start_the_Quizz", 200,200, true);
        private background = new objects.Background("menu_back");
        constructor() {
            super();
            core.stage.removeAllChildren();
            this.addChild(this.background);
            this.addChild(this.start_btn);
            this.start_btn.on("click", function() {
                core.scene = "Q_1";
                core.changeScene();
            });  
            createjs.Tween.get(this).to({ alpha: 1 }, 2000);               
            core.stage.addChild(this);
        }

    }
}