import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const app = express();

const port = process.env.PORT || 8000;

app.listen(3000, () => {
    console.log("server is running on port 3000 ", )
})