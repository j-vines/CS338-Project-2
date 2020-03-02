/* View class contains methods to update and display things in canvas element */
class View {

    constructor() {
        console.log("View created.");
        this.canvas = null; //declare canvas class variable
        this.ctx = null; //declare canvas context class variable
    }
    
    /* Gets canvas context and clears "screen" */
    initView() {
        this.canvas = document.getElementById("screen");
        this.ctx = this.canvas.getContext("2d"); //get canvas context to display 2d graphics on canvas
        
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); //fill canvas with blue rectangle with origin at (0,0)
    }
    
    //TODO: Methods to print frog on canvas at specific coordinates
}