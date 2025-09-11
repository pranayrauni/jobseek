import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './utils/db.js';
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"

dotenv.config({}); 

const app = express(); 

app.get('/home', (req, res) => {
    return res.status(200).json({
        message: "Coming from backend",
        success: true
    })
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;
connectDB();

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`); 
})