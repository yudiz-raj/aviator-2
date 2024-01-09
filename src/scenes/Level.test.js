import LevelScene from './Level';
describe('Level Scene', () => {
    let levelScene;

    beforeEach(() => {
        levelScene = new LevelScene();
        levelScene.add = {
            container: jest.fn().mockReturnValue({
                add: jest.fn(),
                list: [],
            }),
            image: jest.fn().mockReturnValue({
                scaleX: 1,
                scaleY: 1,
                setInteractive: jest.fn().mockReturnThis(),
                on: jest.fn().mockReturnThis(),
                setVisible: jest.fn(),
                setMask: jest.fn(),
                emit: jest.fn(),
            }),
            sprite: jest.fn().mockReturnValue({
                setInteractive: jest.fn().mockReturnThis(),
                on: jest.fn().mockReturnThis(),
                setVisible: jest.fn(),
                setOrigin: jest.fn(),
                setMask: jest.fn(),
            }),
            rectangle: jest.fn().mockReturnValue({
                isStroked: false,
                strokeColor: 0,
                lineWidth: 0,
                setOrigin: jest.fn(),
            }),
            text: jest.fn().mockReturnValue({
                setOrigin: jest.fn(),
                alpha: 0,
                alphaTopLeft: 0,
                setStyle: jest.fn(),
            }),
        };
        levelScene.body = levelScene.add.container();
        levelScene.physics = {
            add: {
                group: jest.fn(),
            },
        };
        levelScene.input = {
            on: jest.fn(),
        };
        levelScene.events = {
            emit: jest.fn(),
        };
        levelScene.make = {
            graphics: jest.fn().mockReturnValue({
                fillRect: jest.fn(),
                createGeometryMask: jest.fn(),
            }),
        };
        levelScene.betValue1 = 1;
        levelScene.betValue2 = 1;
        levelScene.isBet_1_On = false;
        levelScene.isBet_2_On = false;
        levelScene.targetX = 1500;
        levelScene.targetY = 130;
        levelScene.initialX = 0;
        levelScene.initialY = 0;
        levelScene.airplane = {
            x: 0,
            y: 0,
        };
        levelScene.start_button = {
            emit: jest.fn(),
            setVisible: jest.fn(),
            setInteractive: jest.fn().mockReturnThis(),
            on: jest.fn().mockImplementation((event, callback) => {
                if (event === 'pointerdown') {
                    callback();
                }
            }),
        };
        levelScene.betButton_1 = {
            emit: jest.fn(),
            setName: jest.fn(),
            setTint: jest.fn(),
            setInteractive: jest.fn().mockReturnThis(),
            on: jest.fn().mockImplementation((event, callback) => {
                if (event === 'pointerdown') {
                    callback();
                }
            }),
        };
        levelScene.betButton_2 = {
            emit: jest.fn(),
            setName: jest.fn(),
            setTint: jest.fn(),
            setInteractive: jest.fn().mockReturnThis(),
            on: jest.fn().mockImplementation((event, callback) => {
                if (event === 'pointerdown') {
                    callback();
                }
            }),
        };
        levelScene.container_bet_1 = {
            list: [
                {
                    emit: jest.fn().mockImplementation((event) => {
                        if (event === 'pointerdown') {
                            levelScene.betValue1 = Number('1');
                        }
                    }),
                    text: '1',
                    setInteractive: jest.fn().mockReturnThis(),
                    on: jest.fn().mockImplementation((event, callback) => {
                        if (event === 'pointerdown') {
                            callback();
                        }
                    }),
                    disableInteractive: jest.fn(),
                    setAlpha: jest.fn(),
                },
            ],
        };
        levelScene.container_bet_2 = {
            list: [
                {
                    emit: jest.fn().mockImplementation((event) => {
                        if (event === 'pointerdown') {
                            levelScene.betValue2 = Number('1');
                        }
                    }),
                    text: '1',
                    setInteractive: jest.fn().mockReturnThis(),
                    on: jest.fn().mockImplementation((event, callback) => {
                        if (event === 'pointerdown') {
                            callback();
                        }
                    }),
                    disableInteractive: jest.fn(),
                    setAlpha: jest.fn(),
                },
            ],
        };
        levelScene.totalBalance_txt = {
            text: '0',
            setText: jest.fn(),
        };
    });

    it('should set the target x and y positions', () => {
        levelScene.create();

        expect(levelScene.targetX).toBeGreaterThanOrEqual(1500);
        expect(levelScene.targetX).toBeLessThanOrEqual(1700);
        expect(levelScene.targetY).toBe(130);
    });

    it('should move the airplane gradually to the target positions', () => {
        const airplaneCopy = JSON.parse(JSON.stringify(levelScene.airplane));

        levelScene.create();

        expect(levelScene.airplane.x).toBe(levelScene.airplane.x);
        expect(levelScene.airplane.y).toBe(levelScene.airplane.y);

        levelScene.start_button.on('pointerdown');

        expect(levelScene.airplane.x).not.toBe(levelScene.initialX);
        expect(levelScene.airplane.y).not.toBe(levelScene.initialY);
    });

    it('should update betValue1 when a value is selected', () => {
        const value = levelScene.container_bet_1.list[0];
        levelScene.create();

        value.on('pointerdown', () => {
            levelScene.betValue1 = Number(value.text);
            levelScene.betValue1_txt.text = String(levelScene.betValue1);
        });
        value.emit('pointerdown');

        expect(value.emit).toHaveBeenCalledWith('pointerdown');
        expect(levelScene.betValue1).toBe(Number(value.text));
        expect(levelScene.betValue1_txt.text).toBe(String(levelScene.betValue1));
    });

    it('should update betValue2 when a value is selected', () => {
        const value = levelScene.container_bet_2.list[0];
        levelScene.create();

        value.on('pointerdown', () => {
            levelScene.betValue2 = Number(value.text);
            levelScene.betValue2_txt.text = String(levelScene.betValue2);
        });
        value.emit('pointerdown');

        expect(levelScene.betValue2).toBe(Number(value.text));
        expect(levelScene.betValue2_txt.text).toBe(String(levelScene.betValue2));
    });

    it('should toggle betButton_1 state and update totalBalance_txt', () => {
        levelScene.create();

        levelScene.betButton_1.setName = jest.fn();
        levelScene.betButton_1.setTint = jest.fn();
        levelScene.betValue1_txt.setText = jest.fn();

        levelScene.betButton_1.name = 'noBet';
        levelScene.betButton_1.emit('pointerdown');
        levelScene.betButton_1.on('pointerdown', () => {
            levelScene.betButton_1.setName = 'bet';
            levelScene.betValue1_txt.text = 'Cancel';
            levelScene.betButton_1.tint = 0xff0000;
        });

        expect(levelScene.betButton_1.setName).toHaveBeenCalledWith('bet');
        expect(levelScene.betValue1_txt.setText).toHaveBeenCalledWith('Cancel');
        expect(levelScene.betButton_1.setTint).toHaveBeenCalledWith(0xff0000);

        levelScene.betButton_1.emit('pointerdown');

        expect(levelScene.isBet_1_On).toBe(false);
        expect(levelScene.totalBalance_txt.setText).toHaveBeenCalledWith(
            (Number(levelScene.totalBalance_txt.text) + Number(levelScene.betValue1_txt.text)).toFixed(2)
        );
        expect(levelScene.betButton_1.setName).toHaveBeenCalledWith('noBet');
        expect(levelScene.betValue1_txt.setText).toHaveBeenCalledWith('Bet');
        expect(levelScene.betButton_1.tint).toBe(2358560);
    });

    it('should toggle betButton_2 state and update totalBalance_txt', () => {
        levelScene.create();

        levelScene.betButton_2.on('pointerdown');

        expect(levelScene.betButton_2.setName).toHaveBeenCalledWith('bet');
        expect(levelScene.betValue2_txt.setText).toHaveBeenCalledWith('Cancel');
        expect(levelScene.betButton_2.setTint).toHaveBeenCalledWith(0xff0000);

        levelScene.betButton_2.on('pointerdown');

        expect(levelScene.isBet_2_On).toBe(false);
        expect(levelScene.totalBalance_txt.setText).toHaveBeenCalledWith(
            (Number(levelScene.totalBalance_txt.text) + Number(levelScene.betValue2_txt.text)).toFixed(2)
        );
        expect(levelScene.betButton_2.setName).toHaveBeenCalledWith('noBet');
        expect(levelScene.betValue2_txt.setText).toHaveBeenCalledWith('Bet');
        expect(levelScene.betButton_2.tint).toBe(2358560);
    });
    it('should start the glow animation', () => {
        levelScene.create();

        levelScene.glow = {
            alpha: 0.09,
            angle: -67,
            flipX: true,
            scaleX: 1.5,
            scaleY: 1.5,
            tintFill: true,
            // Add any other necessary properties here
        };

        levelScene.tweens = {
            add: jest.fn().mockReturnValue({
                targets: [levelScene.glow],
                angle: "+=2",
                duration: 100,
            }),
        };

        levelScene.glowAnimation();

        expect(levelScene.glowTween).toBeDefined();
        expect(levelScene.glowTween.targets).toContain(levelScene.glow);
        expect(levelScene.glowTween.angle).toBe("+=2");
        expect(levelScene.glowTween.duration).toBe(100);
    });

});
describe('setTimer', () => {
    let levelScene;
    beforeEach(() => {
        global.setInterval = jest.fn();
        global.clearInterval = jest.fn();
        levelScene = {
            isBet_1_On: undefined,
            isBet_2_On: undefined,
            airplane: { x: undefined, y: undefined },
            betButton_1: { tint: undefined, disableInteractive: jest.fn() },
            betButton_2: {
                setName: jest.fn(),
                setTint: jest.fn(),
                on: jest.fn(),
                disableInteractive: jest.fn(),
            },
            betValue1_txt: { setText: jest.fn() },
            betValue2_txt: { setText: jest.fn() },
            multiplier_txt: { setText: jest.fn() },
            start_button: { setVisible: jest.fn() },
        };

        jest.useFakeTimers();
        levelScene.moveAirplaneTween = {
            stop: jest.fn(),
        };
        levelScene.glowTween = {
            stop: jest.fn(),
        };
        levelScene.container_bet_1 = {
            list: Array(5).fill({}).map(() => ({
                setInteractive: jest.fn(),
                setAlpha: jest.fn(),
            })),
        };
        levelScene.container_bet_2 = {
            list: Array(5).fill({}).map(() => ({
                setInteractive: jest.fn(),
                setAlpha: jest.fn(),
            })),
        };
        levelScene.setTimer = (nTime) => {
            levelScene.multiplier_txt = { setText: jest.fn() };
            if (nTime <= 0) {
                levelScene.moveAirplaneTween.stop();
                levelScene.glowTween.stop();
                levelScene.isBet_1_On = false;
                levelScene.isBet_2_On = false;
                levelScene.airplane.x = 2000;
                levelScene.airplane.y = 0;
                levelScene.betButton_1.tint = 2358560;
                levelScene.betButton_2.tint = 2358560;
                levelScene.betValue1_txt.setText('Bet');
                levelScene.betValue2_txt.setText('Bet');
                levelScene.multiplier_txt.setText('');
                levelScene.betButton_1.disableInteractive();
                levelScene.betButton_2.disableInteractive();
                levelScene.start_button.setVisible(true);
                global.clearInterval(levelScene.timeIntervel);
                global.clearInterval(levelScene.multiplierIntervel);
            } else {
                levelScene.betValue1_txt.setText('1.11');
                levelScene.betValue2_txt.setText('1.11');
                levelScene.multiplier_txt.setText('1.11');
                global.setInterval(() => { }, 1000);
                global.setInterval(() => { }, 200);
            }
        };
        jest.spyOn(global, 'setInterval');
        jest.spyOn(global, 'clearInterval');
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    it('should stop the moveAirplaneTween and clear intervals when nTime is less than or equal to 0', () => {
        levelScene.setTimer(0, 0, 0, 0);

        expect(levelScene.moveAirplaneTween.stop).toHaveBeenCalled();
        expect(global.clearInterval).toHaveBeenCalledWith(levelScene.timeIntervel);
        expect(clearInterval).toHaveBeenCalledWith(levelScene.multiplierIntervel);
        expect(levelScene.glowTween.stop).toHaveBeenCalled();
    });

    it('should reset nTime, nMultiplier, and other properties when nTime is less than or equal to 0', () => {
        levelScene.setTimer(0, 0, 0, 0);

        expect(levelScene.isBet_1_On).toBe(false);
        expect(levelScene.isBet_2_On).toBe(false);
        expect(levelScene.airplane.x).toBe(2000);
        expect(levelScene.airplane.y).toBe(0);
        expect(levelScene.betButton_1.tint).toBe(2358560);
        expect(levelScene.betButton_2.tint).toBe(2358560);
        expect(levelScene.betValue1_txt.setText).toHaveBeenCalledWith('Bet');
        expect(levelScene.betValue2_txt.setText).toHaveBeenCalledWith('Bet');
        expect(levelScene.betButton_1.disableInteractive).toHaveBeenCalled();
        expect(levelScene.betButton_2.disableInteractive).toHaveBeenCalled();
        expect(levelScene.multiplier_txt.setText).toHaveBeenCalledWith('');
        expect(levelScene.start_button.setVisible).toHaveBeenCalledWith(true);
    });

    it('should update nTime, nMultiplier, and other properties when nTime is greater than 0', () => {
        levelScene.setTimer(5, 1, 0, 0);


        expect(global.setInterval).toHaveBeenCalledTimes(2);
        expect(setInterval).toHaveBeenNthCalledWith(1, expect.any(Function), 1000);
        expect(setInterval).toHaveBeenNthCalledWith(2, expect.any(Function), 200);

        jest.advanceTimersByTime(1000);

        expect(levelScene.multiplier_txt.setText).toHaveBeenCalledWith('1.11');
        expect(levelScene.betValue1_txt.setText).toHaveBeenCalledWith('1.11');
        expect(levelScene.betValue2_txt.setText).toHaveBeenCalledWith('1.11');

        jest.advanceTimersByTime(200);

        levelScene.betValue1_txt.setText('1.22');
        levelScene.betValue2_txt.setText('1.22');
        levelScene.multiplier_txt.setText('1.22');

        expect(levelScene.multiplier_txt.setText).toHaveBeenCalledWith('1.22');
        expect(levelScene.betValue1_txt.setText).toHaveBeenCalledWith('1.22');
        expect(levelScene.betValue2_txt.setText).toHaveBeenCalledWith('1.22');
    });
});
describe('moveAirplane', () => {
    let levelScene;

    beforeEach(() => {
        levelScene = new LevelScene();
        levelScene.moveAirplaneTween = {
            stop: jest.fn(),
        };
        levelScene.tweens = {
            add: jest.fn().mockReturnValue(levelScene.moveAirplaneTween),
        };
        levelScene.airplane = {
            x: 0,
            y: 0,
        };
        levelScene.betButton_1 = {
            name: 'bet',
            setTint: jest.fn(),
        };
        levelScene.betButton_2 = {
            name: 'bet',
            setTint: jest.fn(),
        };
        levelScene.totalBalance_txt = {
            text: '10.00',
            setText: jest.fn(),
        };
        levelScene.betValue1 = 1;
        levelScene.betValue2 = 1;
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should move the airplane with delay and update total balance for betButton_1', () => {
        const initialY = 0;
        const targetX = 100;
        const targetY = 200;
        const duration = 500;
        const delay = 100;

        levelScene.moveAirplane(initialY, targetX, targetY, duration, delay);

        expect(levelScene.moveAirplaneTween.stop).toHaveBeenCalled();
        expect(levelScene.tweens.add).toHaveBeenCalledWith({
            targets: levelScene.airplane,
            x: targetX,
            y: targetY,
            duration: duration,
            onStart: expect.any(Function),
            delay: delay,
            ease: 'Linear',
            onComplete: expect.any(Function),
        });

        // Simulate onStart callback
        levelScene.moveAirplaneTween.onStart();

        expect(levelScene.isBet_1_On).toBe(true);
        expect(levelScene.totalBalance_txt.setText).toHaveBeenCalledWith('9.00');
        expect(levelScene.betButton_1.setTint).toHaveBeenCalledWith(0x0000ff);
    });

    it('should move the airplane with delay and update total balance for betButton_2', () => {
        const initialY = 0;
        const targetX = 100;
        const targetY = 200;
        const duration = 500;
        const delay = 100;

        levelScene.moveAirplane(initialY, targetX, targetY, duration, delay);

        expect(levelScene.moveAirplaneTween.stop).toHaveBeenCalled();
        expect(levelScene.tweens.add).toHaveBeenCalledWith({
            targets: levelScene.airplane,
            x: targetX,
            y: targetY,
            duration: duration,
            onStart: expect.any(Function),
            delay: delay,
            ease: 'Linear',
            onComplete: expect.any(Function),
        });

        // Simulate onStart callback
        levelScene.moveAirplaneTween.onStart();

        expect(levelScene.isBet_2_On).toBe(true);
        expect(levelScene.totalBalance_txt.setText).toHaveBeenCalledWith('9.00');
        expect(levelScene.betButton_2.setTint).toHaveBeenCalledWith(0x0000ff);
    });

    it('should move the airplane without delay and call moveAirplane recursively', () => {
        const initialY = 0;
        const targetX = 100;
        const targetY = 200;
        const duration = 500;
        const delay = 0;

        levelScene.moveAirplane(initialY, targetX, targetY, duration, delay);

        expect(levelScene.moveAirplaneTween.stop).toHaveBeenCalled();
        expect(levelScene.tweens.add).toHaveBeenCalledWith({
            targets: levelScene.airplane,
            x: targetX,
            y: targetY,
            duration: duration,
            onStart: expect.any(Function),
            delay: delay,
            ease: 'Linear',
            onComplete: expect.any(Function),
        });

        // Simulate onComplete callback
        levelScene.moveAirplaneTween.onComplete();

        expect(levelScene.moveAirplane).toHaveBeenCalledWith(initialY, expect.any(Number), expect.any(Number), duration, 0);
    });
});