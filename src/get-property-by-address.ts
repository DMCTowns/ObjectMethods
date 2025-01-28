/**
 * Returns the property in an object that corresponds to the delimited path in the address argument
 * @param obj
 * @param address
 * @param fallback
 * @param delimiter
 * @returns
 */
export const getPropertyByAddress = (
  obj: Record<string, any>,
  address: string,
  fallback: any = null,
  delimiter: string = '.'
): any => {
  if (!address || typeof address !== 'string') {
    return fallback
  }
  const path: Array<string> = address.split(delimiter)
  let pointer = obj,
    item: string | undefined
  while (undefined !== (item = path.shift())) {
    if (!path.length) {
      return pointer[item] || fallback
    }
    if (!pointer[item]) {
      return fallback
    }
    pointer = pointer[item]
  }
}

export default getPropertyByAddress
