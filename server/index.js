/* eslint-disable @typescript-eslint/no-var-requires */

import express from "express";
import fs from "fs";
import bodyParser from "body-parser";

const PORT = 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api", (req, res) => {
  const newSubmission = req.body;

  fs.readFile("./server/submissions.json", "utf-8", (error, jsonString) => {
    const allSubmissions = JSON.parse(jsonString).submissions;
    allSubmissions.push({
      ...newSubmission,
      timestamp: Math.floor(Date.now() / 1000),
    });

    fs.writeFile(
      "./server/submissions.json",
      JSON.stringify({ submissions: allSubmissions }),
      (error) => {
        if (error) {
          res.json({ message: "Something went wrong!" });
        }
        res.json({ message: "Thank you, your feedback has been recorded!" });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
