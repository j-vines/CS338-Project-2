/* Controller class contains instances of Model and View classes and calls their methods */
class Controller {
    constructor(model, view) {
        console.log("Controller created.");
        this.model = model;
        this.view = view;
        
        this.view.initView();
        this.view.updateFrog(model.frogPos, this.model.frogFaceRight);
        document.addEventListener("keydown", this.checkKey.bind(this));
    }
    
    /* Wrapper method for model's setPos method */
    moveFrog(x, y) {
        if(x > 0) { //frog moving right, set facing right
            this.model.frogFaceRight = true;
        }
        else if(x < 0) { //frog moving left, set facing left
            this.model.frogFaceRight = false;
        } 
        this.model.setPos(x, y);
        this.view.clearScreen();
        this.view.updateFrog(this.model.frogPos, this.model.frogFaceRight);
    }
    
    //Event listener for keyboard movement
    //Keycodes:
    //W = 87
    //A = 65
    //S = 83
    //D = 68
    checkKey(e) {
        if (e.keyCode == '87') { //up
            console.log("UP key pressed.")
            this.moveFrog(0, -10);
        }
        else if (e.keyCode == '83') { //down
            console.log("DOWN key pressed.")
            this.moveFrog(0, 10);
        }
        else if (e.keyCode == '65') { //left
            console.log("LEFT key pressed.")
            this.moveFrog(-10, 0)
        }
        else if (e.keyCode == '68') { //right
            console.log("RIGHT key pressed.")
            this.moveFrog(10, 0);
        }
    }
}