import BackgroundImage from "../assets/senol.jpg";

class CoverImage {
  constructor(className) {
    this.images = document.getElementsByClassName(className);
    this.init();
  }

  init = () => {
    for (let item of this.images) {
      let dir = item.dataset.dir;
      item.style.backgroundImage = `url(${dir}/dist/${BackgroundImage})`;     
      item.style.backgroundSize = "cover";
      item.style.color = "white"; 
      item.style.backgroundPosition ="center top";
    }
  };
}
export default CoverImage;
