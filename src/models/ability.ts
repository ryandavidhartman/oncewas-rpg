
export class Ability {
    score: number;
    mod: number;
    modTable: { [score: number]: number } = {
        3: -3, 4: -2, 5: -2, 6: -1, 7: -1, 8: -1, 9: 0,
        10: 0, 11: 0, 12: 0, 13: 1, 14: 1, 15: 1, 16: 2,
        17: 2, 18: 3,
    };

    constructor(score: number) {
        this.score = score;
        this.mod = this.modTable[score];
    }
}
