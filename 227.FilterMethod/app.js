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

const goodMovies = movies.filter(m => m.score > 80).map(m => m.title)

function allEvens(numbers) {
    return numbers.every(number => number % 2 === 0)
}

function allEvens(numbers) {
    return numbers.every(function (number) {
        number % 2 === 0
    })
}