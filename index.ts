import { includes, each } from 'lodash';

const BADWORDS = ['crap', 'poop'];

class Index {
    public findBadWords(val: string): string[] {
        const result: string[] = [];

        each(BADWORDS, bw => {
            if (includes(val, bw)) {
                result.push(bw);
            }
        });

        return result;
    }

    public hasBadWords(val: string): boolean {
        return this.findBadWords(val).length !== 0;
    }
}

export const findBadWords  = new Index().findBadWords;
export const hasBadWords = new Index().hasBadWords;