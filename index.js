import express from 'express';
import cors from 'cors';
import connection, { dbName } from './connection.js';
const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let db;
const port = 8000;

// POST endpoint to handle form submission
app.post('/submit', async(req, res) => {
    // console.log(req.body); // Log the request body to see the submitted data
    let {message,name,email,subject} = {...req.body};
    console.log(message,name,email,subject)
    let data = await db.collection('Contact_forn_detail').insertOne({message:message,name:name,email:email,subject:subject});

    res.json("success");
});

// Start the server
connection.then((client) => {
    db = client.db(dbName);
    app.listen(port, () => console.log(port+ ' started'));
  });
