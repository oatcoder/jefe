import * as Config  from './src/config';
import * as BadWords from './src/badWords';


export const findBadWords = BadWords.default.findBadWords;
export const hasBadWords = BadWords.default.hasBadWords;
export const addBadWords = Config.default.setBadWords;