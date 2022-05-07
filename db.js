import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
let db;
const mongoClient = new MongoClient(process.env.MONGO_URI);

await mongoClient.connect()
  .then(() => {
    db = mongoClient.db("projeto13-mywallet");
  })
  .catch(error => console.log("Database conection problem", error));

export default db