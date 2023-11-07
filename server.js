const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const sesh = {
secret: 'Super secret secret',
cookie: {
  maxAge: 36000
},
//https://www.npmjs.com/package/express-session#resave
//Forces the session to be saved back to the session store, even if the session was never modified during the request.
resave: false,
//https://www.npmjs.com/package/express-session#saveuninitialized
//Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
saveUninitialized: false,
store: new SequelizeStore({
  db: sequelize,
}),
};

const hbs = exphbs.create();

app.use(session(sesh));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});