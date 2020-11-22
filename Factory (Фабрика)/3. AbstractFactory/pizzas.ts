import { Cheese, Dought, Sauce, Veggies, Pepperoni, Clams } from './ingredients';
import { PizzaIngredientFactiory } from './styled-pizzas';

export abstract class Pizza {
    public name: string;
    public dought: Dought;
    public sauce: Sauce;
    public veggies: Veggies[];
    public cheese: Cheese;
    public pepperoni: Pepperoni;
    public clams: Clams;

    abstract prepare(): void;

    public bake(): void {
        console.log('Bake for 25 minutes at 350');
    }

    public cut(): void {
        console.log('Cutting the pizza into diagonal slices');
    }

    public box(): void {
        console.log('Place pizza in official PizzaStore box');
    }

    public setName(name: string) {
        return this.name = name;
    }

    public getName(): string {
        return this.name;
    };

    public toString(): string {
        return '';
    }
}

export class CheesePizza extends Pizza {
    constructor(public ingredientFactiory: PizzaIngredientFactiory) {
        super();
    }

    prepare() {
        console.log(`Preparing ${this.name}`)
        this.dought = this.ingredientFactiory.createDought();
        this.sauce = this.ingredientFactiory.createSauce();
        this.cheese = this.ingredientFactiory.createCheese();
    }
}

export class PepperoniPizza extends Pizza {
    constructor(public ingredientFactiory: PizzaIngredientFactiory) {
        super();
    }

    prepare() {
        console.log(`Preparing ${this.name}`)
        this.dought = this.ingredientFactiory.createDought();
        this.sauce = this.ingredientFactiory.createSauce();
        this.cheese = this.ingredientFactiory.createCheese();
        this.pepperoni = this.ingredientFactiory.createPepperoni();
    }
}

export class ClamPizza extends Pizza {
    constructor(public ingredientFactiory: PizzaIngredientFactiory) {
        super();
    }

    prepare() {
        console.log(`Preparing ${this.name}`)
        this.dought = this.ingredientFactiory.createDought();
        this.sauce = this.ingredientFactiory.createSauce();
        this.cheese = this.ingredientFactiory.createCheese();
        this.clams = this.ingredientFactiory.createClams();
    }
}

export class VeggiePizza extends Pizza {
    constructor(public ingredientFactiory: PizzaIngredientFactiory) {
        super();
    }

    prepare() {
        console.log(`Preparing ${this.name}`)
        this.dought = this.ingredientFactiory.createDought();
        this.sauce = this.ingredientFactiory.createSauce();
        this.veggies = this.ingredientFactiory.createVeggies();
    }
}