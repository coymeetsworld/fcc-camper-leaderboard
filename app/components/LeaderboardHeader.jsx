import React from 'react';

class LeaderboardHeader extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render () {

		return (
			<div className="leaderboard-header">
				<div className="leaderboard-rank">Rank</div>	
				<div className="leaderboard-camper">Camper Name</div>	
				<div className="leaderboard-recent">Points in past 30 days</div>
				<div className="leaderboard-alltime">All time points</div>
			</div>
		)	
	};
}

export default LeaderboardHeader;