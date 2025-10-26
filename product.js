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

// membuat custom method model
productSchema.methods.outStock = function () {
    this.stock = 0 
    return this.save();
}

// function change stock
const changeStock = async(id) => {
    const foundProduct = await Product.findById(id)
    await foundProduct.outStock();
    console.log('Data Berhasil diubah');
}


// membuat model
const Product = mongoose.model('Product', productSchema);

// membuat contoh data product
// const tshirt = new Product({name: 'T-Shirt Modern', price:'2000', color : 'Red'});

// contoh data produk lain
// const product = new Product({
//  "name": "Kemeja Flanel",
// 	"brand": "Hollister",
// 	"price": 750000,
// 	"color": "biru muda",
// 	"size": ["S", "M", "L"],
// 	"description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
// 	"condition": "baru",
// 	"stock": -25,
// 	"availability": {
// 		"online": true,
// 		"offline": true
//     }
// })
// save ke product
// product.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

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
