export default {
    methods: {
        collision: function () {
            let x = this.$store.getters.centerCoordinate1[0];
            let y = this.$store.getters.centerCoordinate1[1];
            let x_op = this.$store.getters.centerCoordinate2[0];
            let y_op = this.$store.getters.centerCoordinate2[1];
            let distance = Math.sqrt(Math.pow(x-x_op,2)+Math.pow(y-y_op,2))
            if(distance<=this.$store.state.tank1.tank.width/2+this.$store.state.tank2.tank.width/2){
                return true;
            }
            return false;
        }
    }
}