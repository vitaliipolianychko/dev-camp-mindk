const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const config = require("./services/config");
const usersRoutes = require("./routes/users");
const articlesRoutes = require("./routes/articles");
const likesRoutes = require("./routes/likes");
const commentsRoutes = require("./routes/comments");

const port = config.appPort;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersRoutes);
app.use("/articles", articlesRoutes);
app.use("/likes", likesRoutes);
app.use("/comments", commentsRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://${config.host}:${port}`);
});
