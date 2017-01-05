import React from 'react';
import Camper from 'Camper';
import FCCLeaderboardAPI from 'FCCLeaderboardAPI';
import LeaderboardHeader from 'LeaderboardHeader';

class Leaderboard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			campers : [], /* see if this is needed? */
	 };
	 
	 this.handleStatusChange = this.handleStatusChange.bind(this);
	}
	
	componentDidMount() {
		FCCLeaderboardAPI.getTop100Recent().then((res) => {
			this.setState({
				campers: res,
				list: 'recent'
			})	
		});
	}
	
	handleStatusChange(list) {
		if (list === this.state.list) { return; }

		console.log("Requesting list", list);	
		
		if (list === 'recent') {
			FCCLeaderboardAPI.getTop100Recent().then((res) => {
				console.log("Top 100 Recent data pulled", res);
				this.setState({
					campers: res,
					list
				});
			});
		} else if (list === 'alltime') {
			FCCLeaderboardAPI.getTop100AllTime().then((res) => {
				console.log("Top 100 Alltime data pulled", res);
				this.setState({
					campers: res,
					list
				});
			});
		} else {
			throw new Error(`Invalid list ${list} requested. No actions taken.`);
		}
	};
	
	render () {
		console.log("Render called");
		var listCampers = () => {
			if (this.state.campers.length === 0) { return (<p>Getting campers...</p>) }
			let rank = 1;
			return this.state.campers.map((camper) => {
					return (<Camper key={camper.username}
													rank={rank++}
													camperName={camper.username}
													recentBrownies={camper.recent}
													allTimeBrownies={camper.alltime}
													imageURL={camper.img}/>)
			});
		};

		return (
			<div className="container">
				<LeaderboardHeader onStatusChange={this.handleStatusChange}/>
				{listCampers()}
			</div>
		);	
	}
}

export default Leaderboard;