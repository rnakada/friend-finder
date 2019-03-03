// Load data || we are linking to our route to a series of 'data' sources || these data hold our 'array of information on a table data'
var friends = require('../data/friends.js');

// Routing the apiRoutes with the app.get and app.post functions
module.exports = (app) => {

    // The app.get requests handles when user 'visits' a page
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    // The app.post requests handles when a user submits a form and this submits data to the server
    app.post('/api/friends', (req, res) => {

        // Loop through all the possible options
        var match = {
            name: '',
            photo: '',
            friendDifference: 1000
        };

        // Take the results of the user's survey POST and parse it
        var userData = req.body;
        var userScores = userData.scores;

        // Take the results of the user's name and photo, other than the survey questions, to post and parse it
        var userName = userData.name;
        var userPhoto = userData.photo;

        // To calculate the differences between the user's scores and the scores of each user
        var totalDifference = 0;

        // Loop through the friends data array of objects to get each friends score
        for (var i = 0; i < friends.length - 1; i++) {

            console.log(friends[i].name);
            totalDifference = 0;

            // Loop through that friends score and the users score, calculate the absolute difference between the two and push that totalDifference
            for (var j = 0; j < 10; j++) {

                // We calculate the difference between the scores and sum them into the difference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // If the sum of differences is less then the differences of the current 'match'
                if (totalDifference <= match.friendDifference) {

                    // Reset the 'match' to be the new friend
                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.friendDifference = totalDifference;

                }
            }
        }

        // The push method use to save user's data to the database
        friends.push(userData);

        // The 'res.json' method will return a JSON data with the user's match, which will loop through friends data array
        res.json(match);

    });
};