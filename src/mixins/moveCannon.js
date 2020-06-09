export default {
    methods: {
        moveCannon: function () {
            if (this.cannon.clockWise) {
            this.cannon.deg += this.cannon.degStep;
            }
            if (this.cannon.counterClockWise) {
                this.cannon.deg -= this.cannon.degStep;
            }
            this.cannon.deg = this.cannon.deg%360;
            if(this.cannon.deg<=0){
                this.cannon.deg+=360;
            }

        }
    }
}