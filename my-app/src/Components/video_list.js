import React from 'react';
import VideoListItem from './video_list_item';

/*const VideoList = (props)=>{
   return(
   	<ul className="col-md-4 list-group">
   	  {props.videos.length}fdf
   	 </ul>


   	);
};
*/

class VideoList extends React.Component{
	render(){
		return(
              <ul className="col-md-4 list-group">
   	            {this.props.videos.length} videos
   	           </ul>

			)
	}
}
export default VideoList;
