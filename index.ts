import { includes, each } from 'lodash';
import { getBadWords, setBadWords } from './src/config';


class Index {
    //todo: move this to src dir
    public findBadWords(val: string): string[] {
        const result: string[] = [];

        each(getBadWords(), bw => {
            if (includes(val, bw)) {
                result.push(bw);
            }
        });

        return result;
    }

    //todo: move this to src dir
    public hasBadWords(val: string): boolean {
        return this.findBadWords(val).length !== 0;
    }
}

export const findBadWords = new Index().findBadWords;
export const hasBadWords = new Index().hasBadWords;
export const configBadWords = setBadWords;