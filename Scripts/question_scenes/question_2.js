var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_scenes;
(function (question_scenes) {
    var Question_25 = (function (_super) {
        __extends(Question_25, _super);
        function Question_25() {
            _super.call(this, "button_go_inside", "button_go_away", "button_go_inside", "button_go_away", "stage1_back", "ooga");
            this.choice_1.on("click", function () {
                this.fade_out();
                core.scene = this.key + 1;
                core.changeScene();
            });
        }
        Question_25.key = 0;
        return Question_25;
    }(objects.Scene));
    question_scenes.Question_25 = Question_25;
})(question_scenes || (question_scenes = {}));
//# sourceMappingURL=question_2.js.map