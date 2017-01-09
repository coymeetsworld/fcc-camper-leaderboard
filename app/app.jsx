import React from 'react';
import ReactDOM from 'react-dom'
import Leaderboard from 'Leaderboard';

require('style!css!sass!applicationStyles');

ReactDOM.render(
	<div>
		<Leaderboard/>	
	</div>,
	document.getElementById('app')
);
