import React from 'react';

export default class DateHeader extends React.Component {
	getcurrentDate(){
		const currentDate = new Date();
		return currentDate.getDate();
	}

	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<h3>{this.getcurrentDate()}</h3>
			</div>);
	}
}