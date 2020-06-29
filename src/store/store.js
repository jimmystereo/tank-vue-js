import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        preference: {
            sound: true,
            champ: false,
            winner: [null, null],
            shrinkingSpeed: 1,
            count_down: 60,
            mine1: [true, true],
            mine2: [true, true],
            maxType: 3,
            mapNumber: -1,
            startPage: {
                width: 1500,
                height: 800,
            },
            endPage: {
                width: 1500,
                height: 800,
            },
            chooseMapPage: {
                width: 1500,
                height: 800,
            },
            maps: [
                {
                    name: 'basic map',
                    width: 1500,
                    height: 900,
                    wall_numbers: [1, 2, 3],
                    walls: [],
                    treasure_numbers: [0],
                    treasures: []
                },
                {
                    name: 'special map',
                    width: 1500,
                    height: 900,
                    wall_numbers: [5, 6, 7, 8],
                    walls: [],
                    treasure_numbers: [],
                    treasures: []
                },
                {
                    name: 'shrink',
                    width: 1500,
                    height: 900,
                    wall_numbers: [],
                    walls: [],
                    treasure_numbers: [],
                    treasures: []
                },
                {
                    name: 'small',
                    width: 500,
                    height: 500,
                    wall_numbers: [14],
                    walls: [],
                    treasure_numbers: [],
                    treasures: []
                }
            ]
            ,
            walls: [
                {
                    id: 0,
                    height: 100,
                    width: 5,
                    x: 550,
                    y: 200,
                },
                {
                    id: 1,
                    height: 300,
                    width: 30,
                    x: 1135,
                    y: 250,
                }, {
                    id: 2,
                    height: 300,
                    width: 30,
                    x: 735,
                    y: 250,
                },
                {
                    id: 3,
                    height: 300,
                    width: 30,
                    x: 335,
                    y: 250,
                }, {
                    id: 4,
                    height: 5,
                    width: 100,
                    x: 600,
                    y: 400,
                },
                {
                    id: 5,
                    height: 30,
                    width: 300,
                    x: 934,
                    y: 392,
                },
                {
                    id: 6,
                    height: 30,
                    width: 300,
                    x: 268,
                    y: 388,
                },
                {
                    id: 7,
                    height: 300,
                    width: 30,
                    x: 934,
                    y: 432,
                },
                {
                    id: 8,
                    height: 300,
                    width: 30,
                    x: 577,
                    y: 118,
                },
                {
                    id: 9,
                    height: 100,
                    width: 100,
                    x: 323,
                    y: 600,
                },
                {
                    id: 10,
                    height: 100,
                    width: 100,
                    x: 323,
                    y: 200,
                },
                {
                    id: 11,
                    height: 100,
                    width: 100,
                    x: 1092,
                    y: 200,
                },
                {
                    id: 12,
                    height: 100,
                    width: 100,
                    x: 1092,
                    y: 600,
                },
                {
                    id: 13,
                    height: 100,
                    width: 100,
                    x: 721,
                    y: 373,
                },
                {
                    id: 14,
                    height: 80,
                    width: 80,
                    x: 205,
                    y: 200,
                }
            ],
            treasures: {
                id: 0,
                speed: 10,
                droped: false,
                height: 60,
                width: 60,
                x: 200,
                y: 400,
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
                    name: "Tom",
                    id: 1,
                    revivingTime: 1.5,
                    reviving: false,
                    originColor: 'green',
                    color: 'green',
                    points: 0,
                    life: 100,
                    width: 80,
                    height: 80,
                    vector: [],
                    x: 1420,
                    y: 820,
                    step: 1.2,
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
                    deg: 180,
                    clockWise: false,
                    counterClockWise: false
                },
                tank: {
                    name: "Doge",
                    id: 2,
                    revivingTime: 1.5,
                    reviving: false,
                    originColor: 'red',
                    color: 'red',
                    points: 0,
                    life: 100,
                    width: 80,
                    height: 80,
                    vector: [],
                    x: 0,
                    y: 0,
                    step: 1.2,
                    up: false,
                    down: false,
                    left: false,
                    right: false,
                    cannon_space: []
                }
            },
            bullet1: {
                mine: false,
                mineExplodeTime: 1,
                damage: [20, 30, 40],
                exploded: false,
                zIndex: 10,
                color: 'rgb(224, 140, 12)',
                tmpType: 1,
                type: 1,
                height: 10,
                width: 30,
                fired: false,
                special_speed: [15, 20, 0],
                speed: 10,
                deg: 0,
                vectorX: 0,
                vectorY: 0,
                x: 500,
                y: 500,
                load: [15, 5, 5]
            },
            bullet2: {
                mine: false,
                mineExplodeTime: 1,
                damage: [20, 30, 40],
                exploded: false,
                zIndex: 10,
                color: 'rgb(224, 140, 12)',
                tmpType: 1,
                type: 1,
                height: 10,
                width: 30,
                fired: false,
                special_speed: [15, 20, 0],
                speed: 10,
                deg: 0,
                vectorX: 0,
                vectorY: 0,
                x: 500,
                y: 500,
                load: [15, 5, 5]
            }

        },
        sound: true,
        champ: false,
        winner: [null, null],
        shrinkingSpeed: 1,
        count_down: 60,
        mine1: [true, true],
        mine2: [true, true],
        maxType: 3,
        mapNumber: -1,
        startPage: {
            width: 1500,
            height: 800,
        },
        endPage: {
            width: 1500,
            height: 800,
        },
        chooseMapPage: {
            width: 1500,
            height: 800,
        },
        maps: [
            {
                name: 'basic map',
                width: 1500,
                height: 900,
                wall_numbers: [1, 2, 3],
                walls: [],
                treasure_numbers: [0],
                treasures: []
            },
            {
                name: 'special map',
                width: 1500,
                height: 900,
                wall_numbers: [5, 6, 7, 8],
                walls: [],
                treasure_numbers: [],
                treasures: []
            },
            {
                name: 'shrink',
                width: 1500,
                height: 900,
                wall_numbers: [],
                walls: [],
                treasure_numbers: [],
                treasures: []
            },
            {
                name: 'small',
                width: 500,
                height: 500,
                wall_numbers: [14],
                walls: [],
                treasure_numbers: [],
                treasures: []
            }
        ]
        ,
        walls: [
            {
                id: 0,
                height: 100,
                width: 5,
                x: 550,
                y: 200,
            },
            {
                id: 1,
                height: 300,
                width: 30,
                x: 1135,
                y: 250,
            }, {
                id: 2,
                height: 300,
                width: 30,
                x: 735,
                y: 250,
            },
            {
                id: 3,
                height: 300,
                width: 30,
                x: 335,
                y: 250,
            }, {
                id: 4,
                height: 5,
                width: 100,
                x: 600,
                y: 400,
            },
            {
                id: 5,
                height: 30,
                width: 300,
                x: 934,
                y: 392,
            },
            {
                id: 6,
                height: 30,
                width: 300,
                x: 268,
                y: 388,
            },
            {
                id: 7,
                height: 300,
                width: 30,
                x: 934,
                y: 432,
            },
            {
                id: 8,
                height: 300,
                width: 30,
                x: 577,
                y: 118,
            },
            {
                id: 9,
                height: 100,
                width: 100,
                x: 323,
                y: 600,
            },
            {
                id: 10,
                height: 100,
                width: 100,
                x: 323,
                y: 200,
            },
            {
                id: 11,
                height: 100,
                width: 100,
                x: 1092,
                y: 200,
            },
            {
                id: 12,
                height: 100,
                width: 100,
                x: 1092,
                y: 600,
            },
            {
                id: 13,
                height: 100,
                width: 100,
                x: 721,
                y: 373,
            },
            {
                id: 14,
                height: 80,
                width: 80,
                x: 205,
                y: 200,
            }
        ],
        treasures: {
            id: 0,
            speed: 10,
            droped: false,
            height: 60,
            width: 60,
            x: 200,
            y: 400,
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
                name: "Tom",
                id: 1,
                revivingTime: 1.5,
                reviving: false,
                originColor: 'green',
                color: 'green',
                points: 0,
                life: 100,
                width: 80,
                height: 80,
                vector: [],
                x: 1420,
                y: 820,
                step: 1.2,
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
                deg: 180,
                clockWise: false,
                counterClockWise: false
            },
            tank: {
                name: "Doge",
                id: 2,
                revivingTime: 1.5,
                reviving: false,
                originColor: 'red',
                color: 'red',
                points: 0,
                life: 100,
                width: 80,
                height: 80,
                vector: [],
                x: 0,
                y: 0,
                step: 1.2,
                up: false,
                down: false,
                left: false,
                right: false,
                cannon_space: []
            }
        },
        bullet1: {
            mine: false,
            mineExplodeTime: 1,
            damage: [20, 30, 40],
            exploded: false,
            zIndex: 10,
            color: 'rgb(224, 140, 12)',
            tmpType: 1,
            type: 1,
            height: 10,
            width: 30,
            fired: false,
            special_speed: [15, 20, 0],
            speed: 10,
            deg: 0,
            vectorX: 0,
            vectorY: 0,
            x: 500,
            y: 500,
            load: [15, 5, 5]
        },
        bullet2: {
            mine: false,
            mineExplodeTime: 1,
            damage: [20, 30, 40],
            exploded: false,
            zIndex: 10,
            color: 'rgb(224, 140, 12)',
            tmpType: 1,
            type: 1,
            height: 10,
            width: 30,
            fired: false,
            special_speed: [15, 20, 0],
            speed: 10,
            deg: 0,
            vectorX: 0,
            vectorY: 0,
            x: 500,
            y: 500,
            load: [15, 5, 5]
        },
        initialState: function () {
            return {
                sound: true,
                champ: false,
                winner: [null, null],
                shrinkingSpeed: 1,
                count_down: 60,
                mine1: [true, true],
                mine2: [true, true],
                maxType: 3,
                mapNumber: -1,
                startPage: {
                    width: 1500,
                    height: 800,
                },
                endPage: {
                    width: 1500,
                    height: 800,
                },
                chooseMapPage: {
                    width: 1500,
                    height: 800,
                },
                maps: [
                    {
                        name: 'basic map',
                        width: 1500,
                        height: 900,
                        wall_numbers: [1, 2, 3],
                        walls: [],
                        treasure_numbers: [0],
                        treasures: []
                    },
                    {
                        name: 'special map',
                        width: 1500,
                        height: 900,
                        wall_numbers: [5, 6, 7, 8],
                        walls: [],
                        treasure_numbers: [],
                        treasures: []
                    },
                    {
                        name: 'shrink',
                        width: 1500,
                        height: 900,
                        wall_numbers: [],
                        walls: [],
                        treasure_numbers: [],
                        treasures: []
                    },
                    {
                        name: 'small',
                        width: 500,
                        height: 500,
                        wall_numbers: [14],
                        walls: [],
                        treasure_numbers: [],
                        treasures: []
                    }
                ]
                ,
                walls: [
                    {
                        id: 0,
                        height: 100,
                        width: 5,
                        x: 550,
                        y: 200,
                    },
                    {
                        id: 1,
                        height: 300,
                        width: 30,
                        x: 1135,
                        y: 250,
                    }, {
                        id: 2,
                        height: 300,
                        width: 30,
                        x: 735,
                        y: 250,
                    },
                    {
                        id: 3,
                        height: 300,
                        width: 30,
                        x: 335,
                        y: 250,
                    }, {
                        id: 4,
                        height: 5,
                        width: 100,
                        x: 600,
                        y: 400,
                    },
                    {
                        id: 5,
                        height: 30,
                        width: 300,
                        x: 934,
                        y: 392,
                    },
                    {
                        id: 6,
                        height: 30,
                        width: 300,
                        x: 268,
                        y: 388,
                    },
                    {
                        id: 7,
                        height: 300,
                        width: 30,
                        x: 934,
                        y: 432,
                    },
                    {
                        id: 8,
                        height: 300,
                        width: 30,
                        x: 577,
                        y: 118,
                    },
                    {
                        id: 9,
                        height: 100,
                        width: 100,
                        x: 323,
                        y: 600,
                    },
                    {
                        id: 10,
                        height: 100,
                        width: 100,
                        x: 323,
                        y: 200,
                    },
                    {
                        id: 11,
                        height: 100,
                        width: 100,
                        x: 1092,
                        y: 200,
                    },
                    {
                        id: 12,
                        height: 100,
                        width: 100,
                        x: 1092,
                        y: 600,
                    },
                    {
                        id: 13,
                        height: 100,
                        width: 100,
                        x: 721,
                        y: 373,
                    },
                    {
                        id: 14,
                        height: 80,
                        width: 80,
                        x: 205,
                        y: 200,
                    }
                ],
                treasures: {
                    id: 0,
                    speed: 10,
                    droped: false,
                    height: 60,
                    width: 60,
                    x: 200,
                    y: 400,
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
                        name: "Tom",
                        id: 1,
                        revivingTime: 1.5,
                        reviving: false,
                        originColor: 'green',
                        color: 'green',
                        points: 0,
                        life: 100,
                        width: 80,
                        height: 80,
                        vector: [],
                        x: 1420,
                        y: 820,
                        step: 1.2,
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
                        deg: 180,
                        clockWise: false,
                        counterClockWise: false
                    },
                    tank: {
                        name: "Doge",
                        id: 2,
                        revivingTime: 1.5,
                        reviving: false,
                        originColor: 'red',
                        color: 'red',
                        points: 0,
                        life: 100,
                        width: 80,
                        height: 80,
                        vector: [],
                        x: 0,
                        y: 0,
                        step: 1.2,
                        up: false,
                        down: false,
                        left: false,
                        right: false,
                        cannon_space: []
                    }
                },
                bullet1: {
                    mine: false,
                    mineExplodeTime: 1,
                    damage: [20, 30, 40],
                    exploded: false,
                    zIndex: 10,
                    color: 'rgb(224, 140, 12)',
                    tmpType: 1,
                    type: 1,
                    height: 10,
                    width: 30,
                    fired: false,
                    special_speed: [15, 20, 0],
                    speed: 10,
                    deg: 0,
                    vectorX: 0,
                    vectorY: 0,
                    x: 500,
                    y: 500,
                    load: [15, 5, 5]
                },
                bullet2: {
                    mine: false,
                    mineExplodeTime: 1,
                    damage: [20, 30, 40],
                    exploded: false,
                    zIndex: 10,
                    color: 'rgb(224, 140, 12)',
                    tmpType: 1,
                    type: 1,
                    height: 10,
                    width: 30,
                    fired: false,
                    special_speed: [15, 20, 0],
                    speed: 10,
                    deg: 0,
                    vectorX: 0,
                    vectorY: 0,
                    x: 500,
                    y: 500,
                    load: [15, 5, 5]
                }
            }
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
            state.maps[state.mapNumber - 1].walls.length = 0;
            state.maps[state.mapNumber - 1].treasures.length = 0;

            for (var i of state.maps[state.mapNumber - 1].wall_numbers) {
                state.maps[state.mapNumber - 1].walls.push(state.walls[i])
            }
            for (var k of state.maps[state.mapNumber - 1].treasure_numbers) {
                state.maps[state.mapNumber - 1].treasures.push(state.treasures[k])
            }
            return state.maps[state.mapNumber - 1];
        }
    },
    mutations: {
        resetState(state) {
            // acquire initial state
            const s = state.initialState();
            Object.keys(s).forEach(key => {
                state[key] = s[key]
            })
        },
        saveModify(state) {
            // acquire initial state

            Object.keys(state).forEach(key => {
                state.preference[key] = state[key]
            })
        },
        recallModify(state) {
            // acquire initial state
            Object.keys(state.preference).forEach(key => {
                state[key] = state.preference[key];
            })
        },
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