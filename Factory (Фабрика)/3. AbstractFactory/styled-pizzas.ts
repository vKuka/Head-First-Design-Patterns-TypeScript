import { Cheese, Dought, Sauce, Veggies, Pepperoni, Clams, MozzarellaCheese, ReggianoCheese, ThinCrustDought, ExtraThickCrustDought, PlumTomatoSauce, MarinaraSauce, Garlic, Onion, Mushrums, RedPepper, SlicedPepperoni, FreshClams, FrozenClams } from './ingredients';

export interface PizzaIngredientFactiory {
    createDought(): Dought;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): Veggies[];
    createPepperoni(): Pepperoni;
    createClams(): Clams;
}

export class NYPizzaIngredientFactory implements PizzaIngredientFactiory {
    public createDought(): Dought {
        return new ThinCrustDought();
    }

    public createSauce(): Sauce {
        return new MarinaraSauce();
    }

    public createCheese(): Cheese {
        return new ReggianoCheese();
    }

    public createVeggies(): Veggies[] {
        return [new Garlic(), new Onion(), new Mushrums(), new RedPepper()];
    }

    public createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    public createClams(): Clams {
        return new FreshClams();
    }
}

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactiory {
    public createDought(): Dought {
        return new ExtraThickCrustDought();
    }

    public createSauce(): Sauce {
        return new PlumTomatoSauce();
    }

    public createCheese(): Cheese {
        return new MozzarellaCheese();
    }

    public createVeggies(): Veggies[] {
        return [new Garlic(), new Onion(), new Mushrums(), new RedPepper()];
    }

    public createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }

    public createClams(): Clams {
        return new FrozenClams();
    }
}