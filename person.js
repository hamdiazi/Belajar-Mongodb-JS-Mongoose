const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Users')
.then((result) => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

// schema untuk personSchema
const personSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
});

// properti virtual
personSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`
});

// model Person
const Person = mongoose.model('Person', personSchema);

// buat data person
const person = new Person({
    firstName:'Hamdi',
    lastName:'Azi'
});
console.log(person.lastName);


// save ke DB
// person.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

