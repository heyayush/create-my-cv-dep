import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconDescription from 'material-ui/svg-icons/action/description';
import { white } from 'material-ui/styles/colors';
import SummaryList from "./summaryList";
import data from '../data/data.json'
import AppBar from 'material-ui/AppBar';

const summary = data;
const iconStyles = {
	"height": "40px",
	"width": "40px"
};
const summaryStyles = {
	"background-color": "#94c5e9",
	"color": "black"
};

export default class Summary extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="wSummary">
				<AppBar title="Summary" style={summaryStyles} titleStyle={summaryStyles} iconElementLeft={<IconDescription style={iconStyles}/>}/>
				<Card style={summaryStyles}>
					<SummaryList list={summary.ayush123.summary}/>
				</Card>
			</div>);
	}
}