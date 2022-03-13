import {createRequire} from "module";
const require = createRequire(import.meta.url); //create require using ecmascript modules
const express = require('express');

import * as friendsController from "../controllers/friends.controller.js";


const friendsRouter = express.Router();
// in server.js set app.use('/frineds , friendsRouter) -- so we can just reference root just note that root in this case is /friends
friendsRouter.get('/' , friendsController.getFriends);
friendsRouter.get('/:id' , friendsController.getFriend);
friendsRouter.post('/' , friendsController.postFriend);


export default friendsRouter;