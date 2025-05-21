const mongoose = require('mongoose');
const dotenv = require('dotenv');

module.exports.dbConnect = async () =>{
    dotenv.config();
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB connection error:', error.message);
    }
}