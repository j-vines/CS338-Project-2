/* Controller class contains instances of Model and View classes and calls their methods */
class Controller {
    constructor(model, view) {
        console.log("Controller created.");
        this.model = model;
        this.view = view;
        
        this.view.initView();
    }
}