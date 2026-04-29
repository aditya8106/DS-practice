function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let count = {};
    for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
        count[t[i]] = (count[t[i]] || 0) - 1;
    }
    for (let key in count) {
        if (count[key] !== 0) {
            return false;
        }   
    }
    return true;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

// Alternative approach using sorting
function isAnagram2(s, t) {
    if (s.length !== t.length) {    
        return false;
    }
    return s.split('').sort().join('') === t.split('').sort().join('');
}
console.log(isAnagram2("listen", "silent"));
console.log(isAnagram2("hello", "world"));  

/// Alternative approach using two hash maps

function isAnagram1(s, t) {
        if(s.length  != t.length){
             return false
        }
        let countS ={}
        let Tcount= {}
        for(let i = 0;i<=s.length;i++){
            countS[s[i]] = (countS[s[i]] || 0) +1;
            Tcount[t[i]] = (Tcount[t[i]] || 0) +1;
        }
        for(let key in countS){
            if(countS[key] !== Tcount[key]){
                return false
            }
        }
        return true
     
        
    }
console.log(isAnagram1("listen", "silent"));
console.log(isAnagram1("hello", "world"));