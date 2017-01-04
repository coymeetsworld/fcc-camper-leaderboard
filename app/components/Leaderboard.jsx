import React from 'react';
import FCCLeaderboardAPI from 'FCCLeaderboardAPI';

class Leaderboard extends React.Component {

	constructor(props) {
		super(props);
	}
	
	componentDidMount() {			
		console.log("hello");
		FCCLeaderboardAPI.getTop100Recent();
		FCCLeaderboardAPI.getTop100AllTime();
	}
	
	render () {

		return (
			<div className="container">
				<h1>Leaderboard goes here</h1>	
				
			</div>
		);	
	}
}

export default Leaderboard;