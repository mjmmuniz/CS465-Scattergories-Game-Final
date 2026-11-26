const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../.env", quiet: true });

const client = new MongoClient(process.env.MONGO_URI);

async function connectToDatabase() {
    try {
        await client.connect();

        console.log("Connected to MongoDB!");

        const database = client.db("scattegories");

        return database;

    } catch (error) {
        console.error("Database connection failed:", error);
        throw error;
    }
}

module.exports = connectToDatabase;

