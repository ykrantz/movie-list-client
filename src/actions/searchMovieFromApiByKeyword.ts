import { movieListType } from "../types/types";


const axios = require("axios");


const searchMovieFromApiByKeyword=(str:string|undefined):movieListType=>{



console.log("serachingg for", {str});


      const options = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${str}`,
        params: {info: 'mini_info', limit: '10', page: '1', titleType: 'movie'},
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_MOVIES_DATABASE_KEY,
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      
      return  axios.request(options).then(function (response:any) {
          console.log(response.data);
          return response.data;
          
        
      }).catch(function (error:any) {
          console.error(error);
      });


}




export default searchMovieFromApiByKeyword