import { describe, expect, test } from '@jest/globals'
import { setPropertyByAddress } from '../index.js'

describe('Set property', () => {
  test('Request and response', () => {
    const obj: Record<string, any> = { a: 'b', c: 4 }

    setPropertyByAddress(obj, 'c.d', 5)
    expect(obj.c?.d).toBe(5)

    setPropertyByAddress(obj, 'c/d', 6, '/')
    expect(obj.c?.d).toBe(6)

    setPropertyByAddress(obj, 'c.d', null)
    expect(obj.c?.d).toBe(undefined)
  })
})
