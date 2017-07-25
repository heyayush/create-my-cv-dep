import React from 'react';
import data from '../data/data.json'
import AppBar from 'material-ui/AppBar';
import SkillsList from "./skillsList";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconBuild from 'material-ui/svg-icons/action/build';

const skillsStyles = {
	"background-color": "#94c5e9",
	"color": "black"
};
const iconStyles = {
	"height": "40px",
	"width": "40px"
};
export default class Skills extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="wSkills">
				<AppBar title="Skills" style={skillsStyles} titleStyle={skillsStyles} iconElementLeft={<IconBuild style={iconStyles}/>}/>
				<Card style={skillsStyles}>
						<SkillsList list={data.ayush123.skills}/>
				</Card>
			</div>);
	}
}