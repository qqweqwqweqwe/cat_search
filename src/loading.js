const template = `
  <img src="../img/img.gif" alt="로딩">
`;

class Loading{
  $loading=null
  data=null
  constructor({$target}){
    this.$loading=document.createElement("div")
    this.$loading.className="loading"
    $target.appendChild(this.$loading)
    this.$loading.style.display='none'
    this.render()
  }

  onchange(){
    if(this.$loading.style.display==='none'){
      this.$loading.style.display='block'
    }
    else{
      this.$loading.style.display='none'
    }
  }
  // 이 함수를 app.js 파일의 api들의 시작과 끝에 넣어주면 됨

  render(){
    this.$loading.innerHTML=template
  }
}