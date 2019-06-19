import 'jasmine';

import * as Config from './config';


describe('Config', () => {
    beforeAll(() => {
        Config.default.setBadWords([]);
    });

    describe('setBadwords', () => {
        it('should add bad words', () => {
            Config.default.setBadWords(['crap', 'poop']);

            expect(Config.default.getBadWords().length).toEqual(2);
        });

        it('should clear bad words', () => {
            Config.default.setBadWords([]);

            expect(Config.default.getBadWords().length).toEqual(0);
        });
    });

    describe('getBadWords', () => {
        it('should return an empty list if bad words were not set', () => {
            expect(Config.default.getBadWords().length).toEqual(0);
        });

        it('should return a list of bad words previously set', () => {
            Config.default.setBadWords(['crap', 'poop']);

            expect(Config.default.getBadWords().length).toEqual(2);
        });
    })
});