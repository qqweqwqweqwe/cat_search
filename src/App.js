console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        
        // 실수로 print 했는데 프린트창 떴음 이거 한번 잡지식 ㄱㄱ
        // 이경우에 await 사용하면 에러뜸
        // await 사용 못하는 경우에는 then 사용해서 chaining 하자
        this.loading.onchange()
        api.fetchcats(keyword).then(
          ({ data }) => {
            this.setState(data)
            this.loading.onchange()
            }  //{data} 객체
          );
      },
      //({data})로 주는이유를 searchresult.js 에서 찾아보자 나중에
      onRandom:()=>{
        this.loading.onchange()
        api.random50().then(
          ({data})=>{
            this.setState(data)
            this.loading.onchange()
          }
        )
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {  // image 변수에 searchresult.js 에 있는 data[index] 들어감
        // imageinfo.js 에 data 전달해줄때 이미지 데이터랑 visible 변수랑 묶어서 줘야함
        this.imageInfo.setState({
          visible : true,
          image
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });

    this.loading = new Loading({
      $target
    })
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
