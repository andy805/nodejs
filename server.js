import { createRequire } from "module";
import * as friendsController from './controllers/friends.controller.js';
import friends from "./models/friends.model.js";
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

app.get('/friends' , friendsController.getFriends);

//Route Parameters  - dynamic routes /route/:dynamic_route/morePath/:id_example
app.get('/friends/:id' , friendsController.getFriend);

app.use(express.json())

app.post('/friends' , friendsController.postFriend);


app.listen(PORT, () => {
    console.log(`started listening on PORT ${PORT}`);
});