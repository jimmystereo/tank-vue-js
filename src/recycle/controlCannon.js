import { bus } from "../main";
export default {
  
    methods: {
        controlCannon: function (tank_number) {
            if (tank_number == 1) {
                bus.$on("cannon1", data => {
                    if (data == "clockWise") {
                        this.cannon.clockWise = true;
                    } else {
                        this.cannon.counterClockWise = true;
                    }

                });
                bus.$on("stopCannon1", data => {
                    if (data == "clockWise") {
                        this.cannon.clockWise = false;
                    } else {
                        this.cannon.counterClockWise = false;
                    }

                });
                
            }
        }
    }
}