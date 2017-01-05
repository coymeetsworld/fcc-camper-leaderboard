import React from 'react';

class LeaderboardHeader extends React.Component {

	constructor(props) {
		super(props);
	}
	
	onStatusChange(newStatus) {
		return () => {
			this.props.onStatusChange(newStatus);
		}
	}
	
	render () {

		return (
			<div className="leaderboard-header">
				<div className="leaderboard-rank">Rank</div>	
				<div className="leaderboard-camper">Camper Name</div>	
				<div className="leaderboard-recent"><a onClick={this.onStatusChange('recent')}>Points in past 30 days</a></div>
				<div className="leaderboard-alltime"><a onClick={this.onStatusChange('alltime')}>All time points</a></div>
			</div>
		)	
	};
}

export default LeaderboardHeader;