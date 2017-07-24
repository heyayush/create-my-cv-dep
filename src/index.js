import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Test if service workers are supported
// if ('serviceWorker' in navigator) {
// 	// Attempt to register it
// 	navigator.serviceWorker.register('sw.js').then(function() {
// 		// Success Message
// 		console.log('ServiceWorker succesfully registered');
// 	}).catch(function(err) {
// 		// Error Message
// 		console.log('ServiceWorker registration failedasdf: ', err);
// 	});
// }

ReactDOM.render(<App />, document.getElementById('root'));