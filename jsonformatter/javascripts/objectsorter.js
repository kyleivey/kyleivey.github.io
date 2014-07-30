function sortObject(obj) {
    if (obj instanceof Object == false) {
        return obj;
        
    } else if (obj instanceof Array == true) {
        for (var i = 0; i < obj.length; i++) {
            obj[i] = sortObject(obj[i]);
        }
        return obj;
        
    } else {
        var newObj = {};
        var keys = Object.keys(obj).sort(sortLowerCase);
        
        for (var i = 0; i < keys.length; i++){
            key = keys[i];
            newObj[key] = sortObject(obj[key]);
        }
        
        return newObj;
    }
}

function sortLowerCase(a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    return ((a < b) ? -1 : ((a > b) ? 1 : 0));
}
