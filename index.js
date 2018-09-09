var recipes = {}

var newObject = Object.assign({}, obj)

var object = { foo: 'bar' }

function updateObjectWithKeyAndValue(object, key, value){
  const newObject = Object.assign({}, object, ['key: value'])
return Object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]= value;
  return object
}
