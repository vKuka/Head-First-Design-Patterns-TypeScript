import { Pizza, NYStyleCheesePizza, NYStylePepperoniPizza, NYStyleClamPizza, NYStyleVeggiePizza, ChicagoStyleCheesePizza, ChicagoStylePepperoniPizza, ChicagoStyleClamPizza, ChicagoStyleVeggiePizza } from './pizzas';

export abstract class PizzaStore {
    public orderPizza(type: string): Pizza {
        const pizza: Pizza = this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }

    abstract createPizza(type: string): Pizza;
}

export class NYPizzaStore extends PizzaStore {
    public createPizza(type) {
        let pizza: Pizza = null;

        if (type === 'cheese') {
            pizza = new NYStyleCheesePizza();
        } else if (type === 'pepperoni') {
            pizza = new NYStylePepperoniPizza();
        } else if (type === 'clam') {
            pizza = new NYStyleClamPizza();
        } else if (type === 'veggie') {
            pizza = new NYStyleVeggiePizza();
        }

        return pizza;
    }
}

export class ChicagoPizzaStore extends PizzaStore {
    public createPizza(type) {
        let pizza: Pizza = null;

        if (type === 'cheese') {
            pizza = new ChicagoStyleCheesePizza();
        } else if (type === 'pepperoni') {
            pizza = new ChicagoStylePepperoniPizza();
        } else if (type === 'clam') {
            pizza = new ChicagoStyleClamPizza();
        } else if (type === 'veggie') {
            pizza = new ChicagoStyleVeggiePizza();
        }

        return pizza;
    }
}