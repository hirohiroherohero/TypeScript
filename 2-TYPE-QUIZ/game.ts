/**
 * Let's make a game 🕹
 */

{
    type DirectionType = "up" | "down" | "left" | "right";
    type PositionType = {
        x: number;
        y: number;
    };

    const position: PositionType = { x: 0, y: 0 };

    const move = (direction: DirectionType) => {
        switch (direction) {
            case "up":
                position.y += 1;
                break;
            case "down":
                position.y -= 1;
                break;
            case "left":
                position.x -= 1;
                break;
            case "right":
                position.x += 1;
                break;
        }
    };

    console.log(position); // { x: 0, y: 0}
    move("up");
    console.log(position); // { x: 0, y: 1}
    move("down");
    console.log(position); // { x: 0, y: 0}
    move("left");
    console.log(position); // { x: -1, y: 0}
    move("right");
    console.log(position); // { x: 0, y: 0}
}
