class KindImage extends HTMLImageElement {
    constructor() {
      super();
  
      this.setAttribute('style', "filter:blur(20px)")
  
      const bestImage = new Image();
      bestImage.onload = () => {
        setTimeout(() => {
            
          this.setAttribute("src", this.getAttribute("image"));
          this.setAttribute('style', "filter:none")
        }, 1000);
      };
      bestImage.src = this.getAttribute("image");
    }
  
    render() {}
  }
  
  customElements.define("kind-image", KindImage, { extends: "img" });
  