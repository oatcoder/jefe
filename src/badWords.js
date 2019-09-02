class BadWords {
  constructor (config) {
    this._config = config
  }

  findBadWords (val) {
    const result = new Set()
    const badWords = this._config.getBadWords()

    badWords.forEach(word => {
      if (word.toUpperCase().includes(val.toUpperCase())) {
        result.add(word)
      }
    })

    return result
  }

  hasBadWords (val) {
    return this.findBadWords(val).size !== 0
  }
}

module.exports = BadWords
