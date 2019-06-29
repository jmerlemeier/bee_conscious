

var shoppingList = ['eggs', 'bacon', 'avocados', 'bread', 'champagne'];
  console.log(shoppingList);//get whole list

  //make loop

  for (var index = 0; index < shoppingList.length; index++) {
    console.log(shoppingList[index]);
  }

  //
  shoppingList.push('chocolate')
//
  var lastItem = shoppingList.pop();
  console.log(lastItem);


  //OBJECTS: bunch of info that describes one thing

  var cat1 = {
    name: 'Amelia', 
    age: 1, 
    hobbies: ['chasing her brother', 'dig at our duvet cover, nap']
    speak: function () {
      console.log('meeooowww');
    }
  };

  console.log(cat1);
  console.log(car1.name);
  cat1.speak();
//

  //make a LIST of OBJECTS
// var beeList = [];

//  newOrder = {};
//  newOrder.beehives = how many bees want
//  newOrder.hivetype = 8 or 10 frame hive
//  newOrder.honey = yes or no want free honey

 newOrder.html = createInvoice(newOrder.bees, newOrder.hive, newOrder.honey);

beeList.push(newOrder);

for (var index = 0; index < beeList.length; index++) {
  document.write(beeList[index].html);
}