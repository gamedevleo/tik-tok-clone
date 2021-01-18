import React,{useRef,useState,useEffect} from 'react';
import '../css/Video.css';
import {VideoFooter} from './VideoFooter';
import {VideoSidebar} from'./VideoSidebar';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export const Video = ({url,channel,description,song,likes,messages,shares,scrollTop}) => {
  const [playing,setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = (e)=>{
    if(playing){
      videoRef.current.pause();
      setPlaying(false);
      console.log(window.pageYOffset);
    }
    else{
      videoRef.current.play();
      setPlaying(true);
    }
  };
  const handleScroll = () => {
    if(playing){
      videoRef.current.pause();
      setPlaying(false);
    }
  }


  useEffect(() => {
    handleScroll();
  }, [scrollTop]);


  return (
    <div className='video'>
      <video className='video_player'
        onClick={e=>onVideoPress(e)}
        ref={videoRef}
        src={url} loop>
      </video>
      {!playing && <PlayArrowIcon style={{ fontSize: 100 }} className='video_playIcon'/>}
      <VideoFooter channel={channel} description={description} song={song}/>
      <VideoSidebar likes={likes} messages={messages} shares={shares}/>
    </div>
  )
}
