import React from 'react';
import DateHeader from "./dateHeader";
import FrontPagePoster from "./frontPagePoster";
import '../../styles/index.scss';

export default class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
      <div className="mainContainer">
        <FrontPagePoster/>
	      <DateHeader/>
      </div>);
	}
}