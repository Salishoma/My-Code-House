/*
You are given a series of video clips from a sporting event that lasted T seconds.  These video clips can be overlapping with each other and have varied lengths.

Each video clip clips[i] is an interval: it starts at time clips[i][0] and ends at time clips[i][1].  We can cut these clips into segments freely: for example, a clip [0, 7] can be cut into segments [0, 1] + [1, 3] + [3, 7].

Return the minimum number of clips needed so that we can cut the clips into segments that cover the entire sporting event ([0, T]).  If the task is impossible, return -1.

LeetCode: 1024. Video Stitching
*/

var videoStitching = function(clips, T) {
    let ind = 0;
    let bottom = false;
    let apex = false;
    clips.sort((a, b) => a[0] - b[0]);
    let max = clips[0][1];
    for(let i = 0; i < clips.length; i++){
        if(clips[i][0] === 0) bottom = true;
        if(clips[i][1] >= T) apex = true;
        if(clips[i][0] === 0 && clips[i][1] >= T) return 1;
        if(clips[i][0] === 0){
            if(max <= clips[i][1]) max = clips[i][1];
            ind = i;
        }
    }
    if(!bottom || !apex) return -1;
    let res = 1;
    let end = [0,max];
    max = end
     for(let i = ind + 1; i < clips.length; i++){
         let j = i;
         if(end[1] >= clips[i][0] && end[1] < clips[i][1]){
             res++;
             while(end[1] >= clips[j][0] && j < clips.length){
                 if(max[1] < clips[j][1]){
                     max = clips[j];
                 }
                 j++;
                 if(j >= clips.length - 1) break;
             }
             i = j;
             if(max[1] >= T) return res;
             end = max;
         }
         else if(end[1] < clips[i][0]){
             return -1
         }
    }
    return res;
};
videoStitching([[1,23],[3,17],[22,24],[8,24],[4,17],[3,18],[15,23],[0,2]],15)
