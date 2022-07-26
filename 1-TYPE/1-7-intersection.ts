{
    /**
     * Intersection Type: And
     */

    type Stundent = {
        name: string;
        age: number;
    };

    type Worker = {
        empolyeeId: number;
        work: () => void;
    };

    function internWork(person: Stundent & Worker) {
        console.log(person.name, person.age, person.empolyeeId, person.work());
    }

    internWork({
        name: "hiro",
        age: 15,
        empolyeeId: 222,
        work: () => {},
    });
}
