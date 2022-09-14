function CompareSubjects(s, t) {
    /*
    Returns true if the score of Subject s is "less than" t. Returns false otherwise.
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
    for (i = 0 ; i < arr.length ; i++) {
        for (j = i+1 ; j < arr.length ; j++) {
            if (CompareStrings(arr[i], arr[j])) {
                //swap the objects in the array
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            else {
            }
        }
    }
}

