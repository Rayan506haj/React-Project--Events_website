import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(cors({
  origin: 'https://rayaneventswebsite.netlify.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());

// DATABASE CONNECTION
const db = mysql.createPool({
  uri: process.env.DATABASE_URL, 
  ssl: {
    rejectUnauthorized: false 
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();



const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log("Connected to backend."));




//get all branches

app.get('/branches', async(req, res) => {
  try{

   const [rows]=await db.query("SELECT * FROM branches");
    res.json(rows);
   }catch(err){
     res.status(500).json(err);
  };
});


//Events based on selected branch
app.get("/events/branch/:branchId", async (req, res) => {
  const Bid = req.params.branchId;

  try {
    const [rows] = await db.query("SELECT * FROM events WHERE branch = ?", [Bid]);
    res.json(rows);
  } catch (err) {
    console.error("CRITICAL SQL ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

//delete a specific event 
app.delete('/events/:Eid',async (req, res) => {
  const id = req.params.Eid;
try{
  const [result] =await db.query("DELETE FROM events WHERE Eid = ?",[id]);

   res.json(result);
}
catch(err){
  res.status(500).json(err)
}

 
});


//Insert Event
app.post("/events", async (req, res) => {
  const { name, description, date, time, branch } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO events (name, description, date, time, branch) VALUES (?,?, ?, ?, ?)",
      [name, description, date, time, branch]
    );
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Insert Client
app.post("/client", async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO client (name, email, phone) VALUES (?,?, ?)",
      [name, email, phone]
    );
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Insert Booking information
app.post("/booking", async (req, res) => {
  const { fullName, phone, nbOfSeats,  event } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO booking (fullName,phone, nbOfSeats,  event ) VALUES (?,?, ?, ?)",
      [fullName,phone, nbOfSeats,  event]
    );
    res.json(result);
  } catch (err) {
    console.error("DATABASE ERROR:", err); // This prints the actual error to your terminal
    res.status(500).json({ error: err.message })
  }
});


// ----------------------------
// GET one Event by id
// ----------------------------
app.get("/events/onerecord/:Eid", async (req, res) => {
  const id = req.params.Eid;
  try {
    const [rows] = await db.query("SELECT * FROM events WHERE Eid = ?", [id]);
    if (rows.length > 0) return res.json(rows[0]);

    return res.status(404).json({ message: "Record not found" });
  } catch (err) {
    res.status(500).json(err);
  }
});



// ----------------------------
// UPDATE an event
// ----------------------------
app.put("/events/:Eid", async (req, res) => {
  const id = req.params.Eid;
  const { name, description, date, time, branch } = req.body;

  try {
    const [result] = await db.query(
      "UPDATE events SET name=?, description=?, date=?, time=?, branch=? WHERE Eid = ?",
      [ name, description, date, time, branch, id]
    );
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Insert Branch
app.post("/branches", async (req, res) => {
  const { name, imageURL } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO branches (name, imageURL) VALUES (?,?)",
      [name, imageURL]
    );
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ----------------------------
// GET one branch by id
// ----------------------------
app.get("/branches/onerecord/:Bid", async (req, res) => {
  const id = req.params.Bid;
  try {
    const [rows] = await db.query("SELECT * FROM branches WHERE Bid = ?", [id]);
    if (rows.length > 0) return res.json(rows[0]);

    return res.status(404).json({ message: "Record not found" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ----------------------------
// UPDATE a branch
// ----------------------------
app.put("/branches/:Bid", async (req, res) => {
  const id = req.params.Bid;
  const { name, imageURL } = req.body;

  try {
    const [result] = await db.query(
      "UPDATE branches SET name=?, imageURL=? WHERE Bid = ?",
      [ name, imageURL, id]
    );
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a specific branch 
app.delete('/branches/:Bid',async (req, res) => {
  const id = req.params.Bid;
try{
  const [result] =await db.query("DELETE FROM branches WHERE Bid = ?",[id]);

   res.json(result);
}
catch(err){
  res.status(500).json(err)
}

 
});



//Delete all Branches

app.delete('/branches',async (req, res) => {
  
  try{
    const [result] =await db.query("DELETE FROM branches  ");
  
     res.json(result);
  }
  catch(err){
    res.status(500).json(err)
  }
  
   
  });



  //Delete all events

app.delete('/events',async (req, res) => {
  
  try{
    const [result] =await db.query("DELETE FROM events  ");
  
     res.json(result);
  }
  catch(err){
    res.status(500).json(err)
  }
  
   
  });



