import React from 'react';
import ReactDOM from 'react-dom'
import HeaderBar from 'HeaderBar';
import Leaderboard from 'Leaderboard';
import FooterBar from 'FooterBar';

require('style!css!sass!applicationStyles');

ReactDOM.render(
	<div>
		<HeaderBar/>
		<Leaderboard/>	
		<FooterBar/>
	</div>,
	document.getElementById('app')
);
