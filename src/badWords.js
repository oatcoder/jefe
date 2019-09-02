const _ = require('lodash')

class BadWords {
  constructor (config) {
    this._config = config
  }

  findBadWords (val) {
    const result = new Set()
    const badWords = this._config.getBadWords()

    badWords.forEach(word => {
      if (_.includes(val, word)) {
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
