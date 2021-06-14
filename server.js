import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from './Models/dbCard.js';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
	'mongodb+srv://admin:Lm1k7EE2EQ0zNbmP@cluster0.832wk.mongodb.net/tinderdb?retryWrites=true&w=majority';

// MiddleWares

app.use(express.json());
app.use(Cors());

// Db config
mongoose.connect(connection_url, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

// api Endpoint
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/tinder/cards', (req, res) => {
	const dbCard = req.body;

	Cards.create(dbCard, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

app.get('/tinder/cards', (req, res) => {
	Cards.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

// Listener
app.listen(port, () => console.log(`listing on localhost: ${port}`));
