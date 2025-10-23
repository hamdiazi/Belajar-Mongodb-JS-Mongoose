const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ShopApp')
.then((result) => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

// membuat schema
const productSchema = mongoose.Schema ( {
    name : {
        type:String,
        required : true
    },
    price : {
        type:Number,
        required : true,
        min : 0 
    },
    color : {
        type:String,
        required : true
    },
    size : [{
        type:String,
        required : true
    }],

    description : {
        type: String,
        required : true,
        maxLength :150
    },

    condition : {
        type: String,
        enum : ['baru', 'bekas'],
        default : 'baru'
    },

     stock : {
        type: Number,
        required : true,
        min : [0, 'nilai tidak boleh minus']
    },

    availability : {
        online : {
            type : Boolean,
            required : true
        },
        offline : {
            type : Boolean,
            required : true
        },
    }
});


// membuat custom method
// productSchema.methods.outStock = function() {
//     this.stock = 0
//     this.availability.online = false
//     this.availability.offline = false
//     return this.save()
// }

// --membuat model--
const Product = mongoose.model('Product', productSchema);


// --function change stock --
// const changeStock = async (id) => {
//     const foundProduct = await Product.findById(id)
//     await foundProduct.outStock();
//     console.log('Data berhasil diubah');
// }

// changeStock('68f99504e91ef80bef9a18d2');

// membuat contoh data product
// const tshirt = new Product({name: 'T-Shirt Modern', price:'2000', color : 'Red'});

// contoh data produk lain
const product = new Product({
 "name": "Kemeja Flanel",
	"brand": "Hollister",
	"price": 750000,
	"color": "biru muda",
	"size": ["S", "M", "L"],
	"description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
	"condition": "baru",
	"stock": 25,
	"availability": {
		"online": true,
		"offline": true
    }
});

Product.insertMany([
    {
		"name": "Celana Chino",
		"brand": "Levi's",
		"price": 900000,
		"color": "krem",
		"size": ["28", "30", "32", "34", "36"],
		"description": "Celana chino dengan warna yang cerah dan desain yang simpel, terbuat dari bahan katun yang nyaman dipakai.",
		"condition": "baru",
		"stock": 15,
		"availability": {
			"online": true,
			"offline": false
		}
	},
	{
		"name": "Sweater",
		"brand": "Gap",
		"price": 650000,
		"color": "merah muda",
		"size": ["S", "M", "L"],
		"description": "Sweater berkualitas tinggi dengan warna yang cerah dan desain yang simpel, cocok untuk kegiatan sehari-hari.",
		"condition": "baru",
		"stock": 20,
		"availability": {
			"online": true,
			"offline": true
		}
	},
	{
		"name": "Sepatu Sneakers",
		"brand": "Nike",
		"price": 1200000,
		"color": "putih",
		"size": ["38", "39", "40", "41", "42"],
		"description": "Sepatu sneakers dengan desain yang sporty dan modern, terbuat dari bahan sintetis yang berkualitas tinggi.",
		"condition": "baru",
		"stock": 10,
		"availability": {
			"online": true,
			"offline": true
		}
	},
	{
		"name": "Tas Ransel",
		"brand": "Herschel",
		"price": 1500000,
		"color": "biru",
		"size": ["one size"],
		"description": "Tas ransel dengan desain yang stylish dan modern, terbuat dari bahan polyester yang ringan dan tahan lama.",
		"condition": "baru",
		"stock": 5,
		"availability": {
			"online": false,
			"offline": true
		}
	},
	{
		"name": "Kacamata Aviator",
		"brand": "Ray-Ban",
		"price": 2000000,
		"color": "emas",
		"size": ["one size"],
		"description": "Kacamata aviator dengan desain yang elegan dan klasik, terbuat dari bahan logam berkualitas tinggi.",
		"condition": "baru",
		"stock": 8,
		"availability": {
			"online": true,
			"offline": false
		}
	}
]).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

// save ke product
product.save().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

// save ke DB tshirt
// tshirt.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// query tes untuk update data ke db dengan parameter ketiga (runValidators:true)
// Product.findOneAndUpdate({name: 'Kemeja Flanel'}, {
//     "name": "Kemeja Flanel",
// 	"brand": "Hollister",
// 	"price": 300000,
// 	"color": "biru muda",
// 	"size": ["S", "M", "L"],
// 	"description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
// 	"condition": "baru",
// 	"stock": -30,
// 	"availability": {
// 		"online": true,
// 		"offline": true
//         }
//     }, {new: true, runValidators:true})
//     .then((result) => {
//     console.log(result);
//     }).catch((err) => {
//     console.log(err.errors.stock.properties.message);
// });
