// Using JS method
// var reverseString = function(s) {
//     let newS = s.reverse();
//     s = newS;
//     return s;
// };


// Using 2 pointers and meeting in the middle

var reverseString = function(s) {
    
    
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--;
    }
};