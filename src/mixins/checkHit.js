export default {
    methods: {

        checkHit: function () {

            let deg = this.bullet.deg;
            let x = this.bullet.x;
            let y = this.bullet.y + this.bullet.height / 2;
            if (deg >= 0 && deg <= 90) {
                y -= this.bullet.width / 2 * Math.sin(deg * Math.PI / 180)
                x += this.bullet.width / 2 * (1 - Math.cos(deg * Math.PI / 180))
            }
            if (deg >= 90 && deg <= 180) {
                y -= this.bullet.width / 2 * (1 - Math.sin(deg * Math.PI / 180))
                x += this.bullet.width + this.bullet.width / 2 * Math.abs(Math.cos(deg * Math.PI / 180))
            }
            if (deg >= 180 && deg <= 270) {
                y += this.bullet.width / 2 * Math.abs(Math.sin(deg * Math.PI / 180))
                x += this.bullet.width + this.bullet.width / 2 * Math.abs(Math.cos(deg * Math.PI / 180))
            }
            if (deg >= 270 && deg <= 360) {
                y -= this.bullet.width / 2 * Math.abs(Math.sin(deg * Math.PI / 180))
                x += this.bullet.width / 2 * (1 - Math.abs(Math.cos(deg * Math.PI / 180)))
            }

            let centerX = this.enemyCenter[0];
            let centerY = this.enemyCenter[1];
            let distence = Math.sqrt(Math.pow((x - centerX), 2) + Math.pow((y - centerY), 2));
            if (distence <= this.opponent.tank.height / 2) {
                this.$store.commit('resetControl');
                return true;
            }
            return false;
        }
    }
}