{
    /**
     * Type Inference
     */

    let text = "hello world";
    // text는 자동으로 string 타입
    // text = 2; error!

    function print(message = "default") {
        console.log(message);
    }

    print("hello world");
    // message에 default로 string을 넣어 자동으로 string 타입
    // print(1); error!

    function addNum(x: number, y: number) {
        return x + y;
    }
    // return값은 자동으로 number 타입
    const result = add(1, 2);
    // result는 자동으로 number 타입

    // 근데 과연 좋은걸까....?
    // 코드가 복잡해지면 타입을 정확하게 명시하는 것이 좋을듯..
}
