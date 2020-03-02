/* Driver creates Controller and calls its methods */
//Guys seriously how does MVC work? Am I even doing this right?
//help
var controller;

function main() {
    console.log("Starting program...");
    
    var frogModel = new Model();
    var frogView = new View();
    
    controller = new Controller(frogModel, frogView);
}