var recipes = {}


function updateObjectWithKeyAndValue(object, key, value){
  const newObject = Object.assign({}, object)
return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]= value;
  return object
}
