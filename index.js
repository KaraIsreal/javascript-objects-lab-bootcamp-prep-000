var recipes = {}

var newObject = Object.assign({}, obj)

var object = { foo: 'bar' }

function updateObjectWithKeyAndValue(object, key, value){
  const newObject = Object.assign({}, object)
return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]= value;
  return object
}
