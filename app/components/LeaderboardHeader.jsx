import React from 'react';
var logo = require('images/freecodecamp_logo.png');
class LeaderboardHeader extends React.Component {

	constructor(props) {
		super(props);
		console.log("Header Props", props);
		this.state = {
			activeList : props.activeList
		};
		console.log("this.state.activeList", this.state.activeList);
		
		this.isActiveList = this.isActiveList.bind(this);
	}
	
	onStatusChange(newStatus) {
		return () => {
			this.props.onStatusChange(newStatus);
		}
	}
	
	componentWillReceiveProps(nextProps) {
		this.setState({
			activeList : nextProps.activeList
		});
	}
	
	isActiveList(list) {
		if (list === this.state.activeList) {
			return (
				<span className="arrow">&#9660;</span>
			);
		}
	}
	
	/*
					<img className="logo" src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg"/>	
					*/

	render () {

		return (
			<div>
				<div className="leaderboard-title">
					<img className="logo" src={logo}/>
					<span className="header">Leaderboard</span>
				</div>
				<div className="leaderboard-header">
					<div className="leaderboard-rank">Rank</div>	
					<div className="leaderboard-camper">Camper Name</div>	
					<div className="leaderboard-recent"><a onClick={this.onStatusChange('recent')}>Points in past 30 days {this.isActiveList('recent')}</a></div>
					<div className="leaderboard-alltime"><a onClick={this.onStatusChange('alltime')}>All time points {this.isActiveList('alltime')}</a></div>
				</div>
			</div>
		)	
	};
}

export default LeaderboardHeader;