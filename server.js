const path = require('path');
const express = require('express');
const session = require('express-session');
const hb = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers.js');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const sesh = {};

app.use(session(sesh));

const hbs = hb.create({helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});