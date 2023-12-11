import express  from "express";
import mongoose, {mongo} from "mongoose";
const app = express();
const port= process.env.PORT;

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect('mongodb+srv://renodb:sloan123@cluster0.md2deav.mongodb.net/renodb?retryWrites=true&w=majority');
        console.log(`MongoDB is connected to ${conn.connection.host}`);
    } catch (error) {
        console.error(`Erro: ${error.message}`);
        process.exit(1);
    }
}

app.listen(port, ()=> console.log(`Listening to http://${port}`));
connectDB();
