import React from 'react';
import ReactDOM from 'react-dom'
import Leaderboard from 'Leaderboard';
import FooterBar from 'FooterBar';

require('style!css!sass!applicationStyles');

ReactDOM.render(
	<div>
		<Leaderboard/>	
		<FooterBar/>
	</div>,
	document.getElementById('app')
);
