const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection'); // Moved to the top for visibility.
const apiRoutes = require('./controllers/apiRoutes');
const homeRoutes = require('./controllers/homeRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', apiRoutes);
app.use('/', homeRoutes);
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Routes
app.use('/api', apiRoutes); 
app.use('/', homeRoutes);

// 404 handler - should be almost last
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection is established
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
