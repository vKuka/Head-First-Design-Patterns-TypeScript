abstract class Pizza {
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

class PizzaStore {
    factory: SimplePizzaFactory;

    constructor(factory: SimplePizzaFactory) {
        this.factory = factory;
    }

    public orderPizza(type: string): Pizza {
        const pizza: Pizza = this.factory.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}

class SimplePizzaFactory {
    public createPizza(type: string): Pizza {
        const pizza: Pizza = null;

        if (type === 'cheese') {
            // pizza = new CheesePizza();
        } else if (type === 'pepperoni') {
            // pizza = new PepperoniPizza();            
        } else if (type === 'clam') {
            // pizza = new ClamPizza();
        } else if (type === 'veggie') {
            // pizza = new VeggiePizza();
        }

        return pizza;
    }
}