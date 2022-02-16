// 1.1

function name(arg, argument) {
    alert('Hello');
}

const Name = function (argument) {

}

//1.2
function number() {
    console.log('Arguments ==', arguments);
}

//1.3

function comparison(i, j) {
    if (i < j) {
        alert('-1');
    } if (i > j) {
        alert('1');
    } else {
        alert('0');
    }
}

comparison(5, 15);

//1.4
function facktorial(num) {
    let result = 1;
    while (num) {
        result *= num--;
    }
    return result;
}

//1.5
function func(a, b, c) {
    console.log(`${a}${b}${c}`);
}
func(45, 13, 50)

//1.6
function area(long, width) {
    let result = long * width;
    if (width === undefined) {
        result = long * long
    }
    alert(result);
}



