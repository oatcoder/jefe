const assert = require('assert')
const { ElementVisibilityState } = require('./state')

describe('ElementVisibilityState', () => {
  let rootHtmlStub
  beforeEach(() => {
    rootHtmlStub = document.createElement('div')
  })

  it('should show element', () => {
    rootHtmlStub.innerHTML = `<div class="lang-grid" id="language">This is a sample</div>`
    document.body.appendChild(rootHtmlStub)
    ElementVisibilityState(rootHtmlStub.innerHTML, false)
    expect(rootHtmlStub.innerHTML.classList.contains('hidden'))
  })

  // it('should hide element', () => {
  //
  // })
})
