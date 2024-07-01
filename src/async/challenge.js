import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/vi';

const fetchData = async (urlApi) => {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
};

const antherFn = async (urlApi) => {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(
      `${urlApi}/categories/${product.category.id}`
    );
  } catch (err) {
    return new Error(err.messange);
  }
};
