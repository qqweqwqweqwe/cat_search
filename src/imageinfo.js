class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;
      var wnd = window.open("imageinfo.html",'미야옹',"width=900, height=1600")
      // 팝업창 내용 수정하는 거 공부
      wnd.document.write(`
      <div class="content-wrapper">
        <div class="title">
          <span>${name}</span>
          <div class="close">x</div>
        </div>
        <img src="${url}" alt="${name}"/>        
        <div class="description">
          <div>성격: ${temperament}</div>
          <div>태생: ${origin}</div>
        </div>
      </div>`)
      this.$imageInfo.style.display = "block";
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
