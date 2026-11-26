const express = require("express");
const connectToDatabase = require("./database");

require("dotenv").config({ path: require("path").resolve(__dirname, "../.env"), quiet: true });

const app = express();

app.use(express.json());

let database;

app.get("/", (req, res) => {
    res.send("Welcome to Scattegories! You are ONLINE.");
});

app.get("/categories", async (req, res) => {
    try {
        const categories = await database
            .collection("categories")
            .find({})
            .toArray();

	// testing connection
        //console.log("Categories found:", categories.length);
        //console.log("Category data:", categories);

        res.json(categories);

    } catch (error) {
	    console.error("Could not retrieve categories :(", error);
	    
	    res.status(500).json({ error: "Could not retrieve categories" });
    }
});

async function startServer() {
    database = await connectToDatabase();

    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}

startServer();

