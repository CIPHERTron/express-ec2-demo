var express = require("express")
var app = express()
app.get("/", function (req, res) {
	res.send("Demo app built with express.js")
})
app.get("/demo", function (req, res) {
	res.send("Congratulations. You have reached the demo route.")
})
app.listen(3000, function () {
	console.log("Example app listening on port 3000!")
})
