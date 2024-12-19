// Jiraporn Ponlawat 6652100746 DIT

const express = require('express')
const app = express()

app.get('/about', function (req, res) { 
  res.send('This is about page.')
})

app.get('/my-json-api3', (req, res) => {
  res.send(' "University": "PIM" ');
});

// app.get('/my-json-api2', (req, res) => {
//   res.json({"myJsonKey": "myJsonValue"});
// });


app.get('/users2', (req, res) => {
  res.json([
    {
      id: 1,
      firstname: 'Somchai',
      lastname: 'Jaidee',
    },
    {
      id: 2,
      firstname: 'Tony',
      lastname: 'Stark',
    },
  ]);
 });

 app.use((req, res, next) => {
  res.status(404).send({
    error: 'Not Found',
    message: 'The requested resource could not be found',
  });
 });
 

app.listen(3000, () => {
    console.log("Server started on port 3000 !")
})