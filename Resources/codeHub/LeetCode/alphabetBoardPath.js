var alphabetBoardPath = function(target) {
    let set = {
        "a":"11", "b":"12", "c":"13", "d":"14", "e":"15",
        "f":"21", "g":"22", "h":"23", "i":"24", "j":"25",
        "k":"31", "l":"32", "m":"33", "n":"34", "o":"35",
        "p":"41", "q":"42", "r":"43", "s":"44", "t":"45",
        "u":"51", "v":"52", "w":"53", "x":"54", "y":"55",
        "z":"61"
    }
    let start = set["a"];
    let str = "";
    let down, left;
    const move = (t) =>{
        down = set[t][0] - start[0];
        str += down >= 0 ? "D".repeat(down) : "U".repeat(-1 * down);
        left = set[t][1] - start[1];
        str += left >= 0 ? "R".repeat(left) : "L".repeat(-1 * left);
        str += "!";
        start = set[t];
    }
    for(let t of target){
        if(t === "z" || start === "z"){
            if(start[1] === "1"){
                move(t);
            }else{
                down = set[t][0] - start[0];
                if(down !== 0){
                    str += down >= 0 ? "D".repeat(down - 1) : "U".repeat(-1 * down);
                }else str += "";
                left = set[t][1] - start[1];
                str += left >= 0 ? "R".repeat(left) : "L".repeat(-1 * left);
                str += down > 0 ? "D" : ""
                str += "!";
                start = set[t];
            }
        }else{
            move(t)
        }
    }
    return str;
};
alphabetBoardPath("leetcode")