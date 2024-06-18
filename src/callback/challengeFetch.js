const API = 'https://api.escuelajs.co/api/v1';
let $DATA = [];

const FetchData = async (urlApi, callback) => {
  try {
    const res = await fetch(urlApi);
    const data = await res.json();
    callback(null, data);
  } catch (error) {
    callback(error, null);
  }
};

const dataResponse = async (err, data) => {
  const result = await data.reduce(
    (acc, { id, title, description, price, rest, images, ...resto }) =>
      (acc = [...acc, { id, title, description, price, images }]),
    []
  );
  if (err) return console.error(err);
  $DATA = result;
};

FetchData(`${API}/products`, dataResponse);

console.log('data->', $DATA);
