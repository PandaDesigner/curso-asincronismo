function sum(num1, num2) {
  return num1 + num2;
}

function rest(num1, num2) {
  return num1 - num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log('Callback ->', calc(2, 2, sum));

function myFunTime(callBack, time) {
  return window.setTimeout(() => {
    callBack;
  }, time);
}
setTimeout(() => {
  console.log('Hola JavaScript');
}, 2000);

gretting = (name) => console.log(`Hola ${name}`);
setTimeout(gretting, 2000, 'Pedro');
