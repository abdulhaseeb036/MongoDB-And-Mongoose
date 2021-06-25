const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/firstDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successful Connection mogoose"))
    .catch((err) => console.log(err));

// create Schema -> defines a strucutre of our document & validation.
// const Mongoscheme = new mongoose.Schema({
//     name: {
//         type: String,
//         // required: true,
//         // yaha validation defind krty hain, like mongoosed ki kush apni validation hain wo eg,
//         // visit this link to completely doc > https://mongoosejs.com/docs/schematypes.html
//         lowercase: true, //pre define validation
//         // if we want our custom validation so we can do by this method below
//         validate(value) {
//             if (value === "") {
//                 throw new Error("Please type name");
//             }  
//         }
//     },
//     role: String,
//     mobile: Number,
//     active: Boolean
// })

// // create Collection
// const Testdata = new mongoose.model("Testdata", Mongoscheme)

// // Create Document And Insert
// // For insert one document
// const setData = async () => {
//     try {
//         const data = new Testdata({
//             name: "",
//             role: "channel",
//             mobile: 030,
//             active: true
//         })
//         const result = await data.save();
//         console.log(result);
//     } catch (error) {
//         console.log(error)
//     }
// }
// setData()

// InserMany document in one line
// const setData = async () => {
//     try {
//         const mongoData = new Testdata({
//             name: "MONGOdB",
//             role: "DATABASE",
//             mobile: 22,
//             active: true
//         })
//         const jsData = new Testdata({
//             name: "js",
//             role: "front end",
//             mobile: 30,
//             active: true
//         })
//         const nodeData = new Testdata({
//             name: "node js",
//             role: "back end",
//             mobile: 30,
//             active: true
//         })
//         const result = await Testdata.insertMany([mongoData, jsData, nodeData]);
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }
// setData();

// read data from mongoDB
// const getData = async () => {
//     const result = await Testdata.find({name: "MONGOdB"});
//     console.log(result);
// }
// getData();

// Read only name
// const getData = async () => {
//     const result = await Testdata.find({name: "MONGOdB"})
//     .select({name: 1, _id: 0});
//     console.log(result);
// }
// getData();

// Camparisan operator in MongoDB
// $gt -> greater than
// $gte -> greather then and euall to
// $lt -> less then
// $lte -> less then equall to
// $in -> kya hamary colection k andar hay ? means array collection is in array hota is liye
// $nin -> not in us may nhi hay opposite to $in

// $gt 20
// const getData = async () => {
//     const result = await Testdata
//     .find({mobile: {$gt: 20}})
//     console.log(result);
// }
// getData();

// $gte 20
// const getData = async () => {
//     const result = await Testdata
//     .find({mobile: {$gte: 20}})
//     console.log(result);
// }
// getData();

// $lt
// const getData = async () => {
//     const result = await Testdata
//     .find({mobile: {$lt: 24}})
//     console.log(result);
// }
// getData();

// $lte 24
// const getData = async () => {
//     const result = await Testdata
//     .find({mobile: {$lte: 24}})
//     console.log(result);
// }
// getData();

// $lte 24
// const getData = async () => {
//     const result = await Testdata
//     .find({mobile: {$lte: 24}})
//     console.log(result);
// }
// getData();

// $in back end and database
// const getData = async () => {
//     const result = await Testdata
//     .find({role: {$in: ["DATABASE", "back end"]}})
//     console.log(result);
// }
// getData();

// Logical operator in MongoDB
// $or -> or operator
// $and -> and operator
// $nor -> nor operator
// $not -> not operaqtor

// $or -> or operator
// const getData = async () => {
//     const result = await Testdata
//         .find({
//             $or: [
//                 { name: "node js" },
//                 { role: "back end" }
//             ]
//         })
//     console.log(result);
// }
// getData();

// $and
// const getData = async () => {
//     const result = await Testdata
//         .find({
//             $and: [
//                 { name: "node js" },
//                 { role: "back end" }
//             ]
//         })
//     console.log(result);
// }
// getData();

// nor
// const getData = async () => {
//     const result = await Testdata
//         .find({
//             $nor: [
//                 { name: "node js" },
//                 { role: "back end" }
//             ]
//         })
//     console.log(result);
// }
// getData();

//$not
// const getData = async () => {
//     const result = await Testdata
//         .find({
//             $not: [
//                 { name: "node js" },
//                 { role: "back end" }
//             ]
//         })
//     console.log(result);
// }
// getData();

// Update Document
// const updateDocument = async (_id) => {
//     try {
//         const result = await Testdata.findByIdAndUpdate({ _id }, {
//             $set: {
//                 active: false
//             }
//         }, { useFindAndModify: false })
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }
// updateDocument("60d30f94568d0d282c222c89")

// Delete document
// const deletedoc = async(_id) => {
//     try {
//         const result = await Testdata.findByIdAndDelete({_id})
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }
// deletedoc("60d331ec769a4316a815c148");

// Valitation Mongoose.

