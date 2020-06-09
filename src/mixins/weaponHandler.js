export default {
    methods: {
        weaponPrepare: function (data) {
            this.bullet.x = data.tank.x + data.tank.width / 2 - this.bullet.width / 2;
            this.bullet.y = data.tank.y + data.tank.height / 2 - this.bullet.height / 2;
            this.bullet.load--;
            this.bullet.vectorX = -1 * data.tank.vector[0];
            this.bullet.vectorY = -1 * data.tank.vector[1];
           
            this.bullet.deg = data.cannon.deg;
            if (this.bullet.deg >= 180) {
                this.bullet.deg -= 180;
            }
            //設定武器
            let type = this.bullet.type;
            if (type == 1) {
                
                this.bullet.width = 30;
                this.bullet.height = 10;
                this.bullet.speed = 5;
                this.bullet.color = 'rgb(224, 140, 12)';
            }
            else if (type == 2) {
                
            
                this.bullet.width = 30;
                this.bullet.height = 10;
                this.bullet.speed = 10;
                this.bullet.color = 'red';
            }
            else if (type == 3) {
              
                this.bullet.speed = 5;
                this.bullet.color = 'green';
                this.bullet.width = 70;
                this.bullet.height = 70;
            }
        },
        weaponFly: function (X, Y) {
            this.bullet.x += this.bullet.speed * X;
            this.bullet.y += this.bullet.speed * Y;
        }
    }
}