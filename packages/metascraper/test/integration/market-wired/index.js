'use strict'

const snapshot = require('snap-shot')
const { promisify } = require('util')
const { resolve } = require('path')

const fs = require('fs')

const metascraper = require('../../..')
const readFile = promisify(fs.readFile)

const url =
  'http://www.marketwired.com/press-release/segment-launches-sources-to-unify-siloed-customer-data-in-minutes-2112571.htm'

it('market-wired', async () => {
  const html = await readFile(resolve(__dirname, 'input.html'))
  const metadata = await metascraper({ html, url })
  snapshot(metadata)
})
