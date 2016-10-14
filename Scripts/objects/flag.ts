/**
 * @author Vasyl Milchevskyi zuuutyan@gmail.com
 * @version 0.01 - Initial version of the button class
 */

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * This is the generic objects namespace
 * 
 * @module objects
 */
module objects {
    /**
     * This simple Button class extends the createjs.Bitmap object.
     * It includes two private methods to handle mouseover and mouseout events.
     * 
     * @export
     * @class Button
     * @extends {createjs.Bitmap}
     */
    export class Flag extends objects.SpriteObject {
        private button_option: objects.Label;
        public option_text: string;

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
        constructor(imageString: string, x:number, y:number, isCentered:boolean) {
            super(core.countryAtlas, imageString, x,y);
            this.name = imageString;
            // Check if user wants to change regX and regY values to the center 
            if(isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            this.option_text = this.get_tip();

            // binds the mouseover and mouseout events to the button object
            this.on("mouseover", this._mouseOver, this);
            this.on("mouseout", this._mouseOut, this)
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++

        /**
         * This is an event handler for the mouseover event
         * 
         * @private
         * @method _mouseOver
         * @param {createjs.MouseEvent} event
         */
        private _mouseOver(event:createjs.MouseEvent):void {
            this.alpha = 0.7;
            this.filters = [
                //new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0),
                new createjs.BlurFilter(5, 5, 10),
            ];
            this.cache(0, 0, 300, 300);
            this.button_option = new objects.Label(this.option_text, "20px", 
            "Intubli_q", "BLACK", this.x, this.y+100, true);

            core.stage.addChild(this.button_option);
            core.stage.addChild(this.button_option.double);
        }

        /**
         * This is an event handler for the mouseout event
         * 
         * @private
         * @method _mouseOut
         * @param {createjs.MouseEvent} event
         */
        private _mouseOut(event:createjs.MouseEvent):void {
            this.alpha = 1.0;
            this.filters = [];
            this.updateCache();
            core.stage.removeChild(this.button_option);
            core.stage.removeChild(this.button_option.double);
        }

        private get_tip(): string {
            var str = this.name;
            if(str.indexOf('_') >= 0){        
                return str.split('_').join(' ');
            }
            return str;
        }

    private getVariableName <TResult>(name: () => TResult):string {
    var varExtractor = new RegExp("return (.*);");
    var m = varExtractor.exec(name + "");
    if (m == null) throw new Error("The function does not contain a statement matching 'return variableName;'");
    return m[1].replace(/^\D+/g, "");
}
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++