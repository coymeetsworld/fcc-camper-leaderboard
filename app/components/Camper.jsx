import React from 'react';

class Camper extends React.Component {

	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			camperName : props.camperName,
			recentBrownies : props.recentBrownies,
			allTimeBrownies : props.allTimeBrownies,
			imageURL : props.imageURL
	 };
	}
	
	render () {
		return (
			<div className="camper">
				<div className="camper-name">{this.state.camperName}</div>
				<div className="camper-recent">{this.state.recentBrownies}</div>
				<div className="camper-alltime">{this.state.allTimeBrownies}</div>
				<div className="camper-img"><img src={this.state.imageURL}/></div>
			</div>
		);	
	}
}

export default Camper;