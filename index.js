const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./configs/db");
const {creatorRouter} = require("./routes/creator.router")
const PORT = process.env.port;

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.json({
        status: "Server running"
    });
});

app.use("/api", creatorRouter)


app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to DB")
    } catch (error) {
        console.log("Something went wrong\n", error);
    }
    console.log(`Server is running at port: ${PORT}`)
})