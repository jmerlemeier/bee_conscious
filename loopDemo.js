

//while loops need:
//What value do we start with
//when do we keep looping
//how do we update the value each time

var lightColor = prompt("What color is the light?"); //value do we start with

while (lightColor === "red") { //when do we enter/stay in the loop
  console.log('Stop');
  lightColor = prompt("What color is the light?");// give us a chance to update the variable
} 
 
console.log("goooooo!!!");


//

var numberOfRooms = prompt("How many rooms do you need to clean?");

while (numberOfRooms > 0){
  console.log('vacuum');
  console.log('dust');
  console.log('put things away');
  numberofRooms--;
}
  console.log('I am done cleaning!');


// While loop with counter is a FOR LOOP
var numberOfRooms = prompt("How many rooms do you need to clean?"); 

for (var numberOfRooms = 0; numberOfRooms > 0; numberofRooms--) {
  console.log('vacuum');
  console.log('dust');
  console.log('put things away');
}

console.log('I am done cleaning!');