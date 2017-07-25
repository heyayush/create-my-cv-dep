import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import BatmanChota from '../../assets/BatmanChota.jpg';
import BatmanBg from '../../assets/batmanDarkKnight.jpg';
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import { white } from 'material-ui/styles/colors';

const iconStyles = {
	"height": "10%",
	"width": "10%"
};

export default class FrontPagePoster extends React.Component {

	render() {
		return (
			<Card className="wFPoster">
				<h1 className="pName">Hi, I'm Ayush Sharma</h1>
				<h2 className="pDesignation">Front-end web developer</h2>
				<ArrowDownward color={white} style={iconStyles} className="downArrow"/>
			</Card>
		)
	}
}