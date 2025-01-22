const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/india', (req, res) => {
  res.render('india');
});
app.get('/world', (req, res) => {
  res.render('world');
});
app.get('/movies', (req, res) => {
  res.render('movies');
});
app.get('/sport', (req, res) => {
  res.render('sport');
});
app.get('/data', (req, res) => {
  res.render('data'); 
});

app.get('/health', (req, res) => {
  res.render('health');
});

app.get('/opinion', (req, res) => {
  res.render('opinion'); // Opinion page
});

app.get("/sci-tech", (req, res) => {
  res.render("sci-tech"); // This renders sci-tech.ejs
});
// Premium Route (Subscription Page)
app.get('/premium', (req, res) => {
  res.render('premium'); // Render premium subscription page
});
app.get('/subscription', (req, res) => {
  res.render('subscription'); // Render premium subscription page
});
app.get('/payment', (req, res) => {
  res.render('payment'); // Render premium subscription page
});
app.get('/infoCard', (req, res) => {
  res.render('infoCard'); // Render premium subscription page
});
app.get('/login_signup', (req, res) => {
  res.render('login_signup'); // Render premium subscription page
});
app.get('/Sign-up', (req, res) => {
  res.render('Sign-up'); // Render premium subscription page
});
app.get('/FreeTrial', (req, res) => {
  res.render('FreeTrial'); // Render premium subscription page
});

// Server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
