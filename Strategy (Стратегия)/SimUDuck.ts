/**
 * Abstract superclass
 */
abstract class Duck {
    flyBehavior: FlyBehavior;
    quackBehavior: QuackBehavior;

    public performFly(): void {
        this.flyBehavior.fly();
    }

    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public setFlyBehavior(fb: FlyBehavior): void {
        this.flyBehavior = fb;
    }

    public setQuackBehavior(qb: QuackBehavior): void {
        this.quackBehavior = qb;
    }

    public swim(): void {
        console.log('All ducks float, even decoys!');
    }
}

/**
 * Fligth interface
 */
interface FlyBehavior {
    fly(): void;
}

class FlyWithWings implements FlyBehavior {
    fly(): void {
        console.log('I\'m flying');
    }
}

class FlyNoWay implements FlyBehavior {
    fly(): void {
        console.log('I can\'t fly');
    }
}

class FlyRocketPowered implements FlyBehavior {
    fly(): void {
        console.log('I\'m flying with a rocket');
    }
}

/**
 * Quack interface
 */
interface QuackBehavior {
    quack(): void;
}

class Quack implements QuackBehavior {
    public quack(): void {
        console.log('Quack');
    }
}

class MuteQuack implements QuackBehavior {
    public quack(): void {
        console.log('<< Silence >>');
    }
}

class Squeack implements QuackBehavior {
    public quack(): void {
        console.log('Squeack');
    }
}

//// Testing

class MallardDuck extends Duck {
    public flyBehavior = new FlyWithWings();
    public quackBehavior = new Quack();

    public display(): void {
        console.log('I\'m a real Mallard duck');
    }
}

const mallard = new MallardDuck();
mallard.display();
mallard.performFly();
mallard.performQuack();

class ModelDuck extends Duck {
    public flyBehavior = new FlyNoWay();
    public quackBehavior = new Quack();

    public display(): void {
        console.log('I\'m a model duck');
    }
}

const model = new ModelDuck();
model.display();
model.performFly();
model.setFlyBehavior(new FlyRocketPowered());
model.performFly();