var p = document.getElementById('text');

var obj = {
    first: 1,
    second: 2,
    third: 3
}


p.innerHTML = JSON.stringify(obj) + '<br>';
p.innerHTML += JSON.stringify(newObj);

var newObj = clone(obj);

newObj.second = 1;


function clone(obj) {
    if (obj === null || typeof(obj) !== 'object')
        return obj;

    var temp = obj.constructor();

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            temp[key] = clone(obj[key]);
        }
    }

    return temp;
}