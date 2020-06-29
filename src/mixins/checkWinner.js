export default {
    methods: {
        checkWinner: function () {
            let point1 = this.$store.state.tank1.tank.points;
            let point2 = this.$store.state.tank2.tank.points;
            let life1 = this.$store.state.tank1.tank.life;
            let life2 = this.$store.state.tank2.tank.life;
            this.$store.state.champ = true;
            if (point1 > point2 || life2 <= 0) {
                this.$store.state.winner[0] = this.$store.state.tank1;
                this.$store.state.winner[1] = this.$store.state.tank2;
            }
            else if (point1 < point2 || life1 <= 0) {
                this.$store.state.winner[1] = this.$store.state.tank1;
                this.$store.state.winner[0] = this.$store.state.tank2;
            }
            else if (life1 > life2) {
                this.$store.state.winner[0] = this.$store.state.tank1;
                this.$store.state.winner[1] = this.$store.state.tank2;
            }
            else if (life1 < life2) {
                this.$store.state.winner[1] = this.$store.state.tank1;
                this.$store.state.winner[0] = this.$store.state.tank2
            }
            else if (point1 == point2 || (life1 <= 0 && life2 <= 0)) {
                this.$store.state.champ = false;
                this.$store.state.winner[0] = null;
                this.$store.state.winner[1] = null;
            }
            this.$store.state.mapNumber = -2;
        }
    }
}