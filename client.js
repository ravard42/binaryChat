const fetch = require('node-fetch');

var url = 'https://robin7777.loca.lt/send-msg-to-robin'
var msg = 'La Capitaine Orville vous salue.\nBienvenue à bord de l\'albatros.\nVeuillez attacher vos ceintures et ne pas fumer pendant le décollage';

const send_msg = (url, msg) => {
	fetch(url,
		{
			method:'POST',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({ msg })
		}
	)
	.then(res => {return res.json()})
	.then(data => {
		console.log('Success:',data);
	})
	.catch(err => {
		console.log('Error:',err);
	});
};

send_msg(url, msg);
