import _ from 'lodash';
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
		this.state={
			videos:[],
			selectedVideo:null
		};
		this.videoSearch('tamasha');
		
	}

	videoSearch(term){
		YTSearch({key:API_KEY,term:term},(videos)=>{
			this.setState({
			videos:videos,
			selectedVideo:videos[1]
			});//equal to this.setState({videos:videos});
		});




	}



	render(){

		const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);
		return(
			<div>
			Shivam saraf
			<SearchBar onSearchTermChange={videoSearch} />
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList 
               onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
			   videos={this.state.videos} />
			</div>
			);
	}
}


ReactDOM.render(<App />, document.getElementById("root"));