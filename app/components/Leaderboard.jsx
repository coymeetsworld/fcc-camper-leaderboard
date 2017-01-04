import React from 'react';
import FCCLeaderboardAPI from 'FCCLeaderboardAPI';

class Leaderboard extends React.Component {

	constructor(props) {
		super(props);
		this.state = { campers : [] };

	}
	
	componentDidMount () {
		FCCLeaderboardAPI.getTop100Recent().then((res) => {
			//console.log("Top 100 Recent data pulled", res);
			this.setState({
				campers: res
			});
		});

	}
	
	render () {
		
		var listCampers = () => {
			if (this.state.campers.length === 0) { return; }
			console.log(this.state.campers[0].username);
			return this.state.campers.map((camper) => {
					return (<p>{camper.username}</p>);
			})
		};

		return (
			<div className="container">
				<h1>Leaderboard goes here</h1>						
				{listCampers()}
			</div>
		);	
	}
}

export default Leaderboard;