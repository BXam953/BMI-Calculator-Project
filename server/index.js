const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const bycrypt = require('bcrypt'); 
const db = require('./db');

const app = express();

// this is the express server.

//middlewhere
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: 'keyboard cat', resave: false, saveUninitialized: false })); 

app.use(cors({
      origin: 'http://localhost:3000',
      credentials: true
}));

app.use(cookieParser('keyboard cat')); 

app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport); 

/////////////////////////////////////////////////////////////// Middleware end



//routes
app.post('/register', (req, res) => {
  
    const query = "INSERT INTO 128proj.users (username, password) VALUES (?,?)";
    const query2 = "SELECT * FROM 128proj.users where username = ?";
  
    db.query(query2, [req.body.username] ,async (err, rows) => {
      if (err) {console.log(err);}
      if (rows.length > 0) {res.send("User already exists");}
      if (rows.length === 0) {
        // const hashedPassword =  await bycrypt.hash(req.body.password, 10);
        db.query(query, [req.body.username, req.body.password], (err, rows) => {
          if (err) {console.log(err);}
          res.send("User created");
        });
      }
    })
})


app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => { 
    if (err) {console.log(err);}
    if (!user) {
        res.status(401).send("User not found");
}
    if (user) {
      req.login(user, (err) => {
        if (err) {
            console.log(err);
        }
        res.status(200).send("User Logged In");
        
        console.log(user);
      })
    }
  })(req, res, next);
})


app.get('/getUser', (req, res) => {
  res.send(req.user);
})

app.get('/data', (req, res) => {
    const username = req.query.username;
    const query = "SELECT * FROM 128proj.bmiData where username=(?)";
  
    db.query(query, [username], (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error occurred");
      } else {
        res.send(rows);
      }
    });
  });

  app.post('/addEntry', (req, res) => {
    const query = "INSERT INTO 128proj.bmi_data (height, weight, notes, username) VALUES (?,?,?,?)";
  
    db.query(query, [req.body.height, req.body.weight, req.body.notes, req.body.username], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error occurred");
      } else {
        res.send("Entry created");
      }
    });
  }); // this adds the information to the sql database 
//start server 
app.listen(3001, () => {console.log('Server started on port 3001')});