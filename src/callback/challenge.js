const xmlHttp = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
  let xhttp = new xmlHttp.XMLHttpRequest();
  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error' + urlApi);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

function postData(err, data) {
  if (err) return console.error(err);
  fetchData(`${API}/products/${data[0].id}`, function (err1, data1) {
    if (err1) return console.error(err1);
    fetchData(
      `${API}/categories/${data1?.category?.id}`,
      function (err2, data2) {
        if (err2) return console.error(err2);
        console.log(data[0]);
        console.log('title ->', data1.title);
        console.log('name->', data2.name);
      }
    );
  });
}

fetchData(`${API}/products`, postData);
