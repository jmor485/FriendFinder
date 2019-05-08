var friends = require("../data/friends");
 
var router = require("express").Router();

// Get route for all friends
router.get("/api/friends", function (req, res) {
    res.send(friends);
});
module.exports = router;