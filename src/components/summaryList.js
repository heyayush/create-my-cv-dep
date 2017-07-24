import React from 'react';
import data from '../data/data.json'

export default class SummaryList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const listItems = this.props.list.map((item, index) => {
			return (
				<li key={item}>{item}</li>
			);
		});
		return (
			<div>
				<ul>
					{listItems}
				</ul>
			</div>);
	}
}