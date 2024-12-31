import mongoose from "mongoose"

export const connectDb = async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDb Connected : ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error : ${error.message}`)
        process.exit(1) //1 -> exit with failure , 0-> exit with sucess
    }
}