import { bus } from "../main";
export default {
    methods: {
        controlTank: function (tank_number) {
            if (tank_number == 1) {
                bus.$on("move1", data => {
                    if (data == "right") {
                        this.tank.right = true;
                    } else if (data == "left") {
                        this.tank.left = true;
                    } else if (data == "up") {
                        this.tank.up = true;
                    } else if (data == "down") {
                        this.tank.down = true;
                    }

                });
                bus.$on("clear1", direction => {
                    if (direction == "right") {
                        this.tank.right = false;
                    }
                    if (direction == "left") {
                        this.tank.left = false;
                    }
                    if (direction == "up") {
                        this.tank.up = false;
                    }
                    if (direction == "down") {
                        this.tank.down = false;
                    }
                });
            }
            else {
                bus.$on("move2", data => {
                    if (data == "right") {
                        this.tank.right = true;
                    } else if (data == "left") {
                        this.tank.left = true;
                    } else if (data == "up") {
                        this.tank.up = true;
                    } else if (data == "down") {
                        this.tank.down = true;
                    }

                });
                bus.$on("clear2", direction => {
                    if (direction == "right") {
                      this.tank.right = false;
                    }
                    if (direction == "left") {
                      this.tank.left = false;
                    }
                    if (direction == "up") {
                      this.tank.up = false;
                    }
                    if (direction == "down") {
                      this.tank.down = false;
                    }
                  });
            }
        }
    }
}