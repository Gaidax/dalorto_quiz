module objects {
    /**
     * This is a generic Label class for the Game BoilerPlate
     * 
     * @export
     * @class Label
     * @extends {createjs.Text}
     */
    export class Label extends createjs.Text {
        public double: createjs.Text;
        constructor(
            private labelString: string,
            private fontSize: string,
            private fontFamily: string,
            private fontColour: string,
            x: number,
            y: number,
            isCentered: boolean) {
            super(labelString, (fontSize + " " + fontFamily), fontColour);
            if (isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
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
    }
}