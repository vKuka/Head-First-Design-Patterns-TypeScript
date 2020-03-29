abstract class Beverage {
    description: string = 'Unknown Beverage';

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}

class Espresso extends Beverage {
    constructor() {
        super();
        this.description = 'Espresso';
    }

    cost(): number {
        return 1.99;
    }
}

class HouseBlend extends Beverage {
    constructor() {
        super();
        this.description = 'House Blend Coffee'
    }

    public cost(): number {
        return 0.89;
    }
}

class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = 'Dark Roast Coffee';
    }

    public cost(): number {
        return 1.70;
    }
}

class Decaf extends Beverage {
    constructor() {
        super();
        this.description = 'Decaf Coffee';
    }

    public cost(): number {
        return 1.5;
    }
}

abstract class CondimentDecorator extends Beverage {
    public abstract getDescription(): string;
}

class Mocha extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    public getDescription(): string {
        return `${this.beverage.getDescription()}, Mocha`;
    }

    public cost(): number {
        return 0.20 + this.beverage.cost();
    }
}

class Soy extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    public getDescription(): string {
        return `${this.beverage.getDescription()}, Soy`;
    }

    public cost(): number {
        return 0.5 + this.beverage.cost();
    }
}

class Whip extends CondimentDecorator {
    beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    public getDescription(): string {
        return `${this.beverage.getDescription()}, Whip`;
    }

    public cost(): number {
        return 0.30 + this.beverage.cost();
    }
}

//// Testing

const beverage: Beverage = new Espresso();
console.log(`${beverage.getDescription()} $${beverage.cost()}`);

let beverage2: Beverage = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);

let beverage3: Beverage = new DarkRoast();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
console.log(`${beverage3.getDescription()} $${beverage3.cost()}`);