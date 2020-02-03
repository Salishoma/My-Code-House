//Taking numbers from arays, objects etc, and turning them to strings
function stringifyNumbers(obj){
    for(val in obj){
        if(typeof val === "number"){
            obj[val] = obj[val].toString();
        }else if(typeof val === ("object") && !Array.isArray(obj[val])){
            obj[val] = stringifyNumbers(obj[val]);
        }else if(Array.isArray(obj[val])) {
      obj[val];
    }else{
      obj[val];
    }
  }
  return obj
    }

     obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj1)