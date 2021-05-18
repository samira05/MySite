const express = require("express");
const app = express();
const ejs = require('ejs');
const port = 3000;
const staticDir = __dirname + "\\static\\";

app.use(express.static(staticDir));
app.use(express.urlencoded());
app.use(express.json());


app.set('views', './views')
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('./index',{name:"samira"});
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
