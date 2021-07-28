/*

Node.js (Node) is an open-source server-side platform built on Google Chrome’s V8 JavaScript engine. Due to its 
                ability to run on various platforms and its scalability, Node has become a “go-to” option for
                 developing web applications.

EXPRESS a small framework that sits on top of Node.js's web server.
            -- simplify APIs and add new features
            -- makes it easier to organize apps functionality with 'middle ware' and 'routing'
            -- add helpful utilitis to Node.js's HTTP objects. it facilitates rendering of dynamic HTTP objects

       *Express is part of MEAN stack a full stack JavaScript solution used to build fast, 
                    robust maintable production web apps. 

   *In more simplistic terms, Node allows you to run JavaScript outside of your browser
                   and Express enables you to respond to individual client requests and build APIs quickly.                  
  
HOW TO INSTALL: 
        in terminal: 1) mkdir <directory name>
                        cd <directory>
                     
                     2) Use npm to treate a package.json for the project
                            $ npm init
                        
                            continue to hit enter (or fill out the information if needed) until 'terminus' line.
                     3) Install Express:
                            while in the correct working directory
                                    $ npm install express --save  
                                          *check express was installed with $ npm --version express

       this will give you the node process by id:
           $ ps -ef | grep "node" -- you can then see what nodes are running servers 
           
*/

const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.get("/", (req, res) => {  // these were 'GET' requests to root path
app.post("/contact", (req, res) => { // 'Post' request to /contact path
    //ex of 
    if (!req.body.name) {
        return res.status(400).send('Name is required'); // how to insert Status
    }

    res.status(201).send(`Thank you ${req.body.name}`); // 

    // res.send(re.body); // posts whatever is in the body of the HTML or Postman
    // res.send(req.header('user-agent'));
    // res.send(req.rawHeaders);
    // res.json({ msg: "Test", body: "Hello Trelvyn, this is the Express Server" });

});

/* app.post('/login', (req, res) => { // simulate login with password (very simple)
    if (!req.header('x-auth-token')) {
        return res.status(400).send('No Token');
    }

    if (req.header('x-auth-token') !== '123456') {
        return res.status(401).send('Not authorized');
    }

    res.send('Logged in');
}) */

app.listen(5000, () => console.log('Server Started on 5000'));