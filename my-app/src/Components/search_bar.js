import React from 'react';


class SearchBar extends React.Component{
	render(){
		return(
			<input onChange={this.onInputChange} />

			);
	}
	onInputChange(event)
	{
		console.log(event.target.value);
	}
}

export default SearchBar;

/*
line 7 can be rewritten as
<input onChange={event=> console.log(event.target.value)} />
and ignoring the line 11 full function(for reference see video 16)
*/