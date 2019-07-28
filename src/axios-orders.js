import axios from 'axios'

const ax = axios.create({
	baseURL: 'https://rjs-burger-builder.firebaseio.com/'
})

export default ax;