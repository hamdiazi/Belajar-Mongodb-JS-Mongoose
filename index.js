const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie_db')
.then((result) => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
})

// membuat schema untuk daftar movie
const movieSchema = new mongoose.Schema({
    title : String,
    years : Number,
    genre : String,
    director : String,
    rating : Number
});

// membuat model
const Movie = mongoose.model('Movie', movieSchema);

// object atau data movie
// const movie = new Movie ({
//     title:'One Piece',
//     years: 1997,
//     score: 9.0,
//     director: 'Oda'
// });

// cetak di console
// console.log(movie);

// save ke mongodb agar bisa dicek di mongosh
// movie.save();


// pakai insertMany
// Movie.insertMany([
// 	{
// 		"title": "Black Panther",
// 		"genre": "Action",
// 		"director": "Ryan Coogler",
// 		"year": 2018,
// 		"cast": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
// 		"description": "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
// 		"rating": 7.3,
// 		"image": "https://www.example.com/black_panther.jpg"
// 	},
// 	{
// 		"title": "Avengers: Infinity War",
// 		"genre": "Action",
// 		"director": "Anthony Russo, Joe Russo",
// 		"year": 2018,
// 		"cast": ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
// 		"description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
// 		"rating": 8.4,
// 		"image": "https://www.example.com/avengers_infinity_war.jpg"
// 	}
// ]).then((result) => {
//     console.log('Success Insert Data');
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

//find movie berdasarkan rating (hasil array)
// const getMovie = Movie.find({rating:{$gte:8}}).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

//find movie berdasarkan rating (hasil object)
// const getMovie = Movie.findOne({rating:{$gte:8}}).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

//find movie berdasarkan Id dengan MongoDB
// Movie.findOne({_id:'68ef133c51a993cb14bdef2e'}).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// find movie berdasarkan Id dengan Mongoose
// Movie.findById('68ef133c51a993cb14bdef2e').then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


// updateOne 
// Movie.update( {title:'Black Panther'}, {rating: 8.9}).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


// updateMany
// Movie.updateMany( {rating:{$lt:9}}, {genre: "jelek"}).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


//findByIdAndUpdate
// Movie.findByIdAndUpdate('68ef0e3691d43336124db525', {years:2025}, {new:true})
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


// deleteOne 
// Movie.deleteOne({ title: 'Black Panther'})
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// findByIdAndDelete
// Movie.findByIdAndDelete('68ef133c51a993cb14bdef2f')
// .then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

