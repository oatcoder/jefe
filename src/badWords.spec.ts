import 'jasmine';

import * as BadWord from './badWords';
import * as Config from './config';


describe('Bad Word', () => {
    describe('hasBadWords function', () => {
        it('should return true when a string does not have bad words', () => {
            Config.default.setBadWords(['crap']);

            expect(BadWord.default.hasBadWords('Thats crap! said the brown bird')).toBe(true);
        });
    })
})