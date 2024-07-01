import fetch from 'node-fetch';
const $API = 'https://api.escuelajs.co/api/v1';

const courseData = async (url) => {
  let data = [];
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`Error ${resp.status}`);

  const resultData = await resp.json();

  return {
    async loadData() {
      data = resultData;
    },
    async get() {
      if (data.length === 0) {
        await this.loadData();
      }
      return data;
    },
    async filterData(category, minRating) {
      const data = await this.get();
      return data.filter(
        (course) =>
          course.category.name === category && course.rating >= minRating
      );
    },
    async printFiltered(category, minRating) {
      const filteredData = await this.filterData(category, minRating);
      filteredData.forEach((course) => {
        console.log(
          `Nombre: ${course.name}, Categoría: ${course.category.name}, Calificación: ${course.rating}`
        );
      });
    },
  };
};

const test = courseData(`${$API}/products`);

test.get();
