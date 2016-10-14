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
    }
}