class Config {
  constructor () {
    this._badWords = []
    this.setBadWords([])
  }

  setBadWords (val) {
    if (val.length === 0) {
      this._badWords = []
    } else {
      this._badWords.push(...val)
    }
  }

  getBadWords () {
    return this._badWords
  }
}

module.exports = Config
