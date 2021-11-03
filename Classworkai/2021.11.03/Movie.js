class Movie {
    constructor (name, director, year, budget, income) {
        this.name = name;
        this.director = director;
        this.year = year;
        this.budget = budget;
        this.income = income;
    }

    getIntroduction() {
        return `Movie name: ${this.name}, Director - ${this.director}, Year : ${this.year} `;
    }

    getProfit() {
        let profit = `Profit made = ${this.income - this.budget}`;
        return profit;  
    }
}
