{
    type Coffee = {
        shots: number;
        hasMilk: boolean;
    };

    // public
    // private 접근 불가
    // protected 상속한 자식클래스에서는 접근 가능
    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT = 7; // class level
        private coffeeBeans = 0; // instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }

            this.coffeeBeans += beans;
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

    const maker = CoffeeMaker.makeMachine(32);
    console.log(maker);
    //maker.coffeeBeans = -34; // invalid 외부에서 접근
    maker.fillCoffeeBeans(200);
    console.log(maker);
}
