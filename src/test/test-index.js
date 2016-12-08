/* global describe it before */
const assert = require('assert')
const utils = require('./test-utils')
const fetch = utils.fetch

describe('Index', () => {
  before(async () => {
    await utils.cleanDatabase()
  })

  it('should load the home page', async () => {
    const res = await fetch('/')
    assert.equal(res.status, 200)
  })
})
