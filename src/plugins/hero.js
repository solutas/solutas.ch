import BackgroundImage from "../assets/hero/coverr-happy-girl-watching-on-smartphone-1565864688841.jpg";
import Senol from "../assets/senol.jpg"
import BackgroundVideo from "../assets/hero/coverr-happy-girl-watching-on-smartphone-1565864688841.mp4";

class Hero {
  constructor(className) {
    this.heros = document.getElementsByClassName(className);
    this.init();
  }

  init = () => {
    for (let item of this.heros) {
      let dir = item.dataset.dir;

     // item.style.backgroundImage = `url(${dir}/dist/${BackgroundImage})`;
      
      let video = document.createElement("video");
      let videoItem = document.createElement("source");
      videoItem.src = `${dir}/dist/${BackgroundVideo}`;
      video.muted = true;
      video.playsinline = true;
      video.playbackRate = 0.5;

      video.addEventListener("canplay", () => {
        window.setTimeout(()=>{
            video.classList.add("play");
            video.play();
        }, 2000);
      });

      video.addEventListener("ended", () => {
        video.classList.remove("play");
        video.classList.add("ended");
      });

      video.append(videoItem);

     // item.append(video);
    }
  };
}
export default Hero;
