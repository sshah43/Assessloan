console.log('May Node be with you xyz ');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))


app.listen(3000, function () {
    console.log('listening on 3000')
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

app.get('/register.html', (req, res) => {
    res.sendFile(__dirname + '/register.html')
})

app.get('/signin.html', (req, res) => {
    res.sendFile(__dirname + '/signin.html')
})

app.get('/contactus.html', (req, res) => {
    res.sendFile(__dirname + '/contactus.html')
})

app.get('/aboutus.html', (req, res) => {
    res.sendFile(__dirname + '/aboutus.html')
})

const MongoClient = require('mongodb').MongoClient
var db;
MongoClient.connect('mongodb://localhost:27017/AssessLoan', { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.log(err)
    db = client.db('AssessLoan');
    db.collection('T_USERS').save({"fname":"Shivang","lname":"Shah","Hobbies":["Cricket","Sports", "Travel"]}, (err, result) => {
        if (err) return console.log(err);
        console.log('saved to database');
    })
})