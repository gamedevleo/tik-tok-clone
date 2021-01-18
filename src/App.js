import React,{useState,useEffect,useRef} from 'react';
import './App.css';
import {Video} from './components/Video';
import db from './firebase';

function App() {
  const [videos,setVideos] = useState([]);
  const [scrollTop,setScrollTop] = useState(1);
  const videosRef = useRef(null);

  useEffect(()=>{
    db.collection('videos')
    .onSnapshot(snapshot=>setVideos(snapshot.docs.map(doc=>doc.data())));
  },[]);

  useEffect(() => {
  const interval = setInterval(() => {
    setScrollTop(videosRef.current.scrollTop);
    console.log(scrollTop);
  }, 300);
  return () => clearInterval(interval);
}, [scrollTop]);

  return (
    <div className="app">
      <div className='app_videos' ref={videosRef}>
          {videos?.map(
            ({url,channel,description,song,likes,shares,messages})=>(
              <Video
                url={url}
                song={song}
                channel={channel}
                description={description}
                likes={likes}
                messages={messages}
                shares={shares}
                scrollTop={scrollTop}
                />
            ))}
      </div>
    </div>
  );
}

export default App;
