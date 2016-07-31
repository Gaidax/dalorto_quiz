module question_scenes {

    export class Question_3 extends objects.Scene {
        private static key: number = 0;
        constructor() {
            super("button_go_inside",
                "button_go_away", "button_go_inside",
                "button_go_away", "stage1_back", "ooga");               
            this.choice_1.on("click", function () {
                this.fade_out();
                core.scene = this.key+1;
                core.changeScene();
            });
        }

    }
}