
//const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

//const [gold, silver, bronze, ...everyoneElse] = scores;

const user = {
    email: 'Alexisgordon96@gmail.com',
    password: 'Alexisg9603',
    firstName: 'Alexis',
    lastName: 'Gordon',
    born: 1996,
    bio: 'Computer engineer, web developer and future Spacex developer',
    city: 'Miami',
    state: 'Florida'
}

const user2 = {
    email: 'asarquis@gmail.com',
    firstName: 'Andrea',
    lastName: 'Sarquis',
    born: 2000,
    city: 'Miami',
    state: 'Florida'
}

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going on 30s',
        score: 70,
        year: 2004
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    }
]


// const { email, firstname, lastname, city, bio } = users;

// const { born: birthYear } = user;

// const { city, state, bio = 'N/A' } = user2;

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}

// movies.filter((movie) => movie.score >= 90)
movies.filter(({ score }) => score >= 90)

// movies.map((movie) => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})

