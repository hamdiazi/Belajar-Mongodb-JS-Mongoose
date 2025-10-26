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

// middleware sebelum menyimpan 
personSchema.pre('save', async function() {
    // coba overrite
    this.firstName = "Zayyan"
    this.lastName = "Habibi"

    // proses sebelum melakukan simpan 
    console.log('Persiapan menyimpan data')
})

// middleware setelah menyimpan
personSchema.post('save', async function () {
    // contoh setelah menyimpan
    console.log('Data Berhasil disimpan..')
})


// model Person
const Person = mongoose.model('Person', personSchema);

// buat data person
const person = new Person({
    firstName:'Putri',
    lastName:'Rezeki'
});

// tes panggil virtual method 
// console.log(person.fullName);

// panggil person
console.log(person);


// tes panggil method dari middleware
person.save().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})



// save ke DB
// person.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

