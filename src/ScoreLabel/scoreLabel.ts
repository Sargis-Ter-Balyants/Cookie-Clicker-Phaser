import Phaser from "phaser";

const formatScore = (score) => `Score: ${score}`;

export default class ScoreLabel extends Phaser.GameObjects.Text {
    private score: any;

    constructor(scene: Phaser.Scene, x: number, y: number, score: number, style: any) {
        super(scene, x, y, formatScore(score), style);

        this.score = score;
    }

    setScore(score) {
        this.score = score;
        this.updateScoreText();
    }

    add(points) {
        this.setScore(this.score + points);
    }

    updateScoreText() {
        this.setText(formatScore(this.score));
    }
}
