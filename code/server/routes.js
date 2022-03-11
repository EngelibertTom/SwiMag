const express = require("express");
const routes = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data/ecoalDB');

const verify=require('./connectionRouter').verify;
module.exports = routes;

routes
    .get("/", (req, res) => {
        res.json("Hello world!!");
    })

    .get("/articles", (req,res) => {
            db.all(
                     "select * from article",
                     (err, rows) => res.json(rows)
          );

    })

    .post("/articles", (req, res) => {

        let title = req.body.title
        let content = req.body.content
        let thumbnailURL = req.body.content
        let mediaUrl = req.body.mediaUrl


        db.run("INSERT INTO article (title, content, thumbnailURL, mediaUrl) values (?,?,?,?)",
            [title, content, thumbnailURL, mediaUrl], (err) => {
            if (err) {
                console.log("An Error has occured")
                return res.status(500).json(err);
            }
            console.log("successful")
            res.status(200).json({
                success: "true",
                message: "article successful",

            })
        })
    })

    .post("/articles", (req, res) => {

        let title = req.body.title
        let content = req.body.content
        let thumbnailURL = req.body.content
        let mediaUrl = req.body.mediaUrl


        db.run("UPDATE article (title, content, thumbnailURL, mediaUrl) values (?,?,?,?)",
            [title, content, thumbnailURL, mediaUrl], (err) => {
            if (err) {
                console.log("An Error has occured")
                return res.status(500).json(err);
            }
            console.log("successful")
            res.status(200).json({
                success: "true",
                message: "article successful",

            })
        })
        
        db.run('INSERT INTO users(username,password,email) VALUES (?,?,?)', 
        [req.body.username, req.body.password, req.body.email], (err) => {
            if (err) {
                console.log("An Error has occured")
                return res.status(500).json(err);
            }
            console.log("successful")
            res.status(200).json({
                success: "true",
                message: "article successful",

            })
        })
        
    })