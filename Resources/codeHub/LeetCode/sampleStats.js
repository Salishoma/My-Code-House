var sampleStats = function(count) {
    const arr = [];
    const map = new Map();
    let max = 0;
    let seen = false;
    let index = 0;
    let sum = 0;
    let counts = 0;
    for(let i = 0; i < count.length; i++){
        sum += i * count[i];
        if(seen === false && count[i] > 0){
            arr.push(i);
            seen = true;
        }
        if(count[i] > 0){
            counts += count[i]
            arr[1] = i;
            map.set(i, count[i]);
        }
        if(count[i] > max){
            max = count[i];
            index = i;
        }
    }
    arr[2] = sum / counts;
    arr[4] = index;
    let values = 0;
    let odd = 0;
    for(let [key, value] of map){
        if(odd !== 0){
            arr[3] = (odd + key) / 2;
            break;
        }
        values += value;
        if(values >= counts / 2){
            if(counts % 2 !== 0){
                arr[3] = key;
                break;
            }else if(values === counts / 2){
                odd = key;
            }else{
                arr[3] = key;
                break;
            }
        }
    }
     return arr;
}
sampleStats([0,4,3,2,2])