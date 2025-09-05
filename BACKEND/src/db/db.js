const mongoose = require('mongoose');

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI).then(() => {
            console.log("mongodb connected");
        })
    } catch (error) {
        console.log("Data base connection failed", error);
    }
};

module.exports = connectDb;

