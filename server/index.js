import express from "express";
import cors from "cors";
import "dotenv/config";

import emailRoutes from "./routes/emailRoutes.js";
import dbRoutes from "./routes/dbRoutes.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cors());

app.use("/post-email", emailRoutes);
app.use("/db", dbRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  //Log a message to terminal to show that connection is successful
  console.log(`Listening on port ${PORT}`);
});
