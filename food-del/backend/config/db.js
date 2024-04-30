import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://supreet:supreet@cluster0.oix2q7c.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}