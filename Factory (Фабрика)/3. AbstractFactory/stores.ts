
import { PizzaIngredientFactiory, NYPizzaIngredientFactory, ChicagoPizzaIngredientFactory } from './styled-pizzas';
import { Pizza, CheesePizza, PepperoniPizza, ClamPizza, VeggiePizza } from './pizzas'

abstract class PizzaStore {
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
        let ingredientFactiory: PizzaIngredientFactiory = new NYPizzaIngredientFactory()

        if (type === 'cheese') {
            pizza = new CheesePizza(ingredientFactiory);
            pizza.setName('New York Style Cheese Pizza');
        } else if (type === 'pepperoni') {
            pizza = new PepperoniPizza(ingredientFactiory);
            pizza.setName('New York Style Pepperoni Pizza');
        } else if (type === 'clam') {
            pizza = new ClamPizza(ingredientFactiory);
            pizza.setName('New York Style Clam Pizza');
        } else if (type === 'veggie') {
            pizza = new VeggiePizza(ingredientFactiory);
            pizza.setName('New York Style Veggie Pizza');
        }

        return pizza;
    }
}

export class ChicagoPizzaStore extends PizzaStore {
    public createPizza(type) {
        let pizza: Pizza = null;
        let ingredientFactiory: PizzaIngredientFactiory = new ChicagoPizzaIngredientFactory();

        if (type === 'cheese') {
            pizza = new CheesePizza(ingredientFactiory);
            pizza.setName('Chicago Style Deep Dish Cheese Pizza');
        } else if (type === 'pepperoni') {
            pizza = new PepperoniPizza(ingredientFactiory);
            pizza.setName('Chicago Style Pepperoni Pizza');
        } else if (type === 'clam') {
            pizza = new ClamPizza(ingredientFactiory);
            pizza.setName('Chicago Style Clam Pizza');
        } else if (type === 'veggie') {
            pizza = new VeggiePizza(ingredientFactiory);
            pizza.setName('Chicago Style Veggie Pizza');
        }

        return pizza;
    }
}