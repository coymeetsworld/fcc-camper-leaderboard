import React from 'react';

class Camper extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			rank : props.rank,
			camperName : props.camperName,
			recentBrownies : props.recentBrownies,
			allTimeBrownies : props.allTimeBrownies,
			imageURL : props.imageURL
	 };
	}
	
	/* Rank may need to be recalculated for campers that are in both the Top 100 recent and all-time, but have different ranks in both. */
	componentWillReceiveProps(nextProps) {
		this.setState({
			rank: nextProps.rank
		});
	}
	
	render () {
		return (
			<div className="camper">
				<div className="camper-rank">{this.state.rank}</div>
				<img className="camper-img" src={this.state.imageURL}/>
				<div className="camper-name">{this.state.camperName}</div>
				<div className="camper-recent">{this.state.recentBrownies}</div>
				<div className="camper-alltime">{this.state.allTimeBrownies}</div>
			</div>
		);	
	}
}

export default Camper;