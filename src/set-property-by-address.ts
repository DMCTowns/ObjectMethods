/**
 * Sets the property in an object at the point that corresponds to the delimited path in the address argument
 * @param obj
 * @param address
 * @param value
 * @param delimiter
 * @param fallback
 * @returns
 */
const setPropertyByAddress = (
  obj: Record<string, any>,
  address: string,
  value: any,
  delimiter: string = '.'
): Record<string, any> => {
  if (!address || typeof address !== 'string') {
    return obj
  }
  const path: Array<string> = address.split(delimiter)
  let pointer = obj,
    item: string | undefined
  while (undefined !== (item = path.shift())) {
    if (!path.length) {
      if (value === null) {
        if (pointer[item]) {
          delete pointer[item]
        }
        return obj
      }
      pointer[item] = value
      return obj
    }
    if (typeof pointer[item] !== 'object') {
      pointer[item] = {}
    }
    pointer = pointer[item]
  }
  return obj
}

export default setPropertyByAddress
