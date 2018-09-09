var recipes = {}

const newObject = Object.assign({}, object, {['key: value']})


function updateObjectWithKeyAndValue(newObject, key, value){
return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]= value;
  return object
}
