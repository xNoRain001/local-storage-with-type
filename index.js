const { __proto__ } = localStorage
const { getItem, setItem } = __proto__

const strategies = {
  String: v => v,
  Number: v => Number(v),
  Boolean: v => v === 'true',
  Null: () => null,
  Undefined: () => undefined,
  BigInt: v => BigInt(v),
  Array: v => JSON.parse(v),
  Object: v => JSON.parse(v),
  Date: v => new Date(v),
  RegExp(v) {
    const matched = v.match(/^\/(.*)\/([gimsuy]*)$/)

    if (matched) {
      const [_, regexp, flags] = matched
      return new RegExp(regexp, flags)
    } else {
      return new RegExp(v)
    }
  }
}

const maxLength = 5 * 1024 * 1024 // 5 MB
const TYPE_PREFIX = '__type_is_'
const TYPE_SUFFIX = '__'
const prefixLength = TYPE_PREFIX.length + TYPE_SUFFIX.length
const regexp = new RegExp(`^${TYPE_PREFIX}(.*?)${TYPE_SUFFIX}`)

__proto__.getItem = function (key) {
  const value = getItem.call(this, key)

  // key 不存在
  if (value === null) {
    return value
  }

  if (value.startsWith(TYPE_PREFIX)) {
    const matched = value.match(regexp)

    // 值以 __type_is_ 开头，但是没有类型
    if (!matched) {
      return value
    }

    const type = matched[1]
    const _value = value.slice(prefixLength + type.length)

    return strategies[type](_value)
  }

  return value
}

__proto__.setItem = function (key, value) {
  // 可以对 string 类型不做处理
  const type = Object.prototype.toString.call(value).slice(8, -1)

  if (/^(Array|Object)$/.test(type)) {
    value = JSON.stringify(value)
  }

  return setItem.call(this, key, `${TYPE_PREFIX}${type}${TYPE_SUFFIX}${value}`)
}

__proto__.size = () =>
  Object.entries(localStorage).map(item => item.join('')).join('').length / maxLength