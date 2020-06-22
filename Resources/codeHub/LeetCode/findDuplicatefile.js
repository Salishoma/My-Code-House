var findDuplicate = function(paths) {
    const duplicate = {};
    for(let path of paths){
        const arr = path.split(' ');
        for(let i = 1; i < arr.length; i++){
            const [file, content] = arr[i].replace(")", "").split('(')
            if(!duplicate[content]) duplicate[content] = []
            duplicate[content].push(`${arr[0]}/${file}`)
        }
    }
    const objArr = Object.values(duplicate);
    const res = []
    for(let arr of objArr){
        if(arr.length > 1) res.push(arr);
    }
    return res;
};
findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"])