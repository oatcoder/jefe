const _ = require('lodash')

class BadWords {
  constructor (config) {
    this._config = config
  }

  findBadWords (val) {
    const result = []
    const badWords = this._config.getBadWords()

    _.each(badWords, bw => {
      if (_.includes(val, bw)) {
        result.push(bw)
      }
    })

    return result
  }

  hasBadWords (val) {
    return this.findBadWords(val).length !== 0
  }
}

module.exports = BadWords
