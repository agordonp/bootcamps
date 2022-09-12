// axios.get("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("Responde is: ", res);
//     })
//     .catch((e) => {
//         console.log("Error: ", e);
//     })

// const getStarWarPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch (e) {
//         console.log("ERROR: ", e);
//     }
// }

// getStarWarPerson(10);

const button = document.querySelector("#getJoke");
const ul = document.querySelector("#jokesList");

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    alert("NO JOKES AVAILABLE :(", e);
  }
};

const addNewJoke = async () => {
  const joke = await getDadJoke();
  const color = randColor();
  const li = document.createElement("li");
  li.append(joke);
  li.style.color = color;
  ul.append(li);
};

const randColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

button.addEventListener("click", addNewJoke);
