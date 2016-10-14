module question_scenes {
//200,200
    export class MenuScene extends createjs.Container {
        private start_btn = new objects.SpriteObject(core.buttonAtlas,"Start", 450,595);
        private title = new createjs.Bitmap(core.assets.getResult("title")); // 325,595);
        private background = new objects.Background("background");
        constructor() {
            super();
            core.stage.removeAllChildren();
            var start_b = new createjs.ButtonHelper(this.start_btn);
            start_b.overLabel = 1;
            start_b.outLabel = 0;
            this.alpha = 0;
            this.addChild(this.background);
            this.addChild(this.start_btn);
            this.title.x = 200;
            this.title.y = 165;
            this.addChild(this.title);
            this.start_btn.on("click", function() {
                core.reset_q();
            });
        }

    }
}