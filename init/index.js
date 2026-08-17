// require("dotenv").config();

// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../models/listing.js");
// // const { init } = require("../models/listing");

// // const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
// const MONGO_URL = process.env.ATLASDB_URL;
// main()
//     .then(() => {
//         console.log("connected to DB");
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// async function main(){
//     await mongoose.connect(MONGO_URL);
// }

// const initDB = async () => {
//     await Listing.deleteMany({});
//     initData.data = initData.data.map((obj) => ({
//         ...obj, 
//         owner: "6a7e3b3e43d14ef824e1cdc0"}));
//     await Listing.insertMany(initData.data);
//     console.log("data was initialied");
// }

// initDB();
require("dotenv").config();

const dns = require("dns");

dns.setServers([
    "1.1.1.1",
    "8.8.8.8"
]);

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL;

const initDB = async () => {
    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6a7e3b3e43d14ef824e1cdc0"
    }));

    await Listing.insertMany(initData.data);

    console.log("data was initialized");
};

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("connected to DB");

    await initDB();

    await mongoose.connection.close();
    console.log("connection closed");
}

main().catch((err) => {
    console.log(err);
});