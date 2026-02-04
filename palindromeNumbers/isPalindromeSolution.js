/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str =x.toString();
     let right=str.length-1;
     let left=0;
    while(left<right){
        if(str[left]!=str[right]) return false;
        left++;
        right--;
    }
    return true;
};