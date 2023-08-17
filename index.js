const express = require("express");
const app = express();

app.use(express.json());


const rootBath =require("./routes/RouteRoot");
app.use("/",rootBath);

const aboutBath =require("./routes/about/about");
app.use("/about",aboutBath);

const submitBath =require("./routes/submit");
app.use("/submit",submitBath);

const PORT = 3000;
app.listen(PORT,()=>{console.log('SERVER IS RUNNING ON PORT '+PORT)});

