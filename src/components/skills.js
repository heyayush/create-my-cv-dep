import React from 'react';
import data from '../data/data.json'
import AppBar from 'material-ui/AppBar';
import SkillsList from "./skillsList";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import IconBuild from 'material-ui/svg-icons/action/build';


export default class Skills extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<AppBar title="Skills Section" iconElementLeft={<IconBuild/>}/>
				<Card className="wSkills">
					<CardMedia>
						<h1 className="pSkillsHead">Skills</h1>
						<SkillsList list={data.ayush123.skills}/>
					</CardMedia>
					<CardActions>
					</CardActions>
				</Card>
			</div>);
	}
}