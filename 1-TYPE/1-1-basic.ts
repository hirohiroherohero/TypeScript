{
    /**
     * JavaScript
     * Primitive: number, string, boolean, symbol, undefined, null, bigint,
     * Object: function, array.....
     */

    // number
    const num: number = 2;

    // string
    const str: string = "hello";

    // boolean
    const boal: boolean = true;

    // undefined
    // let name: undefined; 💩
    let age: number | undefined = undefined;
    age = 8;
    age = undefined;
    function find(): number | undefined {
        return undefined;
    }

    // null
    // let person: null; 💩
    let person: string | null = null;
    person = "hi";
    person = null;

    // unknown 💩
    let notSure: unknown = 0;
    notSure = "str";
    notSure = true;

    // any 💩
    let anything: any = null;
    anything = "hello";

    // void: return undefined
    function print(): void {
        console.log("hello");
        return;
    }

    // never: 절대 return x
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
        // while (true) {...}
    }

    // object 💩
    let obj: object;
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({ name: "yang" });
    acceptSomeObject({ animal: "dog" });
}
