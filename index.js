const mongoose  = require("mongoose");

main()
.then(() => {
    console.log("connection succesfull");
})
.catch((err) => {
    console.log("err", err)
});

async function main(params) {
    await mongoose.connect('mongodb://127.0.0.1:27017/test')
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
}) 

const User = mongoose.model("User", userSchema);

// const user2 = new User({
//     name: "Adam",
//     email: "adam@gmail.com",
//     age: 48
// });

// // user1.save();
// user2.save()
// .then(res => {
//     console.log("result", res);
// })
// .catch(err => {
//     console.log("error", err);
// })


// insert into multiple users

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 33},
//     {name: "bob", email: "bob@gmail.com", age: 33},
//     {name: "stark", email: "stark@gmail.com", age: 44}
// ])
// .then(res => {
//     console.log("result", res);
// })
// .catch(err => {
//     console.log("error", err);
// })

// User.find({}).then(res => {
//     console.log("result", res);
// })
// .catch(err => {
//     console.log("error", err);
// });

// User.find({age: {$gte: 40}})
// .then(res  => {
//     console.log("result", res);
// }).catch(err => {
//     console.log("error", err);
// })

// User.find({age: {$gte: 40}}).then(res => {console.log("result", res[0])}).catch(err => {console.log("err", err)});

// User.find({age: {$gte: 40}}).then(res => {
//     console.log("result", res[0].name);
// }).catch(err => {
//     console.log("errror", err)
// })

// User.findOne({ _id:  "67f6216f71799159899dbac1"}).then(res => {
//     console.log("result", res);
// }).catch(err => {
//     console.log("error", err);
// });

// User.findById("67f6216f71799159899dbac1").then(res => {
//     console.log("result", res);
// }).catch(err => {
//     console.log("error", err);
// })


//  Update one

// User.updateOne({name: "Bob"}, {email: "bob1@gmail.com"}).then((res) => {
//     console.log("result", res)
// }).catch((err) => {
//     console.log("error", err);
// });

//  Update Many

// User.updateMany({age: {$gte: 30}}, {age: 40})
// .then((res) => {
//     console.log("result", res);
// })
// .catch((err) => {
//     console.log("error", err);
// })


//  findByid and updateOne

// User.findOneAndUpdate({name: "Tony"}, {age: 70}, {new: true}).then((res) => {
//     console.log("reslut", res);
// }).catch((err) => {
//     console.log("error", err);
// })

//  findByind and update

// User.findByIdAndUpdate("67f6216f71799159899dbac3", {name: "Tony Stark"}, {new: true})
// .then((res) => {
//     console.log("result", res);
// })
// .catch((err) => {
//     console.log("error", err);
// })

// User.findByIdAndUpdate("67f6216f71799159899dbac3", {email: "tonystark@gmail.com"}, {new: true})
// .then((res) => {
//     console.log("result", res);
// })
// .catch((err) => {
//     console.log("error", err);
// })

//  delete one

// User.deleteOne({name: "Bob"}).then((res) => {
//     console.log("result", res);
// })
// .catch((err) => {
//     console.log("error", err);
// })

// delete many

// User.deleteMany({age: {$gte: 50}}).then((res) => {
//     console.log("result", res);
// })
// .catch((err) => {
//     console.log("error", err);
// })

//  Find By ID AND DELETE

// User.findByIdAndDelete("67f61cf8116570d434562773"
// ).then((res) => {
//     console.log("result", res);
// }).catch((err) => {
//     console.log("error", err);
// })

//  find By Id and delete One
User.findOneAndDelete({name: "Adam"})
.then((res) => {
    console.log("result", res);
})
.catch((err) => {
    console.log("error", err);
}) 