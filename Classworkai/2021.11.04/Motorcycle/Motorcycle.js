class Motorcycle extends Car {
    constructor (make, model, year, wheels) {
        super(wheels);
        this.wheels = wheels;
        this.make = make;
        this.model = model;
        this.year = year;
        
    }

    getWheelsNumber() {
        if (this.wheels == 3) {
            return 'motociklas turi 3 ratus';
        } else if (this.wheels == 2) {
            return 'motociklas turi 2 ratus';
        } else {
            return 'tai ne motociklas'
        }
    }

}
