import React from 'react';
import '../css/VideoFooter.css';

import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

export const VideoFooter = ({channel,description,song}) => {

  return (
    <div className='videoFooter'>
      <div className='videoFooter_text'>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className='videoFooter_ticker'>
          <MusicNoteIcon className='videoFooter_icon' />
          <Ticker mode='smooth'>
            {({index})=>(
              <>
                {song ? <h4>{song}</h4> :<h4>TikTok clone project by Kaiyang!</h4>}
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className='videoFooter_record'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/CD_icon_test.svg/1200px-CD_icon_test.svg.png'
        alt=''>
      </img>
    </div>
  )
}
