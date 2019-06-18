import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY="AIzaSyCnv8k7XTtFFq4vZ787DI1pxHcW-x3pJXY";
class App extends React.Component{
	constructor(props){
		super(props);
		this.state={videos:[]};
		YTSearch({key:API_KEY,term:'surfboards'},(videos)=>{
			this.setState({videos});//equal to this.setState({videos:videos});
		});
	}



	render(){
		return(
			<div>
			Shivam saraf
			<SearchBar />
			<VideoDetail video={this.state.videos[0]} />
			<VideoList videos={this.state.videos} />
			</div>
			);
	}
}


ReactDOM.render(<App />, document.getElementById("root"));