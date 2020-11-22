export abstract class Pizza {
    public name: string;
    public dought: string;
    public sauce: string;
    public toppings: string[] = [];

    public prepare(): void {
        console.log(`Preparing ${this.name}`);
        console.log('Tossing dought...');
        console.log('Adding sauce...');
        console.log('Adding toppings...');

        for (let topping of this.toppings) {
            console.log(` ${topping}`)
        }
    }

    public bake(): void {
        console.log('Bake for 25 minutes at 350');
    }

    public cut(): void {
        console.log('Cutting the pizza into diagonal slices');
    }

    public box(): void {
        console.log('Place pizza in official PizzaStore box');
    }

    public getName(): string {
        return this.name;
    }
}

export class NYStyleCheesePizza extends Pizza {
    constructor() {
        super();

        this.name = 'NY Style Sauce and Cheese Pizza';
        this.dought = 'Thin Crust Dought';
        this.sauce = 'Marinara Sauce';

        this.toppings.push('Grated Reggano Cheese');
    }
}

export class NYStylePepperoniPizza extends Pizza {
    constructor() {
        super();

        this.name = 'NY Style Sauce and Pepperoni Pizza';
        this.dought = 'Thin Crust Dought';
        this.sauce = 'Marinara Sauce';

        this.toppings.push('Grated Reggano Cheese');
    }
}

export class NYStyleClamPizza extends Pizza {
    constructor() {
        super();

        this.name = 'NY Style Sauce and Clam Pizza';
        this.dought = 'Thin Crust Dought';
        this.sauce = 'Marinara Sauce';

        this.toppings.push('Grated Reggano Cheese');
    }
}

export class NYStyleVeggiePizza extends Pizza {
    constructor() {
        super();

        this.name = 'NY Style Sauce and Veggie Pizza';
        this.dought = 'Thin Crust Dought';
        this.sauce = 'Marinara Sauce';

        this.toppings.push('Grated Reggano Cheese');
    }
}

export class ChicagoStyleCheesePizza extends Pizza {
    constructor() {
        super();

        this.name = 'Chicago Style Deep Dish Cheese Pizza';
        this.dought = 'Extra Thick Crust Dought';
        this.sauce = 'Plum TOmato Sauce';

        this.toppings.push('Shredded Mozzarella Cheese');
    }

    cut(): void {
        console.log('Cutting the pizza into square slices');
    }
}

export class ChicagoStylePepperoniPizza extends Pizza {
    constructor() {
        super();

        this.name = 'Chicago Style Deep Dish Pepperoni Pizza';
        this.dought = 'Extra Thick Crust Dought';
        this.sauce = 'Plum TOmato Sauce';

        this.toppings.push('Shredded Mozzarella Cheese');
    }

    cut(): void {
        console.log('Cutting the pizza into square slices');
    }
}

export class ChicagoStyleClamPizza extends Pizza {
    constructor() {
        super();

        this.name = 'Chicago Style Deep Dish Clam Pizza';
        this.dought = 'Extra Thick Crust Dought';
        this.sauce = 'Plum TOmato Sauce';

        this.toppings.push('Shredded Mozzarella Cheese');
    }

    cut(): void {
        console.log('Cutting the pizza into square slices');
    }
}

export class ChicagoStyleVeggiePizza extends Pizza {
    constructor() {
        super();

        this.name = 'Chicago Style Deep Dish Veggie Pizza';
        this.dought = 'Extra Thick Crust Dought';
        this.sauce = 'Plum TOmato Sauce';

        this.toppings.push('Shredded Mozzarella Cheese');
    }

    cut(): void {
        console.log('Cutting the pizza into square slices');
    }
}