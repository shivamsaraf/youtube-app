import React from 'react';
import './style.css';
import VideoListItem from './video_list_item';

const VideoList = (props)=>{
   
   const videoItems=props.videos.map((video)=>{
       return <VideoListItem 
                  onVideoSelect={props.onVideoSelect}
                  key={video.etag} 
                  video={video} />
   });
   

   return(
   	<ol className="col-md-4 list-group">
   	  {props.videos.length}videos{videoItems}
   	 </ol>


   	);

};

//
/*class VideoList extends React.Component{

  constructor(props){
     super(props);
     this.videoItems=this.videoItems.bind(this);


  }
	render(){
		return(
              <ul className="col-md-4 list-group">
   	            {this.props.videos.length} videos<br/>
                aa{videoItems}
   	           </ul>

			);
	}

  const videoItems=()=>{
    this.props.videos.map((video)=>{
    return <VideoListItem video={video} /> 
  }
}*/
export default VideoList;
