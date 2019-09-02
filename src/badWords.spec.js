/* global describe it beforeEach afterEach */
const assert = require('assert')
const BadWord = require('./badWords')
const Config = require('./config')

describe('BadWords', () => {
  describe('hasBadWords', () => {
    let config
    let badWord
    beforeEach(() => {
      config = new Config()
      badWord = new BadWord(config)
      config.setBadWords(['crap'])
    })

    afterEach(() => {
      config.setBadWords([])
    })

    it('should return true when a string does not have bad words', () => {
      assert(badWord.hasBadWords('Thats crap! said the brown bird'))
    })

    it('should return false when a string contains bad words', () => {
      assert(!badWord.hasBadWords('The One With The Unagi'))
    })
  })
})
