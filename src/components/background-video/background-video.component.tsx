import './background-video.style.scss';
import videoMp4 from '@assets/images/video.mp4';
import videoWebm from '@assets/images/video.webm';

const BackgroundVideo = () => {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={videoMp4} type="video/mp4" />
        <source src={videoWebm} type="video/webm" />
        your browser is not supported!
      </video>
    </div>
  );
};

export default BackgroundVideo;
