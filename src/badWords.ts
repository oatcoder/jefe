import { includes, each } from 'lodash';
import * as Config from "./config";


class BadWords {
    constructor(){}

    public findBadWords(val: string): string[] {
        const result: string[] = [];

        const badWords = Config.default.getBadWords();

        each(badWords, bw => {
            if (includes(val, bw)) {
                result.push(bw);
            }
        });

        return result;
    }

    public hasBadWords(val: string): boolean {
        return BadWords.prototype.findBadWords(val).length !== 0;
    }
}

export default new BadWords();