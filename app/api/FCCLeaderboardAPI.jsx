var axios = require('axios');

const FCC_TOP_100_RECENT_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const FCC_TOP_100_ALL_TIME_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';


module.exports = {
	getTop100Recent() {
		return axios.get(FCC_TOP_100_RECENT_URL).then((res) => {
			if(res.status !== 200) { throw new Error(res.statusText);	}
			console.log("Success");
			return res.data;
		}, (err) => {
			throw new Error(err.response.data.message);	
		});
	},

	getTop100AllTime() {
		return axios.get(FCC_TOP_100_ALL_TIME_URL).then((res) => {
			if(res.status !== 200) { throw new Error(res.statusText); }
			console.log("Success");
			return res.data;
		}, (err) => {
			throw new Error(err.response.data.message);	
		});
	}

}