import mongoose from "mongoose";

const DBConnection = async () => {

    const MONGO_URI = `mongodb+srv://sudh4958:mlpoijkn@job-portal.qlvzsmf.mongodb.net/`;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;