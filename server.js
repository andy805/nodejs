import { createRequire } from "module";
import friends from "./models/friends.model.js";
import friendsRouter from "./routes/friends.route.js";
const require = createRequire(import.meta.url); //create require using ecmascript modules
const express = require('express');
const app = express();
const PORT = 3000;


app.use((req, res, next) => {
    let start = Date.now();
    next(); //calls the next middleware function
    //at this point we have come back from the middleware function so this is last stop before sending the response
    let timeDiff = Date.now() - start;
    console.log(`time taken to process ${timeDiff} ms, Method: ${req.method}`);
});
app.use(express.json())

app.use('/friends' , friendsRouter);





app.listen(PORT, () => {
    console.log(`started listening on PORT ${PORT}`);
});