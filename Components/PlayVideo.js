
import React , {useEffect, useState} from 'react'
// import ReactPlayer from 'react-player/lazy'
import ReactPlayer from 'react-player';
import v from './../Assets/mass-interact.mp4'
function PlayVideo({heading}) {
  const [val, onSetVal] = useState(false)
  useEffect(() => {
    onSetVal(true)
  }, []);
  return (
      <section>
        <div className="container-for-video" style={{backgroundColor: 'black'}}>
        <ReactPlayer
            url={v}
            style={{
                width: '100%',
                height: '100%',
                position: 'fixed',
                left: 0,
                top: 0
            }}
            className='ssss'

            height='1200px'
            width="100%"
            muted={true}
            loop={true}
            playing={val}
            />
        </div>
      </section>
  );
}

export default PlayVideo;


