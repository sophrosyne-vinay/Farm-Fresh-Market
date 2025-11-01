import mongoose from 'mongoose';
import Color from 'colors';


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To Mongodb Database ${conn.connections[0].host}`.bgMagenta.white);
    } catch(error){
        console.log(`Error in Mongodb ${error}`.bgRed.white);
    }
}

export default connectDB;
