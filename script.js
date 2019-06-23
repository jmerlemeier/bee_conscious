// var username;
// console.log(username);

// username = "Stephanie";
// console.log(username);
// document.write("<p> ......</p>");

//PROMPTS
var username = prompt("Hello, did you know a bee must collect nectar from about 2 million flowers to make 1 pound of honey? They are some of the hardest workers on the planet! So we can personalize your experience, what is your name?");

//Concatenation a string
document.write("<p> Hello, " + username + ". Welcome to our BeehivePage!</p>");

var numberofbees = prompt("How many Bees would you like today?");

if (numberofbees < 100) {
  document.write("<p> That is not enough bees. It appears you need more bees in your life, " + username + ". Click the 'Bee Store' link for more Bees! </p>");
} else {
  document.write("<p>Great, jog on over to the 'Bee Store' to order more bees. Happy bee keeping, " + username + ".</p>");
}

