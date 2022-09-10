const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

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

// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total);

// for (let i = 0; i < prices.length; i++) {
//     total += prices[i]
// }
// console.log(total);

// const total = prices.reduce((total, price) => total + price)

// const minPrice = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min;

// })

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})

const evens = [2, 4, 6, 8]
evens.reduce(sum, num => sum + num, 40);
