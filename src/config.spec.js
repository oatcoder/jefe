/* global describe it beforeAll expect */
const Config = require('./config')

describe('Config', () => {
  let config
  beforeAll(() => {
    config = new Config()
    config.setBadWords([])
  })

  describe('setBadwords', () => {
    it('should add bad words', () => {
      config.setBadWords(['crap', 'poop'])
      expect(config.getBadWords().length).toEqual(2)
    })

    it('should clear bad words', () => {
      config.setBadWords([])
      expect(config.getBadWords().length).toEqual(0)
    })
  })

  describe('getBadWords', () => {
    it('should return an empty list if bad words were not set', () => {
      expect(config.getBadWords().length).toEqual(0)
    })

    it('should return a list of bad words previously set', () => {
      config.setBadWords(['crap', 'poop'])
      expect(config.getBadWords().length).toEqual(2)
    })
  })
})
