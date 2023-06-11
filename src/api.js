/*
const API_ENDPOINT = "https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev";

const api = {
  fetchCats: keyword => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then(res =>
      res.json()
    );
  }
};
*/

const API_ENDPOINT = "https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev";
const api={
   fetchcats : async keyword =>{
    try{
      const response= await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`)
      console.log(response)
      if (response.ok){
        return await response.json()
      }
    }
    catch(e){
      console.error(e)
    }
  },

  catsid: async id=>{
    try{
      const response= await fetch(`${API_ENDPOINT}/api/cats/${id}`);
      console.log(response)
      if(response.ok){
        return await response.json()
      }
    }
    catch(e){
      console.error(e)
    }
  },

  random50: async ()=>{
    try{
      const response = await fetch(`${API_ENDPOINT}/api/cats/random50`);
      console.log(response)
      if(response.ok){
        return await response.json()
      }
    }
    catch(e){
      console.error(e)
    }
  }
}