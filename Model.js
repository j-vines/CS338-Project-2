/* Model class contains idk stuff, how does MVC even work? */
class Model {
    constructor() {
        console.log("Model created.");
        this.frogPos = {x:10, y:10}; //frog starts at coord (10,10)
    }
    
    /* Changes coordinates of frog position */
    /* Called by event listeners */
    setPos(x, y) {
        this.frogPos.x = this.frogPos.x + x;
        this.frogPos.y = this.frogPos.y + y;
        console.log("Frog position: (" + this.frogPos.x + ", " + this.frogPos.y + ")");
    }
}