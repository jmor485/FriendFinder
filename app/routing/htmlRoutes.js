var path = require('path');

var router = require("express").Router();

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;