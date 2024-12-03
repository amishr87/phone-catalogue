const express = require("express");
const cors = require("cors");
const db = require("./src/db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const testConnection = async () => {
  try {
    const result = await db.query("SELECT NOW()");
    console.log("Database connected successfully");
    console.log("Current database time:", result.rows[0].now);
    return true;
  } catch (err) {
    console.error("Database connection error:", err.message);
    return false;
  }
};

const startServer = async () => {
  const isConnected = await testConnection();

  if (isConnected) {
    app.get("/phones", async (req, res) => {
      try {
        const result = await db.query("SELECT * FROM phone");
        res.json(result.rows);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    });

    app.get("/phones/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const result = await db.query("SELECT * FROM phone WHERE modelid = $1",
          [id]
        );
        res.json(result.rows);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    });

    app.get("/specifications/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const result = await db.query(
          "SELECT * FROM specifications WHERE modelid = $1",
          [id]
        );
        res.json(result.rows);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    });

    app.post("/phones", async (req, res) => {
      try {
        const { modelName, year, startingPrice, image } = req.body;
        const result = await db.query(
          "INSERT INTO phone (modelname, year, startingprice, image) VALUES ($1, $2, $3, $4) RETURNING *",
          [modelName, year, startingPrice, image]
        );
        res.json(result.rows[0]);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    });

    // Add specifications
    app.post("/specifications", async (req, res) => {
      try {
        const {
          modelId,
          screenSize,
          batterySize,
          processor,
          ram,
          storage,
          noOfCameras,
          cameraSize,
        } = req.body;

        const result = await db.query(
          "INSERT INTO specifications (modelid, screensize, batterysize, processor, ram, storage, noofcameras, camerasize) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
          [
            modelId,
            screenSize,
            batterySize,
            processor,
            ram,
            storage,
            noOfCameras,
            cameraSize,
          ]
        );
        res.json(result.rows[0]);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    });

    app.get("/search-specifications", async (req, res) => {
      try {
        const { modelname } = req.query;
    
        // Debugging: Log the incoming modelname
        console.log("Received request for modelname:", modelname);
    
        // Validate input: Check if it's a non-empty string
        if (!modelname || modelname.trim() === "" || !isNaN(modelname)) {
          console.warn("Invalid or empty modelname provided");
          return res.status(400).json({ error: "Invalid or empty modelname" });
        }
    
        // Fetch phone details and specifications using a JOIN
        const result = await db.query(
          `
          SELECT 
            p.modelid, p.modelname, p.image, p.startingprice, p.year,
            s.screensize, s.batterysize, s.processor, s.ram, 
            s.storage, s.noofcameras, s.camerasize
          FROM phone p
          JOIN specifications s ON p.modelid = s.modelid
          WHERE p.modelname = $1
          `,
          [modelname.trim()]
        );
    
        // If no result is found, return a 404
        if (result.rows.length === 0) {
          console.warn("No details found for modelname:", modelname);
          return res.status(404).json({ error: "Phone details not found" });
        }
    
        // Success response
        console.log(`Returning details for modelname: ${modelname}`);
        res.json({
          phoneDetails: result.rows[0], // Return the combined details
        });
      } catch (err) {
        // Debugging: Log the error message
        console.error("Error fetching phone details:", err.message);
        res.status(500).send("Server Error");
      }
    });    
    
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } else {
    console.log("Server not started due to database connection failure");
    process.exit(1);
  }
};

startServer();
