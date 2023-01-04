var destCity = function(paths) {
    let set = new Set();
    for(let path of paths){
        set.add(path[0])
    }
    for(let path of paths){
        if(!set.has(path[1])) return path[1]
    }
};
destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])