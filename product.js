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
        required : true
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
        enum : ['baru', 'bekas'];
        default : 'baru'
    },

     stock : {
        type: Number,
        enum : ['baru', 'bekas'];
        default : 'baru'
    }

});

// membuat model
const Product = mongoose.model('Product', productSchema);

// membuat data product
const tshirt = new Product({name: 'T-Shirt Modern', price:'2000', color : 'Red'});

// save ke DB
tshirt.save().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
