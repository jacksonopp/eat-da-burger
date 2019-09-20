const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./sql/sqlConfigs");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

app.get("/", (req, res) => {
    connection.query("select * from burgers", (err, data) => {
        if (err) {
            return res.send(500);
        } else {
            console.log(data);
            const burgerNotEaten = data.filter(type => type.is_eaten === 0)
            const burgerIsEaten = data.filter(type => type.is_eaten !== 0)
            res.render("index", {
                itemNotEaten: burgerNotEaten,
                itemEaten: burgerIsEaten
            });
        }
    })
})


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
