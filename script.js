// // var username;
// // console.log(username);

// // username = "Stephanie";
// // console.log(username);
// // document.write("<p> ......</p>");

// //PROMPTS
// var username = prompt("Hello, did you know a bee must collect nectar from about 2 million flowers to make 1 pound of honey? They are some of the hardest workers on the planet! So we can personalize your experience, what is your name?");

// //Concatenation a string
// document.write("<p> Hello, " + username + ". Welcome to our BeehivePage!</p>");

// var numberofbees = prompt("How many Bees would you like today?");

// if (numberofbees < 100) {
//   document.write("<p> That is not enough bees. It appears you need more bees in your life, " + username + ". Click the 'Bee Store' link for more Bees! </p>");
// } else {
//   document.write("<p>Great, jog on over to the 'Bee Store' to order more bees. Happy bee keeping, " + username + ".</p>");
// }


//-------------------------------------------------------------------------------
//validation
var wantsBees = prompt('Would you like to make an order at the Bee Store? Please type yes or no.');

while (wantsBees !== "yes" && wantsBees !== "no") {
  wantsBees = prompt("Oops, you made an invalid entry. Please type yes or no. Would you like to make an order today?");
}

if (wantsBees === 'yes') {
  var numberBeehives = prompt('How many beehives would you like?');

  for (numberBeehives; numberBeehives > 0; numberBeehives--) {
    var hiveType = prompt('Would you like an 8-frame hive or a 10-frame hive?');
    var freeHoney = prompt('Would you like a jar of complimentary wildflower honey with your hive?');

    //hand that info to
    var html = createInvoice(numberBeehives, hiveType, freeHoney);
    //take the html and give it to document.write
    document.write(html);
  }
 } else {
  document.write(' Ok, enjoy our site and feel free to purchase at the Bee Store anytime!');
  alert("Feel free to order a hive in the future!");
  }


function createInvoice(numberBeehives, hiveType, freeHoney) {
 var html = '<p>Order # '+ numberBeehives + ': one ' + hiveType + ' hive and ' + freeHoney + ' to honey.</p>';
 return html;
}



//options for printing
//console.log(coreysConfirmation);
//document.write('<p>' + coreysConfirmation + '</p>') EXPECTS HTML to insert
//alert(coreysConfirmation);