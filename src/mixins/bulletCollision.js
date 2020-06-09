export default{
    methods: {
        bulletCollision: function(){
            const top = this.bullet.y;
            const bottom = this.bullet.y+this.bullet.height;
            const left = this.bullet.x;
            const right = this.bullet.x+this.bullet.width;
            if (this.bullet.x < 0) {
                this.bullet.x = 0;
                return true;
            }
            if (this.bullet.y < 0) {
                this.bullet.y = 0;
                return true;
            }
            if (this.bullet.x + this.bullet.width >= this.$store.getters.currentMap.width) {
                return true;
            }
            if (this.bullet.y + this.bullet.height >= this.$store.getters.currentMap.height) {
                return true;
            }
            for(var i of this.$store.getters.currentMap.walls){
                let wall_top = i.y;
                let wall_bottom = i.y+i.height;
                let wall_left = i.x;
                let wall_right = i.x+i.width;
                //底部碰牆
              
                //頂部碰牆
                if (bottom>=wall_top&&top<=wall_bottom&&left<=wall_right&&right>=wall_left) {
                   return true
                    }}
            return false;
        }
    }
}