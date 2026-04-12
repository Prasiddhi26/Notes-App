//connecting mongoose
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const DB_URL=process.env.ATLAS_URL;

mongoose.connect(DB_URL)
.then(() => {
    console.log("Database connected");
})
.catch((error) => {
    console.log(error);
});
