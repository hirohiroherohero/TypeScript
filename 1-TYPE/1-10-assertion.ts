{
    /**
     * Type Assertions 💩
     */
    function jsStrFunc(): any {
        return "hi!";
    }

    const result = jsStrFunc();

    console.log((result as string).length);
    console.log((<string>result).length);

    // 하지만 jsStrFunc return 값이 number면 코드를 작성하는 순간 error가 뜨지 않지만 실행을 하면 undefined가 뜬다.
    // 실시간으로 예상하지 못한 문제가 발생
    // 내가 정말정말정말 타입을 장담할때 사용!

    const a: any = 5;
    console.log((a as Array<number>).push(1)); // 실행시 type error 💩

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers()!; // 여기나
    // numbers.push(1); error 🥶
    numbers!.push(1); // 여기에 ! 아무곳이나 ~~
    // !는 진짜진짜진짜 타입을 확신할 때

    const button = document.querySelector("class");

    // button.ATTRIBUTE_NODE; error! querySelector의 return은 E | null; 이기 때문에!
    // 이럴때
    button!.ATTRIBUTE_NODE;
}
