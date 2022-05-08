const express = require("express");
const path = require("path");

const connectDB = require("./connectDb/bd");
const app = express();
require("dotenv").config();


// connect to DB
connectDB();



// routes
app.use(express.json( {extended:false}));


app.use("/",require("./routes/User"))
app.use("/admin/formation",require("./routes/Formation"))
app.use("/admin/evenement",require("./routes/Evenement"))
app.use("/admin/classe",require("./routes/Classe"))
app.use("/admin/employer",require("./routes/Employer"))
app.use("/user/publication", require("./routes/Publication"));
app.use("/user/publication/comment", require("./routes/comment"));



const PORT = process.env.PORT || 8999;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on ${PORT}`)
);