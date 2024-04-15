import mongoose from "mongoose";

export const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true, 
        });

        console.log("Mongodb Connected")
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1);
    }
}