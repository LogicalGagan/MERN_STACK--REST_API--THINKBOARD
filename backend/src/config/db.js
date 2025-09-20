import mongoose from "mongoose"

export const connectDB = async ()=>{
try {
   await mongoose.connect(process.env.mongo_URI);
    console.log("Connection succefully created")
} catch (error) {
    console.error("error connecting")
}
}