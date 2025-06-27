const { getItem, setItem } = localStorage

const strategies = {
  String(value) {
    return value
  },
  Number(value) {
    return Number(value)
  },
  Boolean(value) {
    return Boolean(value)
  },
  Null() {
    return null
  },
  Undefined() {
    return undefined
  },
  BigInt(value) {
    return BigInt(value)
  },
  Array(value) {
    return JSON.parse(value)
  },
  Object(value) {
    return JSON.parse(value)
  },
  Date(value) {
    return new Date(value)
  },
  RegExp(value) {
    return new RegExp(value)
  }
}

const prefixLength = '__type_is___'.length

localStorage.getItem = function (key) {
  const value = getItem.call(this, key)
  const withType = value.startsWith('__type_is_')

  if (withType) {
    const [_, type] = value.match(/__type_is_(.*)__/)
    const _value = value.slice(prefixLength + type.length)
    return strategies[type](_value)
  }

  return value
}
localStorage.setItem = function (key, value) {
  const type = Object.prototype.toString.call(value).slice(8, -1)

  if (/Array|Object/.test(type)) {
    value = JSON.stringify(value)
  }

  return setItem.call(this, key, `__type_is_${type}__` + value)
}
