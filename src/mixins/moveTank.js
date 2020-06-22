export default {
    methods: {
        moveTank: function () {

            const tmp_x = this.tank.x;
            const tmp_y = this.tank.y;
            if (this.tank.right) {
                this.tank.x += Number(this.tank.step);
            }
            if (this.tank.left) {
                this.tank.x -= this.tank.step;
            }
            if (this.tank.up) {
                this.tank.y -= this.tank.step;
            }
            if (this.tank.down) {
                this.tank.y += Number(this.tank.step);
            }

            if (this.collision()) {
                if (this.tank.right) {
                    this.tank.x = tmp_x;
                }
                if (this.tank.left) {
                    this.tank.x = tmp_x
                }
                if (this.tank.up) {
                    this.tank.y = tmp_y;
                }
                if (this.tank.down) {
                    this.tank.y = tmp_y;
                }
            }

            const top = this.tank.y;
            const bottom = this.tank.y + this.tank.height;
            const left = this.tank.x;
            const right = this.tank.x + this.tank.width;
            //碰到邊界
            if (this.tank.x < 0) {
                this.tank.x = 0;
            }
            if (this.tank.y < 0) {
                this.tank.y = 0;
            }
            if (this.tank.x + this.tank.width >= this.$store.getters.currentMap.width) {
                this.tank.x = tmp_x;
            }
            if (this.tank.y + this.tank.height >= this.$store.getters.currentMap.height) {
                this.tank.y = tmp_y;
            }
            //碰到牆
            for (var i of this.$store.getters.currentMap.walls) {
                let wall_top = i.y;
                let wall_bottom = i.y + i.height;
                let wall_left = i.x;
                let wall_right = i.x + i.width;

                if (bottom >= wall_top && top <= wall_bottom && left <= wall_right && right >= wall_left) {
                    this.tank.x = tmp_x;
                    this.tank.y = tmp_y;
                }
            }

            //撿寶
            let k = this.$store.state.treasures;
            if (k.droped) {
                let treasure_top = k.y;
                let treasure_bottom = k.y + k.height;
                let treasure_left = k.x;
                let treasure_right = k.x + k.width;
                if (bottom >= treasure_top && top <= treasure_bottom && left <= treasure_right && right >= treasure_left) {
                    k.droped = false;
                    this.tank.points++;
                }
            }



        }
    }
}