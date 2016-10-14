/**
 * @author Vasyl Milchevskyi zuuutyan@gmail.com
 * @version 0.01 - Initial version of the button class
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * This is the generic objects namespace
 *
 * @module objects
 */
var objects;
(function (objects) {
    /**
     * This simple Button class extends the createjs.Bitmap object.
     * It includes two private methods to handle mouseover and mouseout events.
     *
     * @export
     * @class Button
     * @extends {createjs.Bitmap}
     */
    var Flag = (function (_super) {
        __extends(Flag, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Button.
         *
         * @constructor
         * @param {string} pathString
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         */
        function Flag(imageString, x, y, isCentered) {
            _super.call(this, core.countryAtlas, imageString, x, y);
            this.name = imageString;
            // Check if user wants to change regX and regY values to the center 
            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            this.option_text = this.get_tip();
            // binds the mouseover and mouseout events to the button object
            this.on("mouseover", this._mouseOver, this);
            this.on("mouseout", this._mouseOut, this);
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This is an event handler for the mouseover event
         *
         * @private
         * @method _mouseOver
         * @param {createjs.MouseEvent} event
         */
        Flag.prototype._mouseOver = function (event) {
            this.alpha = 0.7;
            this.filters = [
                //new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0),
                new createjs.BlurFilter(5, 5, 10),
            ];
            this.cache(0, 0, 300, 300);
            this.button_option = new objects.Label(this.option_text, "20px", "Intubli_q", "BLACK", this.x, this.y + 100, true);
            core.stage.addChild(this.button_option);
            core.stage.addChild(this.button_option.double);
        };
        /**
         * This is an event handler for the mouseout event
         *
         * @private
         * @method _mouseOut
         * @param {createjs.MouseEvent} event
         */
        Flag.prototype._mouseOut = function (event) {
            this.alpha = 1.0;
            this.filters = [];
            this.updateCache();
            core.stage.removeChild(this.button_option);
            core.stage.removeChild(this.button_option.double);
        };
        Flag.prototype.get_tip = function () {
            var str = this.name;
            if (str.indexOf('_') >= 0) {
                return str.split('_').join(' ');
            }
            return str;
        };
        Flag.prototype.getVariableName = function (name) {
            var varExtractor = new RegExp("return (.*);");
            var m = varExtractor.exec(name + "");
            if (m == null)
                throw new Error("The function does not contain a statement matching 'return variableName;'");
            return m[1].replace(/^\D+/g, "");
        };
        return Flag;
    }(objects.SpriteObject));
    objects.Flag = Flag;
})(objects || (objects = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=flag.js.map