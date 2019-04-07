const express = require('express');
const app = express();

const pointsData = {
	allPoints: [
		{id: 1,	name: 'Первый', latitude: 54.122616, longitude: 63.331964},
		{id: 2, name: 'Второй',	latitude: 54.2,	longitude: 63.4},
		{id: 3,	name: 'Третий',	latitude: 54.1,	longitude: 63.4}
	],
	pointDefs: [
		{id: 1,description: 'Тут какой-то текст описания 1',
			image: 'https://findicons.com/files/icons/2580/android_icons/72/trojan_up.png'},
		{id: 2,description: 'Тут какой-то текст описания 2',
			image: 'https://findicons.com/files/icons/2580/android_icons/72/antenna2_clock.png'},
		{id: 3,description: 'Тут какой-то текст описания 3',
			image: 'https://findicons.com/files/icons/2580/android_icons/72/wave_amplify_frequency_help.png'}
	]
} 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})
app.get('/list', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send(JSON.stringify(pointsData.allPoints));
})
app.get('/description/:id', function (req, res) {
   console.log("Got a GET request for /description");
   let id = req.params.id;
   console.log('params.id ---> ', id);
   let desc = pointsData.pointDefs.filter( function(i) {return +i.id === +id});
   console.log('desc ---> ', desc);
   res.send(JSON.stringify(desc[0]));
})


const server = app.listen(8082, function () {
   const host = server.address().address
   const port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
