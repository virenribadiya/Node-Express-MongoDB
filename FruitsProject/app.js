const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");


// ==================================CREATE=====================================

/*

// schema
// collection or model
// data or objects and use insertMany

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

// const fruit = new Fruit({
//     name: "Apple",
//     rating: 7,
//     review: "Good taste!"
// });

const Banana2 = new Fruit({
    name: "Banana-2",
    rating: 7,
    review: "banana has good taste!"
});

const Kiwi2 = new Fruit({
    name: "kiwi-2",
    rating: 8,
    review: "Kiwi is very tasty!!"
});

Fruit.insertMany([Banana2,Kiwi2],function(error){
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log("Successfully saved the all fruits to fruitsDB!");
    }
});




//Step 1: create schema for a model or collection 
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

//Step 2: create model or collection from the schema
const Person = mongoose.model("Person",personSchema);

// step 3: insert the data by creating objects of the collection or model
const person = new Person({
    name: "John",
    age:25
});

person.save();

*/




















// =====================================READ=====================================

/*


const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);


Fruit.find(function(error,fruits){
    if (error) 
    {
        console.log(error);
    } else 
    {
        //console.log(fruits);
        mongoose.connection.close();
        fruits.forEach(function(fruit)
        {
            console.log(fruit.name);
        });
    }
});


*/



















// ===================================Validation while creating ========================



/*

const fruitSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"why no name?"]
    },
    rating:{
        type:Number,
        min: 1,
        max:10
    },
    review:String
})

const Fruit = mongoose.model("Fruit",fruitSchema);

const Apple = new Fruit({
     //name: "Apple",
     rating: 7,
     review: "Good taste!"
});

Apple.save();

*/



















// ================================= UPDATE=======================================

/*


const fruitSchema = mongoose.Schema({
    name: {
        type: String,
        required : [1,"Why no name?"]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});


const Fruit = mongoose.model("Fruit",fruitSchema);

Fruit.updateOne({_id:"63c38d3bd9d4efab3467547d"},{name:"Peach"}, function(error){
    if (error){
        console.log(err);
    }
    else
    {
        mongoose.connection.close();
        console.log("Successfully updated!");
    }
})


*/
























//==========================DELETE a perticular record=========================

/*

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [1,"Why no name?"]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});


const Fruit = mongoose.model("Fruit",fruitSchema);


Fruit.deleteOne({name:"Peach"}, function(error){
    if (error) {
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log("Successfully deleted!!");
    }
})


*/












// ===========================Relationships==========================

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [1,"Why no name?"]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});


const Fruit = mongoose.model("Fruit",fruitSchema);

const Pineapple = new Fruit({
    name: "Pineapple",
    rating: 9,
    review: "Good taste!"
});

Pineapple.save();

const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit: fruitSchema
})

const Person = mongoose.model("Person",personSchema);

const Ram = new Person({
    name:"Ram",
    age:12,
    favouriteFruit: Pineapple
})

Ram.save();
