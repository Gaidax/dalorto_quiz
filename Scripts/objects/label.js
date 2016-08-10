var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is a generic Label class for the Game BoilerPlate
     *
     * @export
     * @class Label
     * @extends {createjs.Text}
     */
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label(labelString, fontSize, fontFamily, fontColour, x, y, isCentered) {
            _super.call(this, labelString, (fontSize + " " + fontFamily), fontColour);
            this.labelString = labelString;
            this.fontSize = fontSize;
            this.fontFamily = fontFamily;
            this.fontColour = fontColour;
            if (isCentered) {
                //this.regX = (this.getMeasuredWidth() * this.scaleX)/2;
                //this.regY = (this.getMeasuredHeight() * this.scaleY)/2;
                this.textAlign = 'center';
                //this.lineWidth = 200;
                this.lineHeight = 50;
            }
            // assign label coordinates
            this.x = x;
            this.y = y;
            this.double = this.clone();
            this.double.color = "WHITE";
            this.outline = 3;
            this.double.outline = 0;
            this.double.x = x;
            this.double.y = y;
        }
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map