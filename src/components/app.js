import React from 'react';
import DateHeader from "./dateHeader";
import FrontPagePoster from "./frontPagePoster";
import '../../styles/index.scss';
import Summary from "./summary";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SummaryList from "./summaryList";
import Skills from "./skills";

export default class App extends React.Component {
	constructor() {
		injectTapEventPlugin();
		super();
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="mainContainer">
					<FrontPagePoster/>
					<div className="twoColumns">
						<Summary className="itemsOneOfTwoColumns"/>
						<Skills className="itemsTwoOfTwoColumns"/>
					</div>
					<DateHeader/>
				</div>
			</MuiThemeProvider>
		);
	}
}