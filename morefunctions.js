// Inputs aka parameteres
// Work
// Outputs aka return value

//What do I want this function to do?
//Inputs: name, flightnumber, set
//Work Based on info, make a "confirmation statement" with name, flight number, seatnumber, and confirmation code.
//Output: the "confirmation statement"

//Assumption: code external to the function will prompt the user for their name, flightNumber, and seatNumber.
// var passengerName = 'Corey';
// var flght = '555';
// var seatNumber = '27b';

//Build example with sample user in the order input, output, work
  //Input: name - Corey, flight number - 555, seatNumber - 27B
  //work: 
    //Randomly generate a strong containing numbers and letters (TODO, NOT NOW)
    //Take the inputs and remember them
    //concatenate string of inputs
  

//Output: "Corey, you have booked flight 555, seat 27B.".

//When we run it: assign Corey to name, assign 555 to flight, and assign 27B to seatNumber

//function with parameters           parameters
function makeFlightConfirmation(name, flightNumber, seatNumber) {
  var ticket  = name + ", you have booked flight " + flightNumber + ", seat" + seatNumber + "."
  return ticket;
}
//make function run:       actual values
 var coreysConfirmation = makeFlightConfirmation("Corey", "555", "27B"); 
//need to catch the value of function


