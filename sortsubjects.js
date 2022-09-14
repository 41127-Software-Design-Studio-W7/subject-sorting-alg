function CompareSubjects(s, t) {
    /*
    Returns true if s is alphabetically "less than / before" t. Returns false otherwise.
    */
    for (let i = 0 ; i < s.length && i < t.length ; i++) {
        if (i < s.length && i < t.length) {
            if (s[i].score > t[i].score) {
                return true;
            }
        }
        if (i >= s.length) {
            return true;
        } 
        else {
            return false;
        }
        
    }
    return true;
}

function SortArrayOfSubjects(arr) {

}

