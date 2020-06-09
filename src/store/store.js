import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        maxType: 3,
        mapNumber: 1,
        map: {
            map1: {
                width: 1400,
                height: 500,
                wall: []
            }
        },
        walls: {
            wall1: {
                height: 200,
                width: 5,
                x: 500,
                y: 300,
            },
            wall2: {
                height: 200,
                width: 5,
                x: 800,
                y: 200,
            }
        },
        tank1: {
            cannon: {
                fired: false,
                degStep: 0.5,
                deg: 0,
                clockWise: false,
                counterClockWise: false
            },
            tank: {
                life: 3,
                width: 80,
                height: 80,
                vector: [],
                x: 1000,
                y: 200,
                step: 1,
                up: false,
                down: false,
                left: false,
                right: false,
                cannon_space: []
            }
        },
        tank2: {
            cannon: {
                fired: false,
                degStep: 0.5,
                deg: 0,
                clockWise: false,
                counterClockWise: false
            },
            tank: {
                life: 3,
                width: 80,
                height: 80,
                vector: [],
                x: 0,
                y: 0,
                step: 1,
                up: false,
                down: false,
                left: false,
                right: false,
                cannon_space: []
            }
        },
        bullet1: {
            
            color:'rgb(224, 140, 12)',
            type:1,
            height: 10,
            width: 30,
            fired: false,
            speed: 5,
            deg: 0,
            vectorX: 0,
            vectorY: 0,
            x: 500,
            y: 500,
            load: 30
        },
        bullet2: {
            color:'rgb(224, 140, 12)',
            type:1,
            height: 10,
            width: 30,
            fired: false,
            speed: 5,
            deg: 0,
            vectorX: 0,
            vectorY: 0,
            x: 500,
            y: 500,
            load: 30
        }
    },
    getters: {
        centerCoordinate1: state => {
            let centerX = state.tank1.tank.x + state.tank1.tank.width / 2;
            let centerY = state.tank1.tank.y + state.tank1.tank.height / 2;
            return [centerX, centerY];
        },
        centerCoordinate2: state => {
            let centerX = state.tank2.tank.x + state.tank2.tank.width / 2;
            let centerY = state.tank2.tank.y + state.tank2.tank.height / 2;
            return [centerX, centerY];
        },
        currentMap: state => {
            let currentMap;
            if (state.mapNumber == 1) {
                state.map.map1.walls = [state.walls.wall1, state.walls.wall2];
                currentMap = state.map.map1;
            }
            return currentMap;
        }

    },
    mutations: {
        resetControl: state => {
            state.tank1.tank.left = false;
            state.tank1.tank.right = false;
            state.tank1.tank.up = false;
            state.tank1.tank.down = false;
            state.tank2.tank.left = false;
            state.tank2.tank.right = false;
            state.tank2.tank.up = false;
            state.tank2.tank.down = false;
            state.tank1.cannon.clockWise = false;
            state.tank1.cannon.counterClockWise = false;
            state.tank2.cannon.clockWise = false;
            state.tank2.cannon.counterClockWise = false;
        },
        moveTank: (state, param) => {
            let direction = param[0];
            let tank_number = param[1];
            if (tank_number == 1) {
                if (direction == "right") {
                    state.tank1.tank.right = true;
                } else if (direction == "left") {
                    state.tank1.tank.left = true;
                } else if (direction == "up") {
                    state.tank1.tank.up = true;
                } else if (direction == "down") {
                    state.tank1.tank.down = true;
                }
            }
            if (tank_number == 2) {
                if (direction == "right") {
                    state.tank2.tank.right = true;
                } else if (direction == "left") {
                    state.tank2.tank.left = true;
                } else if (direction == "up") {
                    state.tank2.tank.up = true;
                } else if (direction == "down") {
                    state.tank2.tank.down = true;
                }
            }
        },
        stopTank: (state, param) => {
            let direction = param[0];
            let tank_number = param[1];
            if (tank_number == 1) {
                if (direction == "right") {
                    state.tank1.tank.right = false;
                }
                if (direction == "left") {
                    state.tank1.tank.left = false;
                }
                if (direction == "up") {
                    state.tank1.tank.up = false;
                }
                if (direction == "down") {
                    state.tank1.tank.down = false;
                }
            }
            if (tank_number == 2) {
                if (direction == "right") {
                    state.tank2.tank.right = false;
                }
                if (direction == "left") {
                    state.tank2.tank.left = false;
                }
                if (direction == "up") {
                    state.tank2.tank.up = false;
                }
                if (direction == "down") {
                    state.tank2.tank.down = false;
                }
            }
        },
        rotateCannon: (state, param) => {
            let direction = param[0];
            let tank_number = param[1];
            if (tank_number == 1) {
                if (direction == "clockWise") {
                    state.tank1.cannon.clockWise = true;
                } else {
                    state.tank1.cannon.counterClockWise = true;
                }
            }
            if (tank_number == 2) {
                if (direction == "clockWise") {
                    state.tank2.cannon.clockWise = true;
                } else {
                    state.tank2.cannon.counterClockWise = true;
                }
            }
        },
        stopCannon: (state, param) => {
            let direction = param[0];
            let tank_number = param[1];
            if (tank_number == 1) {
                if (direction == "clockWise") {
                    state.tank1.cannon.clockWise = false;
                } else {
                    state.tank1.cannon.counterClockWise = false;
                }
            }
            if (tank_number == 2) {
                if (direction == "clockWise") {
                    state.tank2.cannon.clockWise = false;
                } else {
                    state.tank2.cannon.counterClockWise = false;
                }
            }
        }
    }

})