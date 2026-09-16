import mongoose from "mongoose";

export const connectDB = async() => {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        throw new Error("MONGO_URI is not defines in environment variables");
    }

    mongoose.set("strictQuery",true);

    const conn = await mongoose.connect(URL,{
        serverSelectionTimeoutMS : 10000,
    });

    console.log(
        `MongoDB connected: ${conn.connection.host}/${conn.connection.name}`,
    );
    return conn;
};