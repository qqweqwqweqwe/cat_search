const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch , onRandom}) {
    const $searchInput = document.createElement("input");
    $searchInput.placeholder = "고양이를 검색해보세요.";
    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
      }
    });

    console.log("SearchInput created.", this);
    
    const $randombutton=document.createElement('button')
    $randombutton.innerHTML='랜덤뽑기'
    $target.appendChild($randombutton)

    $randombutton.addEventListener("click",() =>{
      onRandom()
    })
    
    console.log('Randombutton Created')

  }
  render() {}
}
