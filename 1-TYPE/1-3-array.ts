{
    // Array
    const fruits: string[] = ["tomato", "banana"];
    const scores: Array<number> = [1, 2, 3];
    function printArray(fruits: readonly string[]) {}
    // function printArray(fruits: readonly Array<number>) {} X

    // Tuple -> interface, type alias, class로 대체하여 사용하자
    let student: [string, number];
    student = ["name", 123];
    student[0]; // name 💩 가독성 떨어짐..
    student[1]; // 123 💩 가독성 떨어짐..
    const [name, age] = student; // 비구조화 할당으로 해결..? 그래도 별로..
}
