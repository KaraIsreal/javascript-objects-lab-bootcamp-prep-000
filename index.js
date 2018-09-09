var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  const recipes2 = Object.assign({}, object, {[key]: value})
  return recipes2

}
