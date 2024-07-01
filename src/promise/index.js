const promise = new Promise((resolve, reject) => {
  resolve('Hey!');
});

const cows = 8;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject(`We is no cows on the farm, ${cows} `);
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log('Finally'));
