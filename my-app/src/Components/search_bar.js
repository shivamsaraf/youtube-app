import React from 'react';
import './style.css';


class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state={term:'Salil'};
		this.onInputChange=this.onInputChange.bind(this);
	}



	render(){
		return(
			<div className="search-bar">
			<input 
               value={this.state.term}
			   onChange={this.onInputChange} />
			<br/>Value is {this.state.term}

			
			</div>

			);
	}
	onInputChange(event)
	{
		
		this.setState({
			term:event.target.value
		});
	}
}

export default SearchBar;

/*
line 7 can be rewritten as
<input onChange={event=> console.log(event.target.value)} />
and ignoring the line 11 full function(for reference see video 16)
*/