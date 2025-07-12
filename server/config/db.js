import mongoose from "mongoose";

const connectDB = async () =>{

    mongoose.connection.on('connected', ()=>{ // just for see whether db connected or not
        console.log("DB Connected");
    })

    await mongoose.connect(process.env.MONGO_URI); // for db connection 
}

export default connectDB;