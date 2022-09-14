const form = document.querySelector("#searchForm");
//const input = document.querySelector("input");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  //   const inputValue = input.value;
  const searchTerm = form.elements.query.value;
  form.elements.query.value = "";
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
  console.log(res.data);
  deleteImgs();
  makeImages(res.data);
});

//ciclo for of
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
      const name = document.createElement("h4");
      const div = document.createElement("div");
      img.src = res[i].show.image.medium;
      name.innerText = res[i].show.name;
      div.append(img, name);
      document.body.append(div);
    } else {
      console.log("No more shows!");
    }
  }
};

const deleteImgs = () => {
  const divs = document.querySelectorAll("div");
  for (let el of divs) {
    el.remove();
  }
};
