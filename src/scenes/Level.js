
// You can write more code here
import Phaser from 'phaser';
/* START OF COMPILED CODE */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// body
		const body = this.add.container(0, 0);

		// flying_area_1
		const flying_area_1 = this.add.image(960, 540, "flying-area");
		flying_area_1.scaleX = 4;
		flying_area_1.scaleY = 4;
		flying_area_1.alpha = 0.3;
		flying_area_1.alphaTopLeft = 0.3;
		flying_area_1.alphaTopRight = 0.3;
		flying_area_1.alphaBottomLeft = 0.3;
		flying_area_1.alphaBottomRight = 0.3;
		flying_area_1.tintTopLeft = 2522352;
		flying_area_1.tintTopRight = 2522352;
		flying_area_1.tintBottomLeft = 2522352;
		flying_area_1.tintBottomRight = 2522352;
		body.add(flying_area_1);

		// flying_area
		const flying_area = this.add.image(1146.000011920929, 397, "filler");
		flying_area.scaleX = 3.2;
		flying_area.scaleY = 2.5;
		flying_area.tintFill = true;
		flying_area.tintTopLeft = 7218;
		flying_area.tintTopRight = 3152197;
		flying_area.tintBottomLeft = 3152197;
		flying_area.tintBottomRight = 71722;
		body.add(flying_area);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(614, 874, 65, 45);
		rectangle_1.isStroked = true;
		rectangle_1.strokeColor = 0;
		rectangle_1.lineWidth = 2;
		body.add(rectangle_1);

		// rectangle
		const rectangle = this.add.rectangle(614, 954, 65, 45);
		rectangle.isStroked = true;
		rectangle.strokeColor = 0;
		rectangle.lineWidth = 2;
		body.add(rectangle);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(695, 874, 65, 45);
		rectangle_2.isStroked = true;
		rectangle_2.strokeColor = 0;
		rectangle_2.lineWidth = 2;
		body.add(rectangle_2);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(695, 954, 65, 45);
		rectangle_3.fillColor = 1973790;
		rectangle_3.isStroked = true;
		rectangle_3.strokeColor = 0;
		rectangle_3.lineWidth = 2;
		body.add(rectangle_3);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(1350, 954, 65, 45);
		rectangle_4.fillColor = 1973790;
		rectangle_4.isStroked = true;
		rectangle_4.strokeColor = 0;
		rectangle_4.lineWidth = 2;
		body.add(rectangle_4);

		// rectangle_5
		const rectangle_5 = this.add.rectangle(1350, 874, 65, 45);
		rectangle_5.isStroked = true;
		rectangle_5.strokeColor = 0;
		rectangle_5.lineWidth = 2;
		body.add(rectangle_5);

		// rectangle_6
		const rectangle_6 = this.add.rectangle(1269, 954, 65, 45);
		rectangle_6.isStroked = true;
		rectangle_6.strokeColor = 0;
		rectangle_6.lineWidth = 2;
		body.add(rectangle_6);

		// rectangle_7
		const rectangle_7 = this.add.rectangle(1269, 874, 65, 45);
		rectangle_7.isStroked = true;
		rectangle_7.strokeColor = 0;
		rectangle_7.lineWidth = 2;
		body.add(rectangle_7);

		// glow
		const glow = this.add.image(346, 802, "glow");
		glow.scaleX = 2;
		glow.scaleY = 2;
		glow.alpha = 0.7;
		glow.alphaTopLeft = 0.7;
		glow.alphaTopRight = 0.7;
		glow.alphaBottomLeft = 0.7;
		glow.alphaBottomRight = 0.7;
		body.add(glow);

		// filler
		const filler = this.add.sprite(346, 807, "filler");
		filler.scaleX = 3;
		filler.scaleY = 4;
		filler.setOrigin(1, 0);
		filler.alpha = 0.5;
		filler.alphaTopLeft = 0.5;
		filler.alphaTopRight = 0.5;
		filler.alphaBottomLeft = 0.5;
		filler.alphaBottomRight = 0.5;
		body.add(filler);

		// multiplier_txt
		const multiplier_txt = this.add.text(1130, 420, "", {});
		multiplier_txt.setOrigin(0.5, 0.5);
		multiplier_txt.alpha = 0.8;
		multiplier_txt.alphaTopLeft = 0.8;
		multiplier_txt.alphaTopRight = 0.8;
		multiplier_txt.alphaBottomLeft = 0.8;
		multiplier_txt.alphaBottomRight = 0.8;
		multiplier_txt.setStyle({ "align": "center", "fontSize": "64px", "fontStyle": "bold italic" });
		body.add(multiplier_txt);

		// airplane
		const airplane = this.add.image(438, 757, "airplane");
		airplane.scaleX = 0.5;
		airplane.scaleY = 0.5;
		airplane.angle = -45;
		airplane.flipX = true;
		body.add(airplane);

		// container_buttons
		const container_buttons = this.add.container(0, 0);
		body.add(container_buttons);

		// betButton_1
		const betButton_1 = this.add.image(871, 915, "flying-area");
		betButton_1.scaleX = 0.3;
		betButton_1.scaleY = 0.3;
		betButton_1.tintFill = true;
		betButton_1.tintTopLeft = 2658560;
		betButton_1.tintTopRight = 2658560;
		betButton_1.tintBottomLeft = 2658560;
		betButton_1.tintBottomRight = 2658560;
		container_buttons.add(betButton_1);

		// betButton_2
		const betButton_2 = this.add.image(1526, 915, "flying-area");
		betButton_2.scaleX = 0.3;
		betButton_2.scaleY = 0.3;
		betButton_2.tintFill = true;
		betButton_2.tintTopLeft = 2658560;
		betButton_2.tintTopRight = 2658560;
		betButton_2.tintBottomLeft = 2658560;
		betButton_2.tintBottomRight = 2658560;
		container_buttons.add(betButton_2);

		// betValue1_txt
		const betValue1_txt = this.add.text(871, 915, "", {});
		betValue1_txt.setOrigin(0.5, 0.5);
		betValue1_txt.text = "Bet";
		betValue1_txt.setStyle({ "fontSize": "48px", "fontStyle": "italic" });
		container_buttons.add(betValue1_txt);

		// betValue2_txt
		const betValue2_txt = this.add.text(1526, 915, "", {});
		betValue2_txt.setOrigin(0.5, 0.5);
		betValue2_txt.text = "Bet";
		betValue2_txt.setStyle({ "fontSize": "48px", "fontStyle": "italic" });
		container_buttons.add(betValue2_txt);

		// container_bet_1
		const container_bet_1 = this.add.container(0, 0);
		body.add(container_bet_1);

		// bet_1_value_1
		const bet_1_value_1 = this.add.text(624, 874, "", {});
		bet_1_value_1.setOrigin(0.5, 0.5);
		bet_1_value_1.text = "1 ";
		bet_1_value_1.setStyle({ "color": "#dad1d1ff", "fontSize": "42px", "fontStyle": "italic", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.stroke": true, "shadow.fill": true });
		container_bet_1.add(bet_1_value_1);

		// bet_1_value_2
		const bet_1_value_2 = this.add.text(704, 874, "", {});
		bet_1_value_2.setOrigin(0.5, 0.5);
		bet_1_value_2.text = "2 ";
		bet_1_value_2.setStyle({ "color": "#dad1d1ff", "fontSize": "42px", "fontStyle": "italic", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.stroke": true, "shadow.fill": true });
		container_bet_1.add(bet_1_value_2);

		// bet_1_value_3
		const bet_1_value_3 = this.add.text(624, 954, "", {});
		bet_1_value_3.setOrigin(0.5, 0.5);
		bet_1_value_3.text = "5 ";
		bet_1_value_3.setStyle({ "color": "#dad1d1ff", "fontSize": "42px", "fontStyle": "italic", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.stroke": true, "shadow.fill": true });
		container_bet_1.add(bet_1_value_3);

		// bet_1_value_4
		const bet_1_value_4 = this.add.text(704, 954, "", {});
		bet_1_value_4.setOrigin(0.5, 0.5);
		bet_1_value_4.text = "10 ";
		bet_1_value_4.setStyle({ "color": "#dad1d1ff", "fontSize": "42px", "fontStyle": "italic", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.stroke": true, "shadow.fill": true });
		container_bet_1.add(bet_1_value_4);

		// container_bet_2
		const container_bet_2 = this.add.container(0, 0);
		body.add(container_bet_2);

		// bet_2_value_1
		const bet_2_value_1 = this.add.text(1278, 874, "", {});
		bet_2_value_1.setOrigin(0.5, 0.5);
		bet_2_value_1.text = "1 ";
		bet_2_value_1.setStyle({ "color": "#dad1d1ff", "fontSize": "42px", "fontStyle": "italic", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.stroke": true, "shadow.fill": true });
		container_bet_2.add(bet_2_value_1);

		// bet_2_value_2
		const bet_2_value_2 = this.add.text(1358, 874, "", {});
		bet_2_value_2.setOrigin(0.5, 0.5);
		bet_2_value_2.text = "2 ";
		bet_2_value_2.setStyle({ "color": "#dad1d1ff", "fontSize": "42px", "fontStyle": "italic", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.stroke": true, "shadow.fill": true });
		container_bet_2.add(bet_2_value_2);

		// bet_2_value_3
		const bet_2_value_3 = this.add.text(1278, 954, "", {});
		bet_2_value_3.setOrigin(0.5, 0.5);
		bet_2_value_3.text = "5 ";
		bet_2_value_3.setStyle({ "color": "#dad1d1ff", "fontSize": "42px", "fontStyle": "italic", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.stroke": true, "shadow.fill": true });
		container_bet_2.add(bet_2_value_3);

		// bet_2_value_4
		const bet_2_value_4 = this.add.text(1358, 954, "", {});
		bet_2_value_4.setOrigin(0.5, 0.5);
		bet_2_value_4.text = "10 ";
		bet_2_value_4.setStyle({ "color": "#dad1d1ff", "fontSize": "42px", "fontStyle": "italic", "shadow.offsetX": 5, "shadow.offsetY": 5, "shadow.stroke": true, "shadow.fill": true });
		container_bet_2.add(bet_2_value_4);

		// totalBalance_txt
		const totalBalance_txt = this.add.text(722, 50, "", {});
		totalBalance_txt.setOrigin(0.5, 0.5);
		totalBalance_txt.text = "500";
		totalBalance_txt.setStyle({ "align": "center", "color": "#aba9a9ff", "fontSize": "64px", "fontStyle": "bold italic" });
		body.add(totalBalance_txt);

		// balance_txt
		const balance_txt = this.add.text(509, 50, "", {});
		balance_txt.setOrigin(0.5, 0.5);
		balance_txt.text = "Balance:";
		balance_txt.setStyle({ "align": "center", "color": "#aba9a9ff", "fontSize": "64px", "fontStyle": "bold italic" });
		body.add(balance_txt);

		// start_button
		const start_button = this.add.image(1146, 397, "button");
		body.add(start_button);

		// airplane_1
		const airplane_1 = this.add.image(195, 442, "airplane");
		airplane_1.scaleX = 1.5;
		airplane_1.scaleY = 1.5;
		airplane_1.angle = -67;
		airplane_1.flipX = true;
		airplane_1.alpha = 0.09;
		airplane_1.alphaTopLeft = 0.09;
		airplane_1.alphaTopRight = 0.09;
		airplane_1.alphaBottomLeft = 0.09;
		airplane_1.alphaBottomRight = 0.09;
		body.add(airplane_1);

		this.glow = glow;
		this.filler = filler;
		this.multiplier_txt = multiplier_txt;
		this.airplane = airplane;
		this.betButton_1 = betButton_1;
		this.betButton_2 = betButton_2;
		this.betValue1_txt = betValue1_txt;
		this.betValue2_txt = betValue2_txt;
		this.container_bet_1 = container_bet_1;
		this.container_bet_2 = container_bet_2;
		this.totalBalance_txt = totalBalance_txt;
		this.start_button = start_button;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	glow;
	/** @type {Phaser.GameObjects.Sprite} */
	filler;
	/** @type {Phaser.GameObjects.Text} */
	multiplier_txt;
	/** @type {Phaser.GameObjects.Image} */
	airplane;
	/** @type {Phaser.GameObjects.Image} */
	betButton_1;
	/** @type {Phaser.GameObjects.Image} */
	betButton_2;
	/** @type {Phaser.GameObjects.Text} */
	betValue1_txt;
	/** @type {Phaser.GameObjects.Text} */
	betValue2_txt;
	/** @type {Phaser.GameObjects.Container} */
	container_bet_1;
	/** @type {Phaser.GameObjects.Container} */
	container_bet_2;
	/** @type {Phaser.GameObjects.Text} */
	totalBalance_txt;
	/** @type {Phaser.GameObjects.Image} */
	start_button;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.editorCreate();
		// Set the target x and y positions
		let nTime = Math.floor(Math.random() * (10 - 3) + 3);
		let nMultiplier = 0.00;
		this.betValue1 = 1;
		this.betValue2 = 1;
		this.isBet_1_On = false;
		this.isBet_2_On = false;
		const initialX = this.airplane.x;
		const initialY = this.airplane.y;
		let targetX = Phaser.Math.Between(1500, 1700);
		let targetY = 130;
		// Calculate the duration based on the distance
		const distanceX = targetX - this.airplane.x;
		const duration = Math.abs(distanceX) / 0.3; // Adjust the speed as needed
		// Move the airplane gradually to the target positions
		this.start_button.setInteractive().on('pointerdown', () => {
			this.start_button.setVisible(false);
			setTimeout(() => {
				this.moveAirplane(initialY, targetX, targetY, duration, 1000);
				this.setTimer(nTime, nMultiplier, initialX, initialY);
			}, 2000);
			this.glowAnimation();
			this.betButton_1.setInteractive().setName('noBet');
			this.betButton_2.setInteractive().setName('noBet');
		});
		this.container_bet_1.list.forEach((value) => {
			value.setInteractive().on('pointerdown', () => {
				this.betValue1 = Number(value.text);
				this.betValue1_txt.setText(this.betValue1);
				this.container_bet_1.list.forEach(value => {
					value.disableInteractive();
					value.setAlpha(0.8);
				});
			});
		});
		this.container_bet_2.list.forEach((value) => {
			value.setInteractive().on('pointerdown', () => {
				this.betValue2 = Number(value.text);
				this.betValue2_txt.setText(this.betValue2);
				this.container_bet_2.list.forEach(value => {
					value.disableInteractive();
					value.setAlpha(0.8);
				});
			});
		});
		this.betButton_1.on('pointerdown', () => {
			if (this.betButton_1.name == "noBet") {
				this.betButton_1.setName('bet');
				this.betValue1_txt.setText("Cancel");
				this.betButton_1.setTint(0xff0000);
			}
			else {
				if (this.isBet_1_On) {
					this.isBet_1_On = false;
					this.totalBalance_txt.setText((Number(this.totalBalance_txt.text) + Number(this.betValue1_txt.text)).toFixed(2));
				}
				this.container_bet_1.list.forEach(value => {
					value.setInteractive();
					value.setAlpha(1);
				});
				this.betButton_1.setName('noBet');
				this.betValue1_txt.setText("Bet");
				this.betButton_1.tint = 2358560;
			}
		});
		this.betButton_2.on('pointerdown', () => {
			if (this.betButton_2.name == "noBet") {
				this.betButton_2.setName('bet');
				this.betValue2_txt.setText("Cancel");
				this.betButton_2.setTint(0xff0000);
			}
			else {
				if (this.isBet_2_On) {
					this.isBet_2_On = false;
					this.totalBalance_txt.setText((Number(this.totalBalance_txt.text) + Number(this.betValue2_txt.text)).toFixed(2));
				}
				this.container_bet_2.list.forEach(value => {
					value.setInteractive();
					value.setAlpha(1);
				});
				this.betButton_2.setName('noBet');
				this.betValue2_txt.setText("Bet");
				this.betButton_2.tint = 2358560;
			}
		});
		let animationShape = this.make.graphics();
		animationShape.fillRect(346, 0, 1650, 800);
		const mask = animationShape.createGeometryMask();
		this.glow.setMask(mask);
	}
	glowAnimation = () => {
		this.glowTween = this.tweens.add({
			targets: this.glow,
			angle: "+=2",
			duration: 100,
			onComplete: () => {
				this.glowAnimation();
			}
		})
	}
	setTimer = (nTime, nMultiplier, initialX, initialY) => {
		this.timeIntervel = setInterval(() => {
			if (nTime > 0) {
				nTime--;
			}
			if (nTime <= 0) {
				this.moveAirplaneTween.stop();
				clearInterval(this.timeIntervel);
				clearInterval(this.multiplierIntervel);
				this.glowTween.stop();
				nTime = Math.random() * (10 - 3) + 3;
				nMultiplier = 0;
				this.isBet_1_On = false;
				this.isBet_2_On = false;
				this.moveAirplaneTween = this.tweens.add({
					targets: this.airplane,
					x: 2000,
					duration: 200,
					delay: 500,
					ease: 'Linear',
					onComplete: () => {
						this.container_bet_1.list.forEach(value => {
							value.setInteractive();
							value.setAlpha(1);
						});
						this.container_bet_2.list.forEach(value => {
							value.setInteractive();
							value.setAlpha(1);
						});
						this.betValue1_txt.setText('Bet');
						this.betValue2_txt.setText('Bet');
						this.airplane.setPosition(initialX, initialY);
						this.betButton_1.tint = 2358560;
						this.betButton_2.tint = 2358560;
						nTime = nTime = Math.random() * (10 - 3) + 3;
						nMultiplier = 0.00;
						this.multiplier_txt.setText(nMultiplier);
						this.betButton_1.disableInteractive();
						this.betButton_2.disableInteractive();
						this.multiplier_txt.setText('');
						this.start_button.setVisible(true);
					}
				});
			}
		}, 1000);
		this.multiplierIntervel = setInterval(() => {
			nMultiplier += 0.11;
			this.multiplier_txt.setText(Number(nMultiplier).toFixed(2));
			if (this.isBet_1_On) {
				this.betValue1_txt.setText((this.betValue1 * nMultiplier).toFixed(2));
			}
			if (this.isBet_2_On) {
				this.betValue2_txt.setText((this.betValue2 * nMultiplier).toFixed(2));
			}
		}, 200);
	}
	moveAirplane = (initialY, targetX, targetY, duration, delay) => {
		this.moveAirplaneTween = this.tweens.add({
			targets: this.airplane,
			x: targetX,
			y: targetY,
			duration: duration,
			onStart: () => {
				if (this.betButton_1.name == 'bet') {
					if (delay != 0) {
						this.isBet_1_On = true;
						this.totalBalance_txt.setText((Number(this.totalBalance_txt.text) - this.betValue1).toFixed(2));
						this.betButton_1.setTint(0x0000ff);
					}
				}
				if (this.betButton_2.name == 'bet') {
					if (delay != 0) {
						this.isBet_2_On = true;
						this.totalBalance_txt.setText((Number(this.totalBalance_txt.text) - this.betValue2).toFixed(2));
						this.betButton_2.setTint(0x0000ff);
					}
				}
			},
			delay: delay,
			ease: 'Linear',
			onComplete: () => {
				targetX = Phaser.Math.Between(1220, this.airplane.x);
				targetY = Phaser.Math.Between(initialY, 390);
				this.moveAirplane(initialY, targetX, targetY, duration, 0);
			}
		});
	}
	update() {
		let fillerShape = this.make.graphics();
		fillerShape.fillTriangle(346, 802, this.filler.x, this.filler.y, this.filler.x, 802);
		const mask = fillerShape.createGeometryMask();
		this.filler.setMask(mask);
		this.filler.setPosition(this.airplane.x - 88, this.airplane.y + 25);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
