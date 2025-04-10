const mongoose  = require("mongoose");

main()
.then(() => {
    console.log("connection succesfull");
})
.catch((err) => {
    console.log("err", err)
});

async function main(params) {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon')
}


// const bookSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     author: String,
//     price: Number
// })

// Schema Types Options default
// const bookSchema = new mongoose.Schema({
//         title: {
//             type: String,
//             required: true
//         },
//         author: String,
//         price: Number,
//         discount: {
//             type: Number,
//             default: 0
//         },
//     })
  

//  option maxlength
// const bookSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//         maxlength: 20,
//     },
//     author: String,
//     price: Number,
//     discount: {
//         type: Number,
//         default: 0
//     },
// })

// minValue
// const bookSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//         maxlength: 20,
//     },
//     author: String,
//     price: {
//      type: Number,
//      min: 1,
//     },
//     discount: {
//         type: Number,
//         default: 0
//     },
// })

//  enum
// const bookSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//         maxlength: 20,
//     },
//     author: String,
//     price: {
//      type: Number,
//      min: 1,
//     },
//     discount: {
//         type: Number,
//         default: 0
//     },
//     category: {
//         type: String,
//         enum: ["fiction", "Non fiction"]
//     }
// })

// 
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 20,
    },
    author: String,
    price: {
     type: Number,
     min: [1, "Price is to low for amazaon book"],
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "Non fiction"]
    },
    genres: {
        type: [String],
    }
})

const books = mongoose.model("books", bookSchema);


books.findByIdAndUpdate("67f720a14e457924aec6b268", {price: -100},  {runValidators: true}).then((res) => {
    console.log("result", res);
})
.catch((err) => {
    console.log("error", err.errors.price.message);
})


// let book1 = new books({
//     title: "Marvel comics",
//     price:  10,
//     category: "fiction",
//     genres: ["comics", "actions", "adventure"],
    
// });

// book1.save()
// .then((res) => {
//     console.log("result", res);
// })
// .catch((err) => {
//     console.log("error", err);
// })