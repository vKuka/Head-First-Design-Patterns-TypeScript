import { NYPizzaStore, ChicagoPizzaStore } from './stores'

class PizzaTestDrive {
    public static run(args?: string[]): void {
        const nyStore = new NYPizzaStore();
        const chicagoStote = new ChicagoPizzaStore;

        let pizza = nyStore.orderPizza('cheese');
        console.log(`Ethan ordered a ${pizza.getName()}`);

        console.log('------');

        pizza = chicagoStote.orderPizza('cheese');
        console.log(`Joel ordered a ${pizza.getName()}`);
    }
}

PizzaTestDrive.run();