let movies = [
    new Movie('Kill the Vibe', 'Church', 1975, 2500, 5000),
    new Movie('Arabica', 'Jim Kinderson', 1877, 3655555, 9999999999999),
    new Movie('Tantrum', 'Vin Sniper', 2020, 1000000, 2500000000)
]


for(let movie of movies) {
    console.log(movie.getIntroduction());
    console.log(movie.getProfit());
}
