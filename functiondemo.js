
//give it a name
//give it a place to hold inputs
function makeSandwich(meat, cheese, bread) {
  //a place to define the work
  var sandwich = 'Here is a ' + meat + ' and ' + cheese + 'sandwich on ' + bread + 'bread.';
  //a place to say what the output should be
  return sandwich;
}

//and then we need to be able to run it, give them their inputs, and receieve their outputs. Make arguments and a new variable.
 var stephaniesSandwich = makeSandwich('turkey', 'pepperjack', 'wheat');







 //Ok, now we will prompt the user
 var wantstoAdd = prompt ('Do you want to add a cat today?');
 //prompt the user for name, age, gender
var name = prompt('What is the name of the cat?');
var age = prompt('How old is the cat?');
var gender = prompt('What gender is the cat?');
 //hand the info to the function that builds the html and run the function
var html = createCatEntry(Username, Userage, Usergender);
//take the html and give to document.write
 if (wantstoAdd === 'yes') {
  document.write(html);
 }else {
   document.write('Thanks for volunteering.')
 }

 //pseudocode~~~~~
 //inputs: name, age, gender
 //work: create the html for cat entry on site
 //output: the html


 function createCatEntry(name, age, gender) {
  var html = '<article><h2> + name + ", " + age + "months, " + gender + </h2><p>paragraph about the cat</p></article>';
  return html;
 }

 //--------------------------------------------------------
//pseudocode~~~~~
 //inputs: Number of bees, How many hives?, free honey y/n
 //work: create the html for for invoice on site
 //output: the html


 //Now, do it about Bees.
 var wantsBees = prompt('What would you like to order at the Bee Store?');

 var numberBees = prompt('How many Bees would you like?');
 var hiveType = prompt('Would you like and 8-frame hive or a 10-frame hive?');
 var freeHoney = prompt('Would you like a jar of complimentary wildflower honey?');

 var html = creatInvoice(userbee, userhive, userhoney);

 if (wantsBees === 'yes') {
  document.write(html);
 }else {
   document.write('Ok, enjoy our site and feel free to purchase at the Bee Store anytime!')
 }

 function creatInvoice(userbee, userhive, userhoney); {
  var html = '<article><h2>Ok, please review your order prior to purchase. You would like' + numberBees + 'bees, one' + hiveType + 'hive, and ' + freeHoney + 'honey? Is that correct?</h2></article>';
  return html;
 }

