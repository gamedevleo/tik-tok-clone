import React,{useState} from 'react';
import '../css/VideoSidebar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

export const VideoSidebar = ({likes,shares,messages}) => {
  const [liked,setLiked] = useState(false);

  return (
    <div className='videoSidebar'>
      <div className='videoSidebar_button'>
        {liked ?  <FavoriteIcon fontSize='large'
          onClick={e=>{
            setLiked(!liked);
          }}/>:<FavoriteBorderIcon fontSize='large' onClick={
            e=>{
              setLiked(!liked);
            }
          }/> }

        <p>{liked ? likes+1:likes}</p>
      </div>
      <div className='videoSidebar_button'>
        <MessageIcon fontSize='large'/>
        <p>{messages}</p>
      </div>
      <div className='videoSidebar_button'>
        <ShareIcon fontSize='large'/>
        <p>{shares}</p>
      </div>
    </div>
  )
}
