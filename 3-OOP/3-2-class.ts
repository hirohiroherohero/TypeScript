{
    type Coffee = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        static BEANS_GRAM_PER_SHOT = 7; // class level
        coffeeBeans = 0; // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): Coffee {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error("Not enough coffee beans");
            }

            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

            return {
                shots,
                hasMilk: false,
            };
        }
    }

    const maker = new CoffeeMaker(32);
    console.log(maker);
    const maker2 = CoffeeMaker.makeMachine(10); // class level ex) math.abs..
    console.log(maker2);
}
