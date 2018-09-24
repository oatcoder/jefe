
class Config {
    private _badWords: string[] = [];

    constructor() {
        Config.prototype.setBadWords([]);
    }

    public setBadWords(val: string[]) {
        if (val.length == 0) {
            Config.prototype._badWords = [];
        } else {
            Config.prototype._badWords.push(...val);
        }
    }

    public getBadWords(): string[] {
        return Config.prototype._badWords;
    }
}

export default new Config();