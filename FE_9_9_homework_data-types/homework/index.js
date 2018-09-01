function type(parametr) {
    let zero = 0, one = 1
    if (parametr[zero]) {
        return 'string'
    } else if (parametr * one === zero && !parametr){
        return 'null'
    }
}
console.log(type());



function iter(el) {
    for (let i = 0; i < el.length; i++) {
        console.log(el[i])
    }
}
iter();



function tramsform(el, x) {
    let arr = []
    for (let i = 0; i < el.length; i++) {
        arr.push(el[i] + x)
    }
    console.log(arr)
}
tramsform();



function bigger(el, x) {
    let arr = []
    for (let i = 0; i < el.length; i++) {
        if (el[i] > x) {
            arr.push(el[i])
        }
    }
    console.log(arr)
}
bigger();

let data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'age': 39,
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'age': 38,
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'age': 2,
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'age': 17,
        'eyeColor': 'green',
        'name': 'Weiss',
        'favoriteFruit': 'banana'
    }
]

function getAdultAppleLovers(data) {
    let arr = []
    for (let prop in data) {
        if (data[prop].age > 18 && data[prop].favoriteFruit === 'apple') {
            arr.push(data[prop].name)
        }
    }
    console.log(arr)
}
getAdultAppleLovers();



let keys = {keyOne: 1, keyTwo: 2, keyThree: 3}

function _keys() {
    let keyMass = []
    for (let key in keys)
        keyMass.push(key)
    console.log(keyMass)
}
_keys();


function _value() {
    let valueMass = []
    for (let key in keys)
        valueMass.push(keys[key])
    console.log(valueMass)
}
_value();
