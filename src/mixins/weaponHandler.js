export default {
    data() {
        return {
            mineTimeout1: {},
            mineTimeout2: {}
        }
    },
    methods: {
        weaponPrepare: function () {
            this.bullet.fired = true;
            this.bullet.exploded = false;
            this.bullet.vectorX = -1 * this.tank.tank.vector[0];
            this.bullet.vectorY = -1 * this.tank.tank.vector[1];

            this.bullet.deg = this.tank.cannon.deg;
            if (this.bullet.deg >= 180) {
                this.bullet.deg -= 180;
            }
            //設定武器
            let type = this.bullet.type;
            if (type == 1) {
                this.bullet.zIndex = 1;

                this.bullet.width = 30;
                this.bullet.height = 10;
                this.bullet.speed = this.bullet.special_speed[0];
                this.bullet.color = 'rgb(224, 140, 12)';
                this.bullet.x = this.tank.tank.x + this.tank.tank.width / 2 - this.bullet.width / 2;
                this.bullet.y = this.tank.tank.y + this.tank.tank.height / 2 - this.bullet.height / 2;
            }
            else if (type == 2) {
                this.bullet.zIndex = 1;


                this.bullet.width = 30;
                this.bullet.height = 10;
                this.bullet.speed = this.bullet.special_speed[1];
                this.bullet.color = 'red';
                this.bullet.x = this.tank.tank.x + this.tank.tank.width / 2 - this.bullet.width / 2;
                this.bullet.y = this.tank.tank.y + this.tank.tank.height / 2 - this.bullet.height / 2;
            }
            else if (type == 3) {
                this.bullet.zIndex = 1;

                this.bullet.speed = this.bullet.special_speed[2];
                this.bullet.color = 'rgb(12, 182, 224)';
                this.bullet.width = 30;
                this.bullet.height = 30;
                this.bullet.x = this.tank.tank.x + this.tank.tank.width / 2;
                this.bullet.y = this.tank.tank.y + this.tank.tank.height / 2;
            }
        },
        weaponFly: function (X, Y) {
            if (this.bullet.type != 3) {
                this.bullet.x += this.bullet.speed * X;
                this.bullet.y += this.bullet.speed * Y;
            }
            else if (this.bullet.type == 3) {
                if (this.bullet.speed > 0) {
                    this.bullet.x += this.bullet.speed * X;
                    this.bullet.y += this.bullet.speed * Y;
                }
                let x = this.bullet.x;
                let y = this.bullet.y;
                const bullet_centerX = x + this.bullet.width / 2;
                const bullet_centerY = y + this.bullet.height / 2;
                let centerX = this.enemyCenter[0];
                let centerY = this.enemyCenter[1];

                let d = Math.sqrt(Math.pow((bullet_centerX - centerX), 2) + Math.pow((bullet_centerY - centerY), 2));
                if (d <= this.opponent.tank.height * 2) {
                    if (this.mine[0]) {
                        this.mine[0]= false;
                        this.mineExplode();
                    }
                }

            }


        }, mineExplode: function () {
            this.bullet.color = 'yellow';
            // this.explodeAnim();
            console.log('mineExplode')
            this.mineTimeout1 = setTimeout(this.explodeAnim, this.bullet.mineExplodeTime*1000);
        },
        explodeAnim: function () {
            this.bullet.zIndex = 200;
            this.bullet.width = 400;
            this.bullet.height = 400;
            this.bullet.x -= this.bullet.width / 2 + 15;
            this.bullet.y -= this.bullet.height / 2 + 15;
            console.log('explodeAnim')

            setTimeout(this.explodeAnim2, 100);
        }, explodeAnim2: function () {
            this.bullet.color = 'red'
            console.log('explodeAnim')

            this.mineTimeout2 = setTimeout(this.exploded, 100);
        },
        exploded: function () {
            this.bullet.fired = false;
            this.bullet.exploded = true;
            this.mine[0] = true;
            this.mine[1] = true;

            console.log('exploded')
        }
    },

}
