import mongoose from "mongoose"
export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://chirag:9834625550@chiragdb.6rexbsk.mongodb.net/food-delivery').then(()=>{
        console.log("DB is Connected")
    })
} 