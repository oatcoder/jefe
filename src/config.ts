import { each } from 'lodash';


class Config {
    private _badWords: string[] = ['crap', 'poop'];

    public setBadWords(val: string[]) {

    }

    public getBadWords(): string[] {
        return this._badWords;
    }
}

export const setBadWords = new Config().setBadWords;
export const getBadWords = new Config().getBadWords;