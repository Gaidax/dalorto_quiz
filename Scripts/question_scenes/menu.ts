module question_scenes {
//200,200
    export class MenuScene extends createjs.Container {
        private start_btn = new objects.SpriteObject(core.buttonAtlas,"start", 450,595);
        private title = new createjs.Bitmap(core.assets.getResult("title")); // 325,595);
        private background = new objects.Background("background");
        constructor() {
            super();
            core.reset();
            var start_b = new createjs.ButtonHelper(this.start_btn);
            this.alpha = 0;
            this.addChild(this.background);
            this.addChild(this.start_btn);
            this.title.x = 200;
            this.title.y = 165;
            this.addChild(this.title);
            this.start_btn.on("click", function() {
                //createjs.Tween.get(this).to({ alpha: 0 }, 1000);
                core.scene = "Q_1";
                core.changeScene();
            });
            core.transition(this);  
        }

    }
}