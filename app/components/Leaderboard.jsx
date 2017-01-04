import React from 'react';
import Camper from 'Camper';
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
			if (this.state.campers.length === 0) { return (<p>Nothing rendered</p>) }
			let id = 1;
			return this.state.campers.map((camper) => {
					return (<Camper key={id}
													rank={id++}
													camperName={camper.username}
													recentBrownies={camper.recent}
													allTimeBrownies={camper.alltime}
													imageURL={camper.img}/>)
			});
		};

		return (
			<div className="container">
				<div className="leaderboard-header">
					<div className="leaderboard-rank">Rank</div>	
					<div className="leaderboard-camper">Camper Name</div>	
					<div className="leaderboard-recent">Points in past 30 days</div>
					<div className="leaderboard-alltime">All time points</div>
				</div>
				{listCampers()}
			</div>
		);	
	}
}

export default Leaderboard;