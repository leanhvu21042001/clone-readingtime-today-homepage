import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import * as serviceWorker from './serviceWorker';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

ReactDOM.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
