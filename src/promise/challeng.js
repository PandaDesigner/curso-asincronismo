import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI) {
  return fetch(urlAPI);
}
/*
fetchData(`${API}/products`)
  .then((res) => res.json())
  .then((products) => {
    console.log('Products-> ', products);
  })
  .catch((err) => console.error(err));
 */

fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    console.log('products-> ', products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((product) => {
    console.log('prduct -> ', product);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then((res) => res.json())
  .then((category) => {
    console.log('Category-> ', category.name);
  })
  .catch((err) => console.error(err))
  .finally(() => console.log('Finally'));
