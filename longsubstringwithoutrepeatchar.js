var lengthOfLongestSubstring = function(s) {
     var filt = {};
    var start = 0;
    var grand = 0;
    for(var i = 0; i < s.length; i++) {
        let val = s[i];
        if(val in filt) {
            start = Math.max(start, filt[val] + 1);
        } 
        grand = Math.max(grand, i + 1 - start);
        filt[val] = i
    }
    
    return grand;
};
