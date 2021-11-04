class Car {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getIntroduction() {
        return `Car name: ${this.make}. Model - ${this.model} `;
    }

    getDate() {
        let carAge = (new Date).getFullYear() - this.year;
        return carAge;
    }

    getAge() {
        if (this.getDate() <= 10) {
            return '10 metų arba naujesnis'
        }
        else {
            return '11 metų arba senesnis'
        }
    }
}
