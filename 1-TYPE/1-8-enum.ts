{
    /**
     * Eunm
     */

    // JavaScript
    const MAX_NUMBER = 9;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;

    const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    enum Days {
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY,
        SUNDAY,
    }

    const day = Days.MONDAY;

    // enum을 피해야 하는 이유
    let day2: Days = Days.FRIDAY;
    day2 = Days.MONDAY;
    day2 = 10; // 💩 error가 뜨지 않음.. 타입이 정확하게 보장되지 않는다. enum 대신 union을 활용하자

    // union 활용 예시 ✨
    type DaysOfWeek = "MONDAY" | "TUESDAY" | "WEDNESDAY";
    let day3: DaysOfWeek = "MONDAY";
    // day3 = 10; error!!!
}
