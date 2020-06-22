export default {
    data() {
        return {
            a: {},
            b: {}, c: {}
        }
    },
    methods: {

        checkHit: function () {
            if (this.opponent.tank.reviving) {
                return false;
            }
            // let deg = this.bullet.deg;
            let x = this.bullet.x;
            let y = this.bullet.y;
            let bullet_centerX = x + this.bullet.width / 2;
            let bullet_centerY = y + this.bullet.height / 2;
            // if (deg >= 0 && deg <= 90) {
            //     y -= this.bullet.width / 2 * Math.sin(deg * Math.PI / 180)
            //     x += this.bullet.width / 2 * (1 - Math.cos(deg * Math.PI / 180))
            // }
            // if (deg >= 90 && deg <= 180) {
            //     y -= this.bullet.width / 2 * (1 - Math.sin(deg * Math.PI / 180))
            //     x += this.bullet.width + this.bullet.width / 2 * Math.abs(Math.cos(deg * Math.PI / 180))
            // }
            // if (deg >= 180 && deg <= 270) {
            //     y += this.bullet.width / 2 * Math.abs(Math.sin(deg * Math.PI / 180))
            //     x += this.bullet.width + this.bullet.width / 2 * Math.abs(Math.cos(deg * Math.PI / 180))
            // }
            // if (deg >= 270 && deg <= 360) {
            //     y -= this.bullet.width / 2 * Math.abs(Math.sin(deg * Math.PI / 180))
            //     x += this.bullet.width / 2 * (1 - Math.abs(Math.cos(deg * Math.PI / 180)))
            // }

            let centerX = this.enemyCenter[0];
            let centerY = this.enemyCenter[1];
            let distence = Math.sqrt(Math.pow((x - centerX), 2) + Math.pow((y - centerY), 2));
            if (this.bullet.type == 3) {
                let d = Math.sqrt(Math.pow((bullet_centerX - centerX), 2) + Math.pow((bullet_centerY - centerY), 2));
                this.bullet.mine = false;

                return d <= this.opponent.tank.height / 2 + this.bullet.height / 2 && this.bullet.exploded;

            }
            else {
                if (distence <= this.opponent.tank.height / 2) {
                    this.bullet.fired = false;
                    return true;
                }
            }
            return false;
        },
        reviving: function () {
            this.opponent.tank.color = "gray";
            this.opponent.tank.reviving = true;
            this.c = setTimeout(this.checkRevive, this.opponent.tank.revivingTime * 1000);
            this.a = setInterval(this.revivingAnimBack, 400);
            this.b = setTimeout(this.revivingAnim, 200);
        },
        revivingAnimBack: function () {
            this.opponent.tank.color = this.opponent.tank.originColor;
        },
        revivingAnim: function () {
            this.d = setInterval(this.revivingAnim2, 400);
        },
        revivingAnim2: function () {
            this.opponent.tank.color = 'gray';
        },
        checkRevive: function () {
            this.opponent.tank.reviving = false;
            window.clearInterval(this.a);
            window.clearInterval(this.d);
            window.clearTimeout(this.b);
            this.opponent.tank.color = this.opponent.tank.originColor;

        },
    }
}