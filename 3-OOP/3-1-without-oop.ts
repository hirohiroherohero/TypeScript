{
    type Coffee = {
        shots: number;
        hasMilk: boolean;
    };

    const BEANS_GRAM_PER_SHOT = 7;

    let coffeeBeans = 0;

    function makeCoffee(shots: number): Coffee {
        if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
            throw new Error("Not enough coffee beans");
        }

        coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;

        return {
            shots,
            hasMilk: false,
        };
    }

    coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
    const doubleshotCoffee = makeCoffee(2);
    console.log(doubleshotCoffee);
}