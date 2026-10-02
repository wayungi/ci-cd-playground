import test from 'node:test'
import assert from 'node:assert/strict'
import { setupCounter } from './counter.js'

test('counter starts at zero and increases once per click', () => {
  // A small stand-in for the browser's button.
  const button = new EventTarget()
  button.innerHTML = ''

  setupCounter(button)

  assert.equal(button.innerHTML, 'Count is 0')

  button.dispatchEvent(new Event('click'))
  assert.equal(button.innerHTML, 'Count is 1')

  button.dispatchEvent(new Event('click'))
  assert.equal(button.innerHTML, 'Count is 2')
})