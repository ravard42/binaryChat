const express = require('express');
//console.log(typeof express);

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
	console.log('root is requested');
	res.status(200).send('🎸 Welcome to the Jungle 🎸');
})

app.post('/send-msg-to-robin', (req, res) => {
	console.log(req.body.msg);
	res.status(200).json({'recu': '5/5'});
})

app.listen(7777, () => {
	console.log('listening on port 7777');
});

