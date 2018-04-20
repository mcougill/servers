// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequestOne(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You're like really pretty");
}

function handleRequestTwo(request, response) {

    
    response.end("You smell");
  }

var server = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);


server.listen(PORT1, function() {
  console.log("Server listening on: http://localhost:" + PORT1);
});


serverTwo.listen(PORT2, function() {
    console.log("Server listening on: http://localhost:" + PORT2);
  });

