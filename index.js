var recipes = {}

const newObject = Object.assign({}, object, ['key: value'])

var object = { foo: 'bar' }

function updateObjectWithKeyAndValue(object, key, value){
return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]= value;
  return object
}
