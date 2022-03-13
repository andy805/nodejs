/* the route handlers (app.method) function are the controller in MVC */

import { createRequire } from "module";
const require = createRequire(import.meta.url); //create require using ecmascript modules
const express = require('express');
import friends from "../models/friends.model.js";

export function getFriends(req, res) {
    res.json(friends);
}

//Route Parameters  - dynamic routes /route/:dynamic_route/morePath/:id_example
export function getFriend(req, res) {
    let id = req.params.id; //.params has the keys when using the parameterise routes
    if(!friends[id]) {
        return res.status(400).json({
            error: "no friend exists"
        });  //status sets the error code 
    }
    res.json(friends[id]);
}

export function postFriend (req, res) {

    if(!req.body.name) {
        return res.status(400).json({
            error: 'no name given'
        });
    }
    const newFriend = {
        id: friends.length,
        name: req.body.name
    };
    friends.push(newFriend);
    res.json(newFriend);

}