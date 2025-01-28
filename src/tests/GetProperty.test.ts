import { describe, expect, test } from '@jest/globals'
import { getPropertyByAddress } from '../index.js'

describe('Get property', () => {
  test('Request and response', () => {
    const obj: Record<string, any> = { a: 'b', c: 4, d: { e: 5 } }

    expect(getPropertyByAddress(obj, 'c')).toBe(4)
    expect(getPropertyByAddress(obj, 'd.e')).toBe(5)
    expect(getPropertyByAddress(obj, 'd/e', null, '/')).toBe(5)
    expect(getPropertyByAddress(obj, 'f.g')).toBe(null)
    expect(getPropertyByAddress(obj, 'f.g', 8)).toBe(8)
  })
})
