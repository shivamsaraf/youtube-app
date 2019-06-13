import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar';

const API_KEY="AIzaSyCnv8k7XTtFFq4vZ787DI1pxHcW-x3pJXY";
class App extends React.Component{
	render(){
		return(
			<div>
			Shivam saraf
			<SearchBar />
			</div>
			);
	}
}


ReactDOM.render(<App />, document.getElementById("root"));