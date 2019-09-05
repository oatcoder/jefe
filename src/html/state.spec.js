const { ElementVisibilityState } = require('./state')

describe('ElementVisibilityState', () => {
  let rootHtmlStub
  beforeEach(() => {
    rootHtmlStub = document.createElement('div')
    rootHtmlStub.innerHTML = `<div class="lang-grid" id="language">This is a sample</div>`
    document.body.appendChild(rootHtmlStub)
  })

  it('should not show element', () => {
    ElementVisibilityState(rootHtmlStub.children[0], false)
    expect(rootHtmlStub.children[0].classList.contains('hidden'))
  })

  it('should show element', () => {
    ElementVisibilityState(rootHtmlStub.children[0], true)
    expect(rootHtmlStub.children[0].classList.contains('hidden')).toBe(false)
  })
})
