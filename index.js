const express=require("express");
const dotenv=require("dotenv");
const connectDB =require("./config/connectDB");
const userRoute = require("./routes/userRoute");
const RentRoute = require("./routes/RentRoute")
const morgan = require("morgan");
const cors =require("cors")

const app=express();
dotenv.config();
connectDB();

// middlewares
app.use(cors())
app.use(express.json())
app.use("/api/users", userRoute)
app.use(morgan("dev"));
app.use("/api/house", RentRoute)




app.get("/", (req, res) => {
res.send("<h1>Welcome to our Rent management app</h>")
})


const PORT = process.env.PORT ||8000

app.listen(PORT, () =>
    console.log(`server is running on ${PORT}` )
)