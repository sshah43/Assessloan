console.log('May Node be with you xyz ');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
var db;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017/AssessLoan', { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err)
    db = client.db('AssessLoan') // whatever your database name is
    app.listen(3000, () => {
        console.log('listening on 3000')
    })
})

/* static resources like css and js*/
app.use('/Content', express.static(__dirname + '/Content'));
app.use('/JavaScript', express.static(__dirname + '/JavaScript'));
app.use('/Images', express.static(__dirname + '/Images'));
app.use('/Shared', express.static(__dirname + '/Shared'));

/* example of how to return an html file back to browser */

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html')
})

app.get('/home.html', (req, res) => {
    res.sendFile(__dirname + '/home.html')
})

app.get('/newloan.html', (req, res) => {
    res.sendFile(__dirname + '/newloan.html')
})

app.get('/lenders.html', (req, res) => {
    console.log("GET");
    console.log(req);
    res.sendFile(__dirname + '/lenders.html')
});

app.post('/lenders.html', (req, res) => {
    console.log("post");
    console.log(req);
    res.redirect('/lenders.html')
});

app.get('/register.html', (req, res) => {
    res.sendFile(__dirname + '/register.html')
})

app.get('/signin.html', (req, res) => {
    res.sendFile(__dirname + '/signin.html')
})

app.get('/contactus.html', (req, res) => {
    res.sendFile(__dirname + '/contactus.html')
})

app.get('/myaccount.html', (req, res) => {
    res.sendFile(__dirname + '/myaccount.html')
})

app.post('/register.html', (req, res) => {
    console.log(req.body);
    db.collection('T_USERS').save(req.body, (err, result) => {
        if (err) return console.log(err);
        console.log('saved to database')
        res.redirect('/newloan.html');
    })
});

app.post("/api/createnewloan", function (req, res) {
    db.collection("T_LOAN_APPLICATIONS").save(req.body, (err, result) => {
        if (err) return res.send({ "message": err.toString(), "iserror": true });
        return res.send({ "message": "", "iserror": false, "data": JSON.stringify(result) });
    });    
});

app.post("/api/getuserloans", function (req, res) {
    var user = {};
    user.id = req.body.UserId;
    
    var query = { "UserId": user.id };
    db.collection("T_LOAN_APPLICATIONS").find(query, {}).toArray(function (err, result){
        if (result) {
            console.log(result);
            console.log("Successfully found document");
            return res.send({ "message": "", "iserror": false, "data": JSON.stringify(result) });
        } else {
            console.log("No document matches the provided query.");
            return res.send({ "message": "No applications found", "iserror": true });
        }
        return result;
    });    
});

app.post("/api/signin", function (req, res) {
    console.log('sign in with: ' + JSON.stringify(req.body));
    var customer = {};
    customer.username = req.body.username;
    customer.password = req.body.password;

    var query = { "EmailAddress": customer.username, "Password": customer.password };
    db.collection("T_USERS").findOne(query, {}).then(result => {
        if (result) {
            console.log(result);
            console.log("Successfully found document");
            return res.send({ "message": "", "iserror": false, "data": JSON.stringify(result) });
        } else {
            console.log("No document matches the provided query.");
            return res.send({ "message": "Invalid username and/or password", "iserror": true });
        }
        return result;
    }).catch(err => console.error('Failed to find document: ${err}'));    
});