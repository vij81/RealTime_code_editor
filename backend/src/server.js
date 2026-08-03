const express = require("express");
const dotenv = require("dotenv");
const pool = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        await pool.query("SELECT NOW()");
        console.log("PostgreSQL Connected Successfully");

        app.listen(PORT, () => {
            console.log(` Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Database Connection Failed");
        console.error(err.message);
    }
}

startServer();