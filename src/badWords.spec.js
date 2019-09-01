/* global describe it beforeAll expect afterAll */
const BadWord = require('./badWords')
const Config = require('./config')

describe('BadWords', () => {
  describe('hasBadWords', () => {
    let config
    let badWord
    beforeAll(() => {
      config = new Config()
      badWord = new BadWord(config)
      config.setBadWords(['crap'])
    })

    afterAll(() => {
      config.setBadWords([])
    })

    it('should return true when a string does not have bad words', () => {
      expect(badWord.hasBadWords('Thats crap! said the brown bird')).toBe(true)
    })

    it('should return false when a string contains bad words', () => {
      expect(badWord.hasBadWords('The One With The Unagi')).toBe(false)
    })
  })
})
