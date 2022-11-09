const express = require('express');
const app = express();

let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
}

app.get('/', (req, res)=>{
	res.send('hi');
})

app.listen(PORT, ()=>{
	console.log('listening');
})

//pull array of heros
const heros = require(`./models/heros.js`);

//pull array of team up movies
const teamUp = require(`./models/team.js`);

//predefined functionality
app.use(express.static(`public`));


//render pages
/////////////////////////////////
app.get(`/index`, (req, res)=> {
// res.send(`welcome to the home page`)
  res.render(`index.ejs`);
})

app.get(`/staff`, (req, res)=> {
// res.send(`welcome to the home page`)
  res.render(`staff.ejs`,
  {
    marvelHeros: heros
  });
})

app.get(`/links`, (req, res)=> {
// res.send(`welcome to the home page`)
  res.render(`links.ejs`,
  {
    marvelHeros: heros
  });
})

app.get(`/history`, (req, res)=> {
// res.send(`welcome to the home page`)
  res.render(`history.ejs`,
  {
    movies: teamUp
  });
})

app.get(`/past_work`, (req, res)=> {
// res.send(`welcome to the home page`)
  res.render(`past_work.ejs`,
  {
    marvelHeros: heros
  });
})

app.get(`/contact`, (req, res)=> {
// res.send(`welcome to the home page`)
  res.render(`contact.ejs`);
})
// render pages
/////////////////////////////////
////////////////////////////////
