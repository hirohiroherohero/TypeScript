{
    /**
     * Type Aliases
     */

    type Text = string;
    const name: Text = "hiro";
    const address: Text = "seoul";

    type Num = number;
    const age: Num = 10;

    type Student = {
        name: Text;
        age: Num;
    };
    const student: Student = {
        name: "hiro",
        age: 21,
    };

    /**
     * String Literal Types
     */
    type Name = "name";
    const hiroName: Name = "name";
    type Json = "json";
    const json: Json = "json";
}
