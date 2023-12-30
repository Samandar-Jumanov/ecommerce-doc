import express , { Application } from 'express'
import path from 'path';


const app : Application = express();
app.use(express.static(path.join(__dirname, "public")))


app.listen(3001 , ()=> {
    console.log("Server started")
});

