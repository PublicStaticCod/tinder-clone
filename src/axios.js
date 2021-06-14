import axios from 'axios';

const instace = axios.create({
	baseURL: 'http://localhost:8001',
});

export default instace;
