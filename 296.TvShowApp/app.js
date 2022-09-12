const form = document.querySelector("#searchForm");
// const input = document.querySelector("input");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  //   const inputValue = input.value;
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
  console.log(res.data);
  makeImages(res.data);
  form.element.query.value = "";
});

// const makeImages = (shows) => {
//   for (let result of shows) {
//     if (result.show.image) {
//       const img = document.createElement("img");
//       img.src = result.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };

const makeImages = (res) => {
  for (let i = 0; i < res.length + 1; i++) {
    if (res[i].show.image) {
      const img = document.createElement("img");
      img.src = res[i].show.image.medium;
      document.body.append(img);
    }
  }
};
