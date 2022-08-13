import mongoose from "mongoose";

mongoose.connect("mongodb+srv://estudo:1234@estudo.mtf0am5.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection;

export default db;