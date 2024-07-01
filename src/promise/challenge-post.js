import fetch from 'node-fetch';
const $API = 'https://api.escuelajs.co/api/v1';

const postData = async (url, data) => {
  const response = fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};

const data = {
  title: 'Spartan Pedro Fernandez',
  price: 10000,
  description: 'test estudio',
  categoryId: 1,
  images: ['https://placeimg.com/640/480/any'],
};

postData(`${$API}/products/`, data)
  .then((res) => console.log(res))
  .then((data) => console.log('data: ', data));
