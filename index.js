// Callbacks
// Esto es una funcion normal:
function calc(x, y, operation, callback) { //callback ya se ejecuta como funcion en el parametro
    let result;

    switch(operation) {
        case 'add':
            result = x + y;
            break;
        case 'substract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        default:
            result ='Op not valid';
            break;
    }
    callback(result);
}

// Es una funcion normal:
function logResult(value) {
    console.log(`Result : ${value}`)
}

/** 
calc(100, 50, 'add', logResult);
calc(100, 50, 'substract', logResult);
calc(100, 50, 'multiply', logResult);
*/

// SetTimeOut

function getUser() {
    console.log(`Welcome, Shrek99`);
}

setTimeout(getUser, 3000);
// 3000 milsegundos = 3 segundos
console.log('Waiting for user info');

// SetTimeout + Callback + funcion anonima

setTimeout(() => console.log('Welcome, Shrek99'), 5000);