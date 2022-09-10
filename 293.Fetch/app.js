// fetch("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("RESOLVE!!", res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2/")
//     })
//     .then((res) => {
//         console.log("We made it, again!!");
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log("ERROR!!", e)
//     })

const loadStarwarsPeople = async () => {
    try {
        for (let i = 1; i < 6; i++) {
            changeID(i);
        }
    } catch (e) {
        console.log("Error!", e);


        const changeID = async (id) => {
            const res = await fetch(`https://swapi.dev/api/people/${id}/`);
            data = await res.json();
            console.log(data);
        }
    }
}

loadStarwarsPeople();