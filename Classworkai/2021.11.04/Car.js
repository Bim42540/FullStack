class Car {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getIntroduction() {
        return `Car name: ${this.make}. Model - ${this.model} `;
    }

    getAge() {
        let carAge = (new Date).getFullYear() - this.year;
        if (carAge <= 10) {
            return '10 metų arba naujesnis'
        }
        else {
            return '11 metų arba senesnis'
        }
    }
}
