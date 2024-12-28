// Strategy Interface
interface Bag {
    carry(): string;
}

// Concrete Strategies
class ClothBag implements Bag {
    carry(): string {
        return "Carrying items in a cloth bag.";
    }
}

class PlasticBag implements Bag {
    carry(): string {
        return "Carrying items in a plastic bag.";
    }
}

class Trolley implements Bag {
    carry(): string {
        return "Carrying items in a trolley.";
    }
}

class NoBag implements Bag {
    carry(): string {
        return "Not carrying any bag.";
    }
}

// Context
class Shopper {
    private strategy: Bag; 

    constructor(strategy: Bag) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Bag): void {
        this.strategy = strategy;
    }

    carryItems(): string {
        return this.strategy.carry();
    }
}

// Client Code
const shopper = new Shopper(new ClothBag());
console.log(shopper.carryItems());

shopper.setStrategy(new PlasticBag());
console.log(shopper.carryItems());

shopper.setStrategy(new Trolley());
console.log(shopper.carryItems()); 

shopper.setStrategy(new NoBag());
console.log(shopper.carryItems()); 
