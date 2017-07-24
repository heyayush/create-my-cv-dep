import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconDescription from 'material-ui/svg-icons/action/description';
import { white } from 'material-ui/styles/colors';
import SummaryList from "./summaryList";
import data from '../data/data.json'
import AppBar from 'material-ui/AppBar';

const summary = data;
const cardStyle1 = {
	"height": '100vh',
	"opacity": 0.7,
	"background-position": "center",
	"background-repeat": "no-repeat",
	"background-size": "cover"
}
const iconStyles = {
	"height": "40px",
	"width": "40px"
};

export default class Summary extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<AppBar title="Summary" iconElementLeft={<IconDescription style={iconStyles}/>}/>
				<Card className="wSummary">
					<CardMedia>
						<h1 className="pSummaryHead">Summary</h1>
						<SummaryList list={summary.ayush123.summary}/>
					</CardMedia>
					<CardActions>
					</CardActions>
				</Card>
			</div>);
	}
}