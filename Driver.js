var controller;

function main() {
    console.log("Starting program...");
    
    var frogModel = new Model();
    var frogView = new View();
    
    controller = new Controller(frogModel, frogView);
}