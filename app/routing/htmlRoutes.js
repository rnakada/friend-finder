// Dependencies
var path = require('path');

// Routing 
module.exports = (app) => {

    // HTML get request handles when users 'visit' a page
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // If no matching route is found default to home
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

};