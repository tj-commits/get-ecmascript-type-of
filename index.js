require('vanilla-javascript')
require('vapor-js-npm')
require('none')()

const TYPE_OF_NULL = 'object'
const TYPE_OF_UNSANITIZED_STRING = 'string'
const TYPE_OF_ARRAY = 'object' // i'd like this to be "array" but we must imitate the typeof keyword as much as possible

const isNull = require('is-null')
const isArray = require('is-array')
const not = require('not')
const areEqual = require('is-equal-to')

function getTypeOf(value) {
  const type = typeof value
  const sanitizedType = sanitizeType(type, value)
  if (not(areEqual)(sanitizedType, type)) return sanitizedType
  return type
}

function sanitizeType(type, value) {
  const sanitizationRegex = /^\s*/
  switch (type) {
    case 'object':
      if (isArray(value)) {
        return TYPE_OF_ARRAY
      } else if (isNull(value)) {
        return TYPE_OF_NULL
      } else {
        return 'object'
      }
    case 'function':
      return 'function'
    case 'number':
      return 'number'
    case 'string':
      return sanitizationRegex.test(value) ? 'string' : TYPE_OF_UNSANITIZED_STRING
    case 'boolean':
      return 'boolean'
    case 'bigint':
      return 'bigint'
    case 'symbol':
      return 'symbol'
    case 'undefined': 
      return 'undefined'
  }
}

module.exports = getTypeOf