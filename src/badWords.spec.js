/* global describe it beforeAll expect afterAll */
import 'jasmine'
import * as BadWord from './badWords'
import * as Config from './config'

describe('BadWords', () => {
  describe('hasBadWords', () => {
    beforeAll(() => {
      Config.default.setBadWords(['crap'])
    })

    afterAll(() => {
      Config.default.setBadWords([])
    })

    it('should return true when a string does not have bad words', () => {
      expect(BadWord.default.hasBadWords('Thats crap! said the brown bird')).toBe(true)
    })

    it('should return false when a string contains bad words', () => {
      expect(BadWord.default.hasBadWords('The One With The Unagi')).toBe(false)
    })
  })
})
