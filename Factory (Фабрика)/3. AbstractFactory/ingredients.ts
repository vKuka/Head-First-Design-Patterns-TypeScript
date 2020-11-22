export interface Cheese {
    name: string;
}

export interface Dought {
    name: string;
}

export interface Sauce {
    name: string;
}

export interface Veggies {
    name: string;
}

export interface Pepperoni {
    name: string;
}

export interface Clams {
    name: string;
}

//Cheese
export class MozzarellaCheese implements Cheese {
    public name = 'Mozzarella Cheese';
}

export class ReggianoCheese implements Cheese {
    public name = 'Reggiano Cheese';
}

//Dought
export class ThinCrustDought implements Dought {
    public name = 'Thin Crust Dought';
}

export class ExtraThickCrustDought implements Dought {
    public name = 'Extra Thick Crust Dought';
}

//Sauce
export class PlumTomatoSauce implements Sauce {
    public name = 'Plum Tomato Sauce';
}

export class MarinaraSauce implements Sauce {
    public name = 'Marinara Sauce';
}

//Veggies
export class Garlic implements Veggies {
    public name = 'Garlic';
}

export class Onion implements Veggies {
    public name = 'Onion';
}

export class Mushrums implements Veggies {
    public name = 'Mushrums';
}

export class RedPepper implements Veggies {
    public name = 'RedPepper';
}

//Pepperoni
export class SlicedPepperoni implements Pepperoni {
    public name = 'Sliced Pepperoni';
}

//Clams
export class FreshClams implements Clams {
    public name = 'Fresh Clams';
}

export class FrozenClams implements Clams {
    public name = 'Frozen Clams';
}