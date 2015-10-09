//-----------Practice with JavaScript OOP Concepts (10 points)-------
//1.	Create a namespace called Animal. Then, define two sub namespaces, one called Cat and another called Dog.
/*
var ANIMAL = ANIMAL || {};

ANIMAl.dog = function(){};
ANIMAL.cat = function(){};
*/

//2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal syntax and the Dog class should be created using the constructor syntax.
/*
function cat(){};
var dog = function(){};
*/

//3.	Create a new instance of Cat class. Directly underneath, create a new instance of the Dog class.
/*
function dog(){};
var cat = function(){};

var slim = new cat ();
var thule = new dog ();
*/

//4.	Start over and now create a new class using literal syntax called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window. 

/*
var Animal = function(){
    console.log("The Animal has been created");
};
var dog = new Animal();
*/

//5.	Now, change the above code so that is mimics a true constructor. The class should accept an argument and that value is what should be displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.

/*
function Animal(created){
    console.log(created);
};

var dog = new Animal("The Animal has been created");
*/

//6.	Start over and now create a new class using literal syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. 

/*
var Animal = function(newType, newBreed, newColor, newHeight, newLength){
    this.type = newType;
    this.breed = newBreed;
    this.color = newColor;
    this.height = newHeight;
    this.lenght = newLength;
}

var dog = new Animal("dog", "ACD", "beige", 16, 24);
*/

//7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.

/*
var Animal = function(newType, newBreed, newColor, newHeight, newLength){
    this.type = newType;
    this.breed = newBreed;
    this.color = newColor;
    this.height = newHeight;
    this.lenght = newLength;
};

var dog = new Animal("dog", "ACD", "beige", 16, 24);
for (var x in dog){
    console.log(dog[x]);
};
*/

//8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

/*
var Animal = function(newType, newBreed, newColor, newHeight, newLength){
    this.type = newType;
    this.breed = newBreed;
    this.color = newColor;
    this.height = newHeight;
    this.lenght = newLength;
};

var dog = new Animal("dog", "ACD", "beige", 16, 24);

Animal.prototype.speak = function(){
    if(this.type == "dog"){
        console.log("The " + this.color + " dog is barking");
    }else{
        console.log("The " + this.color + " cat is meowing");
    };
};

dog.speak();
*/

//9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”

/*
var Animal = function(newType, newBreed, newColor, newHeight, newLength){
    var type = newType;
    var breed = newBreed;
    var color = newColor;
    var height = newHeight;
    var lenght = newLength;
    var checkType = function(){
        if (type == "dog"){
            return "dog";
        }else{
            return "cat";
        }
    };
    this.speak = function(){
    console.log("The " + type + " has made a noise!");
    };
};

var dog = new Animal("dog", "ACD", "beige", 16, 24);
dog.speak();
*/

//10.	Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph.





//-------------------------------------------------------------------
//-----------Does My Vehicle Need An Oil Change? (10 points)-------
//-------------------------------------------------------------------

//11.   Create an abstract base class called Vehicle that accepts four parameters including make (string), model (string), total miles (number), and the mileage for the last oil change (number).
//12.   Within the Vehicle class, create 6 public properties named make, model, totalMiles, drivenMiles, type, and lastOilChange. Initialize the make, model, totalMiles, and lastOilChange properties with their respective arguments. The drivenMiles property should be initialized to 0 and the type property should be initialized to an empty string.

/*
var Vehicle = function(make, model, totalMiles, lastOilChange){
    this._make = make;
    this._model = model;
    this._totalMiles = totalMiles;
    this._lastOilChange = lastOilChange;
    this._drivenMiles = 0;
    this._type = "";
};

//13.   Now create a public method called drive() that accepts a parameter (perhaps miles). Increment and set the public drivenMiles property to the miles argument. Return the method (return this).

Vehicle.prototype.drive = function(miles){
    this._drivenMiles += miles;
    return this;
};

//14.   Now create a public method called checkOil(). Within this method, check to see if the total miles minus the last oil change plus the driven miles are less than or equal to 3000. If they are, return a message to the user that they need an oil change. Otherwise, return the method (return this).

Vehicle.prototype.checkOil = function(){
    if (this._totalMiles - this._lastOilChange + this._drivenMiles >= 3000){
        alert("You need an oil change!");
    }else{
        return this;
    }
};

//15.   Now create a new sub class called Car that accepts one parameter for the amount of doors that the car has.
//16.   Within the new Car class, initialize a public property called doorCount and set it equal to the argument.
//17.   Within the Car class use a conditional to check and see if the door count is greater than 2. If it is, set the type property to Sedan. Otherwise, set it to coupe.

var Car = function(doorCount){
    this._doorCount = doorCount;
    if (this._doorCount > 2){
        this._type = "Sedan";
    }else{
        this._type = "Coupe";
    }
};

//18.   Now, make sure that the Car class inherits from the Vehicle base class. Use this opportunity to pass in the make, model, total miles, and last oil change values into the Vehicle’s constructor.

Car.prototype = new Vehicle("Toyota", "Camry", 45000, 43204);

//19.   Then, create a new instance of the Car class and pass in the number of doors that the car has into the Car’s constructor.
                            
var myCar = new Car(4);

//20.   Finally, using method chaining, call the drive() method of the car object, passing in a numeric value as a parameter. At the same time, call the checkOil() method. Display the results in the console window. You will either get a message indicating your car needs an oil change or you will get the object hierarchy.

console.log(myCar.drive(5000).checkOil());
*/

//-------------------------------------------------------------------
//------------------The Recipe Card (10 points) ---------------------
//-------------------------------------------------------------------

/*
var Recipe = function(title, servings, ingredients){
    this._title = title;
    this._servings = servings;
    this._ingredients = ingredients;
    this._recipeCard = function() {
        console.log(this._title + "\nServes: " + this._servings + "\nIngredients: ");
        for (var i in this._ingredients){
            console.log("-" +this._ingredients[i])
        };
    }
};

var myTitle = "Mac and Cheese";
var myServings = 6;
var myIngredients = ["1 lb Macaroni", "4 Tbls Flour", "4 Tbls Butter", "4 Cups Milk", "5 Cups Shredded Cheese"];
var myRecipe = new Recipe(myTitle, myServings, myIngredients)

myRecipe._recipeCard();
*/



//-------------------------------------------------------------------
//------------------The Reading List (10 points)---------------------
//-------------------------------------------------------------------

/*
var Book = function(title, author, alreadyRead){
    this._title = title;
    this._author = author;
    this._alreadyRead = alreadyRead;
};

var book1 = new Book("Count of Monte Cristo", "Alex Dumas", true);
var book2 = new Book("Harry Potter 1", "J.K. Rowling", true);
var book3 = new Book("Yes, Please", "Amy Pheoler", false);
var book4 = new Book("Bossy Pants", "Tina Fey", true);
var book5 = new Book("Twilight", "Stephanie Miller", false);

var myBooks = [book1, book2, book3, book4, book5];
for (var i in myBooks){
    if (myBooks[i]._alreadyRead == true){
        console.log("You already read \"" + myBooks[i]._title + "\" by " + myBooks[i]._author)
    }else{
        console.log("You still need to read \"" + myBooks[i]._title + "\" by " + myBooks[i]._author)            
    }
};
*/


//-------------------------------------------------------------------
//------------------Fill in the Blanks (10 points)-------------------
//-------------------------------------------------------------------


(function() {
	var person = {
    	
        
	};
 
	var car = function(price){
    	this._price = price;
        
    	};
 
	// print vroom vroom
    car.prototype.drive = function(){
        console.log("vroom, vroom")
    };
    car.drive();
        
 
	// print 'I'm rich'
	if (car.price > 100000) {
    	person.buy(car);
        console.log("I'm rich!")
	}
}());




















