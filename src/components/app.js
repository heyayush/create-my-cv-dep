import React from 'react';
import FrontPagePoster from "./frontPagePoster";
import '../../styles/index.scss';
import Summary from "./summary";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";

export default class App extends React.Component {
	constructor() {
		injectTapEventPlugin();
		super();
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="mainContainer">
					<FrontPagePoster />
					<Summary />
					<Skills />
					<Experience/>
					<Education />
				</div>
			</MuiThemeProvider>
		);
	}
}