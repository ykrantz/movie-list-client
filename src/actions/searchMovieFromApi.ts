import { movieListType } from "../types/types";
import { RAPID_API_MOVIES_DATABASE_KEY } from "../utils/mainVariables";

// max LIMIT of movie number is 50
const LIMIT_NUM_MOVIES = 50 ;
const axios = require("axios");


const searchMovieFromApi=(str:string|undefined):movieListType=>{



// console.log("serachingg for", {str});

    const options = {
        method: 'GET',
        url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${str}`,
        params: {info: 'mini_info', limit: LIMIT_NUM_MOVIES, page: '1', titleType: 'movie'},
        headers: {
          // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_MOVIES_DATABASE_KEY,
          'X-RapidAPI-Key': RAPID_API_MOVIES_DATABASE_KEY,
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      
      return  axios.request(options).then(function (response:any) {
          // console.log(response.data);
          return response.data;
          
        
      }).catch(function (error:any) {
          console.error(error);
      });


}




export default searchMovieFromApi